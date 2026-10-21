/* =========================================================
   기본 선언
   ========================================================= */


// 멤버
const members = [
  { id: 1, name: "닌닌", engname: "Ninnin", generation: "1기", birthday: "2005. 05. 12.", mbti: "ENTP", fandom: "조무래기", jappronouns: "私", channel: "SOOP", color: "#7150CE", image: "images/profile/01.png", portrait: "", description: "쿠노이치(가 될) 닌닌이다!", memo: "추가 프로필 및 관계 기록을 입력할 수 있습니다." },
  { id: 2, name: "미스 발렌타인", engname: "Miss Valentine", generation: "1기", birthday: "비공개", mbti: "ESTP", fandom: "미녀 ・ 미남", jappronouns: "私", channel: "SOOP", color: "#F5F5DC", image: "images/profile/02.png", portrait: "images/portrait/02.png", description: "이곳에 캐릭터를 소개하는 짧은 문장을 작성하세요.", memo: "추가 프로필 및 관계 기록을 입력할 수 있습니다." },
  { id: 3, name: "보디가드 불독", engname: "Bodyguard Bulldog", generation: "1기", birthday: "2000. 05. 31.", mbti: "INTP-T", fandom: "아가씨", jappronouns: "僕", channel: "SOOP", color: "#000000", image: "images/profile/03.png", portrait: "", description: "이곳에 캐릭터를 소개하는 짧은 문장을 작성하세요.", memo: "추가 프로필 및 관계 기록을 입력할 수 있습니다." },
  { id: 4, name: "시리안 레인", engname: "Sirian Rain", generation: "1기", birthday: "07. 28.", mbti: "ISTJ", fandom: "도넛단", jappronouns: "私", channel: "SOOP", color: "#2D4BC1", image: "images/profile/04.png", portrait: "", description: "이곳에 캐릭터를 소개하는 짧은 문장을 작성하세요.", memo: "추가 프로필 및 관계 기록을 입력할 수 있습니다." },
  { id: 5, name: "아마데우스최", engname: "Amadeus Choi", generation: "1기", birthday: "03. 13", mbti: "ENTJ", fandom: "아사단", jappronouns: "僕 ・ 私", channel: "SOOP", color: "#6B2929", image: "images/profile/test.png", portrait: "images/portrait/05.png", description: "이곳에 캐릭터를 소개하는 짧은 문장을 작성하세요.", memo: "추가 프로필 및 관계 기록을 입력할 수 있습니다." },
  { id: 6, name: "진희", engname: "Jinhe", generation: "1기", birthday: "05. 01.", mbti: "ENTP", fandom: "진미채", jappronouns: "オレ", channel: "SOOP", color: "#AAC484", image: "images/profile/06.png", portrait: "images/portrait/06.png", description: "이곳에 캐릭터를 소개하는 짧은 문장을 작성하세요.", memo: "추가 프로필 및 관계 기록을 입력할 수 있습니다." },
  { id: 7, name: "캡틴 설리반", engname: "Captain Sullivan", generation: "1기", birthday: "09. 27.", mbti: "ENTP", fandom: "-", jappronouns: "俺 ・ 船長", channel: "SOOP", color: "#BB1111", image: "images/profile/test.png", portrait: "", description: "이곳에 캐릭터를 소개하는 짧은 문장을 작성하세요.", memo: "추가 프로필 및 관계 기록을 입력할 수 있습니다." },
  { id: 8, name: "사랑전도사 젠투", engname: "Love Missionary Jentoo", generation: "2기", birthday: "02. 23.", mbti: "ESFP", fandom: "젠크리트", jappronouns: "僕 ・ 私", channel: "SOOP", color: "#FF80E6", image: "images/profile/08.png", portrait: "images/portrait/08.png", description: "이곳에 캐릭터를 소개하는 짧은 문장을 작성하세요.", memo: "추가 프로필 및 관계 기록을 입력할 수 있습니다." },
  { id: 9, name: "수셈이", engname: "Soosemi", generation: "2기", birthday: "03. 02.", mbti: "ISTJ", fandom: "고기세제비실벌벌쫄보카피바라단", jappronouns: "僕", channel: "SOOP", color: "#425342", image: "images/profile/test.png", portrait: "images/portrait/09.png", description: "이곳에 캐릭터를 소개하는 짧은 문장을 작성하세요.", memo: "추가 프로필 및 관계 기록을 입력할 수 있습니다." },
  { id: 10, name: "철도왕 길버트", engname: "Vanderbilt Gilbert", generation: "2기", birthday: "1801. 06. 27.", mbti: "INTP", fandom: "전쟁고멤 ・ 석탄단 ・ 철도단", jappronouns: "俺", channel: "SOOP", color: "#343F7E", image: "images/profile/10.png", portrait: "images/portrait/10.png", description: "이곳에 캐릭터를 소개하는 짧은 문장을 작성하세요.", memo: "추가 프로필 및 관계 기록을 입력할 수 있습니다." },
  { id: 11, name: "미미짱짱세용", engname: "Mimi Chan-chan Seyong", generation: "3기", birthday: "08. 01.", mbti: "INFP", fandom: "둥지단 ・ 둥둥이", jappronouns: "わたし", channel: "SOOP", color: "#ABCDEC", image: "images/profile/11.png", portrait: "images/portrait/11.png", description: "이곳에 캐릭터를 소개하는 짧은 문장을 작성하세요.", memo: "추가 프로필 및 관계 기록을 입력할 수 있습니다." },
  { id: 12, name: "빅토리", engname: "Victory", generation: "3기", birthday: "2001. 02. 19.", mbti: "ESFP", fandom: "빅타민", jappronouns: "私", channel: "SOOP", color: "#FFC15C", image: "images/profile/12.png", portrait: "images/portrait/12.png", description: "이곳에 캐릭터를 소개하는 짧은 문장을 작성하세요.", memo: "추가 프로필 및 관계 기록을 입력할 수 있습니다." },
  { id: 13, name: "데스해머쵸로키", engname: "Death Hammer Chouloky", generation: "4기", birthday: "2004. 07. 17.", mbti: "ISFP", fandom: "허접구리", jappronouns: "あたし", channel: "SOOP", color: "#6AA937", image: "images/profile/13.png", portrait: "", description: "이곳에 캐릭터를 소개하는 짧은 문장을 작성하세요.", memo: "추가 프로필 및 관계 기록을 입력할 수 있습니다." },
  { id: 14, name: "아이 쓰께끼", engname: "I Cekkekki", generation: "4기", birthday: "꼬깔단", mbti: "-", fandom: "06. 29.", jappronouns: "ボク", channel: "SOOP", color: "#A7E6F0", image: "images/profile/test.png", portrait: "", description: "이곳에 캐릭터를 소개하는 짧은 문장을 작성하세요.", memo: "추가 프로필 및 관계 기록을 입력할 수 있습니다." },
  { id: 15, name: "크리즈", engname: "Kreaze", generation: "4기", birthday: "비공개", mbti: "-", fandom: "-", jappronouns: "我", channel: "SOOP", color: "#787878", image: "images/profile/15.png", portrait: "", description: "이곳에 캐릭터를 소개하는 짧은 문장을 작성하세요.", memo: "추가 프로필 및 관계 기록을 입력할 수 있습니다." },
  { id: 16, name: "버터우스 3세", engname: "Butterus III", generation: "5기", birthday: "11. 10.", mbti: "ENTJ", fandom: "백성단", jappronouns: "余", channel: "SOOP", color: "#C2A46E", image: "images/profile/16.png", portrait: "images/portrait/16.png", description: "이곳에 캐릭터를 소개하는 짧은 문장을 작성하세요.", memo: "추가 프로필 및 관계 기록을 입력할 수 있습니다." },
  { id: 17, name: "성기사 샬롯", engname: "Castle Knight Charlotte", generation: "5기", birthday: "07. 15.", mbti: "INTP", fandom: "때지", jappronouns: "私", channel: "SOOP", color: "#B41432", image: "images/profile/17.png", portrait: "images/portrait/17.png", description: "이곳에 캐릭터를 소개하는 짧은 문장을 작성하세요.", memo: "추가 프로필 및 관계 기록을 입력할 수 있습니다." },
  { id: 18, name: "메카 맹기산", engname: "Mecha Maeng Gisan", generation: "6기", birthday: "11. 24.", mbti: "-", fandom: "-", jappronouns: "オレ", channel: "SOOP", color: "#8C6B4B", image: "images/profile/18.png", portrait: "", description: "이곳에 캐릭터를 소개하는 짧은 문장을 작성하세요.", memo: "추가 프로필 및 관계 기록을 입력할 수 있습니다." }
];

