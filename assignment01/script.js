const addBtn = document.getElementById("addEvent");
const eventList = document.getElementById("eventList");
const clearBtn = document.getElementById("clearAll");
const sampleBtn = document.getElementById("sample");

// Add Event
addBtn.addEventListener("click", () => {

    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    const category = document.getElementById("category").value;
    const desc = document.getElementById("desc").value;

    if (!title || !date) {
        alert("Please fill title and date");
        return;
    }

    addEventCard(title, date, category, desc);

    eventList.querySelector(".empty")?.remove();
});

// Create Event Card
function addEventCard(title, date, category, desc) {

    const card = document.createElement("div");
    card.classList.add("event-item");

    card.innerHTML = `
        <h4>${title}</h4>
        <p><b>Date:</b> ${date}</p>
        <p><b>Category:</b> ${category}</p>
        <p>${desc}</p>
        <button class="delete">Delete</button>
        <button class="highlight">Highlight</button>
    `;

    eventList.appendChild(card);
}

// Event Delegation
eventList.addEventListener("click", (e) => {

    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    }

    if (e.target.classList.contains("highlight")) {
        e.target.parentElement.style.background = "#ffeaa7";
    }
});

// Clear All Events
clearBtn.addEventListener("click", () => {
    eventList.innerHTML = `<p class="empty">No events yet. Add your first event!</p>`;
});

// Add Sample Events
sampleBtn.addEventListener("click", () => {
    addEventCard("Tech Conference", "2026-03-15", "Conference", "AI & ML Conference");
    addEventCard("Team Meeting", "2026-02-20", "Meeting", "Project Discussion");
});

// ---------------- DOM DEMO ----------------

const demo = document.getElementById("demoText");

document.getElementById("htmlOut").innerHTML = demo.innerHTML;
document.getElementById("textOut").innerText = demo.innerText;
document.getElementById("contentOut").textContent = demo.textContent;

// Key Press Demo
document.addEventListener("keydown", (e) => {
    document.getElementById("keyPress").textContent = e.key;
});