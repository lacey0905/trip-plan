import { useEffect, useState, type CSSProperties } from 'react'

type TravelData = {
  여행: { 상품명: string; 상품코드: string; 기간: string; 형태: string; 주요여정: string; 원본링크: string }
  필수정보: { 최소출발인원: number; 출발상태: string; 좌석등급: string; 귀국일연장: string; 항공: { 일자: string; 항공편: string; 구간: string; 시간: string }[]; 출국미팅: string; 준비: string[] }
  일정: { 일차: number; 날짜: string; 동선: string; 핵심: string; 숙박?: string }[]
  예상금액: { '1인_성인_예상총액': number; 산출근거: { 항목: string; 금액: number; 계산?: string }[]; 포함: string[]; 별도_변동비: string[]; 싱글차지: { 금액: number; 설명: string }; 안내: string; 공식상품가격범위?: { 최저: number; 최고: number } }
}

const won = new Intl.NumberFormat('ko-KR')
// Every JSON file in `plan` becomes one list item.
const travelFiles = import.meta.glob<TravelData>('../plan/*.json', { eager: true, import: 'default' })
const trips = Object.entries(travelFiles)
  .map(([id, data]) => ({ id, data }))
  .sort((a, b) => a.data.예상금액['1인_성인_예상총액'] - b.data.예상금액['1인_성인_예상총액'])
const tripCosts = trips.map((trip) => trip.data.예상금액['1인_성인_예상총액'])
const lowestTripCost = Math.min(...tripCosts)
const highestTripCost = Math.max(...tripCosts)
const priceStyle = (amount: number): CSSProperties => {
  const position = highestTripCost === lowestTripCost ? 0.5 : (amount - lowestTripCost) / (highestTripCost - lowestTripCost)
  const hue = 220 + position * 140
  return {
    '--price-color': `hsl(${hue} 100% 45%)`,
  } as CSSProperties
}

function TripList({ onSelect }: { onSelect: (id: string) => void }) {
  return <main>
    <header className="gnb"><span>여행 목록</span></header>
    <section className="trip-list">
      <h1>여행을 선택하세요</h1>
      <p>총 {trips.length}개의 여행 JSON이 있습니다. `plan`에 JSON을 추가하면 목록에 자동으로 표시됩니다.</p>
      <div>{trips.map(({ id, data }) => <button key={id} type="button" onClick={() => onSelect(id)}>
        <span>{data.여행.기간} · {data.필수정보.출발상태}</span>
        <b>{data.여행.상품명}</b>
        <small>{data.여행.주요여정}</small>
        <em className="price-amount" style={priceStyle(data.예상금액['1인_성인_예상총액'])}>1인 1실 총액 ₩{won.format(data.예상금액['1인_성인_예상총액'])}</em>
        <i>›</i>
      </button>)}</div>
    </section>
  </main>
}

function TripDetail({ data, onBack }: { data: TravelData; onBack: () => void }) {
  const { 여행: trip, 필수정보: essentials, 일정: itinerary, 예상금액: cost } = data
  const singleTotal = cost['1인_성인_예상총액']
  return <main>
    <header className="gnb"><button type="button" onClick={onBack} aria-label="목록으로">‹</button><span>여행 일정</span></header>
    <section className="trip-summary"><p>{trip.기간} · {essentials.출발상태}</p><h1>{trip.상품명}</h1><span className="code">{trip.상품코드}</span><a className="source-link" href={trip.원본링크} target="_blank" rel="noreferrer">원본 상품 보기 ↗</a></section>
    <section className="cost">
      <h2>예상 비용</h2>
      <div className="cost-total" style={priceStyle(singleTotal)}><span>1인 1실 총액</span><strong>₩{won.format(singleTotal)}</strong></div>
      <div className="cost-list">{cost.산출근거.map((item) => <div key={item.항목}><span>{item.항목}<small>{item.계산}</small></span><b>₩{won.format(item.금액)}</b></div>)}</div>
      <div className="included"><h3>상품가에 포함</h3><p>{cost.포함.join(' · ')}</p><h3>필수 현지 경비에 포함</h3><p>기사·가이드 경비 및 식사 팁</p><h3>별도 비용</h3><p>{cost.별도_변동비.join(' · ')}</p></div>
      <p className="notice">{cost.안내}{cost.공식상품가격범위 ? ' 공식 상품군 가격은 ₩' + won.format(cost.공식상품가격범위.최저) + '~₩' + won.format(cost.공식상품가격범위.최고) + '이며 출발일에 따라 달라집니다.' : ''}</p>
    </section>
    <section className="info-list"><h2>여행 정보</h2><div><span>여행 형태</span><b>{trip.형태}</b></div><div><span>최소 출발</span><b>{essentials.최소출발인원}명 이상</b></div><div><span>주요 여정</span><b>{trip.주요여정}</b></div></section>
    <section className="itinerary"><h2>일정</h2><div className="timeline">{itinerary.map((day) => <article key={day.일차}><div className="day"><span>DAY</span><b>{String(day.일차).padStart(2, '0')}</b></div><div className="route"><b>{day.날짜}</b><span>{day.동선}</span><p>{day.핵심}</p><small>{day.숙박 ? '숙박 · ' + day.숙박 : '인천 도착'}</small></div></article>)}</div></section>
    <section className="flight"><h2>항공</h2>{essentials.항공.map((flight) => <article key={flight.항공편}><b>{flight.구간}</b><span>{flight.항공편}</span><small>{flight.일자} · {flight.시간}</small></article>)}<p>출국 미팅 · {essentials.출국미팅}</p></section>
    <section className="prepare"><h2>출발 전 준비</h2>{essentials.준비.map((item) => <p key={item}>✓ {item}</p>)}</section>
  </main>
}

function App() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selected = trips.find((trip) => trip.id === selectedId)

  useEffect(() => {
    const handlePopState = () => setSelectedId(window.history.state?.tripId ?? null)
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const selectTrip = (id: string) => {
    window.history.pushState({ tripId: id }, '')
    setSelectedId(id)
  }

  return selected
    ? <TripDetail data={selected.data} onBack={() => window.history.back()} />
    : <TripList onSelect={selectTrip} />
}

export default App
