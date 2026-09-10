# Real-Time System Metrics Dashboard

A full-stack web application that monitors and displays live server metrics (**CPU**, **RAM**, and **Disk** usage) via a FastAPI backend and a lightweight vanilla-JS frontend.

---

## 🚀 Features

- Live CPU, RAM, and Disk usage percentages, read via `psutil`
- Single REST endpoint (`/api/metrics`) polled every 2 seconds by the frontend
- Animated progress bars — no frontend framework or build step required
- Fully containerized with Docker Compose (FastAPI backend + Nginx-served frontend)

---

## 🛠️ Tech Stack

- **Backend:** Python (FastAPI), `psutil`
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Deployment:** Docker & Docker Compose (Nginx service for the frontend)

---

## 📦 Getting Started

### Prerequisites

Make sure you have Docker and Docker Compose installed on your system.

### Installation & Running

1. **Clone the repository:**

```bash
git clone https://github.com/sina-mansouri/system-metrics-dashboard.git
cd system-metrics-dashboard
```

> ⚠️ Before building, see **[Known Issues](#-known-issues--notes)** below — the `Dockerfile` currently has a one-line bug that will stop the backend container from starting.

2. **Start the multi-container environment:**

```bash
docker compose up -d --build
```

3. **Open your browser:**

- Frontend Dashboard: <http://localhost:8080>
- Backend API Docs (Swagger UI): <http://localhost:8000/docs>

---

## 🔌 API Endpoint

| Method | Endpoint       | Description                                           |
|--------|----------------|----------------------------------------------------------|
| GET    | `/api/metrics` | Returns current `cpu`, `ram`, and `disk` usage as percentages |

---

## 📂 Project Structure

```
system-metrics-dashboard/
├── app/
│   ├── main.py           # FastAPI app: /api/metrics
│   └── requirements.txt
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── Dockerfile
├── docker-compose.yml
├── .gitignore
├── LICENSE
└── README.md
```

---

## 🐞 Known Issues / Notes

- **🔴 Breaking bug in `Dockerfile`:** the last line is currently

  ```dockerfile
  CMD ["uvicorn", "main.py:app", "--host", "0.0.0.0", "--port", "8000"]
  ```

  `main.py:app` is not a valid Uvicorn target — it should be `main:app` (the module name, without the `.py` extension). As written, the `backend` container will fail to start (`docker compose up` will show it crash-looping). This is a one-line fix — let me know if you'd like it corrected.
- The frontend hardcodes `http://localhost:8000` in `script.js` — it only works when browsed from the same machine the containers run on. For any other deployment, this needs to be made configurable.
- CORS is fully open (`allow_origins=["*"]`, `allow_credentials=True`) in `app/main.py` — fine for local use, but should be restricted before any public deployment, since combined with credentials this lets any site make authenticated requests to the API.

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.

---

## 👤 Author

**Sina Mansouri**
GitHub: [@sina-mansouri](https://github.com/sina-mansouri)