// 페어
const pairs = [
  { id: "1", title: "여카데미", members: [1, 2, 4, 11, 12, 13, 17], image: "", category: ["여성"], description: "이 조합의 관계성이나 대표적인 장면을 기록하세요." },
  { id: "2", title: "남카데미", members: [3, 5, 6, 7, 8, 9, 10, 14, 15, 16, 18], image: "", category: ["남성"], description: "아카데미 반기를 올려" },
  { id: "3", title: "GTS", members: [6, 9, 10], image: "", category: ["학예회", "남성"], description: "이 조합의 관계성이나 대표적인 장면을 기록하세요." },
  { id: "4", title: "러브 미스 피스", members: [2, 4, 8], image: "", category: ["학예회"], description: "이 조합의 관계성이나 대표적인 장면을 기록하세요." },
  { id: "5", title: "아닌말곰", members: [1, 3, 5, 7], image: "", category: ["학예회"], description: "이 조합의 관계성이나 대표적인 장면을 기록하세요." },
  { id: "6", title: "JJ", members: [6, 8], image: "", category: ["남성", "듀오"], description: "이 조합의 관계성이나 대표적인 장면을 기록하세요." },
  { id: "7", title: "용토리", members: [11, 12], image: "", category: ["기수별", "여성", "듀오"], description: "이 조합의 관계성이나 대표적인 장면을 기록하세요." },
  { id: "8", title: "께진발", members: [2, 6, 14], image: "", category: ["작곡캠프"], description: "이 조합의 관계성이나 대표적인 장면을 기록하세요." },
  { id: "9", title: "RYKY", members: [12, 13], image: "", category: ["작곡캠프", "여성", "듀오"], description: "이 조합의 관계성이나 대표적인 장면을 기록하세요." },
  { id: "10", title: "메이지 유신즈", members: [1, 10], image: "images/pair/ningil.png", category: ["듀오"], description: "콜라겐과 비타민, 나트륨 뢴트게늄, 호프, 샬레, 메스실린더!" },
  { id: "11", title: "아카츠키", members: [3, 5, 7, 9], image: "", category: ["대회", "남성"], description: "이 조합의 관계성이나 대표적인 장면을 기록하세요." },
  { id: "12", title: "트레인포스", members: [8, 10, 12], image: "", category: ["대회"], description: "이 조합의 관계성이나 대표적인 장면을 기록하세요." },
  { id: "13", title: "몬스터 주식회사", members: [1, 4, 6, 11], image: "", category: ["대회"], description: "이 조합의 관계성이나 대표적인 장면을 기록하세요." },
  { id: "14", title: "배틀크루져", members: [6, 8, 10, 16], image: "images/pair/battlecruiser.png", category: ["대회", "남성"], description: "모두 우릴 쳐다봐, 거함 배틀크루져!" },
  { id: "15", title: "도둑고양이", members: [4, 5, 9, 12], image: "", category: ["대회"], description: "이 조합의 관계성이나 대표적인 장면을 기록하세요." },
  { id: "16", title: "기산시불셈키", members: [3, 4, 9, 13, 18], image: "", category: ["대회"], description: "이 조합의 관계성이나 대표적인 장면을 기록하세요." },
  { id: "17", title: "패티다져스", members: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16, 17], image: "", category: ["대회"], description: "이 조합의 관계성이나 대표적인 장면을 기록하세요." },
  { id: "18", title: "2기즈", members: [8, 9, 10], image: "images/pair/2nd.png", category: ["기수별", "남성"], description: "“근데 전 오히려 2기즈를 보고 싶어요”" },
];

