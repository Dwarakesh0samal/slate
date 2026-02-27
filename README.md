# ⚡ SLATE — B2B Content Repurposing Engine

> Transform raw transcripts into high-authority, domain-specific B2B social assets in seconds.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Express](https://img.shields.io/badge/Express-5-000000?logo=express&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)

---

## 🎯 What is SLATE?

SLATE is an **Investigative Journalist & High-Authority Content Strategist** engine built for elite B2B founders and operators. Paste a raw transcript, and SLATE extracts the "Economic Engine" — the financial bleed, the technical mechanism, and the ROI — then generates platform-ready social assets.

### The Problem

Most B2B content tools produce generic, template-driven output. They use the same SaaS jargon regardless of whether you're a factory operator, a commercial farmer, or a logistics CEO.

### The Solution

SLATE's **Domain Intelligence Layer** automatically detects your industry and adapts its vocabulary:

| Domain | Vocabulary |
|---|---|
| **Physical/Industrial** | Throughput, OEE, Downtime, CapEx |
| **Biological/AgTech** | Yield, Soil Health, Input Costs |
| **General Business** | ROI, Growth, Workflow |

---

## ✨ Features

### 🏠 Premium Landing Page
- Glassmorphic dark-theme design with animated gradients
- Live dashboard demo embedded in hero section
- One-click "Try Out for Free" navigation to the engine

### 🧠 Investigative Journalist Persona
- **The Bleed** — Extracts the financial loss or inefficiency
- **The Mechanism** — Identifies the specific technical solution
- **The ROI** — Surfaces the measurable outcome

### 📝 Multi-Format Asset Generation
- **LinkedIn Authority Post** — Hook with financial risk, body with domain vocabulary
- **X (Twitter) Thread** — 5-tweet fact-stack with metric-heavy hooks
- **60s Video Script** — Visual cues matched to the detected domain

### 🛡️ Anti-Templating Protocol
- Strict negative constraints prevent SaaS jargon in non-software domains
- Every insight is grounded in the source text, not generic advice
- Self-audit phase validates output before delivery

---

## 🏗️ Architecture

```
B2B/
├── app/                    # Frontend (React + Vite + Tailwind CSS)
│   ├── src/
│   │   ├── App.jsx         # Main application (Landing + Dashboard)
│   │   └── index.css       # Global styles
│   ├── public/
│   │   └── dashboard_demo.webp  # Animated hero demo
│   └── package.json
├── server/                 # Backend (Express.js)
│   ├── index.js            # API route + Domain Intelligence Engine
│   └── package.json
└── .agent/
    └── workflows/
        └── b2b-repurpose.md  # Reusable workflow definition
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+
- **npm** v9+

### 1. Clone the Repository

```bash
git clone https://github.com/Dwarakesh0samal/slate.git
cd slate
```

### 2. Install Dependencies

```bash
# Frontend
cd app
npm install

# Backend
cd ../server
npm install
```

### 3. Start the Backend Server

```bash
cd server
node index.js
# Server running on http://localhost:3001
```

### 4. Start the Frontend Dev Server

```bash
cd app
npm run dev
# App running on http://localhost:5173
```

### 5. Open the App

Navigate to [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🎮 Usage

1. **Landing Page** — Click **"Try Out for Free"** to enter the dashboard.
2. **Paste Transcript** — Drop your raw conversation, interview, or podcast notes into the Source Content field.
3. **Configure** — Set your Target Audience, Brand Voice, and Primary Goal.
4. **Generate** — Click **"Generate Assets"** and watch the Investigative Journalist engine extract insights.
5. **Copy & Deploy** — Use the one-click copy buttons to grab your LinkedIn post, Twitter thread, or video script.

---

## 🔌 API Reference

### `POST /api/repurpose`

**Request Body:**

```json
{
  "SOURCE_CONTENT": "Your raw transcript or content...",
  "TARGET_AUDIENCE": "Plant Managers",
  "BRAND_VOICE": "Professional and Skeptical",
  "PRIMARY_GOAL": "Lead Generation"
}
```

**Response:**

```json
{
  "analysis": {
    "domain_detected": "Physical/Industrial",
    "the_bleed": "$50k/hr downtime loss",
    "the_mechanism": "vibration sensors",
    "the_roi": "30% increase in throughput and 15% reduction in OEE"
  },
  "linkedin_post": "...",
  "twitter_thread": ["tweet_1", "tweet_2", "tweet_3", "tweet_4", "tweet_5"],
  "video_script": {
    "hook_visual": "...",
    "script_body": "..."
  }
}
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 19, Tailwind CSS 4, Framer Motion, Lucide Icons |
| **Backend** | Express.js 5, CORS, Body Parser |
| **Build Tool** | Vite 7 |
| **Styling** | Glassmorphism, Dark Theme, Gradient Animations |

---

## 📸 Screenshots

### Landing Page
Premium dark-theme landing with animated dashboard preview, feature grid (Domain Intelligence, Investigative Extraction, Anti-Templating), and a "Try Out for Free" CTA.

### Dashboard
Split-pane interface with a left input panel (Source Content, Target Audience, Brand Voice, Primary Goal) and a right output panel showing Strategic Briefing, LinkedIn Post, Twitter Thread, and Video Script cards.

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the ISC License.

---

## 👤 Author

**Dwarakesh Samal**

- GitHub: [@Dwarakesh0samal](https://github.com/Dwarakesh0samal)

---

> Built with conviction. No fluff. No templates. Just the economic truth of your operation.
