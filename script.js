/* =========================================================
   기본 선언
   ========================================================= */


// 멤버
const members = [
  { id: 1, name: "닌닌", engname: "Ninnin", generation: "1기", birthday: "2005. 05. 12.", mbti: "ENTP", fandom: "조무래기", jappronouns: "私", oshimark: "🥷", color: "#7150CE", standing: "images/profile/01.png", portrait: "images/portrait/01.png", idphoto: "images/idphoto/01.png", description: "쿠노이치(가 될) 닌닌이다!", memo: "추가 프로필 및 관계 기록을 입력할 수 있습니다." },
  { id: 2, name: "미스 발렌타인", engname: "Miss Valentine", generation: "1기", birthday: "02. 14.", mbti: "ESTP", fandom: "미녀 ・ 미남", jappronouns: "私", oshimark: "🌹", color: "#F5F5DC", standing: "images/profile/02.png", portrait: "images/portrait/02.png", idphoto: "images/idphoto/02.png", description: "이곳에 캐릭터를 소개하는 짧은 문장을 작성하세요.", memo: "추가 프로필 및 관계 기록을 입력할 수 있습니다." },
  { id: 3, name: "보디가드 불독", engname: "Bodyguard Bulldog", generation: "1기", birthday: "2000. 05. 31.", mbti: "INTP-T", fandom: "아가씨", jappronouns: "僕", oshimark: "🕶️", color: "#000000", standing: "images/profile/03.png", portrait: "", idphoto: "images/idphoto/03.png", description: "이곳에 캐릭터를 소개하는 짧은 문장을 작성하세요.", memo: "추가 프로필 및 관계 기록을 입력할 수 있습니다." },
  { id: 4, name: "시리안 레인", engname: "Sirian Rain", generation: "1기", birthday: "07. 28.", mbti: "ISTJ", fandom: "도넛단", jappronouns: "私", oshimark: "👮", color: "#2D4BC1", standing: "images/profile/04.png", portrait: "", idphoto: "images/idphoto/04.png", description: "이곳에 캐릭터를 소개하는 짧은 문장을 작성하세요.", memo: "추가 프로필 및 관계 기록을 입력할 수 있습니다." },
  { id: 5, name: "아마데우스최", engname: "Amadeus Choi", generation: "1기", birthday: "03. 13.", mbti: "ENTJ", fandom: "아사단", jappronouns: "僕 ・ 私", oshimark: "🎶", color: "#6B2929", standing: "images/profile/05.png", portrait: "", idphoto: "images/idphoto/05.png", description: "이곳에 캐릭터를 소개하는 짧은 문장을 작성하세요.", memo: "추가 프로필 및 관계 기록을 입력할 수 있습니다." },
  { id: 6, name: "진희", engname: "Jinhe", generation: "1기", birthday: "05. 01.", mbti: "ENTP", fandom: "진미채", jappronouns: "オレ", oshimark: "🧞", color: "#AAC484", standing: "images/profile/06.png", portrait: "images/portrait/06.png", idphoto: "images/idphoto/06.png", description: "이곳에 캐릭터를 소개하는 짧은 문장을 작성하세요.", memo: "추가 프로필 및 관계 기록을 입력할 수 있습니다." },
  { id: 7, name: "캡틴 설리반", engname: "Captain Sullivan", generation: "1기", birthday: "09. 27.", mbti: "ENTP", fandom: "-", jappronouns: "俺 ・ 船長", oshimark: "🏴‍☠️", color: "#BB1111", standing: "images/profile/07.png", portrait: "", idphoto: "images/idphoto/07.png", description: "이곳에 캐릭터를 소개하는 짧은 문장을 작성하세요.", memo: "추가 프로필 및 관계 기록을 입력할 수 있습니다." },
  { id: 8, name: "사랑전도사 젠투", engname: "Love Missionary Jentoo", generation: "2기", birthday: "02. 23.", mbti: "ESFP", fandom: "젠크리트", jappronouns: "僕 ・ 私", oshimark: "💘", color: "#FF80E6", standing: "images/profile/08.png", portrait: "images/portrait/08.png", idphoto: "images/idphoto/08.png", description: "이곳에 캐릭터를 소개하는 짧은 문장을 작성하세요.", memo: "추가 프로필 및 관계 기록을 입력할 수 있습니다." },
  { id: 9, name: "수셈이", engname: "Soosemi", generation: "2기", birthday: "03. 02.", mbti: "ISTJ", fandom: "고기세제비실벌벌쫄보카피바라단", jappronouns: "僕", oshimark: "🧽", color: "#425342", standing: "images/profile/09.png", portrait: "images/portrait/09.png", idphoto: "images/idphoto/09.png", description: "이곳에 캐릭터를 소개하는 짧은 문장을 작성하세요.", memo: "추가 프로필 및 관계 기록을 입력할 수 있습니다." },
  { id: 10, name: "철도왕 길버트", engname: "Vanderbilt Gilbert", generation: "2기", birthday: "1801. 06. 27.", mbti: "INTP", fandom: "전쟁고멤 ・ 석탄단 ・ 철도단", jappronouns: "俺", oshimark: "🚂", color: "#343F7E", standing: "images/profile/10.png", portrait: "images/portrait/10.png", idphoto: "images/idphoto/10.png", description: "이곳에 캐릭터를 소개하는 짧은 문장을 작성하세요.", memo: "추가 프로필 및 관계 기록을 입력할 수 있습니다." },
  { id: 11, name: "미미짱짱세용", engname: "Mimi Chan-chan Seyong", generation: "3기", birthday: "08. 01.", mbti: "INFP", fandom: "둥지단 ・ 둥둥이", jappronouns: "わたし", oshimark: "🪺🐲", color: "#ABCDEC", standing: "images/profile/11.png", portrait: "", idphoto: "images/idphoto/11.png", description: "이곳에 캐릭터를 소개하는 짧은 문장을 작성하세요.", memo: "추가 프로필 및 관계 기록을 입력할 수 있습니다." },
  { id: 12, name: "빅토리", engname: "Victory", generation: "3기", birthday: "2001. 02. 19.", mbti: "ESFP", fandom: "빅타민", jappronouns: "私", oshimark: "✨", color: "#FFC15C", standing: "images/profile/12.png", portrait: "images/portrait/12.png", idphoto: "images/idphoto/12.png", description: "이곳에 캐릭터를 소개하는 짧은 문장을 작성하세요.", memo: "추가 프로필 및 관계 기록을 입력할 수 있습니다." },
  { id: 13, name: "데스해머쵸로키", engname: "Death Hammer Chouloky", generation: "4기", birthday: "2004. 07. 17.", mbti: "ISFP", fandom: "허접구리", jappronouns: "あたし", oshimark: "🐸", color: "#6AA937", standing: "images/profile/13.png", portrait: "", idphoto: "images/idphoto/13.png", description: "이곳에 캐릭터를 소개하는 짧은 문장을 작성하세요.", memo: "추가 프로필 및 관계 기록을 입력할 수 있습니다." },
  { id: 14, name: "아이 쓰께끼", engname: "I Cekkekki", generation: "4기", birthday: "06. 29.", mbti: "-", fandom: "꼬깔단", jappronouns: "ボク", oshimark: "🍦", color: "#A7E6F0", standing: "images/profile/14.png", portrait: "", idphoto: "images/idphoto/14.png", description: "이곳에 캐릭터를 소개하는 짧은 문장을 작성하세요.", memo: "추가 프로필 및 관계 기록을 입력할 수 있습니다." },
  { id: 15, name: "크리즈", engname: "Kreaze", generation: "4기", birthday: "비공개", mbti: "-", fandom: "-", jappronouns: "我", oshimark: "🗿", color: "#787878", standing: "images/profile/15.png", portrait: "", idphoto: "images/idphoto/15.png", description: "이곳에 캐릭터를 소개하는 짧은 문장을 작성하세요.", memo: "추가 프로필 및 관계 기록을 입력할 수 있습니다." },
  { id: 16, name: "버터우스 3세", engname: "Butterus III", generation: "5기", birthday: "11. 10.", mbti: "ENTJ", fandom: "백성단", jappronouns: "余", oshimark: "🧈", color: "#C2A46E", standing: "images/profile/16.png", portrait: "", idphoto: "images/idphoto/16.png", description: "이곳에 캐릭터를 소개하는 짧은 문장을 작성하세요.", memo: "추가 프로필 및 관계 기록을 입력할 수 있습니다." },
  { id: 17, name: "성기사 샬롯", engname: "Castle Knight Charlotte", generation: "5기", birthday: "07. 15.", mbti: "INTP", fandom: "때지", jappronouns: "私", oshimark: "⚜️", color: "#B41432", standing: "images/profile/17.png", portrait: "", idphoto: "images/idphoto/17.png", description: "이곳에 캐릭터를 소개하는 짧은 문장을 작성하세요.", memo: "추가 프로필 및 관계 기록을 입력할 수 있습니다." },
  { id: 18, name: "메카 맹기산", engname: "Mecha Maeng Gisan", generation: "6기", birthday: "1984. 11. 24.", mbti: "-", fandom: "-", jappronouns: "オレ", oshimark: "🕵️‍♂️", color: "#8C6B4B", standing: "images/profile/18.png", portrait: "", idphoto: "images/idphoto/18.png", description: "이곳에 캐릭터를 소개하는 짧은 문장을 작성하세요.", memo: "추가 프로필 및 관계 기록을 입력할 수 있습니다." }
];

// 페어
const pairs = [
  { id: "1", title: "여카데미", members: [1, 2, 4, 11, 12, 13, 17], image: "images/pair/academy_f.jpg", category: ["여성"], description: "이 조합의 관계성이나 대표적인 장면을 기록하세요." },
  { id: "2", title: "남카데미", members: [3, 5, 6, 7, 8, 9, 10, 14, 15, 16, 18], image: "images/pair/academy_m.png", category: ["남성"], description: "아카데미 반기를 올려" },
  { id: "3", title: "GTS", members: [6, 9, 10], image: "images/pair/gts.jpg", category: ["학예회", "남성"], description: "이 조합의 관계성이나 대표적인 장면을 기록하세요." },
  { id: "4", title: "러브 미스 피스", members: [2, 4, 8], image: "images/pair/lovemisspeace.png", category: ["학예회"], description: "이 조합의 관계성이나 대표적인 장면을 기록하세요." },
  { id: "5", title: "아닌말곰", members: [1, 3, 5, 7], image: "", category: ["학예회"], description: "이 조합의 관계성이나 대표적인 장면을 기록하세요." },
  { id: "6", title: "JJ", members: [6, 8], image: "images/pair/jj.png", category: ["남성", "듀오"], description: "이 조합의 관계성이나 대표적인 장면을 기록하세요." },
  { id: "7", title: "용토리", members: [11, 12], image: "images/pair/3rd.png", category: ["기수별", "여성", "듀오"], description: "이 조합의 관계성이나 대표적인 장면을 기록하세요." },
  { id: "8", title: "께진발", members: [2, 6, 14], image: "", category: ["작곡캠프"], description: "이 조합의 관계성이나 대표적인 장면을 기록하세요." },
  { id: "9", title: "RYKY", members: [12, 13], image: "images/pair/ryky.png", category: ["작곡캠프", "여성", "듀오"], description: "이 조합의 관계성이나 대표적인 장면을 기록하세요." },
  { id: "10", title: "메이지 유신즈", members: [1, 10], image: "images/pair/germanbon.png", category: ["듀오"], description: "콜라겐과 비타민, 나트륨 뢴트게늄, 호프, 샬레, 메스실린더!" },
  { id: "11", title: "아카츠키", members: [3, 5, 7, 9], image: "", category: ["대회", "남성"], description: "이 조합의 관계성이나 대표적인 장면을 기록하세요." },
  { id: "12", title: "트레인포스", members: [8, 10, 12], image: "images/pair/train.png", category: ["대회"], description: "이 조합의 관계성이나 대표적인 장면을 기록하세요." },
  { id: "13", title: "몬스터 주식회사", members: [1, 4, 6, 11], image: "", category: ["대회"], description: "이 조합의 관계성이나 대표적인 장면을 기록하세요." },
  { id: "14", title: "배틀크루져", members: [6, 8, 10, 16], image: "images/pair/battlecruiser.png", category: ["대회", "남성"], description: "모두 우릴 쳐다봐, 거함 배틀크루져!" },
  { id: "15", title: "도둑고양이", members: [4, 5, 9, 12], image: "images/pair/cat.png", category: ["대회"], description: "이 조합의 관계성이나 대표적인 장면을 기록하세요." },
  { id: "16", title: "기산시불셈키", members: [3, 4, 9, 13, 18], image: "", category: ["대회"], description: "이 조합의 관계성이나 대표적인 장면을 기록하세요." },
  { id: "17", title: "패티다져스", members: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16, 17], image: "images/gallery/baseball1.png", category: ["대회"], description: "이 조합의 관계성이나 대표적인 장면을 기록하세요." },
  { id: "18", title: "2기즈", members: [8, 9, 10], image: "images/pair/2nd.png", category: ["기수별", "남성"], description: "“근데 전 오히려 2기즈를 보고 싶어요”" },
];

