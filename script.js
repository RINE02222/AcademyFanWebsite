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
  { id: 16, name: "버터우스 3세", engname: "Butterus III", generation: "5기", birthday: "05. 10.", mbti: "ENTJ", fandom: "백성단", jappronouns: "余", oshimark: "🧈", color: "#C2A46E", standing: "images/profile/16.png", portrait: "", idphoto: "images/idphoto/16.png", description: "이곳에 캐릭터를 소개하는 짧은 문장을 작성하세요.", memo: "추가 프로필 및 관계 기록을 입력할 수 있습니다." },
  { id: 17, name: "성기사 샬롯", engname: "Castle Knight Charlotte", generation: "5기", birthday: "07. 15.", mbti: "INTP", fandom: "때지", jappronouns: "私", oshimark: "⚜️", color: "#B41432", standing: "images/profile/17.png", portrait: "", idphoto: "images/idphoto/17.png", description: "이곳에 캐릭터를 소개하는 짧은 문장을 작성하세요.", memo: "추가 프로필 및 관계 기록을 입력할 수 있습니다." },
  { id: 18, name: "메카 맹기산", engname: "Mecha Maeng Gisan", generation: "6기", birthday: "1984. 11. 24.", mbti: "-", fandom: "-", jappronouns: "オレ", oshimark: "🕵️‍♂️", color: "#8C6B4B", standing: "images/profile/18.png", portrait: "", idphoto: "images/idphoto/18.png", description: "이곳에 캐릭터를 소개하는 짧은 문장을 작성하세요.", memo: "추가 프로필 및 관계 기록을 입력할 수 있습니다." }
];