// 노래
const songs = [
  {
    id: 1,
    title: "종천지모",
    artist: "사랑전도사 젠투",
    kind: "original",
    cover: "images/album/jongchunjimo.jpg",
    audio: "audio/jongchunjimo.wav",
    year: "2025"
  },
  {
    id: 2,
    title: "Wander",
    artist: "수셈이",
    kind: "original",
    cover: "images/album/wander.png",
    audio: "audio/wander.mp3",
    year: "2025"
  },
  {
    id: 3,
    title: "MONO DRAMA (feat. 성기사 샬롯)",
    artist: "철도왕 길버트",
    kind: "cover",
    cover: "images/album/monodrama.png",
    audio: "audio/monodrama.wav",
    year: "2025"
  }
];

// 갤러리
const galleryItems = [
  { id: 1, title: "2023 우왁굳 생일", date: "2000. 00. 00.", image: "images/gallery/01_wgbirth.png", description: "", memberIds: [2], pairIds: [1] },
  { id: 2, title: "제목", date: "2000. 00. 00.", image: "images/gallery/02_soccer.jpg", description: "", memberIds: [2, 5, 6], pairIds: [2, 3, 4] }
]

// 링크
const links = [
  { title: "우왁굳", description: "우왁굳 유튜브 채널", label: "유튜브", icon: "N", url: "https://www.youtube.com/@woowakgood" },
  { title: "우왁굳", description: "우왁굳 방송국 바로가기", label: "SOOP", icon: "▶", url: "https://www.sooplive.com/station/ecvhao" },
  { title: "왁타버스 WAKTAVERSE", description: "왁타버스 메인 유튜브 채널", label: "유튜브", icon: "S", url: "https://www.youtube.com/channel/UCzh4yY8rl38knH33XpNqXbQ" },
  { title: "왁타버스 ZERO", description: "방송 다시보기 및 고멤 놀이터", label: "유튜브", icon: "↗", url: "https://www.youtube.com/channel/UCZOcwheypMvYN_J2oRBgt2A" },
  { title: "고카 상사", description: "공식 사내 커뮤니티", label: "홈페이지", icon: "+", url: "https://goca-company.sp0907sh.chatgpt.site/" },
  { title: "아카데미 플레이리스트", description: "아카데미생들의 추천곡 모음", label: "유튜브 재생목록", icon: "+", url: "https://www.youtube.com/playlist?list=PLStHIETtt5OxgxpMb_1hohY9NuF9g5sN8" },
  { title: "패러블 엔터테인먼트", description: "우왁굳이 소속된 MCN", label: "홈페이지", icon: "✳", url: "#" }
];

