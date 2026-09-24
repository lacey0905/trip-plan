import tripData from '../plan/미동부_캐나다_9일_여행정보_경량.json'

const won = new Intl.NumberFormat('ko-KR')
const data = tripData

function App() {
  const { 여행: trip, 필수정보: essentials, 일정: itinerary, 예상금액: cost } = data
  return <main>
    <header className="hero">
      <div className="hero__bar"><b>TRAVEL INVOICE</b><span>상품코드 · {trip.상품코드}</span></div>
      <div className="hero__body"><p className="kicker">여행 견적서 · {trip.기간}</p><h1>미동부<span>·</span>캐나다 9일</h1><p>{trip.여행요약}</p></div>
      <div className="hero__cost"><span>성인 1인 필수 비용 기준</span><strong>₩{won.format(cost['1인_성인_예상총액'])}</strong><small>상품가 + 필수 현지 경비</small></div>
    </header>
    <nav><a href="#overview">한눈에 보기</a><a href="#flight">항공</a><a href="#schedule">일정</a><a href="#cost">예상 비용</a></nav>
    <div className="page">
      <section id="overview" className="overview">
        <div><span>여행 형태</span><b>{trip.형태}</b></div><div><span>출발 확정</span><b>{essentials.최소출발인원}명 이상</b></div><div><span>주요 여정</span><b>워싱턴 → 뉴욕 → 퀘벡 → 나이아가라</b></div>
      </section>
      <section id="flight"><p className="label">FLIGHT</p><h2>항공 스케줄</h2>
        <div className="flight-list">{essentials.항공.map((flight) => <article key={flight.항공편}><div><strong>{flight.구간}</strong><span>{flight.항공편}</span></div><div><b>{flight.일자}</b><p>{flight.시간}</p></div></article>)}</div>
        <p className="meeting">출국 미팅 · {essentials.출국미팅}</p>
      </section>
      <section id="schedule"><p className="label">ITINERARY</p><h2>9일 여행 일정</h2>
        <div className="timeline">{itinerary.map((day) => <article key={day.일차}><div className="day"><span>DAY</span><b>{String(day.일차).padStart(2, '0')}</b></div><div className="route"><b>{day.날짜}</b><span>{day.동선}</span></div><p>{day.핵심}</p><small>{day.숙박 ? `숙박 · ${day.숙박}` : '인천 도착'}</small></article>)}</div>
      </section>
      <section id="cost" className="cost-section"><p className="label">ESTIMATED COST</p><h2>예상 비용</h2>
        <div className="cost-card"><div className="cost-card__total"><span>성인 1인 예상 총액</span><strong>₩{won.format(cost['1인_성인_예상총액'])}</strong><p>필수 비용만 합산</p></div><div className="breakdown">{cost.산출근거.map((item) => <div key={item.항목}><span>{item.항목}<small>{item.계산}</small></span><b>₩{won.format(item.금액)}</b></div>)}</div></div>
        <div className="cost-notes"><div><b>포함</b><p>{cost.포함.join(' · ')}</p></div><div><b>별도 · 변동</b><p>{cost.별도_변동비.join(' · ')}</p></div><div><b>싱글 이용</b><p>{cost.싱글차지.설명} · +₩{won.format(cost.싱글차지.금액)}</p></div></div><p className="notice">{cost.안내}</p>
      </section>
      <section className="prepare"><p className="label">BEFORE YOU GO</p><h2>출발 전 준비</h2><div>{essentials.준비.map((item) => <span key={item}>✓ {item}</span>)}</div></section>
    </div><footer>미동부·캐나다 9일 · 핵심 여행 정보</footer>
  </main>
}
export default App
