import { trip, type CostRow, type DayPlan, type Trip } from "./trip";

export const f1Trip: Trip = structuredClone(trip);

function imageOf(title: string) {
  for (const day of trip.days) {
    const stop = day.stops.find((item) => item.title === title);
    if (stop?.image) return stop.image;
  }
  throw new Error(title);
}

f1Trip.docNo = "NO. SG-261004 · 1인";
f1Trip.title = "싱가포르 F1 여행";
f1Trip.heroAlt = "주슬기의 싱가포르 F1 여행";
f1Trip.subtitle = "";
f1Trip.route = "인천 → 상하이 → 싱가포르";
f1Trip.dates = "10.04–10.10 · 6박 7일";
f1Trip.stays = "호텔 보스 5박";
f1Trip.totalAmount = "2,449,337원";

const airfare = f1Trip.cost.rows.find((row) => row.label === "항공");
if (airfare) {
  airfare.detail = "왕복 · 현대카드";
  airfare.amount = "655,400";
}

const transport = f1Trip.cost.rows.find((row) => row.label === "교통·입장");
if (transport) {
  transport.detail = "MRT · 유니버설";
  transport.amount = "120,300";
}

const hotel = f1Trip.cost.rows.find((row) => row.label === "숙박");
if (hotel) {
  hotel.detail = "호텔 보스 5박";
  hotel.amount = "1,373,637";
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

f1Trip.days = f1Trip.days.filter((day) => day.id !== "1003");

const firstDay = f1Trip.days.find((day) => day.id === "1004") as DayPlan | undefined;
if (firstDay) {
  firstDay.title = "출국 · 도착";
  firstDay.summary = "인천 T1 → 푸둥 T1 → 창이 T3";
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
      time: "17:00",
      title: "창이공항 도착",
      detail: "당일 · 터미널 3",
      emphasis: true,
      image: imageOf("창이공항 도착"),
    },
    {
      time: "18:20",
      title: "호텔 보스 이동",
      detail: "입국·수하물 후 · MRT 약 1시간 · 500 Jalan Sultan",
    },
    {
      time: "19:30",
      title: "호텔 보스 체크인",
      detail: "4성급 · 체크아웃 11:00",
      image: imageOf("호텔 보스 체크인"),
    },
    {
      time: "20:30",
      title: "저녁",
      detail: "차이나타운 · 바쿠테 · 차슈면 · 호키엔미",
    },
    {
      time: "숙박",
      title: "호텔 보스",
      detail: "1박째",
    },
  ];
}

const thursday = f1Trip.days.find((day) => day.id === "1008") as DayPlan | undefined;
if (thursday) {
  thursday.title = "근교";
  thursday.summary = "아랍스트리트 → 리틀인디아 → 쥬얼 창이";
  thursday.stops = [
    {
      time: "09:30",
      title: "아랍스트리트",
      detail: "호텔 도보 · 술탄 모스크 · 하지 레인",
    },
    {
      time: "11:00",
      title: "부기스",
      detail: "도보 · 스트리트 · 마켓",
    },
    {
      time: "12:30",
      title: "점심 · 리틀인디아",
      detail: "다운타운선 2정거장 · 바나나리프 · 프라타",
    },
    {
      time: "14:30",
      title: "이스트코스트",
      detail: "리틀인디아에서 약 50분 · 카약은 선택",
    },
    {
      time: "16:30",
      title: "쥬얼 창이",
      detail: "이스트코스트에서 약 40분 · 20:00 라이트 쇼",
      emphasis: true,
      image: imageOf("쥬얼 창이"),
    },
    {
      time: "18:30",
      title: "저녁 · 쥬얼",
      detail: "치킨라이스 · 라멘 · 디저트",
    },
    {
      time: "21:00",
      title: "호텔 보스 복귀",
      detail: "MRT 약 1시간",
    },
    {
      time: "숙박",
      title: "호텔 보스",
      detail: "5박째",
    },
  ];
}

const friday = f1Trip.days.find((day) => day.id === "1009") as DayPlan | undefined;
if (friday) {
  friday.title = "F1";
  friday.summary = "마리나베이 · 새벽까지";
  friday.stops = [
    {
      time: "11:00",
      title: "체크아웃",
      detail: "호텔 보스 · 숙박 없음 · 짐",
    },
    {
      time: "13:30",
      title: "마리나베이 서킷",
      detail: "14:05 전 입장",
      image: imageOf("머라이언·에스플러네이드"),
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
    },
    {
      time: "18:00",
      title: "저녁 · 서킷",
      detail: "스프린트 예선 전",
    },
    {
      time: "20:30",
      title: "스프린트 예선",
      detail: "21:14",
      emphasis: true,
    },
    {
      time: "21:30",
      title: "마리나베이",
      detail: "서킷 밖 · 새벽까지",
    },
  ];
}

const home = f1Trip.days.find((day) => day.id === "1010") as DayPlan | undefined;
if (home) {
  home.stops = [
    {
      time: "06:00",
      title: "창이 이동",
      detail: "첫차 · MRT 약 1시간",
      emphasis: true,
      image: imageOf("창이공항 도착"),
    },
    {
      time: "07:00",
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