// 노래
const songs = [
  // { id: 1, title: "고멤 아카데미 교가", artist: "고멤 아카데미", kind: "original", cover: "http://img.youtube.com/vi/링크/maxresdefault.jpg", videoId: "", year: "2023"},
  { id: 2, title: "고멤 아카데미 사이퍼 Vol.1", artist: "고멤 아카데미 1~2기", kind: "original", cover: "http://img.youtube.com/vi/w4Zhanyxr2Q/maxresdefault.jpg", videoId: "w4Zhanyxr2Q", year: "2023"},
  { id: 3, title: "고멤 아카데미 사이퍼 Vol.2", artist: "고멤 아카데미 3~6기", kind: "original", cover: "http://img.youtube.com/vi/MYnaLe-nkPk/maxresdefault.jpg", videoId: "MYnaLe-nkPk", year: "2024"},
  { id: 4, title: "합방을 내게 주어라!", artist: "닌닌", kind: "cover", cover: "http://img.youtube.com/vi/pWcLWKmlcHk/maxresdefault.jpg", videoId: "pWcLWKmlcHk", year: "2023"},
  { id: 5, title: "비가 오는 날엔", artist: "남카데미", kind: "cover", cover: "http://img.youtube.com/vi/XvjQcSjQahE/maxresdefault.jpg", videoId: "XvjQcSjQahE", year: "2023"},
  { id: 6, title: "빵", artist: "JJ (진희, 사랑전도사 젠투)", kind: "cover", cover: "http://img.youtube.com/vi/wbfDpnHyWbM/maxresdefault.jpg", videoId: "wbfDpnHyWbM", year: "2023"},
  { id: 7, title: "3년째의 바람", artist: "아마타인 (미스 발렌타인, 아마데우스최)", kind: "cover", cover: "http://img.youtube.com/vi/i6M3cjKDOoE/maxresdefault.jpg", videoId: "i6M3cjKDOoE", year: "2023"},
  { id: 8, title: "Happy Things", artist: "빅토리", kind: "cover", cover: "http://img.youtube.com/vi/bLxn7objeH4/maxresdefault.jpg", videoId: "bLxn7objeH4", year: "2023"},
  // { id: 9, title: "고양이", artist: "보디가드 불독, 아마데우스최, 캡틴 설리반, 빅토리", kind: "cover", cover: "http://img.youtube.com/vi/링크/maxresdefault.jpg", videoId: "", year: "2023"},
  { id: 10, title: "슈퍼스타", artist: "미미짱짱세용", kind: "cover", cover: "http://img.youtube.com/vi/44CAW_Mqm1k/maxresdefault.jpg", videoId: "44CAW_Mqm1k", year: "2024"},
  { id: 11, title: "Love Song", artist: "닌닌, 미미짱짱세용, 데스해머쵸로키", kind: "cover", cover: "http://img.youtube.com/vi/lWan_caRLoU/maxresdefault.jpg", videoId: "lWan_caRLoU", year: "2023"},
  { id: 12, title: "용기 100%", artist: "닌닌", kind: "cover", cover: "http://img.youtube.com/vi/wXPntQ0M8rs/maxresdefault.jpg", videoId: "wXPntQ0M8rs", year: "2024"},
  { id: 13, title: "U R Man", artist: "아닌말곰 (닌닌, 보디가드 불독, 아마데우스최, 캡틴 설리반)", kind: "cover", cover: "http://img.youtube.com/vi/uip3qeFSczc/maxresdefault.jpg", videoId: "uip3qeFSczc", year: "2023"},
  { id: 14, title: "추격자", artist: "GTS (진희, 수셈이, 철도왕 길버트)", kind: "cover", cover: "http://img.youtube.com/vi/3RzZOI8bnB4/maxresdefault.jpg", videoId: "3RzZOI8bnB4", year: "2023"},
  { id: 15, title: "Hot Summer", artist: "러브 미스 피스 (미스 발렌타인, 시리안 레인, 사랑전도사 젠투)", kind: "cover", cover: "http://img.youtube.com/vi/jJgwgW0Nq4k/maxresdefault.jpg", videoId: "jJgwgW0Nq4k", year: "2023"},
  // { id: 16, title: "주지마", artist: "미스 발렌타인, 보디가드 불독", kind: "cover", cover: "http://img.youtube.com/vi/링크/maxresdefault.jpg", videoId: "", year: "2023"},
  { id: 17, title: "보름달 (ft. 수셈이)", artist: "미스 발렌타인", kind: "cover", cover: "http://img.youtube.com/vi/VaCCjwjxBQ4/maxresdefault.jpg", videoId: "VaCCjwjxBQ4", year: "2023"},
  // { id: 18, title: "U-Go-Girl (ft. 보디가드 불독)", artist: "미스 발렌타인", kind: "cover", cover: "http://img.youtube.com/vi/링크/maxresdefault.jpg", videoId: "", year: "2023"},
  // { id: 19, title: "내꺼 하는 법", artist: "미미짱짱세용", kind: "cover", cover: "http://img.youtube.com/vi/T544189tpY0/maxresdefault.jpg", videoId: "T544189tpY0", year: "2024"},
  { id: 20, title: "두근 어질", artist: "미미짱짱세용", kind: "cover", cover: "http://img.youtube.com/vi/T544189tpY0/maxresdefault.jpg", videoId: "T544189tpY0", year: "2024"},
  { id: 21, title: "GERMAN BON", artist: "닌닌, 철도왕 길버트", kind: "cover", cover: "http://img.youtube.com/vi/HUdRsuridNg/maxresdefault.jpg", videoId: "HUdRsuridNg", year: "2024"},
  // { id: 22, title: "달아오른 심장", artist: "보디가드 불독, 캡틴 설리반, 사랑전도사 젠투, 철도왕 길버트", kind: "cover", cover: "http://img.youtube.com/vi/링크/maxresdefault.jpg", videoId: "", year: "2023"},
  { id: 23, title: "칵테일 사랑", artist: "버터우스 3세", kind: "cover", cover: "http://img.youtube.com/vi/BEs_c0DSNrY/maxresdefault.jpg", videoId: "BEs_c0DSNrY", year: "2024"},
  { id: 24, title: "instagram (ft. 닌닌)", artist: "수셈이", kind: "cover", cover: "http://img.youtube.com/vi/oQbWrcjLoHU/maxresdefault.jpg", videoId: "oQbWrcjLoHU", year: "2024"},
  { id: 25, title: "사라시모노", artist: "JJ (진희, 사랑전도사 젠투)", kind: "cover", cover: "http://img.youtube.com/vi/hY83fPwlmVI/maxresdefault.jpg", videoId: "hY83fPwlmVI", year: "2023"},
  { id: 26, title: "내숭 떨어서 뭐가 나쁜 거야?", artist: "미스 발렌타인", kind: "cover", cover: "http://img.youtube.com/vi/i_R1P4bJp8A/maxresdefault.jpg", videoId: "i_R1P4bJp8A", year: "2024"},
  { id: 27, title: "결혼행진곡", artist: "아마데우스최", kind: "cover", cover: "http://img.youtube.com/vi/D_k9Z7MbWvU/sddefault.jpg", videoId: "D_k9Z7MbWvU", year: "2024"},
  { id: 28, title: "CIDER BANG!", artist: "RYKY (빅토리, 데스해머쵸로키)", kind: "original", cover: "http://img.youtube.com/vi/IhIDFiYWMbc/maxresdefault.jpg", videoId: "IhIDFiYWMbc", year: "2024"},
  { id: 29, title: "LOGIN", artist: "시리안, 아마데우스최, 크리즈", kind: "original", cover: "http://img.youtube.com/vi/kzgr3hqIe4k/maxresdefault.jpg", videoId: "kzgr3hqIe4k", year: "2024"},
  { id: 30, title: "SKY HiGH!", artist: "미미짱짱세용", kind: "original", cover: "http://img.youtube.com/vi/AF5MVogdcAU/maxresdefault.jpg", videoId: "AF5MVogdcAU", year: "2024"},
  { id: 31, title: "Black Flower", artist: "닌닌, 사랑전도사 젠투", kind: "original", cover: "http://img.youtube.com/vi/WycX_3W3agM/maxresdefault.jpg", videoId: "WycX_3W3agM", year: "2024"},
  { id: 32, title: "Wander", artist: "수셈이", kind: "original", cover: "http://img.youtube.com/vi/c74agkeKGlc/maxresdefault.jpg", videoId: "c74agkeKGlc", year: "2024"},
  { id: 33, title: "Ready Action (ft. 단군)", artist: "진희, 아이 쓰께끼, 베베리", kind: "original", cover: "http://img.youtube.com/vi/Lv3A_gPPmNE/maxresdefault.jpg", videoId: "Lv3A_gPPmNE", year: "2024"},
  // { id: 34, title: "I'm On A Boat", artist: "배틀크루져 (진희, 사랑전도사 젠투, 철도왕 길버트, 버터우스 3세)", kind: "cover", cover: "http://img.youtube.com/vi/링크/maxresdefault.jpg", videoId: "", year: "2024"},
  { id: 35, title: "로키", artist: "닌닌", kind: "cover", cover: "http://img.youtube.com/vi/FRMsdTXoMaI/maxresdefault.jpg", videoId: "FRMsdTXoMaI", year: "2024"},
  { id: 36, title: "Immortals", artist: "데스해머쵸로키", kind: "cover", cover: "http://img.youtube.com/vi/uWOgEZ3sCR8/maxresdefault.jpg", videoId: "uWOgEZ3sCR8", year: "2025"},
  { id: 37, title: "청개구리", artist: "데스해머쵸로키", kind: "original", cover: "http://img.youtube.com/vi/7Q61ZtM2qyM/maxresdefault.jpg", videoId: "7Q61ZtM2qyM", year: "2024"},
  { id: 38, title: "좋은 날", artist: "빅토리", kind: "cover", cover: "http://img.youtube.com/vi/VwIXRAdDYA8/maxresdefault.jpg", videoId: "VwIXRAdDYA8", year: "2024"},
  { id: 39, title: "CHEER UP (ft. 성기사 샬롯)", artist: "빅토리", kind: "cover", cover: "http://img.youtube.com/vi/cHOkRf78WJo/maxresdefault.jpg", videoId: "cHOkRf78WJo", year: "2024"},
  { id: 40, title: "이참에 뭔가 해봐", artist: "미미짱짱세용", kind: "cover", cover: "http://img.youtube.com/vi/9nfXU9stnvQ/maxresdefault.jpg", videoId: "9nfXU9stnvQ", year: "2025"},
  { id: 41, title: "Omokage", artist: "시리안 레인, 아마데우스최, 빅토리", kind: "cover", cover: "http://img.youtube.com/vi/mdNEh9Hyz4c/maxresdefault.jpg", videoId: "mdNEh9Hyz4c", year: "2024"},
  { id: 42, title: "밤 끝없는 밤", artist: "아마데우스최, 빅토리", kind: "cover", cover: "http://img.youtube.com/vi/M3gQdpLwHtY/sddefault.jpg", videoId: "M3gQdpLwHtY", year: "2024"},
  { id: 43, title: "Still With You", artist: "시리안 레인", kind: "cover", cover: "http://img.youtube.com/vi/mdNEh9Hyz4c/maxresdefault.jpg", videoId: "mdNEh9Hyz4c", year: "2024"},
  { id: 44, title: "감전", artist: "보디가드 불독", kind: "cover", cover: "http://img.youtube.com/vi/4G4w9wMyHZI/maxresdefault.jpg", videoId: "4G4w9wMyHZI", year: "2025"},
  { id: 45, title: "종천지모", artist: "사랑전도사 젠투", kind: "original", cover: "http://img.youtube.com/vi/zCiezbft1x0/maxresdefault.jpg", videoId: "zCiezbft1x0", year: "2025"},
  { id: 46, title: "MONO DRAMA (ft. 성기사 샬롯)", artist: "철도왕 길버트", kind: "original", cover: "http://img.youtube.com/vi/R3qNn4PPJc4/maxresdefault.jpg", videoId: "R3qNn4PPJc4", year: "2025"},
  { id: 48, title: "Forgotten", artist: "닌닌", kind: "original", cover: "http://img.youtube.com/vi/Ph2IyI_flj0/maxresdefault.jpg", videoId: "Ph2IyI_flj0", year: "2025"},
  { id: 49, title: "I Really Want To Stay At Your House", artist: "데스해머쵸로키", kind: "cover", cover: "http://img.youtube.com/vi/TgVa1jiYQ34/maxresdefault.jpg", videoId: "TgVa1jiYQ34", year: "2026"},
  { id: 50, title: "Guerilla", artist: "보디가드 불독, 진희, 수셈이, 버터우스 3세", kind: "original", cover: "http://img.youtube.com/vi/PYx0uUdyeUg/maxresdefault.jpg", videoId: "PYx0uUdyeUg", year: "2025"},
  { id: 51, title: "POP VIRUS", artist: "아마데우스최, 고멤 아카데미", kind: "cover", cover: "http://img.youtube.com/vi/TIxtMf6UAKI/maxresdefault.jpg", videoId: "TIxtMf6UAKI", year: "2024"},
  { id: 1000, title: "연말의노래", artist: "고멤 아카데미 1~5기", kind: "original", cover: "http://img.youtube.com/vi/Ii_w6jGjI7g/maxresdefault.jpg", videoId: "Ii_w6jGjI7g", year: "2024"},
];

