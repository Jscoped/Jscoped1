document.getElementById('borrowForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const borrower = document.getElementById('borrower').value;
  const book = document.getElementById('book').value;
  const duration = document.getElementById('duration').value;
  const className = document.getElementById('class').value;

  const currentPage = window.location.pathname;
  const type = currentPage.includes('checkout') ? 'Checked Out' :
                currentPage.includes('return') ? 'Returned' : 'Unknown';

  const newEntry = {
    borrower,
    book,
    duration,
    className,
    type,
    date: new Date().toLocaleDateString(),
    status: 'active'
  };

  let logs = JSON.parse(localStorage.getItem('borrowLogs')) || [];

  if (type === 'Returned') {
    for (let log of logs) {
      if (
        log.borrower === borrower &&
        log.book === book &&
        log.className === className &&
        log.type === 'Checked Out' &&
        log.status === 'active'
      ) {
        log.status = 'returned'; 
        break;
      }
    }
  }

  logs.push(newEntry);
  localStorage.setItem('borrowLogs', JSON.stringify(logs));

  window.location.href = 'logs.html';
});
