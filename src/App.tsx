import tripData from '../plan/미동부_캐나다_9일_여행정보_경량.json'

const won = new Intl.NumberFormat('ko-KR')
const data = tripData

function App() {
  const { 여행: trip, 필수정보: essentials, 일정: itinerary, 예상금액: cost } = data
  const singleTotal = cost['1인_성인_예상총액'] + cost.싱글차지.금액

  return <main>
    <header className="gnb">
      <button type="button" onClick={() => window.history.back()} aria-label="뒤로가기">‹</button>
      <span>여행 일정</span>
    </header>

    <section className="trip-summary">
      <p>{trip.기간} · {essentials.출발상태}</p>
      <h1>{trip.상품명}</h1>
      <span className="code">{trip.상품코드}</span>
      <div className="total"><span>1인 1실 예상 결제금액</span><strong>₩{won.format(singleTotal)}</strong><small>기본 필수 비용 + 싱글차지</small></div>
    </section>

    <section className="key-points">
      <h2>여행 핵심</h2>
      <ul>{trip.핵심포인트.map((point) => <li key={point}>{point}</li>)}</ul>
    </section>

    <section className="itinerary">
      <h2>일정</h2>
      <div className="timeline">{itinerary.map((day) => <article key={day.일차}>
        <div className="day"><span>DAY</span><b>{String(day.일차).padStart(2, '0')}</b></div>
        <div className="route"><b>{day.날짜}</b><span>{day.동선}</span><p>{day.핵심}</p><small>{day.숙박 ? '숙박 · ' + day.숙박 : '인천 도착'}</small></div>
      </article>)}</div>
    </section>

    <section className="info-list">
      <h2>여행 정보</h2>
      <div><span>여행 형태</span><b>{trip.형태}</b></div>
      <div><span>최소 출발</span><b>{essentials.최소출발인원}명</b></div>
      <div><span>좌석</span><b>{essentials.좌석등급}</b></div>
      <div><span>귀국일 연장</span><b>{essentials.귀국일연장}</b></div>
    </section>

    <section className="flight">
      <h2>항공</h2>
      {essentials.항공.map((flight) => <article key={flight.항공편}><b>{flight.구간}</b><span>{flight.항공편}</span><small>{flight.일자} · {flight.시간}</small></article>)}
      <p>출국 미팅 · {essentials.출국미팅}</p>
    </section>

    <section className="cost">
      <h2>예상 비용</h2>
      <div className="cost-total"><span>1인 1실 총액</span><strong>₩{won.format(singleTotal)}</strong></div>
      <div className="cost-list">{cost.산출근거.map((item) => <div key={item.항목}><span>{item.항목}<small>{item.계산}</small></span><b>₩{won.format(item.금액)}</b></div>)}<div><span>싱글차지<small>{cost.싱글차지.설명}</small></span><b>₩{won.format(cost.싱글차지.금액)}</b></div></div>
      <div className="included"><h3>상품가에 포함</h3><p>{cost.포함.join(' · ')}</p><h3>필수 현지 경비에 포함</h3><p>기사·가이드 경비 및 식사 팁 (USD 190/인, 가정 환율 적용)</p><h3>별도 비용</h3><p>{cost.별도_변동비.join(' · ')}</p></div>
      <p className="notice">{cost.안내} 공식 상품군 가격은 ₩{won.format(cost.공식상품가격범위.최저)}~₩{won.format(cost.공식상품가격범위.최고)}이며 출발일에 따라 달라집니다.</p>
    </section>

    <section className="prepare"><h2>출발 전 준비</h2>{essentials.준비.map((item) => <p key={item}>✓ {item}</p>)}</section>
  </main>
}

export default App