// 페어
const pairs = [
  { id: "1", title: "여카데미", members: [1, 2, 4, 11, 12, 13, 17], image: "images/pair/yeocademy.jpg", category: ["여성"], description: "이 조합의 관계성이나 대표적인 장면을 기록하세요." },
  { id: "2", title: "남카데미", members: [3, 5, 6, 7, 8, 9, 10, 14, 15, 16, 18], image: "images/pair/namcademy.png", category: ["남성"], description: "아카데미 반기를 올려" },
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
  { id: "17", title: "패티다져스", members: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16, 17], image: "images/gallery/13_baseball1.png", category: ["대회"], description: "이 조합의 관계성이나 대표적인 장면을 기록하세요." },
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
  { id: 7, title: "슈퍼스타", artist: "미미짱짱세용", kind: "cover", cover: "http://img.youtube.com/vi/44CAW_Mqm1k/maxresdefault.jpg", videoId: "44CAW_Mqm1k", year: "2024"},
  { id: 8, title: "용기 100%", artist: "닌닌", kind: "cover", cover: "http://img.youtube.com/vi/wXPntQ0M8rs/maxresdefault.jpg", videoId: "wXPntQ0M8rs", year: "2024"},
  { id: 10, title: "Instagram (ft. 닌닌)", artist: "수셈이", kind: "cover", cover: "http://img.youtube.com/vi/oQbWrcjLoHU/maxresdefault.jpg", videoId: "oQbWrcjLoHU", year: "2024"},
  { id: 11, title: "GERMAN BON", artist: "닌닌, 철도왕 길버트", kind: "cover", cover: "http://img.youtube.com/vi/HUdRsuridNg/maxresdefault.jpg", videoId: "HUdRsuridNg", year: "2024"},
  { id: 12, title: "칵테일 사랑", artist: "버터우스 3세", kind: "cover", cover: "http://img.youtube.com/vi/BEs_c0DSNrY/maxresdefault.jpg", videoId: "BEs_c0DSNrY", year: "2024"},
  { id: 13, title: "두근 어질", artist: "미미짱짱세용", kind: "cover", cover: "http://img.youtube.com/vi/T544189tpY0/maxresdefault.jpg", videoId: "T544189tpY0", year: "2024"},
  { id: 14, title: "CIDER BANG!", artist: "RYKY (빅토리, 데스해머쵸로키)", kind: "original", cover: "http://img.youtube.com/vi/IhIDFiYWMbc/maxresdefault.jpg", videoId: "IhIDFiYWMbc", year: "2024"},
  { id: 15, title: "LOGIN", artist: "시리안, 아마데우스최, 크리즈", kind: "original", cover: "http://img.youtube.com/vi/kzgr3hqIe4k/maxresdefault.jpg", videoId: "kzgr3hqIe4k", year: "2024"},
  { id: 16, title: "SKY HiGH!", artist: "미미짱짱세용", kind: "original", cover: "http://img.youtube.com/vi/AF5MVogdcAU/maxresdefault.jpg", videoId: "AF5MVogdcAU", year: "2024"},
  { id: 17, title: "Black Flower", artist: "닌닌, 사랑전도사 젠투", kind: "original", cover: "http://img.youtube.com/vi/WycX_3W3agM/maxresdefault.jpg", videoId: "WycX_3W3agM", year: "2024"},
  { id: 18, title: "Wander", artist: "수셈이", kind: "original", cover: "http://img.youtube.com/vi/c74agkeKGlc/maxresdefault.jpg", videoId: "c74agkeKGlc", year: "2024"},
  { id: 19, title: "Ready Action (ft. 단군)", artist: "진희, 아이 쓰께끼, 베베리", kind: "original", cover: "http://img.youtube.com/vi/Lv3A_gPPmNE/maxresdefault.jpg", videoId: "Lv3A_gPPmNE", year: "2024"},
  { id: 20, title: "청개구리", artist: "데스해머쵸로키", kind: "original", cover: "http://img.youtube.com/vi/7Q61ZtM2qyM/maxresdefault.jpg", videoId: "7Q61ZtM2qyM", year: "2024"},
  { id: 22, title: "Still With You", artist: "시리안 레인", kind: "cover", cover: "http://img.youtube.com/vi/-7DHVqDC-g0/maxresdefault.jpg", videoId: "-7DHVqDC-g0", year: "2025"},
  { id: 23, title: "밤 끝없는 밤", artist: "아마데우스최, 빅토리", kind: "cover", cover: "http://img.youtube.com/vi/M3gQdpLwHtY/maxresdefault.jpg", videoId: "M3gQdpLwHtY", year: "2024"},
  { id: 24, title: "감전", artist: "보디가드 불독", kind: "cover", cover: "http://img.youtube.com/vi/4G4w9wMyHZI/maxresdefault.jpg", videoId: "4G4w9wMyHZI", year: "2025"},
  { id: 25, title: "종천지모", artist: "사랑전도사 젠투", kind: "original", cover: "http://img.youtube.com/vi/zCiezbft1x0/maxresdefault.jpg", videoId: "zCiezbft1x0", year: "2025"},
  { id: 26, title: "MONO DRAMA (ft. 성기사 샬롯)", artist: "철도왕 길버트", kind: "original", cover: "http://img.youtube.com/vi/R3qNn4PPJc4/maxresdefault.jpg", videoId: "R3qNn4PPJc4", year: "2025"},
  { id: 27, title: "Forgotten", artist: "닌닌", kind: "original", cover: "http://img.youtube.com/vi/Ph2IyI_flj0/maxresdefault.jpg", videoId: "Ph2IyI_flj0", year: "2025"},
  { id: 28, title: "EVERYTHING", artist: "수셈이", kind: "cover", cover: "http://img.youtube.com/vi/gisyJWichLY/maxresdefault.jpg", videoId: "gisyJWichLY", year: "2026"},
  { id: 29, title: "I Really Want To Stay At Your House", artist: "데스해머쵸로키", kind: "cover", cover: "http://img.youtube.com/vi/TgVa1jiYQ34/maxresdefault.jpg", videoId: "TgVa1jiYQ34", year: "2026"},
  { id: 30, title: "Guerilla", artist: "보디가드 불독, 진희, 수셈이, 버터우스 3세", kind: "original", cover: "http://img.youtube.com/vi/PYx0uUdyeUg/maxresdefault.jpg", videoId: "PYx0uUdyeUg", year: "2025"},
  { id: 1000, title: "연말의노래", artist: "고멤 아카데미 1~5기", kind: "original", cover: "http://img.youtube.com/vi/Ii_w6jGjI7g/maxresdefault.jpg", videoId: "Ii_w6jGjI7g", year: "2024"},
];