// 캘린더
const calendarEvents = [
  { id: "1", title: "고카 상사 합방", start: "2026-10-25", time: "20:00", color: "#8B5CF6", description: "공식 채널 방송" },
];

// 갤러리
const galleryItems = [
  { id: 1, title: "2023 우왁굳 생일", date: "2023. 07. 24.", image: "images/gallery/wgbirth.png", description: "우왁굳의 생일을 축하하기 위해 오케스트라를 연주하는 아카데미의 모습. 배경은 젠투의 입 안이다." },
  { id: 2, title: "VR 축구 대회", date: "2023. 07. 16.", image: "images/gallery/soccer.jpg" ,description: "브축대가 끝난 뒤 찍은 단체 사진." },
  { id: 3, title: "사라시모노", date: "2023. 00. 00.", image: "images/gallery/sarashimono.png", description: "사랑이 부끄럽대도 하니까 아름다워" },
  { id: 4, title: "제9차 왁타버스 고정 멤버 오디션", date: "2023. 10. 00.", image: "images/gallery/gomemhill.jpg", description: "샬롯이 처음으로 검을 꺼낸 장소." },
  { id: 5, title: "POP VIRUS", date: "2023. 11. 18.", image: "images/gallery/popvirus.png", description: "이제는 모두 다 같이 외쳐줄 거야, 지나도 기억될 꿈을 새겨볼 거야" },
  { id: 6, title: "고멤 아카데미 교가", date: "2023. 12. 01.", image: "images/gallery/school.png", description: "그래도 다 가족이다 왁타버스 아카데미" },
  { id: 7, title: "연말의노래", date: "2024. 01. 02.", image: "images/gallery/2023endofyear.png", description: "합방도 시참도 상황극에 학예회도 언제까지 해볼 수 있을까?" },
  { id: 8, title: "Wander", date: "2024. 03. 16.", image: "images/gallery/wander.jpg", description: "수셈이 작곡캠프 Wander의 MV에 삽입된 일러스트." },
  { id: 9, title: "왁타버스 MT", date: "2024. 03. 31.", image: "images/gallery/mt.png", description: "MT 합방이 끝난 뒤 설리바에 모인 아카데미의 모습." },
  { id: 10, title: "후끈후끈 헬스장(나작비)", date: "2024. 04. 26.", image: "images/gallery/mibal.jpg", description: "마음은 가볍게 근육은 무겁게" },
  { id: 11, title: "공주배그 드래프트", date: "2024. 09. 03.", image: "images/gallery/princess.png", description: "이쁜 공주님들……." },
  { id: 12, title: "로키", date: "2024. 10. 20.", image: "images/gallery/roki.png", description: "닌닌의 로키 커버곡 MV 일러스트. 찰랑 머릴 가진 넌 빈껍데기 신자?" },
  { id: 13, title: "2025 제야의 종", date: "2025. 01. 01.", image: "images/gallery/2025newyear.png", description: "Happy New Year!" },
  { id: 14, title: "VR챗 왁타버스 야구 대회", date: "2025. 03. 14.", image: "images/gallery/baseball1.png", description: "패티다져스 8강 탈락 후 찍은 단체 사진." },
  { id: 15, title: "VR챗 왁타버스 야구 대회", date: "2025. 03. 14.", image: "images/gallery/baseball2.png", description: "패티다져스 8강 탈락 후 찍은 단체 사진. 장소는 설리바." },
  { id: 16, title: "여고교멤 여름나기", date: "2026. 08. 28.", image: "images/gallery/summer.png", description: "고멤 클래식&아카데미의 여자 멤버들끼리 진행한 합방." },
]

// 링크
const links = [
  { title: "우왁굳", description: "우왁굳 유튜브 채널", label: "유튜브", icon: "iconoir-youtube-solid", url: "https://www.youtube.com/@woowakgood", image: "https://yt3.googleusercontent.com/8qJyQpSS6YLADyM5T6afKkpCsGtC3x_4_SSJWTNNO3qKX9FmlRRBZbO7VFy8IegO_717mU7zaqM=s900-c-k-c0x00ffffff-no-rj" },
  { title: "우왁굳", description: "우왁굳 방송국 바로가기", label: "SOOP", icon: "iconoir-tv", url: "https://www.sooplive.com/station/ecvhao", image: "https://yt3.googleusercontent.com/8qJyQpSS6YLADyM5T6afKkpCsGtC3x_4_SSJWTNNO3qKX9FmlRRBZbO7VFy8IegO_717mU7zaqM=s900-c-k-c0x00ffffff-no-rj" },
  { title: "왁타버스 WAKTAVERSE", description: "왁타버스 메인 유튜브 채널", label: "유튜브", icon: "iconoir-youtube-solid", url: "https://www.youtube.com/channel/UCzh4yY8rl38knH33XpNqXbQ", image: "https://yt3.googleusercontent.com/-WhlmETS5indv4KmktijCYdM1WfGkdmiii7yaGNzBUwJfhOYidLBgQrMz4wmO0_6o15kEdnAAA=s900-c-k-c0x00ffffff-no-rj" },
  { title: "왁타버스 ZERO", description: "방송 다시보기 및 고멤 놀이터", label: "유튜브", icon: "iconoir-youtube-solid", url: "https://www.youtube.com/channel/UCZOcwheypMvYN_J2oRBgt2A", image: "https://yt3.googleusercontent.com/A7aCY6_48h-53dhNKq0mW6ph2_0V9Kv3GC9_YZzxV-lXo6d4aCHfKFXCAukohqd6-bEyaF78qA=s900-c-k-c0x00ffffff-no-rj" },
  { title: "고카 상사", description: "공식 사내 커뮤니티", label: "홈페이지", icon: "iconoir-building", url: "https://goca-company.sp0907sh.chatgpt.site/", image: "images/logo.svg" },
  { title: "아카데미 플레이리스트", description: "아카데미생들의 추천곡 모음", label: "유튜브 재생목록", icon: "iconoir-playlist", url: "https://www.youtube.com/playlist?list=PLStHIETtt5OxgxpMb_1hohY9NuF9g5sN8", image: "#" },
];

// 디데이
const events = [ 
  { title: "고멤 아카데미 창설일", date: "2026-12-01", category: "기수별", image: "images/logo.png" }
  // 예: { title: "아카데미 공개 방송", date: "2026-11-01", category: "방송" }
];


/* =========================================================
   공통 함수
   ========================================================= */


const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
let selectedMemberId = null;
let activePairFilter = "전체";
let activeSongFilter = "all";
let currentSongId = null;
let repeatMode = "all"; // all -> one -> none

// 오버레이를 열기 전의 포커스 위치
let profileReturnFocus = null;
let dossierReturnFocus = null;
let lightboxReturnFocus = null;

// 기호 이스케이프
function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}

// 멤버 ID 수집
function memberById(id) {
  return members.find(member => member.id === Number(id));
}

// 이미지 플레이스홀더
function imageMarkup(src, alt, fallbackClass = "") {
  if (!src) return `<span class="image-fallback ${fallbackClass}">${escapeHTML(alt)}</span>`;
  return `<img src="${escapeHTML(src)}" alt="${escapeHTML(alt)}" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement('span'),{className:'image-fallback',textContent:'IMAGE NOT FOUND'}))">`;
}

// 멤버에 따라 포인트 컬러 바꾸기
function setAccent(color = "#A3E2C4") {
  document.documentElement.style.setProperty("--accent", color);
  const hex = color.replace("#", "");
  const normalized = hex.length === 3 ? hex.split("").map(ch => ch + ch).join("") : hex;
  const rgb = normalized.match(/.{2}/g)?.map(value => parseInt(value, 16)) || [169, 220, 203];
  document.documentElement.style.setProperty("--accent-rgb", rgb.join(","));
}

// 유튜브 플레이어
let youtubePlayer = null;
let youtubeReady = false;
let progressTimer = null;

window.onYouTubeIframeAPIReady = () => {
  youtubePlayer = new YT.Player("youtube-player", {
    width: "200",
    height: "50",
    videoId: "",
    playerVars: {
  playsinline: 1,
  origin: window.location.origin
},
    events: {
      onReady: () => {
        youtubeReady = true;

        const currentSong = songs.find(song => song.id === currentSongId);
        if (currentSong?.videoId) {
          youtubePlayer.cueVideoById(currentSong.videoId);
        }
      },
      onStateChange: handleYouTubeStateChange,
      onError: event => console.error("YouTube 재생 오류:", event.data)
    }
  });
};


/* =========================================================
   페이지별 함수
   ========================================================= */


/* ---------- 내비게이션 바 ---------- */

function navigateTo(sectionId) {
  const target = $(`[data-page="${sectionId}"]`);
  if (!target) return;
  $$(".page-section").forEach(section => section.classList.toggle("is-current", section === target));
  $$(".nav-btn").forEach(link => link.classList.toggle("is-active", link.dataset.section === sectionId));
  $(".nav-btn-wrap").classList.remove("is-open");
  $("#profile-overlay").classList.remove("is-open");
  $("#profile-overlay").setAttribute("aria-hidden", "true");
  setAccent("#A9DCCB");
}

/* ---------- 뮤직 플레이어 ---------- */

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
}

function updatePlayerStatus(isPlaying = false) {
  const repeatLabels = { all: "전체 반복", one: "한 곡 반복", none: "반복 안 함" };
  const status = $("#music-dock-status");
  if (status) {
    status.textContent = `${isPlaying ? "재생 중" : "중지"} · ${repeatLabels[repeatMode]}`;
  }
}

function updatePlayButton(isPlaying) {
  updatePlayerStatus(isPlaying);
  $(".turntable").classList.toggle("is-playing", isPlaying);
  $("#music-play-icon").textContent = isPlaying ? "Ⅱ" : "▶";
  $("#music-play").setAttribute(
    "aria-label",
    isPlaying ? "일시정지" : "재생"
  );
  $("#music-play").setAttribute("aria-pressed", String(isPlaying));
}

function updateProgress() {
  if (!youtubeReady) return;

  const currentTime = youtubePlayer.getCurrentTime() || 0;
  const duration = youtubePlayer.getDuration() || 0;

  $("#music-current-time").textContent = formatTime(currentTime);
  $("#music-duration").textContent = formatTime(duration);
  $("#music-seek").value =
    duration > 0 ? (currentTime / duration) * 100 : 0;
}

function playMusic() {
  if (youtubeReady) youtubePlayer.playVideo();
}

function toggleMusicPlayback() {
  if (!youtubeReady) return;

  if (youtubePlayer.getPlayerState() === YT.PlayerState.PLAYING) {
    youtubePlayer.pauseVideo();
  } else {
    youtubePlayer.playVideo();
  }
}

function playPreviousSong() {
  const currentIndex = songs.findIndex(
    song => song.id === currentSongId
  );

  if (currentIndex < 0 || songs.length === 0) return;

  const previousIndex =
    (currentIndex - 1 + songs.length) % songs.length;

  selectSong(songs[previousIndex].id, true);
}

function playNextSong(automatic = false) {
  const currentIndex = songs.findIndex(
    song => song.id === currentSongId
  );

  if (currentIndex < 0 || songs.length === 0) return;

  const isLastSong = currentIndex === songs.length - 1;

  // 반복 없음: 마지막 곡이 끝나면 재생을 멈춤
  if (automatic && isLastSong && repeatMode === "none") {
    youtubePlayer.pauseVideo();
    youtubePlayer.seekTo(0, true);
    updatePlayButton(false);
    updateProgress();
    return;
  }

  const nextIndex = isLastSong ? 0 : currentIndex + 1;
  selectSong(songs[nextIndex].id, true);
}

