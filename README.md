# 🎬 Movie Finder API Project

A sleek, responsive React application built with **Vite** and **Tailwind CSS v4** that allows users to search for their favorite films in real-time. This project features high-performance UI patterns like **API Debouncing** to ensure efficient data fetching.

## ✨ Features

* **Real-time Search:** Powered by the OMDb API.
* **API Debouncing:** Implemented via `useEffect` and `setTimeout` to reduce server load by waiting 500ms after the user stops typing before fetching.
* **Responsive Grid:** A fully mobile-responsive layout using Tailwind CSS (1 column on mobile, 2 on tablets, 3 on desktop).
* **Clean UI:** Modern dark-themed interface using **Lucide-React** icons and smooth transition effects.
* **Secure API Handling:** Environment variables used to protect sensitive API keys.

## 🛠️ Tech Stack

* **Frontend:** React 19+, Vite
* **Styling:** Tailwind CSS v4
* **Icons:** Lucide-React
* **API:** [OMDb API](http://www.omdbapi.com/)

## 🚀 Getting Started

### 1. Clone the repository
```
git clone [https://github.com/your-username/movie-finder.git](https://github.com/your-username/movie-finder.git)
cd movie-finder
```
### 2. Install dependencies
```
npm install
```
### 3. Environment Setup
Create a .env file in the root directory and add your OMDb API Key:
```
VITE_OMDB_API_KEY=your_api_key_here
```
### 4. Run the development server
```
npm run dev
```

## 🧠 What I Learned (The "useEffect" Journey)
This project was a deep dive into the useEffect hook. Key concepts covered include:

* Cleanup Functions: Using clearTimeout to "kill" previous API requests during fast typing.

* Dependency Arrays: Managing when a component should re-sync with external data.

* Derived State: Calculating UI states (like "Mobile View") from existing state rather than creating redundant variables.

* Asynchronous Patterns: Handling async/await inside the useEffect lifecycle safely.

## 📸 Preview
## Large Screen Size
<img width="1869" height="927" alt="屏幕截图 2026-04-07 234519" src="https://github.com/user-attachments/assets/e15c0956-df13-4043-b93b-da2b6e2c62d4" />

## Medium Screen Size
<img width="1037" height="877" alt="屏幕截图 2026-04-07 234558" src="https://github.com/user-attachments/assets/0736df5f-f0c5-454e-bd35-2d2b0b85c98d" />

## Small Screen Size
<img width="583" height="922" alt="屏幕截图 2026-04-07 234619" src="https://github.com/user-attachments/assets/a66e5e35-6d27-484d-a781-c1636eb42c97" />

## When not searching:
<img width="1894" height="927" alt="屏幕截图 2026-04-07 234541" src="https://github.com/user-attachments/assets/410a77d4-4b2a-474d-b4a2-f30bb71456a4" />
<img width="1887" height="929" alt="屏幕截图 2026-04-07 234533" src="https://github.com/user-attachments/assets/3c803350-24eb-4ae4-a7e5-0b8bc8c7a310" />

---
### 👨‍💻 About the Developer
Developed with ☕ by **Eric Lam**
*Computer Science Student @ University of Malaya*
