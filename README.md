# 🛡️ GuardBot AI - DevSecOps Git Auditor

GuardBot AI is a professional-grade full-stack application designed to automate the security auditing process for Git repositories. Built with **Spring Boot** and **React**, it leverages **LLM-powered analysis** to identify critical vulnerabilities, ensuring code safety in a modern DevSecOps lifecycle.

---

## ✨ Key Features
- **AI-Powered Audits**: Deep-scans codebases for SQL injection, hardcoded secrets, and XSS using Llama 3.1.
- **Structured Reporting**: Generates executive summaries and prioritized "High-Risk" fix lists.
- **Real-Time Integration**: Directly fetches and analyzes repository data via RESTful APIs.
- **Premium UI**: Responsive dashboard built with React and Tailwind CSS for security analysts.

---

## 🛠️ Tech Stack

### Backend
- **Java 17 / Spring Boot 3** (Core Logic)
- **Maven** (Dependency Management)
- **Groq AI SDK** (Security Analysis Engine)

### Frontend
- **React 18** (UI/UX)
- **Tailwind CSS** (Styling & Design System)
- **Lucide Icons** (Visual Language)
- **Axios** (API Communication)

---

## 💡 Strategic Design Decisions (Interview Prep)

When discussing this project in interviews, consider highlighting these points:

1.  **DevSecOps Automation**: "GuardBot addresses the 'shift-left' security philosophy by automating audits at the repository level before deployment."
2.  **Scalable Architecture**: "The separation of concerns between the Spring Boot backend and React frontend allows for independent scaling and modern microservice deployment."
3.  **Beyond Regex**: "Unlike traditional static analysis tools that rely on simple regex, GuardBot uses LLMs (Llama 3.1) to understand code context and logic-based vulnerabilities."

---

## 🔮 Future Roadmap
- [ ] **Full Repository Cloning**: Implement JGit integration for local deep-scanning of private repos.
- [ ] **CI/CD Integration**: Add GitHub Actions support to trigger audits on every Push/PR.
- [ ] **PDF Export**: Generate downloadable PDF security certificates for audited repos.
