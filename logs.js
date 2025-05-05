const logEntries = document.getElementById('logsEntries');
const logs = JSON.parse(localStorage.getItem('borrowLogs')) || [];

if (logs.length > 0) {
  logEntries.innerHTML = logs.map(entry => {
    const isCrossed = entry.status === 'returned';
    return `
      <div class="log-entry" style="${isCrossed ? 'text-decoration: line-through; color: grey;' : ''}">
        <span>${entry.borrower}</span>
        <span>${entry.book}</span>
        <span>${entry.duration || '-'} days</span>
        <span>${entry.className}</span>
        <span>${entry.date}</span>
        <span>${entry.type}</span>
      </div>
    `;
  }).join('');
} else {
  logEntries.innerHTML = `<div class="no-records">No records found</div>`;
}

document.querySelector('.js-clear-btn').addEventListener('click', () => {
  localStorage.removeItem('borrowLogs');
  window.location.reload();
});