// 다가오는 일정
const homeEvents = [ 
  { title: "고카 상사", date: "2026-10-25", category: "합방" }
  // 예: { title: "아카데미 공개 방송", date: "2026-11-01", category: "방송" }
];

// 최근 업데이트
const homeArchiveEntries = [
  { date: "2026.10.21", title: "PAIR 상세 기록 · GALLERY 라이트박스 추가" },
  { date: "2026.10.21", title: "홈페이지 정보 구조 및 링크 정리" },
  { date: "2026.10.20", title: "하단 뮤직 플레이어 추가" }
];


/* =========================================================
   공통 함수
   ========================================================= */


const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
let selectedMemberId = members[0]?.id ?? null;
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
function setAccent(color = "#A9DCCB") {
  document.documentElement.style.setProperty("--accent", color);
  const hex = color.replace("#", "");
  const normalized = hex.length === 3 ? hex.split("").map(ch => ch + ch).join("") : hex;
  const rgb = normalized.match(/.{2}/g)?.map(value => parseInt(value, 16)) || [169, 220, 203];
  document.documentElement.style.setProperty("--accent-rgb", rgb.join(","));
}


/* =========================================================
   페이지 별 함수
   ========================================================= */


/* ---------- 내비게이션 바 ---------- */
function navigateTo(sectionId) {
  const target = $(`[data-page="${sectionId}"]`);
  if (!target) return;
  $$(".page-section").forEach(section => section.classList.toggle("is-current", section === target));
  $$(".nav-btn").forEach(link => link.classList.toggle("is-active", link.dataset.section === sectionId));
  $(".nav-btn-wrap").classList.remove("is-open");
  $(".menu-toggle").setAttribute("aria-expanded", "false");
  $("#profile-overlay").classList.remove("is-open");
  $("#profile-overlay").setAttribute("aria-hidden", "true");
  setAccent("#A9DCCB");
}

