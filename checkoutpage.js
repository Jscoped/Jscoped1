document.getElementById('borrowForm').addEventListener('submit', function (event) {
 event.preventDefault();

 const borrower = document.getElementById('borrower').value;
 const book = document.getElementById('book').value;
 const duration = document.getElementById('duration').value;
 const className = document.getElementById('class').value;

 const currentPage = window.location.pathname;
 const type = currentPage.includes('checkout') ? 'Checked Out' :
              currentPage.includes('return') ? 'Returned' : 'Unknown';

 const data = {
   borrower,
   book,
   duration,
   className,
   type
 };

 localStorage.setItem('borrowData', JSON.stringify(data));

 window.location.href = 'logs.html'; 
});
