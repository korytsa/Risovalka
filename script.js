const state = {
    currentColor : '',
    prevColor : 'pink',
    currentTool : 'pencil',
    
}

let current = document.querySelector('.current');
let previous = document.querySelector('.previous');
let item = document.querySelector('.item');
let item_2 = document.querySelector('#item_2');
let current_1 = document.querySelector('#current_1');

//выбор цвета + текущий/предыдущий
const paint = document.querySelector('.colors');
paint.addEventListener("click" , function(e){
    current_1.style.border = '5px double coral';
    if (e.srcElement.children[0]) {
        state.prevColor = state.currentColor;
        state.currentColor = e.srcElement.children[0].className;
        
        
        current.style.backgroundColor = state.currentColor;
        previous.style.backgroundColor = state.prevColor;

        //e.srcElement.style.border = '5px double coral';

    } else {
        state.currentColor = e.srcElement.className; 
    }
})


//если включен пенсил и выбран цвет, то сделав точку закрашивается квадратик
//если включена пипетка, то нажав на квадратик меняется текущий и предыдущий цвет
const bigSquare = document.querySelector('.canvas ');
bigSquare.addEventListener('click', function(e) {
    if (state.currentTool === 'pencil') {
    e.srcElement.style.backgroundColor = state.currentColor;
} else if (state.currentTool === 'pipetka') {
    state.prevColor = state.currentColor;
    state.currentColor = e.srcElement.style.backgroundColor;

    current.style.backgroundColor = state.currentColor;
    previous.style.backgroundColor = state.prevColor;
    console.log(state.currentTool);
} else if(state.currentTool === 'shape') {
    e.srcElement.classList.toggle('item_2');
}

} )

//включение/выключение пенсил
const pencil = document.querySelector('.pencil'); 
pencil.addEventListener('click', function() {
    state.currentTool = 'pencil';
    pencil.style.border = '5px double coral';
    pipetka.style.border = 'none';
    shape.style.border = 'none';
    paint.style.border = 'none';
})

const pipetka = document.querySelector('.pipetka');
pipetka.addEventListener('click', function() {
    state.currentTool = 'pipetka';
    pipetka.style.border = '5px double coral';
    pencil.style.border = 'none';
    shape.style.border = 'none';
    paint.style.border = 'none';
})

const shape = document.querySelector('.shape');
shape.addEventListener('click', function(){
    state.currentTool = 'shape';
    shape.style.border = '5px double coral';
    pencil.style.border = 'none';
    pipetka.style.border = 'none';
    paint.style.border = 'none';
})