function toggleRepeatMode() {
  const modes = ["all", "one", "none"];
  const currentIndex = modes.indexOf(repeatMode);

  repeatMode = modes[(currentIndex + 1) % modes.length];

  const labels = {
    all: "ALL",
    one: "ONE",
    none: "OFF"
  };

  $("#music-repeat-label").textContent = labels[repeatMode];
  $("#music-repeat").classList.toggle(
    "is-active",
    repeatMode !== "none"
  );

  $("#music-repeat").setAttribute(
    "aria-label",
    `반복 모드: ${
      repeatMode === "all"
        ? "플레이리스트 반복"
        : repeatMode === "one"
          ? "한 곡 반복"
          : "반복 없음"
    }`
  );
  $("#music-repeat").setAttribute("aria-pressed", String(repeatMode !== "none"));
  updatePlayerStatus(youtubeReady && youtubePlayer?.getPlayerState() === YT.PlayerState.PLAYING);
}

function handleYouTubeStateChange(event) {
  const isPlaying = event.data === YT.PlayerState.PLAYING;

  updatePlayButton(isPlaying);
  $("#music-dock").classList.toggle("is-playing", isPlaying);

  clearInterval(progressTimer);
  progressTimer = null;

  if (isPlaying) {
    progressTimer = setInterval(updateProgress, 250);
  }

  if (event.data === YT.PlayerState.ENDED) {
    if (repeatMode === "one") {
      youtubePlayer.seekTo(0, true);
      youtubePlayer.playVideo();
    } else {
      playNextSong(true);
    }
  }
}


/* =========================================================
   HOME
   ========================================================= */


// 가장 가까운 생일 계산
function parseBirthdayMonthDay(value) {
  const match = String(value || "").match(/^\s*(?:\d{4}[./-]\s*)?(\d{1,2})[./-]\s*(\d{1,2})\.?\s*$/);
  if (!match) return null;

  const month = Number(match[1]);
  const day = Number(match[2]);
  const probe = new Date(Date.UTC(2024, month - 1, day));

  if (probe.getUTCMonth() !== month - 1 || probe.getUTCDate() !== day) return null;
  return { month, day };
}

// 디데이 계산
function daysBetweenLocalDates(fromDate, toDate) {
  const from = Date.UTC(fromDate.getFullYear(), fromDate.getMonth(), fromDate.getDate());
  const to = Date.UTC(toDate.getFullYear(), toDate.getMonth(), toDate.getDate());
  return Math.round((to - from) / 86400000);
}

// 위젯 렌더링
function renderHomeWidgets() {
  const today = new Date();
  const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const birthdays = members.flatMap(member => {
    const birthday = parseBirthdayMonthDay(member.birthday);
    if (!birthday) return [];

    let nextDate = new Date(today.getFullYear(), birthday.month - 1, birthday.day);
    if (nextDate < todayDate) {
      nextDate = new Date(today.getFullYear() + 1, birthday.month - 1, birthday.day);
    }

    return [{ member, birthday, date: nextDate, days: daysBetweenLocalDates(todayDate, nextDate) }];
  }).sort((a, b) => a.days - b.days);

  const nextBirthday = birthdays[0];
  if (nextBirthday) {
    $("#home-birthday-days").textContent = nextBirthday.days === 0 ? "TODAY" : `D-${nextBirthday.days}`;
    $("#home-birthday-name").textContent = nextBirthday.member.name;
    $("#home-birthday-date").textContent =
      `${String(nextBirthday.birthday.month).padStart(2, "0")}. ${String(nextBirthday.birthday.day).padStart(2, "0")}. / ${nextBirthday.member.generation || "ACADEMY"}`;
    const heroImage = $("#home-birthday-image");
    const heroImageSrc = nextBirthday.member.standing || nextBirthday.member.portrait;

    if (heroImageSrc) {
      heroImage.src = heroImageSrc;
      heroImage.alt = `${nextBirthday.member.name} 캐릭터 이미지`;
      heroImage.hidden = false;
    } else {
      heroImage.removeAttribute("src");
      heroImage.alt = `${nextBirthday.member.name} 이미지 미등록`;
      heroImage.hidden = true;
    }
  } else {
    $("#home-birthday-days").textContent = "—";
    $("#home-birthday-name").textContent = "등록된 생일 정보가 없습니다";
    $("#home-birthday-date").textContent = "날짜 표기란";
    $("#home-birthday-image").removeAttribute("src");
    $("#home-birthday-image").hidden = true;
  }

  const birthdayWidget = $(".home-widget-birthday");

  birthdayWidget.dataset.memberId = nextBirthday
    ? nextBirthday.member.id
    : "";

  birthdayWidget.setAttribute("role", "button");
  birthdayWidget.setAttribute("tabindex", nextBirthday ? "0" : "-1");
  birthdayWidget.setAttribute(
    "aria-label",
    nextBirthday
      ? `${nextBirthday.member.name} 프로필 보기`
      : "등록된 생일 정보가 없습니다"
  );

  const upcomingEvents = events
    .map(event => {
      const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(event.date || "");
      if (!event.title || !match) return null;

      const [, year, month, day] = match.map(Number);
      const date = new Date(year, month - 1, day);
      if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) return null;

      const days = daysBetweenLocalDates(todayDate, date);
      return days < 0 ? null : { ...event, days };
    })
    .filter(Boolean)
    .sort((a, b) => a.days - b.days);
  
    const nextEvent = upcomingEvents[0];

    const eventWidget = $(".home-widget-event");
    eventWidget.setAttribute("role", "button");
    eventWidget.setAttribute("tabindex", nextEvent ? "0" : "-1");
    eventWidget.setAttribute(
      "aria-label",
      nextEvent
        ? `${nextEvent.title}, D-${nextEvent.days}. 캘린더에서 기념일 보기`
        : "등록된 기념일이 없습니다"
    );

    if (nextEvent) {
      $("#home-event-title").textContent = nextEvent.title;
      $("#home-event-count").textContent = nextEvent.days === 0
        ? "오늘 열리는 일정"
        : `D-${nextEvent.days}`;
      $("#home-event-date").textContent =
        nextEvent.date.split("-").join(". ") + ".";

      // 클릭할 때 이동할 날짜 저장
      eventWidget.dataset.date = nextEvent.date;
    } else {
      $("#home-event-title").textContent = "등록된 일정이 없습니다";
      $("#home-event-count").textContent = "—";
      $("#home-event-date").textContent = "날짜 표기란";

      eventWidget.removeAttribute("data-date");
    }

}

$(".home-widget-birthday").addEventListener("click", openBirthdayProfile);

$(".home-widget-birthday").addEventListener("keydown", event => {
  if (event.key !== "Enter" && event.key !== " ") return;

  event.preventDefault();
  openBirthdayProfile();
});

// 생일 위젯 클릭 시
function openBirthdayProfile() {
  const memberId = Number(
    $(".home-widget-birthday").dataset.memberId
  );

  if (!memberId) return;

  navigateTo("members");
  selectMember(memberId);
  openProfile();
}


/* =========================================================
   MEMBERS
   ========================================================= */


// 멤버 카드 렌더링
function getContrastTextColor(hex) {
  const value = hex.replace("#", "");

  if (!/^[0-9a-fA-F]{6}$/.test(value)) {
    return "#ffffff";
  }

  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);

  // 밝기 계산
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  return brightness >= 150 ? "#252525" : "#ffffff";
}

function renderMembers() {
  const rail = $("#member-rail");

  rail.innerHTML = members.map(member => {
    const number = String(member.id).padStart(2, "0");
    const englishName = member.engname || member.name;

    return `
      <button
        id="member-${member.id}"
        class="member-card ${
          member.id === selectedMemberId ? "is-selected" : ""
        }"
        data-member-id="${member.id}"
        style="
        --member-accent: ${member.color};
        --member-hover-text: ${getContrastTextColor(member.color)}
"
        aria-label="${escapeHTML(member.name)} 프로필 보기"
        aria-pressed="${member.id === selectedMemberId}"
        type="button"
      >
        <span class="member-card-number-bg" aria-hidden="true">
          <span class="member-card-number">
            ${number}
          </span>
          <span class="member-card-english">
            ${escapeHTML(englishName)}
          </span>
        </span>

        <span class="member-thumb">
          ${imageMarkup(
            member.standing || member.portrait,
            `MEMBER ${number}`
          )}
        </span>

        <span class="member-card-meta">
          <span class="member-card-num">NO. ${number}</span>

          <span class="member-card-name">
            ${escapeHTML(member.name)}
          </span>

          <span class="member-card-engname">
            ${escapeHTML(englishName)}
          </span>

          <span class="member-card-generation">
            ${escapeHTML(member.generation || "")}
          </span>
        </span>
      </button>
    `;
  }).join("");
}

$("#member-rail").addEventListener("click", event => {
  const card = event.target.closest("[data-member-id]");
  if (!card) return;

  playMemberImagePop(card);

  const clickedMemberId = Number(card.dataset.memberId);

  if (clickedMemberId === selectedMemberId) {
    openProfile();
    return;
  }

  selectMember(clickedMemberId);
});

// 카드 클릭: 이미지 뿅 효과
function playMemberImagePop(card) {
  card.classList.remove("is-clicked");

  // 애니메이션을 다시 실행하기 위한 초기화
  void card.offsetWidth;

  card.classList.add("is-clicked");

  card.addEventListener("animationend", () => {
    card.classList.remove("is-clicked");
  }, { once: true });
}

// 화살표 클릭: 좌우로 스크롤
$("[data-member-scroll='-1']").addEventListener("click", () => {
  $("#member-scroll").scrollBy({
    left: -$("#member-scroll").clientWidth * 1,
    behavior: "smooth"
  });
});

$("[data-member-scroll='1']").addEventListener("click", () => {
  $("#member-scroll").scrollBy({
    left: $("#member-scroll").clientWidth * 1,
    behavior: "smooth"
  });
});

// 멤버 선택
function selectMember(id) {
  const member = memberById(id);
  if (!member) return;

  selectedMemberId = member.id;

  document.querySelectorAll(".member-card").forEach(card => {
    const isSelected = Number(card.dataset.memberId) === member.id;

    card.classList.toggle("is-selected", isSelected);
    card.setAttribute("aria-pressed", String(isSelected));
  });
}

/* ---------- MEMBERS: 프로필 오버레이 ---------- */

// 프로필 오버레이
function openProfile(animateChange = false, returnFocusTarget = null) {
  const member = memberById(selectedMemberId);
  if (!member) return;

  const overlay = $("#profile-overlay");
  const wasOpen = overlay.classList.contains("is-open");
  if (!wasOpen) {
    profileReturnFocus = returnFocusTarget || document.activeElement;
    // 페어 상세를 유지할 때 프로필을 그 위에 표시합니다.
    overlay.style.zIndex = returnFocusTarget?.closest("#dossier-content") ? "110" : "";
  }

  const memberIndex = members.findIndex(item => item.id === member.id);
  const memberNumber = String(member.id).padStart(2, "0");
  const archiveImages = [member.portrait || member.idphoto, member.standing ]
    .filter(Boolean)
    .filter((src, index, items) => items.indexOf(src) === index)
    .slice(0, 4);

  setAccent(member.color);
  $("#profile-name").textContent = member.name;
  $("#profile-engname").textContent = member.engname;
  $("#profile-quote").textContent = member.description || "A record waiting to be written.";
  $("#profile-birthday").textContent = member.birthday || "—";
  $("#profile-mbti").textContent = member.mbti || "—";
  $("#profile-fandom").textContent = member.fandom || "—";
  $("#profile-jappronouns").textContent = member.jappronouns || "—";
  $("#profile-generation").textContent = member.generation || "—";
  $("#profile-oshimark").textContent = member.oshimark || "—";
  $("#profile-notes").textContent = member.memo || "No additional notes recorded.";
  $("#profile-standing").innerHTML = imageMarkup(member.standing, `PORTRAIT / ${member.name}`);
  $("#profile-position").textContent = `${String(memberIndex + 1).padStart(2, "0")} / ${String(members.length).padStart(2, "0")}`;
  $("#profile-big-number").textContent = String(member.id).padStart(2, "0");
  $("#profile-handwriting").textContent = member.engname || member.name;
  $("#profile-side-label").textContent = `${member.engname || member.name}`;
  $("#profile-archive-number").textContent = `NO. ${memberNumber}`;
  const portraitSrc = member.idphoto || member.portrait;
  $("#profile-id-card").innerHTML = `
    <div class="id-card-brand"></div>
    <div class="id-card-photo">${portraitSrc ? imageMarkup(portraitSrc, `${member.name} 학생증 사진`) : `<span>${escapeHTML(member.name)}</span>`}</div>
    <b class="id-card-name">${escapeHTML(member.name)}</b>
    <div class="id-card-meta">
    <div class="id-card-meta-row"><span>기수</span><span class="id-card-value">${escapeHTML(member.generation || "—")}</span></div>
    <div class="id-card-meta-row"><span>생년월일</span><span class="id-card-value">${escapeHTML(member.birthday || "—")}</span></div>
    <div class="id-card-meta-row"><span>MBTI</span><span class="id-card-value">${escapeHTML(member.mbti || "—")}</span></div>
    </div>
    <div class="id-card-barcode" aria-hidden="true"></div>`;
  $("#profile-gallery-grid").innerHTML = archiveImages.map((src, index) => `
    <button class="profile-gallery-item" type="button" aria-label="${escapeHTML(member.name)} archive image ${String(index + 1).padStart(2, "0")}">
      ${imageMarkup(src, `${member.name} archive image ${index + 1}`)}
    </button>`).join("");

  if (!wasOpen) {
    focusCloseButtonAfterOpen(overlay, $("#close-profile"));
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
  }

  if (animateChange) animateProfileChange();
}

