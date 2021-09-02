const container = document.querySelector('#container');

const sketchPad = document.querySelector('#sketchPad');

const clearButton = document.querySelector('#clearButton');

const expandButton = document.querySelector('#expandButton');

function generatePixel(){
    sketchPad.innerHTML += '<div class="pixel"></div>';
}

function changeBG(){
    this.style.cssText = 'background-color: purple;'
}

function populateBoard(){
    let num = prompt("How many pixels?");

    if (num >= 16 || num <= 100){

    let numberOfPixels = num * num;

    sketchPad.style.cssText = `grid-template-rows: repeat(${num}, 1fr); grid-template-columns : repeat(${num}, 1fr)`;

    for (let i = 1; i <= numberOfPixels; i++){
        generatePixel();
    }

    let pixels = document.querySelectorAll('.pixel');

    pixels.forEach(div => {
        div.addEventListener('mouseover', changeBG);
    });

   }

   else {
       alert("Invalid number!");
   }
}

function clearBoard(){
    let pixels = document.querySelectorAll('.pixel');

    pixels.forEach(div => {
        div.style.cssText = 'background-color: rgb(223, 223, 223)';
    })
}

clearButton.addEventListener('click', clearBoard);

expandButton.addEventListener('click', populateBoard);