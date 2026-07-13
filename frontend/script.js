async function updateMetrics() {
    try {
        // API
        const response = await fetch('http://localhost:8000/api/metrics');
        const data = await response.json();

        // CPU
        document.getElementById('cpu-bar').style.width = data.cpu + '%';
        document.getElementById('cpu-text').innerText = data.cpu + '%';

        // RAM
        document.getElementById('ram-bar').style.width = data.ram + '%';
        document.getElementById('ram-text').innerText = data.ram + '%';

        // Disk
        document.getElementById('disk-bar').style.width = data.disk + '%';
        document.getElementById('disk-text').innerText = data.disk + '%';
    } catch (error) {
        console.error("Error fetching metrics:", error);
    }
}

// Update metrics every 2 seconds
setInterval(updateMetrics, 2000);
updateMetrics();