// 멤버 전환 애니메이션
function animateProfileChange() {
  const panel = $(".profile-main");
  panel.classList.remove("is-changing");
  void panel.offsetWidth;
  panel.classList.add("is-changing");
  panel.addEventListener("animationend", () => panel.classList.remove("is-changing"), { once: true });
}

// 프로필 오버레이 닫기
function closeProfile() {
  const overlay = $("#profile-overlay");
  const returnTarget = profileReturnFocus;

  profileReturnFocus = null;

  // 포커스 복귀를 먼저 처리
  if (returnTarget?.isConnected) {
    returnTarget.focus({ preventScroll: true });
  } else if (overlay.contains(document.activeElement)) {
    document.activeElement.blur();
  }

  overlay.classList.remove("is-open");
  overlay.setAttribute("aria-hidden", "true");
  overlay.style.zIndex = "";

  setAccent("#A3E2C4");
}

function stepProfile(direction) {
  const index = members.findIndex(item => item.id === selectedMemberId);
  const next = (index + direction + members.length) % members.length;
  selectMember(members[next].id);
  openProfile(true);
}


/* =========================================================
   PAIR
   ========================================================= */


// 페어 카드 렌더링
function renderPairs() {
  const filters = ["전체", "기수별", "학예회", "작곡캠프", "대회", "여성", "남성", "듀오"];

  $("#pair-filter").innerHTML = filters.map(filter => `
    <button
      class="${activePairFilter === filter ? "is-active" : ""}"
      data-pair-filter="${escapeHTML(filter)}"
    >${escapeHTML(filter)}</button>
  `).join("");

  const filteredPairs = pairs.filter(pair => {
    if (activePairFilter === "전체" || !activePairFilter) return true;
    return Array.isArray(pair.category) &&
      pair.category.includes(activePairFilter);
  });

  $("#pair-rail").innerHTML = filteredPairs.map(pair => {
    const people = pair.members
      .map(id => memberById(id))
      .filter(Boolean);

    const categories = Array.isArray(pair.category)
      ? pair.category
      : [pair.category].filter(Boolean);

    return `
      <article
        class="pair-card"
        data-pair-id="${escapeHTML(pair.id)}"
        tabindex="0"
        role="button"
        aria-label="${escapeHTML(pair.title)} 관계 카드 열기"
        aria-pressed="false"
      >
        <div class="pair-card-inner">

          <div class="pair-card-front">
            <div class="pair-card-index">
              <span>INDEX ${String(pair.id).padStart(2, "0")}</span>
              <span>↻ FLIP</span>
            </div>

            <h3>${escapeHTML(pair.title)}</h3>

            <div class="pair-image">
              ${imageMarkup(pair.image, pair.title)}
            </div>

            <div class="pair-members">
              ${people.map(member => `
                <div class="pair-person">
                  ${member.portrait
                    ? `<img src="${escapeHTML(member.portrait)}"
                            alt="${escapeHTML(member.name)}">`
                    : `<span class="pair-avatar-fallback">
                         ${String(member.id).padStart(2, "0")}
                       </span>`
                  }
                </div>
              `).join("")}
            </div>

            <div class="pair-card-hint">
              뒤집기 →
            </div>
          </div>

          <div class="pair-card-back">
            <div class="pair-card-index">
              <span>RELATION NOTES</span>
              <span>NO. ${String(pair.id).padStart(2, "0")}</span>
            </div>

            <h3>${escapeHTML(pair.title)}</h3>

            <div class="dossier-tags">
              ${categories.map(category => `
                <span class="dossier-tag">
                  ${escapeHTML(category)}
                </span>
              `).join("")}
            </div>

            <p>${escapeHTML(pair.description || "기록된 설명이 없습니다.")}</p>

            <button
              type="button"
              class="archive-text-button"
              data-open-dossier="${escapeHTML(pair.id)}"
            >상세 정보 보기 ↗</button>
          </div>

        </div>
      </article>
    `;
  }).join("") || `
    <p class="empty-state">이 카테고리에 해당되는 조합이 없습니다.</p>
  `;
}

/* ---------- PAIR: 페어 상세 ---------- */

// 페어 상세 모달 열기
function openPairDossier(id) {
  const pair = pairs.find(item => String(item.id) === String(id));
  if (!pair) return;

  const people = pair.members
    .map(memberById)
    .filter(Boolean);

  const categories = Array.isArray(pair.category)
    ? pair.category
    : [pair.category].filter(Boolean);

  $("#dossier-number").textContent =
    `조합 상세 정보 / NO. ${String(pair.id).padStart(2, "0")}`;

  $("#dossier-content").innerHTML = `
    <div class="dossier-hero">
      <div class="dossier-cover">
        ${imageMarkup(pair.image, pair.title)}
      </div>

      <div class="dossier-heading">
        <h2 id="dossier-title">${escapeHTML(pair.title)}</h2>

        <div class="dossier-tags">
          ${categories.map(category => `
            <span class="dossier-tag">${escapeHTML(category)}</span>
          `).join("")}
        </div>

        <p class="dossier-description">
          ${escapeHTML(pair.description || "기록된 설명이 없습니다.")}
        </p>
      </div>
    </div>

    <section class="dossier-section">
      <h3>멤버 / ${people.length}</h3>
      <div class="dossier-members">
        ${people.map(member => `
          <button
            type="button"
            class="dossier-member"
            data-dossier-member="${member.id}"
          >
            ${member.portrait
              ? `<img src="${escapeHTML(member.portrait)}"
                      alt="${escapeHTML(member.name)}">`
              : `<span class="dossier-member-placeholder">
                   ${String(member.id).padStart(2, "0")}
                 </span>`
            }
            <span>${escapeHTML(member.name)}</span>
          </button>
        `).join("")}
      </div>
    </section>
  `;

  const overlay = $("#pair-dossier");
  const wasOpen = overlay.classList.contains("is-open");
  if (!wasOpen) {
    dossierReturnFocus = document.activeElement;
  }

  closeArchiveOverlay("archive-lightbox", { restoreFocus: false });

  if (!wasOpen) {
    focusCloseButtonAfterOpen(
      overlay,
      overlay.querySelector(".archive-close")
    );
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
  }
}

// 하단 멤버 클릭: 프로필 오버레이 열기
$("#dossier-content").addEventListener("click", event => {
  const memberButton = event.target.closest("[data-dossier-member]");

  if (memberButton) {
    const memberId = Number(memberButton.dataset.dossierMember);

    // 페어 상세 모달은 열린 채 유지하고, 프로필을 닫으면 이 멤버로 돌아갑니다.
    selectMember(memberId);
    openProfile(false, memberButton);
    return;
  }
});


/* =========================================================
   SONG
   ========================================================= */


// 앨범 그리드 렌더링
function renderSongs() {
  renderSongGrid();
}
function renderSongGrid() {
  const query = $("#song-search").value.trim().toLocaleLowerCase();
  const filtered = songs.filter(song => {
    const matchesKind = activeSongFilter === "all" || song.kind === activeSongFilter;
    const searchableText = `${song.title} ${song.artist}`.toLocaleLowerCase();
    return matchesKind && (!query || searchableText.includes(query));
  });

  $("#record-grid").innerHTML = filtered.length
    ? filtered.map(song => `
        <button class="record-item${song.id === currentSongId ? " is-selected" : ""}" data-song-id="${song.id}">
          <span class="album-cover">${song.cover ? `<img src="${escapeHTML(song.cover)}" alt="${escapeHTML(song.title)}" loading="lazy">` : `<span class="album-placeholder">G.A.<br>RECORDS</span>`}</span>
          <span class="record-title">${escapeHTML(song.title)}</span>
          <span class="record-artist">${escapeHTML(song.artist)}</span>
        </button>
      `).join("")
    : '<p class="record-empty" role="status">검색 결과가 없습니다.</p>';
}

// 노래 선택
function selectSong(id, autoplay = false) {
  const song = songs.find(item => item.id === Number(id));
  if (!song) return;

  currentSongId = song.id;

  $$(".record-item").forEach(item => {
    item.classList.toggle(
      "is-selected",
      Number(item.dataset.songId) === song.id
    );
  });

  // 턴테이블 선택 곡 정보
  $("#song-selected-title").textContent = song.title;
  $("#song-selected-artist").textContent =
    `${song.artist} / ${song.kind.toUpperCase()} / ${song.year}`;

  // 하단 뮤직 플레이어 정보
  $("#music-title").textContent = song.title;
  $("#music-artist").textContent = song.artist;
  $("#music-cover").src = song.cover || "";
  $("#music-cover").alt = `${song.title} 앨범 커버`;

  const turntableCover = $("#turntable-cover");
  turntableCover.hidden = !song.cover;
  if (song.cover) {
    turntableCover.src = song.cover;
    turntableCover.alt = `${song.title} 레코드 라벨`;
  } else {
    turntableCover.removeAttribute("src");
    turntableCover.alt = "";
  }

  // 다른 곡을 선택했을 때만 음원 교체
if (youtubeReady && song.videoId) {
  if (autoplay) {
    youtubePlayer.loadVideoById(song.videoId);
  } else {
    youtubePlayer.cueVideoById(song.videoId);
  }
}

  updateProgress();

if (autoplay) {
  playMusic();
  }
}


/* =========================================================
   CALENDAR
   ========================================================= */


let calendarDate = new Date();
let selectedCalendarDate = new Date(
  calendarDate.getFullYear(),
  calendarDate.getMonth(),
  calendarDate.getDate()
);

// 날짜 YYYY-MM-DD 통일
function getCalendarDateKey(year, month, day) {
  return [
    year,
    String(month + 1).padStart(2, "0"),
    String(day).padStart(2, "0")
  ].join("-");
}

// 해당 날짜의 생일 멤버 찾기
function getBirthdayMembers(month, day) {
  return members.filter(member => {
    const birthday = parseBirthdayMonthDay(member.birthday);

    return birthday &&
      birthday.month === month + 1 &&
      birthday.day === day;
  });
}

// 기념일 찾기
function getDDay(month, day) {
  return events.filter(event => {
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(event.date || "");
    if (!match) return false;

    const [, , eventMonth, eventDay] = match;

    return Number(eventMonth) === month + 1 &&
      Number(eventDay) === day;
  });
}