/* ---------- HOME ---------- */

// 다가오는 생일 계산
function parseBirthdayMonthDay(value) {
  const match = String(value || "").match(/^\s*(?:\d{4}[./-]\s*)?(\d{1,2})[./-]\s*(\d{1,2})\.?\s*$/);
  if (!match) return null;

  const month = Number(match[1]);
  const day = Number(match[2]);
  const probe = new Date(Date.UTC(2024, month - 1, day));

  if (probe.getUTCMonth() !== month - 1 || probe.getUTCDate() !== day) return null;
  return { month, day };
}

// D-Day 계산
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
      `${String(nextBirthday.birthday.month).padStart(2, "0")}.${String(nextBirthday.birthday.day).padStart(2, "0")} / ${nextBirthday.member.generation || "ACADEMY"}`;
    const heroImage = $("#home-birthday-image");
    const heroImageSrc = nextBirthday.member.image || nextBirthday.member.portrait;

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
    $("#home-birthday-date").textContent = "BIRTHDAY ARCHIVE";
    $("#home-birthday-image").removeAttribute("src");
    $("#home-birthday-image").hidden = true;
  }

  const upcomingEvents = homeEvents
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
    $("#home-event-count").textContent = nextEvent.days === 0 ? "오늘 열리는 일정" : `D-${nextEvent.days} · ${nextEvent.category || "아카데미 일정"}`;
    $("#home-event-date").textContent = nextEvent.date.replaceAll("-", ".");
  }

  $("#home-archive-list").innerHTML = homeArchiveEntries.slice(0, 3).map(entry => `
    <li><span class="home-archive-date">${escapeHTML(entry.date)}</span><span class="home-archive-title">${escapeHTML(entry.title)}</span></li>
  `).join("");
}

/* ---------- MEMBERS ---------- */

// 멤버 카드 렌더링
function renderMembers() {
  $("#member-rail").innerHTML = members.map(member => `
    <button
      id="member-${member.id}"
      class="member-card ${member.id === selectedMemberId ? "is-selected" : ""}"
      data-member-id="${member.id}"
      style="--member-accent:${member.color}"
      aria-pressed="${member.id === selectedMemberId}">
      <div class="member-thumb">
        ${imageMarkup(member.image, `MEMBER ${String(member.id).padStart(2, "0")}`)}
      </div>
      <span class="member-card-num">
        NO. ${String(member.id).padStart(2, "0")}
      </span>
      <span class="member-card-name">
        ${escapeHTML(member.name)}
      </span>
    </button>
  `).join("");
}

$("#member-rail").addEventListener("click", event => {
  const card = event.target.closest("[data-member-id]");
  if (!card) return;
  const clickedMemberId = Number(card.dataset.memberId);

  if (clickedMemberId === selectedMemberId) {
    openProfile();
    return;
  }

  selectMember(clickedMemberId);
});

// 멤버 선택
function selectMember(id) {
  const member = memberById(id);
  if (!member) return;
  selectedMemberId = member.id;
  setAccent(member.color);
  renderMembers();
}

// 프로필 오버레이 열기
function openProfile(animateChange = false) {
  const member = memberById(selectedMemberId);
  if (!member) return;
  setAccent(member.color);
  $("#profile-name").textContent = member.name;
  $("#profile-engname").textContent = member.engname;
  $("#profile-quote").textContent = member.description || "A record waiting to be written.";
  $("#profile-birthday").textContent = member.birthday || "—";
  $("#profile-mbti").textContent = member.mbti || "—";
  $("#profile-fandom").textContent = member.fandom || "—";
  $("#profile-jappronouns").textContent = member.jappronouns || "—";
  $("#profile-generation").textContent = member.generation || "—";
  $("#profile-channel").textContent = member.channel || "—";
  $("#profile-notes").textContent = member.memo || "No additional notes recorded.";
  $("#profile-standing").innerHTML = imageMarkup(member.image, `PORTRAIT / ${member.name}`);
  $("#profile-position").textContent = `${String(members.findIndex(item => item.id === member.id) + 1).padStart(2, "0")} / ${String(members.length).padStart(2, "0")}`;
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
  setAccent("#A9DCCB");
}

