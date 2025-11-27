// Array of Tamil Quotes
const quotes = [
    {
        tamil: "முயற்சி திருவினையாக்கும்.",
        english: "Effort will bring success."
    },
    {
        tamil: "கற்றது கைமண் அளவு, கல்லாதது உலகளவு.",
        english: "What we have learned is like a handful of earth; what we have not learned is like the size of the world."
    },
    {
        tamil: "யாதும் ஊரே யாவரும் கேளிர்.",
        english: "To us all towns are one, all men our kin."
    },
    {
        tamil: "தீதும் நன்றும் பிறர் தர வாரா.",
        english: "Good and bad do not come from others."
    },
    {
        tamil: "ஒன்று பட்டால் உண்டு வாழ்வு.",
        english: "Unity is strength."
    },
    {
        tamil: "அறம் செய்ய விரும்பு.",
        english: "Desire to do good deeds."
    },
    {
        tamil: "காலம் பொன் போன்றது.",
        english: "Time is like gold (Time is precious)."
    }
];

// DOM Elements
const tamilQuoteElement = document.getElementById('tamil-quote');
const englishMeaningElement = document.getElementById('english-meaning');
const newQuoteBtn = document.getElementById('new-quote-btn');

// State
let currentQuoteIndex = 0;

// Function to update the quote display
function displayQuote(index) {
    const quote = quotes[index];
    
    // Add fade-out effect
    tamilQuoteElement.style.opacity = 0;
    englishMeaningElement.style.opacity = 0;
    
    setTimeout(() => {
        tamilQuoteElement.textContent = `"${quote.tamil}"`;
        englishMeaningElement.textContent = quote.english;
        
        // Add fade-in effect
        tamilQuoteElement.style.opacity = 1;
        englishMeaningElement.style.opacity = 1;
    }, 300);
}

// Event Listener for the button
newQuoteBtn.addEventListener('click', () => {
    // Get a random index different from the current one
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * quotes.length);
    } while (newIndex === currentQuoteIndex && quotes.length > 1);
    
    currentQuoteIndex = newIndex;
    displayQuote(currentQuoteIndex);
});

// Initialize with the first quote (or random)
// displayQuote(0); // Already in HTML, but we can randomize on load if desired.
// Let's randomize on load to make it dynamic
currentQuoteIndex = Math.floor(Math.random() * quotes.length);
displayQuote(currentQuoteIndex);