// 날짜 렌더링
function renderCalendar() {
  const grid = $("#calendar-grid");
  const monthLabel = $("#calendar-current-month");

  if (!grid || !monthLabel) return;

  const year = calendarDate.getFullYear();
  const month = calendarDate.getMonth();

  monthLabel.textContent =
    `${year}. ${String(month + 1).padStart(2, "0")}.`;

  grid.innerHTML = "";

  const weekdays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  weekdays.forEach(day => {
    const heading = document.createElement("div");
    heading.className = "calendar-weekday";
    heading.textContent = day;
    grid.appendChild(heading);
  });

  // 첫 날짜와 마지막 날짜
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0).getDate();
  const startOffset = (firstDay.getDay() + 6) % 7;

  // 이전 달의 마지막 날짜부터 그리드 시작
  const previousMonthLastDay = new Date(year, month, 0).getDate();

  const today = new Date();
  const todayKey = getCalendarDateKey(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  for (let i = 0; i < 42; i++) {
    let day;
    let cellMonth = month;
    let cellYear = year;
    let isOutside = false;

    if (i < startOffset) {
      // 이전 달
      day = previousMonthLastDay - startOffset + i + 1;
      cellMonth--;
      isOutside = true;

      if (cellMonth < 0) {
        cellMonth = 11;
        cellYear--;
      }
    } else if (i >= startOffset + lastDay) {
      // 다음 달
      day = i - startOffset - lastDay + 1;
      cellMonth++;
      isOutside = true;

      if (cellMonth > 11) {
        cellMonth = 0;
        cellYear++;
      }
    } else {
      // 현재 달
      day = i - startOffset + 1;
    }

    const dateKey = getCalendarDateKey(
      cellYear,
      cellMonth,
      day
    );

    const button = document.createElement("button");
    button.type = "button";
    button.className = "calendar-day";
    button.dataset.date = dateKey;

    if (isOutside) {
      button.classList.add("is-outside");
    }

    if (dateKey === todayKey) {
      button.classList.add("is-today");
    }

    if (
      dateKey === getCalendarDateKey(
        selectedCalendarDate.getFullYear(),
        selectedCalendarDate.getMonth(),
        selectedCalendarDate.getDate()
      )
    ) {
      button.classList.add("is-selected");
    }

    const number = document.createElement("span");
    number.className = "calendar-day-number";
    number.textContent = day;
    button.appendChild(number);

    // 현재 달에 속한 날짜에만 생일 이미지 적용
    if (!isOutside) {
      const birthdayMembers = getBirthdayMembers(month, day);

      if (birthdayMembers.length > 0) {
        const member = birthdayMembers[0];

        button.classList.add("has-birthday");
        button.style.setProperty("--member-color", member.color);

        if (member.standing) {
          button.style.setProperty(
            "--birthday-image",
            `url("${member.standing}")`
          );
        }

        const name = document.createElement("span");
        name.className = "calendar-birthday-name";
        name.textContent = birthdayMembers
          .map(person => person.engname)
          .join(", ");

        button.appendChild(name);
      }
    }

    // 현재 달에 속한 날짜에만 디데이 이미지 적용
    if (!isOutside) {
      const eventDay = getDDay(month, day);

      if (eventDay.length > 0) {
        const events = eventDay[0];

        button.classList.add("has-event");

        if (events.image) {
          button.style.setProperty(
            "--event-image",
            `url("${events.image}")`
          );
        }

        const name = document.createElement("span");
        name.className = "calendar-event-name";
        name.textContent = eventDay
          .map(event => event.title)
          .join(", ");

        button.appendChild(name);
      }
    }
    grid.appendChild(button);
    button.style.gridColumn = String((i % 7) + 1);
    button.style.gridRow = String(Math.floor(i / 7) + 2);
  } 
  renderCalendarBars();
}

// 달 이동
function goToCalendarToday() {
  const today = new Date();
  selectCalendarDate(getCalendarDateKey(today.getFullYear(), today.getMonth(), today.getDate()));
}

function goToAdjacentSchedule(direction) {
  const selectedKey = getCalendarDateKey(
    selectedCalendarDate.getFullYear(),
    selectedCalendarDate.getMonth(),
    selectedCalendarDate.getDate()
  );
  const scheduleDates = [...new Set(
    calendarEvents.map(item => item.start)
      .filter(dateKey => /^\d{4}-\d{2}-\d{2}$/.test(dateKey))
  )].sort();
  const targetDate = direction > 0
    ? scheduleDates.find(dateKey => dateKey > selectedKey)
    : [...scheduleDates].reverse().find(dateKey => dateKey < selectedKey);
  if (targetDate) selectCalendarDate(targetDate);
}

function updateCalendarNavigationState() {
  const selectedKey = getCalendarDateKey(
    selectedCalendarDate.getFullYear(),
    selectedCalendarDate.getMonth(),
    selectedCalendarDate.getDate()
  );
  const scheduleDates = [...new Set(
    calendarEvents.map(item => item.start)
      .filter(dateKey => /^\d{4}-\d{2}-\d{2}$/.test(dateKey))
  )].sort();
  const previous = $("#calendar-prev-event");
  const next = $("#calendar-next-event");
  if (previous) previous.disabled = !scheduleDates.some(dateKey => dateKey < selectedKey);
  if (next) next.disabled = !scheduleDates.some(dateKey => dateKey > selectedKey);
}

function moveCalendarMonth(direction) {
  const year = calendarDate.getFullYear();
  const month = calendarDate.getMonth();
  const selectedDay = selectedCalendarDate.getDate();

  const nextMonthLastDay = new Date(year, month + direction + 1, 0).getDate();
  const day = Math.min(selectedDay, nextMonthLastDay);

  calendarDate = new Date(year, month + direction, 1);
  selectedCalendarDate = new Date(year, month + direction, day);

  renderCalendar();
  renderCalendarEvents();
  updateCalendarNavigationState();
}

function selectCalendarDate(dateKey) {

  const [year, month, day] = dateKey.split("-").map(Number);

  selectedCalendarDate = new Date(year, month - 1, day);

  // 이전 달, 다음 달에 속한 칸을 눌러도 달 이동
  if (
    selectedCalendarDate.getFullYear() !== calendarDate.getFullYear() ||
    selectedCalendarDate.getMonth() !== calendarDate.getMonth()
  ) {
    calendarDate = new Date(
      selectedCalendarDate.getFullYear(),
      selectedCalendarDate.getMonth(),
      1
    );
  }

  renderCalendar();
  renderCalendarEvents();
  updateCalendarNavigationState();
}


function openCalendarDate(dateKey) {
  if (!dateKey) return;

  navigateTo("calendar");
  selectCalendarDate(dateKey);
}


// 캘린더 이벤트 렌더링
function renderCalendarEvents() {
  const heading = $("#calendar-selected-date");
  const list = $("#calendar-event-list");
  if (!heading || !list) return;

  const year = selectedCalendarDate.getFullYear();
  const month = selectedCalendarDate.getMonth();
  const day = selectedCalendarDate.getDate();
  const dateKey = getCalendarDateKey(year, month, day);

  heading.textContent =
    `${year}. ${String(month + 1).padStart(2, "0")}. ` +
    `${String(day).padStart(2, "0")}.`;

  const dayEvents = calendarEvents.filter(event =>
    compareDateKeys(event.start, dateKey) <= 0 &&
    compareDateKeys(getEventEndKey(event), dateKey) >= 0
  );

  const birthdays = getBirthdayMembers(month, day);

  const cards = [
    ...dayEvents.map(event => ({
      title: event.title,
      time: event.time || "종일",
      description: event.description || "",
      color: event.color || "#8B5CF6"
    })),
    ...birthdays.map(member => ({
      title: `${member.name} 생일`,
      time: "종일",
      description: member.engname,
      color: member.color
    }))
  ];

  list.innerHTML = cards.length
    ? cards.map(item => `
        <article
          class="calendar-event-card"
          style="--event-color: ${escapeHTML(item.color)}"
        >
          <span class="calendar-event-card-time">
            ${escapeHTML(item.time)}
          </span>
          <div class="calendar-event-card-content">
            <strong>${escapeHTML(item.title)}</strong>
            ${item.description
              ? `<p>${escapeHTML(item.description)}</p>`
              : ""}
          </div>
        </article>
      `).join("")
    : `<p class="calendar-empty">등록된 일정이 없습니다.</p>`;
}

// 이벤트 시작 날과 끝나는 날 계산
function dateFromKey(dateKey) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function addCalendarDays(date, amount) {
  const next = new Date(date);
  next.setDate(next.getDate() + amount);
  return next;
}

function compareDateKeys(a, b) {
  return a.localeCompare(b);
}

function getEventEndKey(event) {
  return event.end || event.start;
}

// 그리드 막대 바 렌더링
function renderCalendarBars() {
  const grid = $("#calendar-grid");
  if (!grid) return;

  grid.querySelectorAll(".calendar-event-bar").forEach(bar => bar.remove());

  const year = calendarDate.getFullYear();
  const month = calendarDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const startOffset = (firstDay.getDay() + 6) % 7;
  const gridStart = addCalendarDays(firstDay, -startOffset);

  grid.querySelectorAll(".calendar-day").forEach((dayButton, index) => {
    dayButton.style.gridColumn = String((index % 7) + 1);
    dayButton.style.gridRow = String(Math.floor(index / 7) + 2);
  });

  const lanesByWeek = Array.from({ length: 6 }, () => []);

  calendarEvents.forEach(event => {
    const eventStart = dateFromKey(event.start);
    const eventEnd = dateFromKey(getEventEndKey(event));

    if (eventEnd < eventStart) return;

    for (let week = 0; week < 6; week++) {
      const weekStart = addCalendarDays(gridStart, week * 7);
      const weekEnd = addCalendarDays(weekStart, 6);

      const segmentStart = eventStart > weekStart ? eventStart : weekStart;
      const segmentEnd = eventEnd < weekEnd ? eventEnd : weekEnd;

      if (segmentStart > segmentEnd) continue;

      const startColumn =
        Math.round((segmentStart - weekStart) / 86400000) + 1;
      const endColumn =
        Math.round((segmentEnd - weekStart) / 86400000) + 1;

      // 이 일정 구간과 겹치지 않는 첫 lane을 찾는다.
      const lanes = lanesByWeek[week];
      let lane = lanes.findIndex(lastColumn => lastColumn < startColumn);

      if (lane === -1) {
        lane = lanes.length;
        lanes.push(0);
      }

      // lane 0~2까지만 그린다. 더 많은 일정은 세 번째 줄에 겹칠 수 있다.
      if (lane >= 3) continue;

      lanes[lane] = endColumn;

      const bar = document.createElement("button");
      bar.type = "button";
      bar.className = "calendar-event-bar";
      bar.dataset.eventId = event.id;
      bar.style.gridColumn = `${startColumn} / ${endColumn + 1}`;
      bar.style.gridRow = String(week + 2);
      bar.style.setProperty("--event-color", event.color || "#8B5CF6");
      bar.style.setProperty("--event-lane", lane);
      bar.setAttribute("aria-label", `${event.title}, ${event.start}`);

      const continuesBefore = eventStart < segmentStart;
      const continuesAfter = eventEnd > segmentEnd;

      bar.classList.toggle("continues-before", continuesBefore);
      bar.classList.toggle("continues-after", continuesAfter);
      bar.textContent = `${continuesBefore ? "‹ " : ""}${event.title}`;

      grid.appendChild(bar);
    }
  });
}


/* =========================================================
   GALLERY
   ========================================================= */


// 갤러리 검색/연도 필터
function getFilteredGalleryItems() {
  const query = ($("#gallery-search")?.value || "").trim().toLocaleLowerCase();
  const year = $("#gallery-year")?.value || "all";
  return galleryItems.filter(item => {
    const searchableText = `${item.title} ${item.description || ""}`.toLocaleLowerCase();
    const itemYear = /^(\d{4})/.exec(item.date || "")?.[1] || "";
    return (!query || searchableText.includes(query)) && (year === "all" || itemYear === year);
  });
}

// 갤러리 그리드 렌더링
function renderGallery() {
  const visibleItems = getFilteredGalleryItems();
  $("#gallery-grid").innerHTML = visibleItems.length ? visibleItems.map(item => `
    <article
      class="gallery-item"
      data-gallery-id="${item.id}"
      tabindex="0"
      role="button"
      aria-label="사진 열기: ${escapeHTML(item.title)}"
      style="--tilt:${(item.id % 3 - 1) * .5}deg"
    >
      <div class="gallery-image">
        ${imageMarkup(
          item.image,
          `PHOTO ${String(item.id).padStart(3, "0")}`
        )}
      </div>

      <div class="gallery-caption">
        <span>${escapeHTML(item.title)}</span>
        <span>${escapeHTML(item.date)}</span>
      </div>
    </article>
  `).join("") : `<p class="gallery-empty">검색 조건에 맞는 사진이 없습니다.</p>`;

  // 라이트박스가 열린 상태에서 검색/연도를 바꾸어도 표시와 순번을 동기화합니다.
  if ($("#archive-lightbox")?.classList.contains("is-open")) {
    renderLightbox();
  }
}
function populateGalleryYears() {
  const select = $("#gallery-year");
  if (!select) return;
  const selectedYear = select.value || "all";
  const years = [...new Set(
    galleryItems.map(item => /^(\d{4})/.exec(item.date || "")?.[1]).filter(Boolean)
  )].sort();
  select.innerHTML = `<option value="all">전체 연도</option>` +
    years.map(year => `<option value="${year}">${year}</option>`).join("");
  select.value = years.includes(selectedYear) ? selectedYear : "all";
}

$("#gallery-search").addEventListener("input", renderGallery);
$("#gallery-year").addEventListener("change", renderGallery);

let currentGalleryId = null;

// 사진 클릭: 라이트박스 열기
$("#gallery-grid").addEventListener("click", event => {
  const card = event.target.closest("[data-gallery-id]");
  if (card) openLightbox(Number(card.dataset.galleryId));
});

$("#gallery-grid").addEventListener("keydown", event => {
  const card = event.target.closest("[data-gallery-id]");
  if (!card) return;

  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openLightbox(Number(card.dataset.galleryId));
  }
});