function stepProfile(direction) {
  const index = members.findIndex(item => item.id === selectedMemberId);
  const next = (index + direction + members.length) % members.length;
  selectMember(members[next].id);
  openProfile(true);
}

/* ---------- PAIR ---------- */

// 페어 카드 렌더링
function renderPairs() {
  const filters = ["전체", "기수별", "학예회", "작곡캠프", "여성", "남성", "듀오"];

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

// 페어 상세 정보 모달 열기
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
    `RELATIONSHIP DOSSIER / NO. ${String(pair.id).padStart(2, "0")}`;

  $("#dossier-content").innerHTML = `
    <div class="dossier-hero">
      <div class="dossier-cover">
        ${imageMarkup(pair.image, pair.title)}
      </div>

      <div class="dossier-heading">
        <span class="music-label">RELATIONSHIP RECORD</span>
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

  closeArchiveOverlay("evidence-board");
  closeArchiveOverlay("archive-lightbox");
  $("#pair-dossier").classList.add("is-open");
  $("#pair-dossier").setAttribute("aria-hidden", "false");
}

// 하단 페어&사진 클릭 이벤트
$("#dossier-content").addEventListener("click", event => {
  const memberButton = event.target.closest("[data-dossier-member]");
  const photoButton = event.target.closest("[data-dossier-photo]");

  if (memberButton) {
    const memberId = Number(memberButton.dataset.dossierMember);
    closeArchiveOverlay("pair-dossier");
    selectMember(memberId);
    navigateTo("members");
    openProfile();
    return;
  }

  if (photoButton) {
    openLightbox(Number(photoButton.dataset.dossierPhoto));
  }
});

/* ---------- GALLERY ---------- */

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

function openLightbox(id) {
  const item = galleryItems.find(photo => photo.id === Number(id));
  if (!item) return;

  currentGalleryId = item.id;

  closeArchiveOverlay("pair-dossier");
  closeArchiveOverlay("evidence-board");

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

  $("#lightbox-counter").textContent =
    `ARCHIVE VIEWER / PHOTO ${String(index + 1).padStart(3, "0")} OF ${String(galleryItems.length).padStart(3, "0")}`;

  $("#lightbox-image-wrap").innerHTML = item.image
    ? `<img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)}">`
    : `<span>NO IMAGE AVAILABLE</span>`;

  const memberNames = (item.memberIds || [])
    .map(memberById)
    .filter(Boolean)
    .map(member => member.name);

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

// 사진 클릭 이벤트
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

$("#lightbox-prev").addEventListener("click", () => stepLightbox(-1));
$("#lightbox-next").addEventListener("click", () => stepLightbox(1));

/* ---------- SONG ---------- */

// 앨범 그리드 렌더
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

  const audio = $("#music-audio");
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
  if (audio.getAttribute("src") !== song.audio) {
    audio.src = song.audio;
    audio.load();
  }

  audio.loop = repeatMode === "one";
  updateProgress();

  if (autoplay) {
    playMusic();
  }
}

/* ---------- 하단 뮤직 플레이어 ---------- */

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
  const audio = $("#music-audio");
  const currentTime = audio.currentTime || 0;
  const duration = audio.duration;

  $("#music-current-time").textContent = formatTime(currentTime);
  $("#music-duration").textContent = formatTime(duration);

  $("#music-seek").value =
    Number.isFinite(duration) && duration > 0
      ? (currentTime / duration) * 100
      : 0;
}

async function playMusic() {
  const audio = $("#music-audio");

  try {
    await audio.play();
    updatePlayButton(true);
  } catch (error) {
    updatePlayButton(false);
    console.warn("음원을 재생할 수 없습니다.", error);
  }
}

