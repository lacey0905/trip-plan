import { useEffect, useState, type CSSProperties } from 'react'

type TravelData = {
  여행: { 상품명: string; 상품코드: string; 기간: string; 형태: string; 주요여정: string; 원본링크: string }
  필수정보: { 최소출발인원: number; 출발상태: string; 좌석등급: string; 귀국일연장: string; 항공: { 일자: string; 항공편: string; 구간: string; 시간: string }[]; 출국미팅: string; 준비: string[] }
  일정: { 일차: number; 날짜: string; 동선: string; 핵심: string; 숙박?: string }[]
  예상금액: { '1인_성인_예상총액': number | null; 산출근거: { 항목: string; 금액: number; 계산?: string }[]; 포함: string[]; 별도_변동비: string[]; 싱글차지: { 금액: number | null; 설명: string }; 안내: string; 공식상품가격범위?: { 최저: number; 최고: number } }
}

const won = new Intl.NumberFormat('ko-KR')
const weekdays = ['일', '월', '화', '수', '목', '금', '토']
const weekdayOf = (year: number, month: number, day: number) => weekdays[new Date(Date.UTC(year, month - 1, day)).getUTCDay()]
const showWeekdays = (value: string, year?: number) => value
  .replace(/(\d{4})-(\d{2})-(\d{2})(?:~(\d{2}))?/g, (_, y: string, m: string, d: string, end?: string) =>
    `${y}-${m}-${d}(${weekdayOf(Number(y), Number(m), Number(d))})${end ? `~${end}(${weekdayOf(Number(y), Number(m), Number(end))})` : ''}`)
  .replace(/(?<!\d)(\d{1,2})\/(\d{1,2})(?!\d)/g, (match, m: string, d: string) =>
    year ? `${match}(${weekdayOf(year, Number(m), Number(d))})` : match)
const tripYear = (period: string) => Number(period.match(/\d{4}/)?.[0])
// Every JSON file in `plan` becomes one list item.
const travelFiles = import.meta.glob<TravelData>('../plan/*.json', { eager: true, import: 'default' })
const trips = Object.entries(travelFiles)
  .map(([id, data]) => ({ id, data }))
  .sort((a, b) => (a.data.예상금액['1인_성인_예상총액'] ?? Infinity) - (b.data.예상금액['1인_성인_예상총액'] ?? Infinity))
const tripCosts = trips.map((trip) => trip.data.예상금액['1인_성인_예상총액']).filter((amount): amount is number => amount !== null)
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
    <header className="gnb"><span>슬기의 여행 플랜</span></header>
    <section className="main-banner"><img src={`${import.meta.env.BASE_URL}og.png`} alt="주슬기의 이름이 담긴 여행 플랜 배너" /></section>
    <section className="trip-list">
      <h1>슬기를 위한 여행들</h1>
      <p>슬기의 다음 여행이 오래 기억될 수 있도록, 마음에 남을 여정들을 모았어요. 일정과 비용을 살펴보며 가장 설레는 곳을 골라보세요.</p>
      <div>{trips.map(({ id, data }) => <button key={id} type="button" onClick={() => onSelect(id)}>
        <span>{showWeekdays(data.여행.기간)} · {data.필수정보.출발상태}</span>
        <b>{data.여행.상품명}</b>
        <small>{data.여행.주요여정}</small>
        <em className="price-amount" style={data.예상금액['1인_성인_예상총액'] !== null ? priceStyle(data.예상금액['1인_성인_예상총액']) : undefined}>1인 1실 예상 총액 {data.예상금액['1인_성인_예상총액'] !== null ? `₩${won.format(data.예상금액['1인_성인_예상총액'])}` : '확인 필요'}</em>
        <i>›</i>
      </button>)}</div>
    </section>
  </main>
}

function TripDetail({ data, onBack }: { data: TravelData; onBack: () => void }) {
  const { 여행: trip, 필수정보: essentials, 일정: itinerary, 예상금액: cost } = data
  const singleTotal = cost['1인_성인_예상총액']
  return <main>
    <header className="gnb"><button type="button" onClick={onBack} aria-label="여행 목록으로 돌아가기">‹</button><span>여행 자세히 보기</span></header>
    <section className="trip-summary"><p>{showWeekdays(trip.기간)} · {essentials.출발상태}</p><h1>{trip.상품명}</h1><span className="code">{trip.상품코드}</span><a className="source-link" href={trip.원본링크} target="_blank" rel="noreferrer">여행사 상품 페이지 ↗</a></section>
    <section className="cost">
      <h2>여행 비용</h2>
      <div className="cost-total" style={singleTotal !== null ? priceStyle(singleTotal) : undefined}><span>1인 1실 예상 총액</span><strong>{singleTotal !== null ? `₩${won.format(singleTotal)}` : '확인 필요'}</strong></div>
      <div className="cost-list">{cost.산출근거.map((item) => <div key={item.항목}><span>{item.항목}<small>{item.계산}</small></span><b>₩{won.format(item.금액)}</b></div>)}</div>
      <div className="included"><h3>상품가에 포함된 항목</h3><p>{cost.포함.join(' · ')}</p><h3>추가로 확인할 비용</h3><p>{cost.별도_변동비.join(' · ')}</p></div>
      <p className="notice">{cost.안내}{cost.공식상품가격범위 && cost.공식상품가격범위.최저 !== cost.공식상품가격범위.최고 ? ' 여행사 안내 상품가 범위는 ₩' + won.format(cost.공식상품가격범위.최저) + '~₩' + won.format(cost.공식상품가격범위.최고) + '입니다.' : ''}</p>
    </section>
    <section className="info-list"><h2>여행 한눈에 보기</h2><div><span>여행 형태</span><b>{trip.형태}</b></div><div><span>최소 출발 인원</span><b>{essentials.최소출발인원 > 0 ? `${essentials.최소출발인원}명 이상` : '제한 없음'}</b></div><div><span>주요 여정</span><b>{trip.주요여정}</b></div></section>
    <section className="itinerary"><h2>날짜별 일정</h2><div className="timeline">{itinerary.map((day) => <article key={day.일차}><div className="day"><span>DAY</span><b>{String(day.일차).padStart(2, '0')}</b></div><div className="route"><b>{showWeekdays(day.날짜, tripYear(trip.기간))}</b><span>{day.동선}</span><p>{day.핵심}</p>{day.숙박 && <small>숙박 · {day.숙박}</small>}</div></article>)}</div></section>
    <section className="flight"><h2>항공 일정</h2>{essentials.항공.map((flight) => <article key={flight.항공편}><b>{flight.구간}</b><span>{flight.항공편}</span><small>{showWeekdays(flight.일자)} · {flight.시간}</small></article>)}<p>출국 미팅 · {showWeekdays(essentials.출국미팅)}</p></section>
    <section className="prepare"><h2>떠나기 전 체크</h2>{essentials.준비.map((item) => <p key={item}>✓ {item}</p>)}</section>
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
