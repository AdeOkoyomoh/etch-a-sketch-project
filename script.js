const container = document.querySelector('#container');

const sketchPad = document.querySelector('#sketchPad');

const clearButton = document.querySelector('#clearButton');

const expandButton = document.querySelector('#expandButton');

function generatePixel(){
    sketchPad.innerHTML += '<div class="pixel"></div>';
}

function changeBG(div){
    div.classList.add('changed');
}

function erase(div) {
    div.classList.remove('changed');
}

function populateBoard(){
    let num = prompt("How many pixels?");

    if (num >= 16 && num <= 64){

    let numberOfPixels = num * num;

    sketchPad.style.cssText = `grid-template-rows: repeat(${num}, 1fr); grid-template-columns : repeat(${num}, 1fr)`;

    for (let i = 1; i <= numberOfPixels; i++){
        generatePixel();
    }

    let pixels = document.querySelectorAll('.pixel');

    pixels.forEach(div => {
        div.addEventListener('mouseover', function(e){
            if (e.ctrlKey === true){
                changeBG(div);
            }
            else if (e.shiftKey === true){
                erase(div);
            }
        });
    });

   }

   else {
       alert("Invalid number!");
   }
}

function clearBoard(){
    let pixels = document.querySelectorAll('.pixel');

    pixels.forEach(div => {
        div.classList.remove('changed');
    })
}

clearButton.addEventListener('click', clearBoard);

expandButton.addEventListener('click', populateBoard);