// 캘린더
const calendarEvents = [
  { id: "1", title: "고카 상사 합방", start: "2026-10-25", time: "20:00", color: "#8B5CF6", description: "공식 채널 방송" },
];

// 갤러리
const galleryItems = [
  { id: 1, title: "2023 우왁굳 생일", date: "2000. 00. 00.", image: "images/gallery/01_wgbirth.png", description: "" },
  { id: 2, title: "제목", date: "2000. 00. 00.", image: "images/gallery/02_soccer.jpg" ,description: "" },
  { id: 3, title: "제목", date: "2000. 00. 00.", image: "images/gallery/03_gomemhill.jpg", description: "" },
  { id: 4, title: "제목", date: "2000. 00. 00.", image: "images/gallery/04_school.png", description: "" },
  { id: 5, title: "제목", date: "2000. 00. 00.", image: "images/gallery/05_family.png", description: "" },
  { id: 6, title: "제목", date: "2000. 00. 00.", image: "images/gallery/06_endofyear.png", description: "" },
  { id: 7, title: "제목", date: "2000. 00. 00.", image: "images/gallery/07_popvirus.png", description: "" },
  { id: 8, title: "제목", date: "2000. 00. 00.", image: "images/gallery/08_mibal.jpg", description: "" },
  { id: 9, title: "제목", date: "2000. 00. 00.", image: "images/gallery/09_princess.png", description: "" },
  { id: 10, title: "제목", date: "2000. 00. 00.", image: "images/gallery/10_wander.jpg", description: "" },
  { id: 11, title: "제목", date: "2000. 00. 00.", image: "images/gallery/11_roki.png", description: "" },
  { id: 12, title: "제목", date: "2000. 00. 00.", image: "images/gallery/12_newyear.png", description: "" },
  { id: 13, title: "제목", date: "2000. 00. 00.", image: "images/gallery/13_baseball1.png", description: "" },
  { id: 14, title: "제목", date: "2000. 00. 00.", image: "images/gallery/14_baseball2.png", description: "" },
  { id: 15, title: "제목", date: "2000. 00. 00.", image: "images/gallery/15_summer.png", description: "" },
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
    height: "200",
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

function updatePlayButton(isPlaying) {
  $(".turntable").classList.toggle("is-playing", isPlaying);
  $("#music-play-icon").textContent = isPlaying ? "Ⅱ" : "▶";
  $("#music-play").setAttribute(
    "aria-label",
    isPlaying ? "일시정지" : "재생"
  );
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

  if (nextEvent) {
    $("#home-event-title").textContent = nextEvent.title;
    $("#home-event-count").textContent = nextEvent.days === 0 ? "오늘 열리는 일정" : `D-${nextEvent.days}`;
    $("#home-event-date").textContent =   nextEvent.date.split("-").join(". ") + ".";
  }
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
function openProfile(animateChange = false) {
  const member = memberById(selectedMemberId);
  if (!member) return;
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
  $("#profile-overlay").classList.add("is-open");
  $("#profile-overlay").setAttribute("aria-hidden", "false");
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
  $("#profile-overlay").classList.remove("is-open");
  $("#profile-overlay").setAttribute("aria-hidden", "true");
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

/* ---------- PAIR: 페어 상세 정보 ---------- */

// 페어 모달 열기
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

  closeArchiveOverlay("archive-lightbox");
  $("#pair-dossier").classList.add("is-open");
  $("#pair-dossier").setAttribute("aria-hidden", "false");
}

// 하단 멤버 클릭: 프로필 오버레이 열기
$("#dossier-content").addEventListener("click", event => {
  const memberButton = event.target.closest("[data-dossier-member]");

  if (memberButton) {
    const memberId = Number(memberButton.dataset.dossierMember);
    closeArchiveOverlay("pair-dossier");
    selectMember(memberId);
    navigateTo("members");
    openProfile();
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
  const filtered = songs.filter(song => activeSongFilter === "all" || song.kind === activeSongFilter);
  $("#record-grid").innerHTML = filtered.map(song => `
    <button class="record-item" data-song-id="${song.id}">
      <span class="album-cover">${song.cover ? `<img src="${escapeHTML(song.cover)}" alt="${escapeHTML(song.title)}" loading="lazy">` : `<span class="album-placeholder">G.A.<br>RECORDS</span>`}</span>
      <span class="record-title">${escapeHTML(song.title)}</span>
      <span class="record-artist">${escapeHTML(song.artist)}</span>
    </button>
  `).join("");
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


// 갤러리 그리드 렌더링
function renderGallery() {
  $("#gallery-grid").innerHTML = galleryItems.map(item => `
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
  `).join("");
}

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

  closeArchiveOverlay("pair-dossier");
  renderLightbox();

  $("#archive-lightbox").classList.add("is-open");
  $("#archive-lightbox").setAttribute("aria-hidden", "false");
}

function renderLightbox() {
  const index = galleryItems.findIndex(
    item => item.id === currentGalleryId
  );

  const item = galleryItems[index];
  if (!item) return;

  $("#lightbox-number").textContent =
    `사진 확대샷 / PHOTO ${String(index + 1).padStart(3, "0")} OF ${String(galleryItems.length).padStart(3, "0")}`;

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

  $("#lightbox-prev").disabled = galleryItems.length < 2;
  $("#lightbox-next").disabled = galleryItems.length < 2;
}

function stepLightbox(direction) {
  const index = galleryItems.findIndex(
    item => item.id === currentGalleryId
  );

  if (index < 0 || galleryItems.length < 2) return;

  const nextIndex =
    (index + direction + galleryItems.length) % galleryItems.length;

  currentGalleryId = galleryItems[nextIndex].id;
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

$$(".song-filter").forEach(button => button.addEventListener("click", () => {
  activeSongFilter = button.dataset.kind;
  $$(".song-filter").forEach(item => item.classList.toggle("is-active", item === button));
  renderSongGrid();
}));

// CALENDAR
$("#calendar-prev").addEventListener("click", () => moveCalendarMonth(-1));
$("#calendar-next").addEventListener("click", () => moveCalendarMonth(1));

$("#calendar-grid").addEventListener("click", event => {
  const dayButton = event.target.closest(".calendar-day[data-date]");
  if (!dayButton) return;

  selectCalendarDate(dayButton.dataset.date);
});

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
  if (dayButton) selectCalendarDate(dayButton.dataset.date);
});

// 공통 모달
function closeArchiveOverlay(id) {
  const overlay = document.getElementById(id);
  if (!overlay) return;

  overlay.classList.remove("is-open");
  overlay.setAttribute("aria-hidden", "true");
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

// 프로필 오버레이
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeProfile();
  if ($("#profile-overlay").classList.contains("is-open")) {
    if (event.key === "ArrowLeft") stepProfile(-1);
    if (event.key === "ArrowRight") stepProfile(1);
  }
});

// 라이트박스
document.addEventListener("keydown", event => {
  const lightboxOpen =
    $("#archive-lightbox").classList.contains("is-open");

  if (event.key === "Escape") {
    const openOverlay = ["pair-dossier", "archive-lightbox"]
      .find(id => $(`#${id}`).classList.contains("is-open"));

    if (openOverlay) {
      closeArchiveOverlay(openOverlay);
    }
    return;
  }

  if (lightboxOpen && event.key === "ArrowLeft") {
    stepLightbox(-1);
  }

  if (lightboxOpen && event.key === "ArrowRight") {
    stepLightbox(1);
  }
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
renderGallery();
renderLinks();
selectSong(songs[0]?.id, false);
$("#music-repeat").classList.add("is-active");