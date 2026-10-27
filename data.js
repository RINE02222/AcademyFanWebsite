/* =========================================================
   기본 선언
   ========================================================= */


// 멤버
export const members = [
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
export const pairs = [
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
export const songs = [
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
  { id: 35, title: "로키", artist: "닌닌", kind: "cover", cover: "http://img.youtube.com/vi/AYDfg8O9iIU/maxresdefault.jpg", videoId: "AYDfg8O9iIU", year: "2024"},
  { id: 36, title: "Immortals", artist: "데스해머쵸로키", kind: "cover", cover: "http://img.youtube.com/vi/uWOgEZ3sCR8/maxresdefault.jpg", videoId: "uWOgEZ3sCR8", year: "2025"},
  { id: 37, title: "청개구리", artist: "데스해머쵸로키", kind: "original", cover: "http://img.youtube.com/vi/7Q61ZtM2qyM/maxresdefault.jpg", videoId: "7Q61ZtM2qyM", year: "2024"},
  { id: 38, title: "좋은 날", artist: "빅토리", kind: "cover", cover: "http://img.youtube.com/vi/VwIXRAdDYA8/maxresdefault.jpg", videoId: "VwIXRAdDYA8", year: "2024"},
  { id: 39, title: "CHEER UP (ft. 성기사 샬롯)", artist: "빅토리", kind: "cover", cover: "http://img.youtube.com/vi/cHOkRf78WJo/maxresdefault.jpg", videoId: "cHOkRf78WJo", year: "2024"},
  { id: 40, title: "이참에 뭔가 해봐", artist: "미미짱짱세용", kind: "cover", cover: "http://img.youtube.com/vi/9nfXU9stnvQ/maxresdefault.jpg", videoId: "9nfXU9stnvQ", year: "2025"},
  { id: 41, title: "Omokage", artist: "시리안 레인, 아마데우스최, 빅토리", kind: "cover", cover: "http://img.youtube.com/vi/mdNEh9Hyz4c/maxresdefault.jpg", videoId: "mdNEh9Hyz4c", year: "2024"},
  { id: 42, title: "밤 끝없는 밤", artist: "아마데우스최, 빅토리", kind: "cover", cover: "http://img.youtube.com/vi/M3gQdpLwHtY/sddefault.jpg", videoId: "M3gQdpLwHtY", year: "2024"},
  { id: 43, title: "Still With You", artist: "시리안 레인", kind: "cover", cover: "http://img.youtube.com/vi/-7DHVqDC-g0/maxresdefault.jpg", videoId: "-7DHVqDC-g0", year: "2024"},
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
export const schedules = [
  { id: "1", title: "고카 상사 합방", start: "2026-10-25", time: "20:00", color: "#8B5CF6", description: "공식 채널 방송" },
];

// 갤러리
export const galleryItems = [
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
export const links = [
  { title: "우왁굳", description: "우왁굳 유튜브 채널", label: "유튜브", icon: "iconoir-youtube-solid", url: "https://www.youtube.com/@woowakgood", image: "https://yt3.googleusercontent.com/8qJyQpSS6YLADyM5T6afKkpCsGtC3x_4_SSJWTNNO3qKX9FmlRRBZbO7VFy8IegO_717mU7zaqM=s900-c-k-c0x00ffffff-no-rj" },
  { title: "우왁굳", description: "우왁굳 방송국 바로가기", label: "SOOP", icon: "iconoir-tv", url: "https://www.sooplive.com/station/ecvhao", image: "https://yt3.googleusercontent.com/8qJyQpSS6YLADyM5T6afKkpCsGtC3x_4_SSJWTNNO3qKX9FmlRRBZbO7VFy8IegO_717mU7zaqM=s900-c-k-c0x00ffffff-no-rj" },
  { title: "왁타버스 WAKTAVERSE", description: "왁타버스 메인 유튜브 채널", label: "유튜브", icon: "iconoir-youtube-solid", url: "https://www.youtube.com/channel/UCzh4yY8rl38knH33XpNqXbQ", image: "https://yt3.googleusercontent.com/-WhlmETS5indv4KmktijCYdM1WfGkdmiii7yaGNzBUwJfhOYidLBgQrMz4wmO0_6o15kEdnAAA=s900-c-k-c0x00ffffff-no-rj" },
  { title: "왁타버스 ZERO", description: "방송 다시보기 및 고멤 놀이터", label: "유튜브", icon: "iconoir-youtube-solid", url: "https://www.youtube.com/channel/UCZOcwheypMvYN_J2oRBgt2A", image: "https://yt3.googleusercontent.com/A7aCY6_48h-53dhNKq0mW6ph2_0V9Kv3GC9_YZzxV-lXo6d4aCHfKFXCAukohqd6-bEyaF78qA=s900-c-k-c0x00ffffff-no-rj" },
  { title: "고카 상사", description: "공식 사내 커뮤니티", label: "홈페이지", icon: "iconoir-building", url: "https://goca-company.sp0907sh.chatgpt.site/", image: "images/logo.svg" },
  { title: "아카데미 플레이리스트", description: "아카데미생들의 추천곡 모음", label: "유튜브 재생목록", icon: "iconoir-playlist", url: "https://www.youtube.com/playlist?list=PLStHIETtt5OxgxpMb_1hohY9NuF9g5sN8", image: "#" },
];

// 디데이
export const events = [ 
  { title: "고멤 아카데미 창설일", date: "2026-12-01", category: "기수별", image: "images/logo.png" }
  // 예: { title: "아카데미 공개 방송", date: "2026-11-01", category: "방송" }
];