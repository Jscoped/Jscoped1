let availableKeywords = [
    "HTML",
    "CSS",
    "Easy Tutorials",
    "Web design tutorials",
    'JavaScript',
    'Where to learn coding online',
    'Where to learn web desing',
    "How to create a website"
];


const resultsbox = document.querySelector('.result-box');
const inputbox = document.getElementById('input-box');

inputbox.onkeyup = function(){
    let result = [];
    let input = inputbox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
        return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result)
    }
    display(result);

    if(!result.length){
        resultsbox.innerHTML="";
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });

    resultsbox.innerHTML = "<ul>" + content.join('') + "</ul>";
}


function selectInput(list){
    inputbox.value = list.innerHTML
    resultsbox.innerHTML  = "";

}