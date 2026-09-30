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

export const trip = {
  docNo: "NO. SG-261003 · 1인",
  kicker: "주슬기의 여행",
  title: "싱가포르 여행",
  subtitle: "조호바루",
  heroAlt: "주슬기의 싱가포르 여행",
  dates: "10.03–10.10 · 7박 8일",
  stays: "싱가포르 4박 · 조호바루 1박",
  route: "인천 → 상하이 → 싱가포르 → 조호바루",
  totalLabel: "1인 총비용",
  totalAmount: "1,520,300원",
  credits: "사진 Wikimedia Commons · CC BY / CC BY-SA / CC0",
  days: [
    {
      id: "1003",
      date: "10.03 토",
      title: "출국",
      summary: "인천 T1 → 푸둥 T1 → 창이 T3",
      note: "싱가포르는 한국보다 1시간 느립니다.",
      stops: [
        {
          time: "14:30",
          title: "인천공항",
          detail: "체크인·출국심사·대기 · MU8604",
          image: photo("Incheon_International_Airport_Terminal_1_Departure.jpg"),
        },
        {
          time: "18:25",
          title: "인천 출국",
          detail: "2시간 30분 · FM828 공동운항",
          emphasis: true,
        },
        {
          time: "19:55",
          title: "푸둥 환승",
          detail: "약 4시간 · 수하물 연결 확인",
          image: photo("Shanghai_Pudong_Airport_2024_%28cropped%29.jpg"),
        },
        {
          time: "21:00",
          title: "저녁 · 푸둥",
          detail: "샤오롱바오 · 우육면 · 볶음밥",
        },
        {
          time: "23:50",
          title: "싱가포르행",
          detail: "MU543 · 5시간 35분 · 기내박",
          emphasis: true,
        },
        {
          time: "05:25",
          title: "창이공항 도착",
          detail: "다음 날 · 터미널 3",
          emphasis: true,
          image: photo("Singapore_Changi_Airport_Terminal_3_%28113212%29.jpg"),
        },
      ],
    },
    {
      id: "1004",
      date: "10.04 일 · DAY 1",
      title: "싱가포르 도착",
      summary: "창이공항 → 호텔 보스",
      picks: [
        {
          text: "동물원 · 리버 원더스 · 버드 파라다이스 · 나이트 사파리 · 리틀인디아 · 아랍스트리트 · 부기스 · 오차드 · 보타닉가든 · 뎀시힐 · 이스트코스트",
        },
      ],
      stops: [
        {
          time: "05:25",
          title: "창이 도착",
          detail: "입국·수하물 약 1시간 20분",
          emphasis: true,
          image: photo("Singapore_Changi_Airport_Terminal_3_%28113212%29.jpg"),
        },
        {
          time: "06:45",
          title: "호텔 보스 이동·짐 보관",
          detail: "MRT 약 1시간 · 500 Jalan Sultan",
        },
        {
          time: "08:20",
          title: "정비·자유시간",
          detail: "오전 · 1–2곳만 선택",
        },
        {
          time: "12:30",
          title: "점심",
          detail: "호커 · 치킨라이스 · 락사 · 로티프라타",
        },
        {
          time: "15:00",
          title: "호텔 보스 체크인",
          detail: "4성급 · 체크아웃 11:00",
          image: photo("Boss_Hotel,_Singapore_-_29_May_2023.jpg"),
        },
        {
          time: "18:30",
          title: "저녁",
          detail: "차이나타운 · 바쿠테 · 차슈면 · 호키엔미",
        },
        {
          time: "숙박",
          title: "호텔 보스",
          detail: "1박째",
        },
      ],
    },
    {
      id: "1005",
      date: "10.05 월 · DAY 2",
      title: "마리나베이",
      summary: "머라이언 → MBS → 가든스 → 라우파삿",
      stops: [
        {
          time: "10:00",
          title: "머라이언·에스플러네이드",
          detail: "플라이어는 선택 · 헬릭스 브리지로 이동",
          image: photo("Singapore_Merlion-at-Marina-Bay-02.jpg"),
        },
        {
          time: "12:30",
          title: "점심 · 마리나 베이 샌즈",
          detail: "치킨라이스 · 락사 · 스카이파크 선택",
          image: photo(
            "Puente_Helix,_museo_ArtScience_y_hotel_Marina_Bay_Sands,_Marina_Bay,_Singapur,_2023-08-17,_DD_67-69_HDR.jpg",
          ),
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
          detail: "21:00 스펙트라 · 19:10까지 자리",
          emphasis: true,
          image: photo("Supertree_Grove,_Gardens_by_the_Bay_light_show_19_August_2023_28.jpg"),
        },
        {
          time: "21:30",
          title: "저녁 · 라우파삿",
          detail: "사테 · 오이스터 오믈렛 · 바비큐 스팅레이",
          image: photo("Lau_Pa_Sat_Singapore_1.jpg"),
        },
        {
          time: "숙박",
          title: "호텔 보스",
          detail: "2박째",
        },
      ],
    },
    {
      id: "1006",
      date: "10.06 화 · DAY 3",
      title: "유니버설",
      summary: "호텔 → 비보시티 → 센토사",
      stops: [
        {
          time: "09:00",
          title: "호텔 출발",
          detail: "MRT · 센토사 익스프레스",
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
          detail: "치킨라이스 · 나시고렝",
        },
        {
          time: "18:30",
          title: "저녁 · 비보시티",
          detail: "락사 · 치킨라이스 · 디저트",
        },
        {
          time: "숙박",
          title: "호텔 보스",
          detail: "3박째 · 다른 센토사는 없음",
        },
      ],
    },
    {
      id: "1007",
      date: "10.07 수 · DAY 4",
      title: "올드시티",
      summary: "포트캐닝 → A 또는 B → 클락키",
      picks: [
        { label: "A", text: "국립박물관 → 차임스 → 래플스 → 세인트 앤드류" },
        { label: "B", text: "차임스 → 래플스 → 세인트 앤드류 → 내셔널 갤러리" },
      ],
      stops: [
        {
          time: "09:00",
          title: "포트캐닝 트리터널",
          detail: "오전 일찍",
          image: photo("Fort_Canning_Park_Tree_Tunnel.jpg"),
        },
        {
          time: "10:00",
          title: "선택 A 또는 B",
          detail: "14:30까지 하나만",
          image: photo("Hotel_Raffles_exterior_1.jpg"),
        },
        {
          time: "12:30",
          title: "점심",
          detail: "호커 · 치킨라이스 · 미고랭",
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
          detail: "칠리크랩 · 호키엔미 · 만터우",
        },
        {
          time: "19:30",
          title: "클락키 크루즈",
          detail: "약 40분 · 이후 힐 스트리트 경찰서",
          emphasis: true,
          image: photo("Clarke_Quay_at_night,_Singapore,_20240205_1946_6058.jpg"),
        },
        {
          time: "숙박",
          title: "호텔 보스",
          detail: "4박째",
        },
      ],
    },
    {
      id: "1008",
      date: "10.08 목 · DAY 5",
      title: "조호바루",
      summary: "싱가포르 → 말레이시아",
      stops: [
        {
          time: "08:00",
          title: "싱가포르 체크아웃",
          detail: "호텔 보스 · 짐 확인",
        },
        {
          time: "08:30",
          title: "국경 이동·입국",
          detail: "약 2시간 · 택시 50,000원",
          emphasis: true,
          image: photo("Johor-Singapore_Causeway_near_the_midway_point_of_the_border_06042019.jpg"),
        },
        {
          time: "10:30",
          title: "R&F 숙소 도착",
          detail: "1 Jalan Tanjung Puteri · 짐 보관 사전 문의",
        },
        {
          time: "10:45",
          title: "탄히옥니 · 잘란 도비",
          detail: "~11:30 · 상점가 · 사진 · 커피·토스트",
          image: photo("Tan_Hiok_Nee_Street.jpg"),
        },
        {
          time: "11:30",
          title: "구시가지 점심",
          detail: "치킨라이스 · 락사 · 완탕면",
        },
        {
          time: "12:30",
          title: "옛 중국사원",
          detail: "~13:00 · 가볍게",
          image: photo("Johor_Bahru_Old_Chinese_Temple.jpg"),
        },
        {
          time: "13:00",
          title: "미드밸리 사우스키",
          detail: "~15:30 · Grab · 쇼핑 · 디저트",
          image: photo("Mid_Valley_Southkey.jpg"),
        },
        {
          time: "15:30",
          title: "R&F 프린세스 코브 체크인",
          detail: "Designer Suites by NEO · 셀프 체크인",
          image: photo("R%26F_Princess_Cove_%28cropped%29.jpg"),
        },
        {
          time: "16:00",
          title: "마사지",
          detail: "60~90분 · 시티스퀘어 근처",
        },
        {
          time: "17:30",
          title: "저녁 · 시티스퀘어",
          detail: "나시르막 · 미고랭 · 사테 · 기념품",
          image: photo("Jb_city_square.jpg"),
        },
      ],
    },
    {
      id: "1009",
      date: "10.09 금 · DAY 6",
      title: "쥬얼 창이",
      summary: "조호바루 → 창이공항",
      stops: [
        {
          time: "11:00",
          title: "체크아웃 · 점심",
          detail: "나시르막 · 로티 · 짐 보관 사전 문의",
        },
        {
          time: "13:30",
          title: "국경·공항 이동",
          detail: "금요일 혼잡 · 약 4시간 · 택시 50,000원",
          emphasis: true,
          image: photo("Singapore-Johor_Causeway.jpg"),
        },
        {
          time: "17:30",
          title: "쥬얼 창이",
          detail: "레인 보텍스 · 20:00 라이트 쇼",
          image: photo("Rain_Vortex_Jewel_Changi_Airport.jpg"),
        },
        {
          time: "18:30",
          title: "저녁 · 쥬얼",
          detail: "치킨라이스 · 라멘 · 디저트",
        },
        {
          time: "21:55",
          title: "체크인·출국",
          detail: "MU544 · 10.10 00:55 출발",
          image: photo("Singapore_Changi_Airport_Terminal_3_%28113212%29.jpg"),
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
          time: "00:55",
          title: "싱가포르 출국",
          detail: "MU544 · 5시간 25분",
          emphasis: true,
          image: photo("Singapore_Changi_Airport_Terminal_3_%28113212%29.jpg"),
        },
        {
          time: "06:20",
          title: "푸둥 환승",
          detail: "약 3시간 · 수하물 연결 확인",
          image: photo("Shanghai_Pudong_Airport_2024_%28cropped%29.jpg"),
        },
        {
          time: "09:10",
          title: "상하이 출국",
          detail: "MU5041 · 1시간 45분",
          emphasis: true,
        },
        {
          time: "11:55",
          title: "인천공항 도착",
          detail: "입국·수하물",
          emphasis: true,
          image: photo("Incheon_International_Airport_Terminal_1_Departure.jpg"),
        },
      ],
    },
  ] satisfies DayPlan[],
  cost: {
    caption: "1인 · S$1 = 1,100원",
    title: "비용",
    note: "쇼핑과 선택 관광 입장료는 제외. 환율과 택시 견적은 예약 전 확인.",
    rows: [
      { label: "항공", detail: "왕복", amount: "450,000" },
      { label: "숙박", detail: "호텔 보스 4박 · R&F 프린세스 코브 1박", amount: "850,000" },
      { label: "교통·입장", detail: "MRT · 국경택시 · 유니버설", amount: "220,300" },
    ] satisfies CostRow[],
  },
};

export type Trip = typeof trip;
