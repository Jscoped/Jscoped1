const logEntries = document.getElementById("logsEntries"); 
const logs = JSON.parse(localStorage.getItem("borrowLogs")) || [];

if (logs.length > 0) {
  logEntries.innerHTML = logs
    .map((entry, index) => {
      return `
        <div class="log-entry" data-index="${index}" style="text-decoration: ${entry.type === "Returned" ? "line-through" : "none"};">
          <span>${entry.borrower}</span>
          <span>${entry.book}</span>
          <span>${entry.quantity}</span>
          <span>${entry.duration || "-"} days</span>
          <span>${entry.className}</span>
          <span>${entry.date}</span>
          <span>${entry.type}</span>
          <div class="delete-btn"><i class="fa-solid fa-trash"></i></div>
        </div>
      `;
    })
    .join("");
} else {
  logEntries.innerHTML = `<div class="no-records">No records found</div>`;
}

document.querySelector(".js-clear-btn").addEventListener("click", () => {
  localStorage.removeItem("borrowLogs");
  window.location.reload();
});

document.querySelectorAll(".delete-btn").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const logEntry = event.target.closest(".log-entry");
    const index = Number(logEntry.dataset.index);
    logs.splice(index, 1);
    localStorage.setItem("borrowLogs", JSON.stringify(logs));
    logEntry.remove();
  });
});

document.querySelectorAll(".log-entry").forEach((entryDiv) => {
  entryDiv.addEventListener("click", () => {
    const index = Number(entryDiv.dataset.index);
    const entry = logs[index];

    if (entryDiv.style.textDecoration === "line-through") {
      entryDiv.style.textDecoration = "none";
      entryDiv.style.opacity  = "1"
      entry.type = "Checked-Out";

    } else {
      entryDiv.style.textDecoration = "line-through";
      entryDiv.style.opacity  = "0.3"
      entry.type = "Returned";
    }

    localStorage.setItem("borrowLogs", JSON.stringify(logs));
    entryDiv.querySelectorAll("span")[6].textContent = entry.type;
  });
});

const bigString = "";
try {
  localStorage.setItem("largeText", bigString);
} catch (e) {
  if (e.name === "QuotaExceededError") {
    alert("Local storage limit exceeded. Clear logs!");
  }
}