// 라이트박스 모달 열기
function openLightbox(id) {
  const item = galleryItems.find(photo => photo.id === Number(id));
  if (!item) return;

  currentGalleryId = item.id;

  const overlay = $("#archive-lightbox");
  const wasOpen = overlay.classList.contains("is-open");
  if (!wasOpen) {
    lightboxReturnFocus = document.activeElement;
  }

  closeArchiveOverlay("pair-dossier", { restoreFocus: false });
  renderLightbox();

  if (!wasOpen) {
    focusCloseButtonAfterOpen(
      overlay,
      overlay.querySelector(".archive-close")
    );
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
  }
}

function renderLightbox() {
  const visibleItems = getFilteredGalleryItems();
  let index = visibleItems.findIndex(item => item.id === currentGalleryId);

  if (!visibleItems.length) {
    currentGalleryId = null;
    $("#lightbox-number").textContent = "검색 결과 없음 / PHOTO 000 OF 000";
    $("#lightbox-image").innerHTML = `<span>검색 조건에 맞는 사진이 없습니다.</span>`;
    $("#lightbox-info").innerHTML = "";
    $("#lightbox-prev").disabled = true;
    $("#lightbox-next").disabled = true;
    return;
  }

  if (index < 0) {
    currentGalleryId = visibleItems[0].id;
    index = 0;
  }

  const item = visibleItems[index];

  $("#lightbox-number").textContent =
    `사진 확대샷 / PHOTO ${String(index + 1).padStart(3, "0")} OF ${String(visibleItems.length).padStart(3, "0")}`;

  $("#lightbox-image").innerHTML = item.image
    ? `<img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)}">`
    : `<span>NO IMAGE AVAILABLE</span>`;

  $("#lightbox-info").innerHTML = `
    <h2>${escapeHTML(item.title)}</h2>
    <span class="music-label">
      ${escapeHTML(item.date || "DATE UNKNOWN")}
    </span>
    <p>${escapeHTML(item.description || "아직 추가된 기록 설명이 없습니다.")}</p>
  `;

  $("#lightbox-prev").disabled = visibleItems.length < 2;
  $("#lightbox-next").disabled = visibleItems.length < 2;
}
function stepLightbox(direction) {
  const visibleItems = getFilteredGalleryItems();
  const index = visibleItems.findIndex(item => item.id === currentGalleryId);
  if (index < 0 || visibleItems.length < 2) return;
  const nextIndex = (index + direction + visibleItems.length) % visibleItems.length;
  currentGalleryId = visibleItems[nextIndex].id;
  renderLightbox();
}

// 화살표 클릭: 사진 전환
$("#lightbox-prev").addEventListener("click", () => stepLightbox(-1));
$("#lightbox-next").addEventListener("click", () => stepLightbox(1));


/* =========================================================
   LINKS
   ========================================================= */


// 링크 카드 렌더링
function renderLinks() {
  $("#link-scroll").innerHTML = links.map((link, index) => `
    <a class="link-card" href="${escapeHTML(link.url)}" ${link.url !== "#" ? 'target="_blank" rel="noopener noreferrer"' : ""} style="background-image: url(${escapeHTML(link.image)});" >
      <span class="link-card-icon"><i class="${escapeHTML(link.icon)}"></i></span>
      <strong>${escapeHTML(link.title)}</strong>
      <p>${escapeHTML(link.description)}</p>
      <span class="link-out">${escapeHTML(link.label)} ↗</span>
    </a>
  `).join("");
}


/* =========================================================
   스티커 추가
   ========================================================= */


