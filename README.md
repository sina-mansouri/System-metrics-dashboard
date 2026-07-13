# Real-Time System Metrics Dashboard

A Full-Stack web application that monitors and displays live server metrics (CPU, RAM, and Disk usage).

## 🛠️ Tech Stack
* **Backend:** Python (FastAPI), `psutil`
* **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
* **Deployment:** Docker & Docker Compose (Nginx Service)

## 🚀 How to Run

1. Clone the repository:
   ```bash
   git clone [https://github.com/sina-mansouri/system-metrics-dashboard.git](https://github.com/sina-mansouri/system-metrics-dashboard.git)
   cd system-metrics-dashboard

1. Start the multi-container environment:

   docker compose up -d --build

2. Open your browser and navigate to:

    Frontend Dashboard: http://localhost:8080

    Backend API Specs: http://localhost:8000/docs