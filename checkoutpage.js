let suggestions = [
  "Charlotte's Web",
  "Harry Potter and the Sorcerer's Stone",
  "Matilda",
  "The Cat in the Hat",
  "Green Eggs and Ham",
  "The Very Hungry Caterpillar",
  "Where the Wild Things Are",
  "Goodnight Moon",
  "The Giving Tree",
  "Winnie-the-Pooh",
  "The Tale of Peter Rabbit",
  "Diary of a Wimpy Kid",
  "The Lion, the Witch and the Wardrobe",
  "Charlie and the Chocolate Factory",
  "The BFG",
  "Oh, the Places You'll Go!",
  "James and the Giant Peach",
  "The Gruffalo",
  "Don't Let the Pigeon Drive the Bus!",
  "Percy Jackson and the Olympians: The Lightning Thief",
  "The Hobbit",
  "Ramona Quimby, Age 8",
  "A Wrinkle in Time",
  "Bridge to Terabithia",
  "Magic Tree House: Dinosaurs Before Dark",
  "How to Train Your Dragon",
  "The Secret Garden",
  "Anne of Green Gables",
  "The Little Prince",
  "Stuart Little",
  "Holes",
  "The Boxcar Children",
  "Coraline",
  "The Princess and the Pea",
  "Frog and Toad Are Friends",
  "Flat Stanley",
  "Amelia Bedelia",
  "The Snowy Day",
  "Bear Snores On",
  "If You Give a Mouse a Cookie",
  "The Polar Express",
  "Corduroy",
  "The Mitten",
  "Brown Bear, Brown Bear, What Do You See?",
  "The Rainbow Fish",
  "Curious George",
  "Alexander and the Terrible, Horrible, No Good, Very Bad Day",
  "Little Bear",
  "Miss Nelson is Missing",
  "The Pout-Pout Fish",
  "Click, Clack, Moo: Cows That Type",
  "Chicka Chicka Boom Boom",
];

const inputbox = document.getElementById("book");
const resultsbox = document.querySelector('.result-box');


inputbox.onkeyup = function () {
  let result = [];
  let input = inputbox.value;
  if (input.length) {
    result = suggestions.filter((keyword) => {
      return keyword.toLowerCase().includes(input.toLowerCase());
    });
  }
  display(result);
  if (!result.length) {
    resultsbox.innerHTML = "";
  }
};
function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });
    resultsbox.innerHTML = "<ul>" + content.join('') + "</ul>";
  }
function selectInput(list) {
  inputbox.value = list.innerHTML;
  resultsbox.innerHTML = "";
}

const borrowForm = document.getElementById('borrowForm');

borrowForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const borrower = localStorage.getItem('username') || 'Guest';
  const book = document.getElementById('book').value.trim();
  const quantity = document.getElementById('quantity').value;
  const duration = document.getElementById('duration').value;
  const className = document.getElementById('class').value;
  const date = new Date().toLocaleDateString();

  const newEntry = {
    borrower,
    book,
    quantity,
    duration,
    className,
    date,
    type: 'Check-In'
  };

 const currentLogs = JSON.parse(localStorage.getItem('borrowLogs')) || [];
  currentLogs.push(newEntry);
  localStorage.setItem('borrowLogs', JSON.stringify(currentLogs));


  alert("Book checked in successfully! Redirecting to logs...");
  setTimeout(() => {
  window.location.href = "logs.html";
}, 2000);

});

