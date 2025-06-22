# ⏱️ Mini Time Tracker

Mini Time Tracker is a  time-tracking app built for productivity. Track your tasks, log hours manually or with a timer.

# ✨ Features

- ✅ Add tasks with hours manually or via built-in timer
- 📝 Edit or delete existing time entries
- ⏲️ Toggle a timer to automatically track work duration
- 📊 See total hours worked and number of entries
- ⚠️ Input validation to prevent empty or invalid entries
- 🚀 Clean and minimal UI with light theme

# 🌐 Live Demo : https://mini-time-tracker-three.vercel.app/

# 🚀 Setup and Run Instructions
1. **Clone the repo:**

- git clone https://github.com/Thabo-Tshabalala/mini-time-tracker.git
- cd mini-time-tracker

2. **Install dependencies:**
- npm install
  
3. **Run the App**
- npm run dev

4. **Once running, open your browser and navigate to:**
http://localhost:5173/

# ⚖️ Assumptions and Trade-offs
- Time entries are stored in React state only, no backend.
- Input validation prevents empty task names and negative or zero hours.
- Timer and manual input are treated as separate options: users can input hours manually or use the timer,
but the app currently allows both inputs simultaneously. Manual input overrides the timer value if both are filled.
- Minimal UI for simplicity : Focused on functionality.

# 🔧 What I'd Improve With More Time

- Add persistent storage (localStorage or backend API) to save entries.
- Add Unit Tests
- Add user authentication to save personalized time logs.
- Enhance timer with pause/resume functionality.
- Display date and time when each entry was created.
- Disable manual input when timer is running or vice versa to avoid dual input confusion.
- Add filtering, sorting, and export features for entries.
