import { trip, type CostRow, type DayPlan, type Trip } from "./trip";

export const f1Trip: Trip = structuredClone(trip);

function imageOf(title: string) {
  for (const day of trip.days) {
    const stop = day.stops.find((item) => item.title === title);
    if (stop?.image) return stop.image;
  }
  throw new Error(title);
}

const commonsImage = (file: string) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=200`;

f1Trip.docNo = "NO. SG-261004 · 2인";
f1Trip.title = "싱가포르 F1 여행";
f1Trip.heroAlt = "주슬기의 싱가포르 F1 여행";
f1Trip.subtitle = "조호바루";
f1Trip.route = "인천 → 상하이 → 싱가포르 ↔ 조호바루";
f1Trip.dates = "10.04–10.10 · 6박 7일";
f1Trip.stays = "R&F 프린세스 코브 5박";
f1Trip.totalLabel = "1인 예상비용";
f1Trip.totalAmount = "1,943,200원";

const airfare = f1Trip.cost.rows.find((row) => row.label === "항공");
if (airfare) {
  airfare.detail = "왕복 · 투어비스";
  airfare.amount = "636,000";
}

const transport = f1Trip.cost.rows.find((row) => row.label === "교통·입장");
if (transport) {
  transport.detail = "MRT·유니버설·크루즈 151,100 + 국경교통 158,200 + 기타 22,900";
  transport.amount = "332,200";
}

const hotel = f1Trip.cost.rows.find((row) => row.label === "숙박");
if (hotel) {
  hotel.detail = "3베드룸 · 2인 5박 총 400,000";
  hotel.amount = "200,000/인";
}

const rows = f1Trip.cost.rows as CostRow[];
const foodIndex = rows.findIndex((row) => row.label === "식비·예비");
rows.splice(foodIndex < 0 ? rows.length : foodIndex, 0, {
  label: "F1",
  detail: "티켓 · 9일",
  amount: "300,000",
});
const reserveIndex = rows.findIndex((row) => row.label === "식비·예비");
if (reserveIndex >= 0) rows.splice(reserveIndex, 1);
const f1CostIndex = rows.findIndex((row) => row.label === "F1");
rows.splice(f1CostIndex < 0 ? rows.length : f1CostIndex, 0, {
  label: "식비",
  detail: "식사·카페·음료 · 1인 예상",
  amount: "475,000",
});
f1Trip.cost.note =
  "짐 있는 첫날·F1 날과 유니버설 가는 편만 Grab, 나머지 국경 이동 5회는 CW2. 식비는 S$392+RM125 기준으로 카페·음료와 테마파크·서킷 할증 포함. S$1=1,100원·RM1=350원 가정.";

f1Trip.days = f1Trip.days.filter((day) => day.id !== "1003");

const firstDay = f1Trip.days.find((day) => day.id === "1004") as DayPlan | undefined;
if (firstDay) {
  firstDay.title = "출국 · 도착";
  firstDay.summary = "인천 T1 → 푸둥 T1 → 창이 T3 → 조호바루";
  firstDay.note = "싱가포르는 한국보다 1시간 느립니다.";
  delete firstDay.picks;
  firstDay.stops = [
    {
      time: "06:25",
      title: "인천공항",
      detail: "체크인·출국심사·대기 · MU5052",
      image: imageOf("인천공항"),
    },
    {
      time: "08:55",
      title: "인천 출국",
      detail: "2시간 5분 · MU5052",
      emphasis: true,
    },
    {
      time: "10:00",
      title: "푸둥 환승",
      detail: "1시간 30분 · 수하물 연결 확인",
      image: imageOf("푸둥 환승"),
    },
    {
      time: "11:30",
      title: "싱가포르행",
      detail: "MU6049 · 5시간 30분",
      emphasis: true,
    },
    {
      time: "13:30",
      title: "점심 · 기내",
      detail: "기내식 · 항공권 포함",
    },
    {
      time: "17:00",
      title: "창이공항 도착",
      detail: "당일 · 터미널 3",
      emphasis: true,
      image: imageOf("창이공항 도착"),
    },
    {
      time: "18:20",
      title: "마리나베이 이동",
      detail: "입국·수하물 후 · MRT 약 50분",
    },
    {
      time: "19:20",
      title: "캐리어 보관",
      detail: "Floral Fantasy · 대형 락커 2개 S$16 · 1인 S$8",
      emphasis: true,
    },
    {
      time: "19:40",
      title: "싱가포르 리버 크루즈",
      detail: "Bayfront South Jetty · 관광 범보트 40분 · S$28",
      emphasis: true,
      image: imageOf("머라이언·에스플러네이드"),
    },
    {
      time: "20:25",
      title: "저녁 · MBS",
      detail: "레스토랑 · 커피·음료 포함 · 예상 S$52",
    },
    {
      time: "21:00",
      title: "스펙트라",
      detail: "라이트·워터 쇼",
      emphasis: true,
    },
    {
      time: "21:20",
      title: "캐리어 찾기",
      detail: "Floral Fantasy 락커",
    },
    {
      time: "21:30",
      title: "조호바루 이동",
      detail: "Grab Cross-Border · 차량 약 S$100 · 1인 S$50",
    },
    {
      time: "00:30",
      title: "R&F 프린세스 코브 체크인",
      detail: "3베드룸 패밀리 스위트 · Jalan Tanjung Puteri",
      image:
        "https://pix8.agoda.net/hotelImages/12421213/0/689635efff9e3d276e6ef545396e0e3d.jpeg?va=1&ce=2&s=1024x768",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=R%26F%20Princess%20Cove%20CIQ%20Premium%20Sea%20View%20Suites%20by%20NEO",
    },
    {
      time: "숙박",
      title: "R&F 프린세스 코브",
      detail: "1박째",
    },
  ];
}

const thursday = f1Trip.days.find((day) => day.id === "1008") as DayPlan | undefined;
if (thursday) {
  thursday.title = "조호바루";
  thursday.summary = "구시가지 → 시티스퀘어 → 미드밸리";
  thursday.stops = [
    {
      time: "09:30",
      title: "R&F 프린세스 코브 출발",
      detail: "도보 · 구시가지 이동",
    },
    {
      time: "10:00",
      title: "옛 중국사원",
      detail: "가볍게 내부 관람",
      image: imageOf("옛 중국사원"),
    },
    {
      time: "10:45",
      title: "탄히옥니 · 잘란 도비",
      detail: "상점가 · 사진 · 커피",
      image: imageOf("탄히옥니 · 잘란 도비"),
    },
    {
      time: "12:00",
      title: "구시가지 점심",
      detail: "현지식 · 예상 RM40",
    },
    {
      time: "13:30",
      title: "시티스퀘어 · KOMTAR",
      detail: "쇼핑 · 카페 · 도보 이동",
      image: imageOf("저녁 · 시티스퀘어"),
    },
    {
      time: "15:30",
      title: "미드밸리 사우스키",
      detail: "Grab 약 RM15 · 쇼핑 · 마사지 · 카페 RM25",
      emphasis: true,
      image: imageOf("미드밸리 사우스키"),
    },
    {
      time: "19:00",
      title: "저녁 · 미드밸리",
      detail: "레스토랑 · 음료 포함 · 예상 RM60",
    },
    {
      time: "20:30",
      title: "R&F 복귀",
      detail: "Grab 약 RM15",
    },
    {
      time: "숙박",
      title: "R&F 프린세스 코브",
      detail: "5박째",
    },
  ];
}

const friday = f1Trip.days.find((day) => day.id === "1009") as DayPlan | undefined;
if (friday) {
  friday.title = "F1";
  friday.summary = "짐 보관 → F1 → 캐리어 회수";
  friday.stops = [
    {
      time: "08:00",
      title: "체크아웃",
      detail: "조호바루 숙소 · 숙박 없음",
    },
    {
      time: "08:30",
      title: "싱가포르 이동",
      detail: "짐 동반 · Grab Cross-Border · 차량 약 RM240 · 1인 RM120",
      emphasis: true,
    },
    {
      time: "12:00",
      title: "가든스 캐리어 보관",
      detail: "Golden Garden 우선 · 대형 락커 2개 S$16 · 1인 S$8",
      emphasis: true,
    },
    {
      time: "12:20",
      title: "점심 · 마리나베이",
      detail: "식사·커피 · 예상 S$25",
    },
    {
      time: "13:30",
      title: "마리나베이 서킷",
      detail: "14:05 전 입장",
      image: commonsImage("Marina Bay Street Circuit Grand Stand.JPG"),
    },
    {
      time: "14:05",
      title: "포르쉐 카레라컵",
      detail: "연습 · 14:50",
    },
    {
      time: "15:00",
      title: "F1 카 프레젠테이션",
      detail: "16:00",
    },
    {
      time: "16:30",
      title: "프리 프랙티스",
      detail: "17:30",
      emphasis: true,
      image: commonsImage("Sebastian Vettel 2014 Singapore FP1.jpg"),
    },
    {
      time: "18:00",
      title: "저녁 · 서킷",
      detail: "식사·간식·음료 · 예상 S$60",
    },
    {
      time: "20:30",
      title: "스프린트 예선",
      detail: "21:14",
      emphasis: true,
      image: commonsImage("1 singapore f1 night race 2012 city skyline.jpg"),
    },
    {
      time: "21:30",
      title: "마리나베이 야간 일정",
      detail: "00:20까지 · 가든스로 이동",
    },
  ];
}

const home = f1Trip.days.find((day) => day.id === "1010") as DayPlan | undefined;
if (home) {
  home.stops = [
    {
      time: "00:30",
      title: "가든스 보관소 이동",
      detail: "락커 운영 02:00까지",
    },
    {
      time: "01:00",
      title: "캐리어 찾기",
      detail: "02:00 이후 남은 물품은 회수됨",
      emphasis: true,
    },
    {
      time: "01:10",
      title: "창이 이동",
      detail: "택시 약 25–35분 · 심야",
      emphasis: true,
      image: imageOf("창이공항 도착"),
    },
    {
      time: "01:45",
      title: "창이 도착",
      detail: "10:10 MU546",
    },
    {
      time: "07:40",
      title: "창이 체크인",
      detail: "출국심사·대기 · MU546",
      image: imageOf("싱가포르 출국"),
    },
    {
      time: "10:10",
      title: "싱가포르 출국",
      detail: "MU546 · 5시간 25분",
      emphasis: true,
    },
    {
      time: "15:35",
      title: "푸둥 환승",
      detail: "2시간 5분 · 수하물 연결 확인",
      image: imageOf("푸둥 환승"),
    },
    {
      time: "17:40",
      title: "상하이 출국",
      detail: "MU5051 · 2시간 5분",
      emphasis: true,
    },
    {
      time: "20:45",
      title: "인천공항 도착",
      detail: "입국·수하물",
      emphasis: true,
      image: imageOf("인천공항 도착"),
    },
  ];
}

const marinaShow = f1Trip.days
  .find((day) => day.id === "1005")
  ?.stops.find((stop) => stop.title === "슈퍼트리 · 스펙트라");
if (marinaShow) marinaShow.detail = "가든 랩소디 · 21:00 스펙트라";

const oldCity = f1Trip.days
  .find((day) => day.id === "1007")
  ?.stops.find((stop) => stop.title === "선택 A 또는 B");
if (oldCity) oldCity.detail = "14:30까지 하나만 · 세인트앤드류 도로 통제";

for (const [dayId, night] of [
  ["1005", "2박째"],
  ["1006", "3박째"],
  ["1007", "4박째"],
] as const) {
  const stay = f1Trip.days
    .find((day) => day.id === dayId)
    ?.stops.find((stop) => stop.time === "숙박");
  if (stay) {
    stay.title = "R&F 프린세스 코브";
    stay.detail = night;
  }
}

function insertBeforeStay(day: DayPlan | undefined, stop: DayPlan["stops"][number]) {
  if (!day) return;
  const stayIndex = day.stops.findIndex((item) => item.time === "숙박");
  day.stops.splice(stayIndex < 0 ? day.stops.length : stayIndex, 0, stop);
}

const marinaDay = f1Trip.days.find((day) => day.id === "1005") as DayPlan | undefined;
if (marinaDay) {
  marinaDay.stops.unshift({
    time: "07:00",
    title: "싱가포르 이동",
    detail: "도보 JB CIQ → CW2 → Queen Street · RM4.80",
    emphasis: true,
  });
  insertBeforeStay(marinaDay, {
    time: "22:30",
    title: "조호바루 복귀",
    detail: "Queen Street → CW2 → JB CIQ · S$4.80 · 현금 불가",
  });
}

const universalDay = f1Trip.days.find((day) => day.id === "1006") as DayPlan | undefined;
if (universalDay) {
  const departure = universalDay.stops.find((stop) => stop.title === "호텔 출발");
  if (departure) {
    departure.time = "07:00";
    departure.title = "유니버설 이동";
    departure.detail = "Grab Cross-Border · 약 RM240/차 · 1인 RM120";
  }
  insertBeforeStay(universalDay, {
    time: "20:00",
    title: "조호바루 복귀",
    detail: "MRT → Queen Street → CW2 → JB CIQ · S$4.80",
  });
}

const oldCityDay = f1Trip.days.find((day) => day.id === "1007") as DayPlan | undefined;
if (oldCityDay) {
  oldCityDay.stops.unshift({
    time: "06:30",
    title: "싱가포르 이동",
    detail: "도보 JB CIQ → CW2 → Queen Street · RM4.80",
    emphasis: true,
  });
  insertBeforeStay(oldCityDay, {
    time: "20:30",
    title: "조호바루 복귀",
    detail: "Queen Street → CW2 → JB CIQ · S$4.80 · 현금 불가",
  });
}

for (const [dayId, title, detail] of [
  ["1005", "점심 · 마리나 베이 샌즈", "레스토랑 · 예상 S$30"],
  ["1005", "저녁 · 라우파삿", "사테 · 해산물 · 음료 · 예상 S$25"],
  ["1006", "점심 · 유니버설", "파크 내부 식사 · 예상 S$30"],
  ["1006", "저녁 · 비보시티", "레스토랑 · 음료 · 예상 S$25"],
  ["1007", "점심", "호커·레스토랑 · 예상 S$20"],
  ["1007", "저녁 · 차이나타운", "칠리크랩 · 만터우 · 음료 · 예상 S$50"],
] as const) {
  const meal = f1Trip.days
    .find((day) => day.id === dayId)
    ?.stops.find((stop) => stop.title === title);
  if (meal) meal.detail = detail;
}

const cafeStops = [
  {
    dayId: "1005",
    before: "가든스 바이 더 베이",
    stop: { time: "15:00", title: "카페 · 음료", detail: "MBS · 예상 S$15" },
  },
  {
    dayId: "1006",
    before: "저녁 · 비보시티",
    stop: { time: "15:30", title: "간식 · 음료", detail: "유니버설 내부 · 예상 S$25" },
  },
  {
    dayId: "1007",
    before: "불아사",
    stop: { time: "14:30", title: "카페 · 음료", detail: "차이나타운 이동 전 · 예상 S$15" },
  },
] as const;

for (const { dayId, before, stop } of cafeStops) {
  const day = f1Trip.days.find((item) => item.id === dayId) as DayPlan | undefined;
  if (!day) continue;
  const index = day.stops.findIndex((item) => item.title === before);
  day.stops.splice(index < 0 ? day.stops.length : index, 0, stop);
}

if (home) {
  const checkInIndex = home.stops.findIndex((stop) => stop.time === "07:40");
  home.stops.splice(checkInIndex < 0 ? home.stops.length : checkInIndex, 0, {
    time: "03:00",
    title: "커피 · 간식",
    detail: "창이공항 · 예상 S$20",
  });

  const pudongIndex = home.stops.findIndex((stop) => stop.time === "15:35");
  home.stops.splice(pudongIndex < 0 ? home.stops.length : pudongIndex, 0, {
    time: "12:30",
    title: "점심 · 기내",
    detail: "MU546 기내식 · 항공권 포함",
  });

  const incheonIndex = home.stops.findIndex((stop) => stop.time === "20:45");
  home.stops.splice(incheonIndex < 0 ? home.stops.length : incheonIndex, 0, {
    time: "18:30",
    title: "저녁 · 기내",
    detail: "MU5051 기내식·간식 · 항공권 포함",
  });
}
