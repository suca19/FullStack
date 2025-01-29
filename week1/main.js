let MyTitle = document.getElementById('myTitle');
MyTitle.innerHTML = 'Hello World!';
let myParagraph = document.getElementById('paragraph').innerHTML;

document.getElementById('button').addEventListener('click', function() {
   document.getElementById('paragraph').innerHTML = 'i knew you would click me!';
   document.getElementById('paragraph').style.color = 'violet';
});

let button = document.createElement("button");

button.innerHTML = "Reset";
button.classList.add("my-button");  
button.id = "myButton";         
document.body.appendChild(button);

document.getElementById('myButton').addEventListener('click', function() {
    document.getElementById('paragraph').innerHTML = myParagraph;

     });   