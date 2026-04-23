# GuardBot AI - DevSecOps Git Auditor

A full-stack application built with **Spring Boot** and **React** that uses AI to analyze GitHub repositories for security vulnerabilities.

## 🚀 How to Run

### 1. Backend (Spring Boot)
1. Go to the `backend` folder.
2. Run `./mvnw spring-boot:run` (or use your IDE like IntelliJ/Eclipse).
3. The API will start on `http://localhost:8080`.

### 2. Frontend (React)
1. Go to the `frontend` folder.
2. Run `npm install` and then `npm run dev`.
3. Open `http://localhost:5173` in your browser.

---

## 💡 Interview Talking Points (for AutoRABIT)

When they ask you about this project, mention these points:

1.  **DevSecOps Alignment:** "I built this because I wanted to see how AI can improve the DevSecOps lifecycle by automating security audits directly from Git repositories."
2.  **Full-Stack Capability:** "I used **Spring Boot** for the backend because of its robustness in enterprise environments and **React** for a premium, responsive UI."
3.  **Scalability & Metadata:** "The backend is designed to interact with Git metadata (using JGit) and process large files, which is similar to how AutoRABIT handles Salesforce metadata."
4.  **AI Integration:** "I integrated an LLM to perform the actual vulnerability analysis, which allows the tool to detect complex patterns like SQL injection or hardcoded secrets that simple regex might miss."
5.  **Microservices Ready:** "The architecture separates the frontend and backend, making it easy to deploy as separate microservices."

---

## 🛠️ Tech Stack
- **Backend:** Java 17, Spring Boot 3, Maven, JGit.
- **Frontend:** React 18, Tailwind CSS, Lucide Icons, Axios.
- **AI:** LLM Integration (OpenAI/Gemini/Mock).
# GuardBot-AI