function toggleMusicPlayback() {
  const audio = $("#music-audio");

  if (audio.paused) {
    playMusic();
  } else {
    audio.pause();
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
    const audio = $("#music-audio");
    audio.pause();
    audio.currentTime = 0;
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

  const audio = $("#music-audio");
  audio.loop = repeatMode === "one";

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

/* ---------- LINKS ---------- */

// 링크 카드 렌더링
function renderLinks() {
  $("#link-scroll").innerHTML = links.map((link, index) => `
    <a class="link-card" href="${escapeHTML(link.url)}" ${link.url !== "#" ? 'target="_blank" rel="noopener noreferrer"' : ""}>
      <span class="link-card-icon">${escapeHTML(link.icon)}</span>
      <strong>${escapeHTML(link.title)}</strong>
      <p>${escapeHTML(link.description)}</p>
      <span class="link-out">${escapeHTML(link.label)} ↗</span>
    </a>
  `).join("");
}

/* =========================================================
   이벤트
   ========================================================= */

$$(".nav-btn").forEach(button => button.addEventListener("click", () => navigateTo(button.dataset.section)));
$(".menu-toggle").addEventListener("click", () => {
  const nav = $(".nav-btn-wrap");
  const open = nav.classList.toggle("is-open");
  $(".menu-toggle").setAttribute("aria-expanded", String(open));
});
$("#close-profile").addEventListener("click", closeProfile);
$("#profile-prev").addEventListener("click", () => stepProfile(-1));
$("#profile-next").addEventListener("click", () => stepProfile(1));
$("#pair-filter").addEventListener("click", event => {
  const button = event.target.closest("[data-pair-filter]");
  if (!button) return;
  activePairFilter = button.dataset.pairFilter;
  renderPairs();
});
$("#record-grid").addEventListener("click", event => {
  const item = event.target.closest("[data-song-id]");
  if (item) selectSong(item.dataset.songId, true);
});
$$(".song-filter").forEach(button => button.addEventListener("click", () => {
  activeSongFilter = button.dataset.kind;
  $$(".song-filter").forEach(item => item.classList.toggle("is-active", item === button));
  renderSongGrid();
}));
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeProfile();
  if ($("#profile-overlay").classList.contains("is-open")) {
    if (event.key === "ArrowLeft") stepProfile(-1);
    if (event.key === "ArrowRight") stepProfile(1);
  }
});

// 페어 카드 뒤집기
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

function closeArchiveOverlay(id) {
  const overlay = document.getElementById(id);
  if (!overlay) return;

  overlay.classList.remove("is-open");
  overlay.setAttribute("aria-hidden", "true");
}

// 버튼으로 닫기
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

// 키보드 조작
document.addEventListener("keydown", event => {
  const lightboxOpen =
    $("#archive-lightbox").classList.contains("is-open");

  if (event.key === "Escape") {
    const openOverlay = [
      "evidence-board",
      "pair-dossier",
      "archive-lightbox"
    ].find(id => $(`#${id}`).classList.contains("is-open"));

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

/* ---------- 뮤직 플레이어 이벤트 ---------- */

$("#music-play").addEventListener("click", toggleMusicPlayback);

$("#music-prev").addEventListener("click", playPreviousSong);

$("#music-next").addEventListener("click", () => {
  playNextSong(false);
});

$("#music-repeat").addEventListener("click", toggleRepeatMode);

// 재생 시간과 재생 바 갱신
$("#music-audio").addEventListener("play", () => updatePlayButton(true));
$("#music-audio").addEventListener("pause", () => updatePlayButton(false));
$("#music-audio").addEventListener("timeupdate", updateProgress);
$("#music-audio").addEventListener("loadedmetadata", updateProgress);
$("#music-audio").addEventListener("durationchange", updateProgress);

// 재생 바를 움직이면 해당 위치부터 재생
$("#music-seek").addEventListener("input", event => {
  const audio = $("#music-audio");

  if (Number.isFinite(audio.duration) && audio.duration > 0) {
    audio.currentTime =
      (Number(event.target.value) / 100) * audio.duration;
  }
});

// 곡이 끝났을 때 다음 곡으로 이동
$("#music-audio").addEventListener("ended", () => {
  updatePlayButton(false);
  playNextSong(true);
});

// 브라우저가 파일을 불러오지 못한 경우
$("#music-audio").addEventListener("error", () => {
  updatePlayButton(false);
  console.warn("음원 파일을 불러오지 못했습니다. 파일 경로를 확인해 주세요.");
});


/* =========================================================
   이니셜 렌더
   ========================================================= */


renderHomeWidgets();
renderMembers();
renderPairs();
renderSongs();
renderGallery();
renderLinks();
selectSong(songs[0]?.id, false);
$("#music-repeat").classList.add("is-active");