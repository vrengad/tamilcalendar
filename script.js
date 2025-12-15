/*********************************
 * TODAY – GREGORIAN DATE
 *********************************/
const today = new Date();

document.getElementById("gregorian-date").textContent =
  today.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

/*********************************
 * TAMIL DATE (Placeholder)
 * Later from Home Assistant / API
 *********************************/
const tamilDateLookup = {
  "2025-11-27": "Karthigai – 12, Subakrithu year"
};

const todayKey = today.toISOString().split("T")[0];

document.getElementById("tamil-date").textContent =
  tamilDateLookup[todayKey] || "Tamil date will update automatically";

/*********************************
 * MOON PHASE (Placeholder)
 *********************************/
document.getElementById("moon-phase").innerHTML =
  `<span class="icon">🌙</span> Valarpirai – Ashtami`;

/*********************************
 * IMPORTANT DAYS
 *********************************/
const importantDays = [
  { date: "Nov 29", title: "Pournami", desc: "Full Moon Day - Special Poojas" },
  { date: "Dec 05", title: "Karthigai Deepam", desc: "Festival of Lights", highlight: true },
  { date: "Dec 13", title: "Amavasai", desc: "Ancestor Worship" },
  { date: "Dec 15", title: "Pradosham", desc: "Shiva Pooja - Evening 4:30 PM" }
];

const daysContainer = document.getElementById("important-days");

importantDays.forEach(d => {
  daysContainer.innerHTML += `
    <div class="card event-card ${d.highlight ? "highlight-event" : ""}">
      <div class="event-date">${d.date}</div>
      <div class="event-details">
        <h3>${d.title}</h3>
        <p>${d.desc}</p>
      </div>
    </div>
  `;
});

/*********************************
 * TAMIL MOTIVATIONAL QUOTES
 *********************************/
const quotes = [
  { tamil: "முயற்சி திருவினையாக்கும்.", english: "Effort will bring success." },
  { tamil: "கற்றது கைமண் அளவு, கல்லாதது உலகளவு.", english: "What we have learned is small; what we haven't is vast." },
  { tamil: "யாதும் ஊரே யாவரும் கேளிர்.", english: "All towns are ours; all people are our kin." },
  { tamil: "தீதும் நன்றும் பிறர் தர வாரா.", english: "Good and bad do not come from others." },
  { tamil: "ஒன்று பட்டால் உண்டு வாழ்வு.", english: "Unity is strength." },
  { tamil: "அறம் செய்ய விரும்பு.", english: "Desire to do good deeds." }
];

const tamilQuoteEl = document.getElementById("tamil-quote");
const englishMeaningEl = document.getElementById("english-meaning");
const newQuoteBtn = document.getElementById("new-quote-btn");

let currentQuoteIndex = -1;

function showRandomQuote() {
  let index;
  do {
    index = Math.floor(Math.random() * quotes.length);
  } while (index === currentQuoteIndex);

  currentQuoteIndex = index;

  tamilQuoteEl.style.opacity = 0;
  englishMeaningEl.style.opacity = 0;

  setTimeout(() => {
    tamilQuoteEl.textContent = `"${quotes[index].tamil}"`;
    englishMeaningEl.textContent = quotes[index].english;
    tamilQuoteEl.style.opacity = 1;
    englishMeaningEl.style.opacity = 1;
  }, 300);
}

newQuoteBtn.addEventListener("click", showRandomQuote);

// Initial quote
showRandomQuote();