(() => {
  const STORAGE_KEY = "academy-stickers-v1";
  const SECTION_IDS = ["home", "calendar", "gallery"];

  const state = {
    activeSection: null,
    selectedId: null,
    stickers: {
      home: [],
      calendar: [],
      gallery: []
    },
    interaction: null
  };

  const $ = (selector, root = document) =>
    root.querySelector(selector);

  const $$ = (selector, root = document) =>
    [...root.querySelectorAll(selector)];

  const makeId = () =>
    `sticker-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

  function getSection(id) {
    return document.getElementById(id);
  }

  function getLayer(id) {
    return $(`[data-sticker-layer="${id}"]`);
  }

  function getSelectedSticker() {
    if (!state.activeSection || !state.selectedId) return null;

    return state.stickers[state.activeSection].find(
      sticker => sticker.id === state.selectedId
    ) || null;
  }

  function saveStickers() {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(state.stickers)
      );
    } catch (error) {
      alert(
        "저장 공간이 부족해 스티커를 저장하지 못했어요. " +
        "이미지 크기를 줄이거나 스티커 수를 줄여 주세요."
      );
      console.error("스티커 저장 실패:", error);
    }
  }

  function loadStickers() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");

      SECTION_IDS.forEach(sectionId => {
        if (Array.isArray(saved[sectionId])) {
          state.stickers[sectionId] = saved[sectionId].filter(sticker =>
            sticker &&
            typeof sticker.src === "string" &&
            sticker.src.startsWith("data:image/") &&
            Number.isFinite(sticker.x) &&
            Number.isFinite(sticker.y) &&
            Number.isFinite(sticker.scale) &&
            Number.isFinite(sticker.rotation)
          );
        }
      });
    } catch (error) {
      console.warn("저장된 스티커를 불러오지 못했습니다.", error);
    }
  }

  function createHandle(type, symbol, label) {
    const button = document.createElement("button");

    button.type = "button";
    button.className = `sticker-handle sticker-handle-${type}`;
    button.textContent = symbol;
    button.setAttribute("aria-label", label);
    button.dataset.stickerAction = type;

    return button;
  }

  function renderSection(sectionId) {
    const layer = getLayer(sectionId);
    if (!layer) return;

    layer.replaceChildren();

    state.stickers[sectionId].forEach(sticker => {
      const item = document.createElement("div");

      item.className = "sticker-item";
      item.dataset.stickerId = sticker.id;

      if (
        state.activeSection === sectionId &&
        state.selectedId === sticker.id
      ) {
        item.classList.add("is-selected");
      }

      item.style.left = `${sticker.x * 100}%`;
      item.style.top = `${sticker.y * 100}%`;
      item.style.width = `${sticker.width * 100}%`;
      item.style.transform =
        `rotate(${sticker.rotation}deg) scale(${sticker.scale})`;

      const image = document.createElement("img");
      image.src = sticker.src;
      image.alt = "사용자 스티커";
      image.draggable = false;

      item.append(
  image,
  createHandle("rotate", "↻", "스티커 회전"),
  createHandle("resize", "↘", "스티커 크기 조절"),
  createHandle("delete", "×", "스티커 삭제")
);

      layer.appendChild(item);
    });

    const isEditing = state.activeSection === sectionId;

    layer.style.pointerEvents = isEditing ? "auto" : "none";
    layer.querySelectorAll(".sticker-handle").forEach(handle => {
      handle.tabIndex = isEditing ? 0 : -1;
    });
  }

  function setEditing(sectionId, enabled) {
    const section = getSection(sectionId);
    const toolbar = $(`[data-sticker-toolbar="${sectionId}"]`);

    if (!section || !toolbar) return;

    if (enabled) {
      state.activeSection = sectionId;
      state.selectedId = null;
    } else if (state.activeSection === sectionId) {
      state.activeSection = null;
      state.selectedId = null;
    }

    section.classList.toggle("sticker-editing", enabled);

    const modeButton = $("[data-sticker-mode]", toolbar);
    const actions = $(".sticker-edit-actions", toolbar);

    modeButton.classList.toggle("is-active", enabled);
    modeButton.textContent = enabled ? "편집 중" : "스티커 편집";
    modeButton.setAttribute("aria-pressed", String(enabled));

    actions.hidden = !enabled;

    SECTION_IDS.forEach(id => renderSection(id));
  }

  function selectSticker(id) {
    state.selectedId = id;

    SECTION_IDS.forEach(renderSection);
  }

  function addStickerFile(file, sectionId) {
    if (!file || !file.type.startsWith("image/")) {
      alert("이미지 파일을 선택해 주세요.");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      alert("이미지 한 장의 크기는 2MB 이하로 선택해 주세요.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const section = getSection(sectionId);
      if (!section || typeof reader.result !== "string") return;

      const sticker = {
        id: makeId(),
        src: reader.result,
        // 섹션 크기에 대한 비율로 위치 저장
        x: 0.35,
        y: 0.35,
        width: 0.18,
        scale: 1,
        rotation: 0
      };

      state.stickers[sectionId].push(sticker);
      state.activeSection = sectionId;
      state.selectedId = sticker.id;

      renderSection(sectionId);
      saveStickers();
    };

    reader.onerror = () => {
      alert("이미지를 읽지 못했어요. 다른 파일을 선택해 주세요.");
    };

    reader.readAsDataURL(file);
  }

  function getPoint(event, sectionId) {
    const rect = getSection(sectionId).getBoundingClientRect();

    return {
      x: (event.clientX - rect.left) / rect.width,
      y: (event.clientY - rect.top) / rect.height
    };
  }

  function updateStickerElement(sectionId, stickerId) {
  const layer = getLayer(sectionId);
  const sticker = state.stickers[sectionId].find(
    item => item.id === stickerId
  );
  const element = layer?.querySelector(
    `[data-sticker-id="${stickerId}"]`
  );

  if (!sticker || !element) return;

  element.style.left = `${sticker.x * 100}%`;
  element.style.top = `${sticker.y * 100}%`;
  element.style.width = `${sticker.width * 100}%`;
  element.style.transform =
    `rotate(${sticker.rotation}deg) scale(${sticker.scale})`;
}

function normalizeAngle(angle) {
  return ((angle + 180) % 360 + 360) % 360 - 180;
}

function onPointerDown(event) {
  if (!state.activeSection) return;

  const sectionId = state.activeSection;
  const layer = getLayer(sectionId);
  let item = event.target.closest(".sticker-item");

  if (!item || !layer.contains(item)) {
    if (event.target.closest(".sticker-toolbar")) return;
    selectSticker(null);
    return;
  }

  const stickerId = item.dataset.stickerId;
  const sticker = state.stickers[sectionId].find(
    entry => entry.id === stickerId
  );

  if (!sticker) return;

  const action = event.target.closest("[data-sticker-action]")
    ?.dataset.stickerAction || "move";

  event.preventDefault();
  event.stopPropagation();

  // 삭제 버튼은 드래그를 시작하지 않고 즉시 삭제
  if (action === "delete") {
    state.stickers[sectionId] = state.stickers[sectionId].filter(
      entry => entry.id !== stickerId
    );

    state.selectedId = null;
    saveStickers();
    renderSection(sectionId);
    return;
  }

  selectSticker(stickerId);

  item = layer.querySelector(`[data-sticker-id="${stickerId}"]`);
  if (!item) return;

  const rect = item.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const startAngle = Math.atan2(
    event.clientY - centerY,
    event.clientX - centerX
  ) * (180 / Math.PI);

  const startDistance = Math.hypot(
    event.clientX - centerX,
    event.clientY - centerY
  );

  state.interaction = {
    pointerId: event.pointerId,
    sectionId,
    stickerId,
    action,
    startX: event.clientX,
    startY: event.clientY,
    startStickerX: sticker.x,
    startStickerY: sticker.y,
    startScale: sticker.scale,
    startRotation: sticker.rotation,
    startAngle,
    startDistance
  };

  layer.setPointerCapture(event.pointerId);
}

function onPointerMove(event) {
  const interaction = state.interaction;

  if (!interaction || interaction.pointerId !== event.pointerId) return;

  const {
    sectionId,
    stickerId,
    action,
    startX,
    startY,
    startStickerX,
    startStickerY,
    startScale,
    startRotation,
    startAngle,
    startDistance
  } = interaction;

  const sticker = state.stickers[sectionId].find(
    entry => entry.id === stickerId
  );

  if (!sticker) return;

  const section = getSection(sectionId);
  const sectionRect = section.getBoundingClientRect();
  const dx = event.clientX - startX;
  const dy = event.clientY - startY;

  if (action === "move") {
  sticker.x = startStickerX + dx / sectionRect.width;
  sticker.y = startStickerY + dy / sectionRect.height;
}

  if (action === "resize") {
    const item = getLayer(sectionId).querySelector(
      `[data-sticker-id="${stickerId}"]`
    );

    if (!item) return;

    const rect = item.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const currentDistance = Math.hypot(
      event.clientX - centerX,
      event.clientY - centerY
    );

    // 드래그 시작 시점의 거리와 비교해 크기를 조절
    const ratio = currentDistance / Math.max(startDistance, 1);

    sticker.scale = Math.max(
      0.25,
      Math.min(3, startScale * ratio)
    );
  }

  if (action === "rotate") {
    const item = getLayer(sectionId).querySelector(
      `[data-sticker-id="${stickerId}"]`
    );

    if (!item) return;

    const rect = item.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const currentAngle = Math.atan2(
      event.clientY - centerY,
      event.clientX - centerX
    ) * (180 / Math.PI);

    const delta = normalizeAngle(currentAngle - startAngle);

    sticker.rotation = startRotation + delta;
  }

  updateStickerElement(sectionId, stickerId);
}

function onPointerUp(event) {
  const interaction = state.interaction;

  if (!interaction || interaction.pointerId !== event.pointerId) return;

  const { sectionId, stickerId } = interaction;

  state.interaction = null;

  saveStickers();
  updateStickerElement(sectionId, stickerId);
}

  function deleteSelectedSticker() {
    const sectionId = state.activeSection;
    const sticker = getSelectedSticker();

    if (!sectionId || !sticker) {
      alert("먼저 삭제할 스티커를 선택해 주세요.");
      return;
    }

    state.stickers[sectionId] = state.stickers[sectionId].filter(
      item => item.id !== sticker.id
    );

    state.selectedId = null;

    saveStickers();
    renderSection(sectionId);
  }

  function initialize() {
    loadStickers();

    SECTION_IDS.forEach(sectionId => {
      const toolbar = $(`[data-sticker-toolbar="${sectionId}"]`);
      const layer = getLayer(sectionId);

      if (!toolbar || !layer) return;

      toolbar.addEventListener("click", event => {
        const modeButton = event.target.closest("[data-sticker-mode]");
        const addButton = event.target.closest("[data-sticker-add]");
        const finishButton = event.target.closest("[data-sticker-finish]");
        

        if (modeButton) {
          const isActive = state.activeSection === sectionId;
          setEditing(sectionId, !isActive);
        }

        if (addButton) {
          const input = document.createElement("input");

          input.type = "file";
          input.accept = "image/*";
          input.addEventListener("change", () => {
            if (input.files?.[0]) {
              addStickerFile(input.files[0], sectionId);
            }
          });

          input.click();
        }

        if (finishButton) {
          saveStickers();
          setEditing(sectionId, false);
        }

      });

      layer.addEventListener("pointerdown", onPointerDown);
      layer.addEventListener("pointermove", onPointerMove);
      layer.addEventListener("pointerup", onPointerUp);
      layer.addEventListener("pointercancel", onPointerUp);

      renderSection(sectionId);
    });
    SECTION_IDS.forEach(sectionId => renderSection(sectionId));
  }
  initialize();
})();


/* =========================================================
   이벤트
   ========================================================= */


// 내비게이션 바
$$(".nav-btn").forEach(button => button.addEventListener("click", () => navigateTo(button.dataset.section)));

// 뮤직 플레이어
const musicDock = $("#music-dock");
const musicMinimizeButton = $("#music-minimize");
musicMinimizeButton.addEventListener("click", () => {
  const isMinimized = musicDock.classList.toggle("is-minimized");

  musicMinimizeButton.textContent = isMinimized ? "+" : "−";
  musicMinimizeButton.setAttribute(
    "aria-expanded",
    String(!isMinimized)
  );
  musicMinimizeButton.setAttribute(
    "aria-label",
    isMinimized
      ? "뮤직 플레이어 펼치기"
      : "뮤직 플레이어 접기"
  );
});

/* 드래그 이동 */
const musicWindowTop = $(".music-window-top");

let isDraggingMusic = false;
let dragOffsetX = 0;
let dragOffsetY = 0;

musicWindowTop.addEventListener("pointerdown", event => {
  if (event.button !== 0) return;
  if (event.target.closest("button")) return;

  const rect = musicDock.getBoundingClientRect();

  musicDock.style.left = `${rect.left}px`;
  musicDock.style.top = `${rect.top}px`;
  musicDock.style.right = "auto";
  musicDock.style.bottom = "auto";

  dragOffsetX = event.clientX - rect.left;
  dragOffsetY = event.clientY - rect.top;

  isDraggingMusic = true;
  musicWindowTop.setPointerCapture(event.pointerId);

  musicDock.classList.add("is-dragging");
});

musicWindowTop.addEventListener("pointermove", event => {
  if (!isDraggingMusic) return;

  const rect = musicDock.getBoundingClientRect();

  const maxLeft = window.innerWidth - rect.width;
  const maxTop = window.innerHeight - rect.height;

  const left = Math.max(
    0,
    Math.min(event.clientX - dragOffsetX, maxLeft)
  );

  const top = Math.max(
    0,
    Math.min(event.clientY - dragOffsetY, maxTop)
  );

  musicDock.style.left = `${left}px`;
  musicDock.style.top = `${top}px`;
});

function stopDraggingMusic(event) {
  if (!isDraggingMusic) return;

  isDraggingMusic = false;
  musicDock.classList.remove("is-dragging");

  if (musicWindowTop.hasPointerCapture(event.pointerId)) {
    musicWindowTop.releasePointerCapture(event.pointerId);
  }
}

musicWindowTop.addEventListener("pointerup", stopDraggingMusic);
musicWindowTop.addEventListener("pointercancel", stopDraggingMusic);

$("#music-play").addEventListener("click", toggleMusicPlayback);
$("#music-prev").addEventListener("click", playPreviousSong);
$("#music-next").addEventListener("click", () => {
  playNextSong(false);
});
$("#music-repeat").addEventListener("click", toggleRepeatMode);

// 재생 바를 움직이면 해당 위치부터 재생
$("#music-seek").addEventListener("input", event => {
  if (!youtubeReady) return;

  const duration = youtubePlayer.getDuration();
  if (duration > 0) {
    const seconds = (Number(event.target.value) / 100) * duration;
    youtubePlayer.seekTo(seconds, true);
  }
});

// MEMBERS: 프로필 오버레이
$("#close-profile").addEventListener("click", closeProfile);
$("#profile-prev").addEventListener("click", () => stepProfile(-1));
$("#profile-next").addEventListener("click", () => stepProfile(1));
$(".profile-hangtag").addEventListener("click", event => {
  const link = event.target.closest("a[href^='#']");
  if (!link) return;
  event.preventDefault();
  const target = document.querySelector(link.getAttribute("href"));
  target?.scrollIntoView({ behavior: "smooth", block: "center" });
});

// PAIR
$("#pair-filter").addEventListener("click", event => {
  const button = event.target.closest("[data-pair-filter]");
  if (!button) return;
  activePairFilter = button.dataset.pairFilter;
  renderPairs();
});

// PAIR: 페어 카드 뒤집기
function flipPairCard(card) {
  const isFlipped = card.classList.toggle("is-flipped");
  card.setAttribute("aria-pressed", String(isFlipped));
}

$("#pair-rail").addEventListener("click", event => {
  const dossierButton = event.target.closest("[data-open-dossier]");

  if (dossierButton) {
    event.stopPropagation();
    openPairDossier(dossierButton.dataset.openDossier);
    return;
  }

  const card = event.target.closest("[data-pair-id]");
  if (card) flipPairCard(card);
});

// SONG
$("#record-grid").addEventListener("click", event => {
  const item = event.target.closest("[data-song-id]");
  if (item) selectSong(item.dataset.songId, true);
});

$("#song-search").addEventListener("input", renderSongGrid);

$$(".song-filter").forEach(button => button.addEventListener("click", () => {
  activeSongFilter = button.dataset.kind;
  $$(".song-filter").forEach(item => item.classList.toggle("is-active", item === button));
  renderSongGrid();
}));

// CALENDAR
$("#calendar-prev").addEventListener("click", () => moveCalendarMonth(-1));
$("#calendar-next").addEventListener("click", () => moveCalendarMonth(1));
$("#calendar-today").addEventListener("click", goToCalendarToday);
$("#calendar-prev-event").addEventListener("click", () => goToAdjacentSchedule(-1));
$("#calendar-next-event").addEventListener("click", () => goToAdjacentSchedule(1));

$("#calendar-grid").addEventListener("click", event => {
  const eventBar = event.target.closest(".calendar-event-bar");

  if (eventBar) {
    const item = calendarEvents.find(
      item => String(item.id) === eventBar.dataset.eventId
    );

    if (item) selectCalendarDate(item.start);
    return;
  }

  const dayButton = event.target.closest(".calendar-day[data-date]");
  if (dayButton) {
    selectCalendarDate(dayButton.dataset.date);
  }
});

// 공통 모달
function closeArchiveOverlay(id, { restoreFocus = true } = {}) {
  const overlay = document.getElementById(id);
  if (!overlay || !overlay.classList.contains("is-open")) return;

  let returnTarget = null;

  if (id === "pair-dossier") {
    returnTarget = dossierReturnFocus;
    dossierReturnFocus = null;
  } else if (id === "archive-lightbox") {
    returnTarget = lightboxReturnFocus;
    lightboxReturnFocus = null;
  }

  // 먼저 포커스를 오버레이 바깥으로 이동
  if (restoreFocus && returnTarget?.isConnected) {
    returnTarget.focus({ preventScroll: true });
  } else if (overlay.contains(document.activeElement)) {
    document.activeElement.blur();
  }

  // 포커스가 빠져나온 뒤 숨기기
  overlay.classList.remove("is-open");
  overlay.setAttribute("aria-hidden", "true");
}

// 오버레이에 포커스 주기
function focusCloseButtonAfterOpen(overlay, closeButton) {
  function handleTransitionEnd(event) {
    if (event.target !== overlay || event.propertyName !== "opacity") return;

    overlay.removeEventListener("transitionend", handleTransitionEnd);

    if (overlay.classList.contains("is-open")) {
      closeButton.focus({ preventScroll: true });
    }
  }

  overlay.addEventListener("transitionend", handleTransitionEnd);
}

// X 버튼으로 닫기
$$("[data-close-archive]").forEach(button => {
  button.addEventListener("click", () => {
    const overlay = button.closest(".archive-overlay");
    if (overlay) closeArchiveOverlay(overlay.id);
  });
});

// 어두운 배경을 클릭해 닫기
$$(".archive-overlay").forEach(overlay => {
  overlay.addEventListener("click", event => {
    if (event.target === overlay) {
      closeArchiveOverlay(overlay.id);
    }
  });
});

/* ---------- 키보드 조작 이벤트 ---------- */

function trapOverlayFocus(event, overlay) {
  if (event.key !== "Tab" || !overlay) return;
  const focusable = [...overlay.querySelectorAll(
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )].filter(element => !element.hidden && element.getAttribute("aria-hidden") !== "true");
  if (!focusable.length) {
    event.preventDefault();
    return;
  }
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && (document.activeElement === first || !overlay.contains(document.activeElement))) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && (document.activeElement === last || !overlay.contains(document.activeElement))) {
    event.preventDefault();
    first.focus();
  }
}

document.addEventListener("keydown", event => {
  const profile = $("#profile-overlay");
  const dossier = $("#pair-dossier");
  const lightbox = $("#archive-lightbox");

 // Escape: 현재 위에 열린 오버레이 하나만 닫기
  if (event.key === "Escape") {
    if (profile.classList.contains("is-open")) {
      closeProfile();
    } else if (lightbox.classList.contains("is-open")) {
      closeArchiveOverlay("archive-lightbox");
    } else if (dossier.classList.contains("is-open")) {
      closeArchiveOverlay("pair-dossier");
    }

    return;
  }

  // 프로필 오버레이
  if (profile.classList.contains("is-open")) {
    trapOverlayFocus(event, profile);
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      stepProfile(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      stepProfile(1);
    }

    return;
  }

  // 페어 상세
  if (dossier.classList.contains("is-open")) {
    trapOverlayFocus(event, dossier);
    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) {
      event.preventDefault();
    }

    return;
  }

  // 라이트박스
  if (lightbox.classList.contains("is-open")) {
    trapOverlayFocus(event, lightbox);
    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) {
      event.preventDefault();
    }

    if (event.key === "ArrowLeft") {
      stepLightbox(-1);
    } else if (event.key === "ArrowRight") {
      stepLightbox(1);
    }
  }

});

function openHomeAnniversary() {
  const dateKey = $(".home-widget-event").dataset.date;
  if (dateKey) openCalendarDate(dateKey);
}

$(".home-widget-event").addEventListener("click", openHomeAnniversary);
$(".home-widget-event").addEventListener("keydown", event => {
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  openHomeAnniversary();
});


/* =========================================================
   이니셜 렌더
   ========================================================= */


renderHomeWidgets();
renderMembers();
renderPairs();
renderSongs();
renderCalendar();
renderCalendarEvents();
updateCalendarNavigationState();
populateGalleryYears();
renderGallery();
renderLinks();
selectSong(songs[0]?.id, false);
$("#music-repeat").classList.add("is-active");
$("#music-repeat").setAttribute("aria-pressed", "true");
updatePlayerStatus(false);