export type Stop = {
  time: string;
  title: string;
  detail?: string;
  emphasis?: boolean;
  image?: string;
  mapUrl?: string;
};

export type PickLine = {
  label?: string;
  text: string;
};

export type DayPlan = {
  id: string;
  date: string;
  title: string;
  summary: string;
  stops: Stop[];
  note?: string;
  picks?: PickLine[];
};

export type CostRow = {
  label: string;
  detail?: string;
  amount: string;
};

const photo = (file: string) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${file}?width=200`;

const commonsImage = (file: string) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=200`;

export const trip = {
  docNo: "NO. SG-261004 · 2인",
  kicker: "주슬기의 여행",
  title: "싱가포르 F1 여행",
  subtitle: "조호바루",
  heroAlt: "주슬기의 싱가포르 F1 여행",
  dates: "10.04–10.10 · 6박 7일",
  stays: "R&F 프린세스 코브 5박",
  route: "인천 → 상하이 → 싱가포르 ↔ 조호바루",
  totalLabel: "식비 제외 · 1인 예상비용",
  totalAmount: "1,545,200원",
  credits: "사진 Wikimedia Commons · CC BY / CC BY-SA / CC0",
  days: [
    {
      id: "1004",
      date: "10.04 일 · DAY 1",
      title: "출국 · 도착",
      summary: "인천 T1 → 푸둥 T1 → 창이 T3 → 쥬얼 → 조호바루",
      note: "현지 시간 · 한국보다 1시간 느림. 입국 지연 시 21:00 쇼로 변경하고 차량 픽업 조정. 국경 혼잡에 따라 체크인 지연 가능.",
      stops: [
        {
          time: "06:25",
          title: "인천공항",
          detail: "체크인·출국심사·대기 · MU5052",
          image: photo("Incheon_International_Airport_Terminal_1_Departure.jpg"),
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
          image: photo("Shanghai_Pudong_Airport_2024_%28cropped%29.jpg"),
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
          detail: "당일 · 터미널 3 · 착륙 후 입국장 이동",
          emphasis: true,
          image: photo("Singapore_Changi_Airport_Terminal_3_%28113212%29.jpg"),
        },
        {
          time: "17:00–18:20",
          title: "입국심사·수하물 수령",
          detail: "입국심사·수하물·세관 약 1시간 20분 · 혼잡 시 지연",
          emphasis: true,
        },
        {
          time: "18:20–18:40",
          title: "쥬얼창이",
          detail: "T3 연결 통로로 이동 · 캐리어 동반 · 도보 여유 20분",
          emphasis: true,
          image: photo("Rain_Vortex_Jewel_Changi_Airport.jpg"),
        },
        {
          time: "18:40–19:40",
          title: "저녁 · 쥬얼",
          detail: "쥬얼 식당 · 대기 포함 1시간 · 식비 별도",
        },
        {
          time: "19:40–20:00",
          title: "레인 보텍스 · 쇼 대기",
          detail: "식사 후 폭포로 이동 · 관람 위치 확보",
        },
        {
          time: "20:00",
          title: "라이트·뮤직 쇼",
          detail: "20:00 회차 관람 · 일요일 21:00·22:00 추가 회차",
          emphasis: true,
        },
        {
          time: "20:15–20:45",
          title: "차량 픽업 장소 이동",
          detail: "쇼 관람 후 화장실 · 캐리어 정리 · 예약 기사와 만남",
        },
        {
          time: "20:45",
          title: "조호바루 이동",
          detail: "창이 출발 · 국경택시 · 차량 약 S$140 · 1인 S$70",
          emphasis: true,
        },
        {
          time: "23:15 예상",
          title: "R&F 프린세스 코브 체크인",
          detail: "국경 포함 약 2시간 30분 · 3베드룸 패밀리 스위트",
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
      ],
    },
    {
      id: "1005",
      date: "10.05 월 · DAY 2",
      title: "마리나베이",
      summary: "머라이언 → 크루즈 → 가든스 → 라우파삿",
      stops: [
        {
          time: "07:00",
          title: "싱가포르 이동",
          detail: "도보 JB CIQ → CW2 → Queen Street · RM4.80",
          emphasis: true,
        },
        {
          time: "10:00",
          title: "머라이언·에스플러네이드",
          detail: "플라이어는 선택 · 헬릭스 브리지로 이동",
          image: photo("Singapore_Merlion-at-Marina-Bay-02.jpg"),
        },
        {
          time: "11:10",
          title: "싱가포르 리버 크루즈",
          detail: "Bayfront South Jetty · 관광 범보트 40분 · S$28",
          emphasis: true,
        },
        {
          time: "12:30",
          title: "점심 · 마리나 베이 샌즈",
          detail: "레스토랑 · 예상 S$30",
          image: photo(
            "Puente_Helix,_museo_ArtScience_y_hotel_Marina_Bay_Sands,_Marina_Bay,_Singapur,_2023-08-17,_DD_67-69_HDR.jpg",
          ),
        },
        {
          time: "15:00",
          title: "카페 · 음료",
          detail: "MBS · 예상 S$15",
        },
        {
          time: "16:00",
          title: "가든스 바이 더 베이",
          detail: "플라워 돔 → 클라우드 포레스트 → 슈퍼트리",
          image: photo("Supertree_Grove,_Gardens_by_the_Bay,_Singapore1.jpg"),
        },
        {
          time: "19:45",
          title: "슈퍼트리 · 스펙트라",
          detail: "가든 랩소디 · 21:00 스펙트라",
          emphasis: true,
          image: photo("Supertree_Grove,_Gardens_by_the_Bay_light_show_19_August_2023_28.jpg"),
        },
        {
          time: "21:30",
          title: "저녁 · 라우파삿",
          detail: "사테 · 해산물 · 음료 · 예상 S$25",
          image: photo("Lau_Pa_Sat_Singapore_1.jpg"),
        },
        {
          time: "22:30",
          title: "조호바루 복귀",
          detail: "Queen Street → CW2 → JB CIQ · S$4.80 · 현금 불가",
        },
        {
          time: "숙박",
          title: "R&F 프린세스 코브",
          detail: "2박째",
        },
      ],
    },
    {
      id: "1006",
      date: "10.06 화 · DAY 3",
      title: "올드시티",
      summary: "포트캐닝 → A 또는 B → 차이나타운",
      picks: [
        { label: "A", text: "국립박물관 → 차임스 → 래플스 → 세인트 앤드류" },
        { label: "B", text: "차임스 → 래플스 → 세인트 앤드류 → 내셔널 갤러리" },
      ],
      stops: [
        {
          time: "06:30",
          title: "싱가포르 이동",
          detail: "도보 JB CIQ → CW2 → Queen Street · RM4.80",
          emphasis: true,
        },
        {
          time: "09:00",
          title: "포트캐닝 트리터널",
          detail: "오전 일찍",
          image: photo("Fort_Canning_Park_Tree_Tunnel.jpg"),
        },
        {
          time: "10:00",
          title: "선택 A 또는 B",
          detail: "14:30까지 하나만 · 세인트앤드류 도로 통제",
          image: photo("Hotel_Raffles_exterior_1.jpg"),
        },
        {
          time: "12:30",
          title: "점심",
          detail: "호커·레스토랑 · 예상 S$20",
        },
        {
          time: "14:30",
          title: "카페 · 음료",
          detail: "차이나타운 이동 전 · 예상 S$15",
        },
        {
          time: "15:00",
          title: "불아사",
          detail: "17:00 전 내부 관람",
          image: photo("Buddha_Tooth_Relic_Temple_in_Singapore.jpg"),
        },
        {
          time: "16:00",
          title: "차이나타운",
          detail: "마켓 · 마리암만 · 파고다",
          image: photo("Pagoda_Street_Chinatown_Singapore.jpg"),
        },
        {
          time: "17:30",
          title: "저녁 · 차이나타운",
          detail: "칠리크랩 · 만터우 · 음료 · 예상 S$50",
        },
        {
          time: "20:30",
          title: "조호바루 복귀",
          detail: "Queen Street → CW2 → JB CIQ · S$4.80 · 현금 불가",
        },
        {
          time: "숙박",
          title: "R&F 프린세스 코브",
          detail: "3박째",
        },
      ],
    },
    {
      id: "1007",
      date: "10.07 수 · DAY 4",
      title: "조호바루",
      summary: "구시가지 → 시티스퀘어 → 미드밸리",
      stops: [
        {
          time: "09:30",
          title: "R&F 프린세스 코브 출발",
          detail: "도보 · 구시가지 이동",
        },
        {
          time: "10:00",
          title: "옛 중국사원",
          detail: "가볍게 내부 관람",
          image: photo("Johor_Bahru_Old_Chinese_Temple.jpg"),
        },
        {
          time: "10:45",
          title: "탄히옥니 · 잘란 도비",
          detail: "상점가 · 사진 · 커피",
          image: photo("Tan_Hiok_Nee_Street.jpg"),
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
          image: photo("Jb_city_square.jpg"),
        },
        {
          time: "15:30",
          title: "미드밸리 사우스키",
          detail: "Grab 약 RM15 · 쇼핑 · 마사지 · 카페 RM25",
          emphasis: true,
          image: photo("Mid_Valley_Southkey.jpg"),
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
          detail: "4박째",
        },
      ],
    },
    {
      id: "1008",
      date: "10.08 목 · DAY 5",
      title: "유니버설",
      summary: "호텔 → 비보시티 → 센토사",
      stops: [
        {
          time: "07:00",
          title: "유니버설 이동",
          detail: "Grab Cross-Border · 약 RM240/차 · 1인 RM120",
          image: photo("Monorail_shuttle_to_Sentosa_island.jpg"),
        },
        {
          time: "10:00",
          title: "유니버설 스튜디오",
          detail: "6–8시간 · 88,400원",
          emphasis: true,
          image: photo("Universal_Studios_Singapore_globe,_20240206_1324_6457.jpg"),
        },
        {
          time: "12:30",
          title: "점심 · 유니버설",
          detail: "파크 내부 식사 · 예상 S$30",
        },
        {
          time: "15:30",
          title: "간식 · 음료",
          detail: "유니버설 내부 · 예상 S$25",
        },
        {
          time: "18:30",
          title: "저녁 · 비보시티",
          detail: "레스토랑 · 음료 · 예상 S$25",
        },
        {
          time: "20:00",
          title: "조호바루 복귀",
          detail: "MRT → Queen Street → CW2 → JB CIQ · S$4.80",
        },
        {
          time: "숙박",
          title: "R&F 프린세스 코브",
          detail: "5박째",
        },
      ],
    },
    {
      id: "1009",
      date: "10.09 금 · DAY 6",
      title: "F1",
      summary: "짐 보관 → F1 → 캐리어 회수",
      stops: [
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
      ],
    },
    {
      id: "1010",
      date: "10.10 토",
      title: "귀국",
      summary: "창이 T3 → 푸둥 T1 → 인천 T1",
      stops: [
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
          image: photo("Singapore_Changi_Airport_Terminal_3_%28113212%29.jpg"),
        },
        {
          time: "01:45",
          title: "창이 도착",
          detail: "10:10 MU546",
        },
        {
          time: "03:00",
          title: "커피 · 간식",
          detail: "창이공항 · 예상 S$20",
        },
        {
          time: "07:40",
          title: "창이 체크인",
          detail: "출국심사·대기 · MU546",
          image: photo("Singapore_Changi_Airport_Terminal_3_%28113212%29.jpg"),
        },
        {
          time: "10:10",
          title: "싱가포르 출국",
          detail: "MU546 · 5시간 25분",
          emphasis: true,
        },
        {
          time: "12:30",
          title: "점심 · 기내",
          detail: "MU546 기내식 · 항공권 포함",
        },
        {
          time: "15:35",
          title: "푸둥 환승",
          detail: "2시간 5분 · 수하물 연결 확인",
          image: photo("Shanghai_Pudong_Airport_2024_%28cropped%29.jpg"),
        },
        {
          time: "17:40",
          title: "상하이 출국",
          detail: "MU5051 · 2시간 5분",
          emphasis: true,
        },
        {
          time: "18:30",
          title: "저녁 · 기내",
          detail: "MU5051 기내식·간식 · 항공권 포함",
        },
        {
          time: "20:45",
          title: "인천공항 도착",
          detail: "입국·수하물",
          emphasis: true,
          image: photo("Incheon_International_Airport_Terminal_1_Departure.jpg"),
        },
      ],
    },
  ] satisfies DayPlan[],
  cost: {
    caption: "1인 · S$1=1,100원 · RM1=350원",
    title: "비용",
    note: "국경은 창이 출발 택시 1회, 유니버설·F1 가는 Grab 2회, CW2 5회. 식비·창이공항 심야 택시·추가 MRT는 제외. 항공·숙박·F1은 결제내역 확인 필요.",
    rows: [
      { label: "항공", detail: "왕복 · 투어비스", amount: "636,000" },
      { label: "숙박", detail: "3베드룸 · 2인 5박 총 400,000", amount: "200,000/인" },
      {
        label: "교통·입장",
        detail: "MRT 31,900 + 센토사 4,400 + 유니버설 88,400 + 크루즈 30,800 + 가든스 50,600 + 국경 3회 161,000 + CW2 5회 19,200 + 기타 22,900",
        amount: "409,200",
      },
      { label: "F1", detail: "티켓 · 9일", amount: "300,000" },
    ] satisfies CostRow[],
  },
};

export type Trip = typeof trip;
