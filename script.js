function updateTimer() {
  const timer = document.getElementById("timer");
  const now = new Date();

  const formatted = now.toLocaleString("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });

  timer.textContent = formatted;
}

// Run immediately
updateTimer();

// Update every second
setInterval(updateTimer, 1000);