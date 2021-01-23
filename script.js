window.onload = () => {

};

let generateRandomNumber = () => {
    let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    let indexNumber = [Math.floor(Math.random() * n.length)];
    return n[indexNumber];

};

let generateRandompalo = () => {
    let palo = ['spade', 'heart', 'club', 'diamond']
    let indexPalo = [Math.floor(Math.random() * palo.length)];
    return palo[indexPalo];

};
const setValor = (valor) => {
    if (valor === 1) return "A";
    if (valor === 11) return "J";
    if (valor === 12) return "Q";
    if (valor === 13) return "K";
    return valor;
}



let lineanueva = [];

let button = document.querySelector("#buttondraw");
button.addEventListener("click", function () {
    lineanueva = [];
    let cardcontainer = document.querySelector(".cardcontainer");
    let input = document.querySelector("#choosenumber")
    cardcontainer.innerHTML = "";


    for (let i = 0; i < input.value; i++) {

        let span = document.createElement("span");
        let div = document.createElement("div");
        span.classList.add('card');
        span.classList.add('number')
        let p = generateRandompalo()
        let n = generateRandomNumber()
        // console.log(p);
        span.classList.add(p);
        span.innerHTML = setValor(n);
        lineanueva.push([n, p]);
        div.appendChild(span);
        document.querySelector(".cardcontainer").appendChild(div);
    }
});

let button1 = document.querySelector("#buttonsort");
button1.addEventListener("click", function () {
   
    selectSort(lineanueva);   
console.log(selectSort)
});


let sortcardcontainer = document.querySelector(".sortcardcontainer");
let input = document.querySelector("#choosenumber");
let div = document.createElement("div");
let ol = document.createElement("ol");

const selectSort = (arr) => {
    let min = 0;
    while (min < arr.length-1) {
        for (let k = min + 1; k < arr.length; k++) {
            if (arr[min][0] > arr[k][0]) {
                let aux = arr[min];
                arr[min] = arr[k];
                arr[k] = aux;

                let li = document.createElement("li");
                let divfila = document.createElement("div")
                divfila.classList.add('sortcardcontainer');            

            for (i = 0; i < arr.length; i++) {           
                              
                let span = document.createElement("span");
                span.classList.add('card2');
                span.classList.add('number')
                let p = arr[i][1];
                let n = arr[i][0];
                span.classList.add(p);
                span.innerHTML = setValor(n);                
                
                divfila.appendChild(span);
                li.appendChild(divfila)
                ol.appendChild(li)
                div.appendChild(ol)
                document.body.appendChild(div);
            }
            }   
            else{

            } 
            }             
       min++;

    }
    //return arr;
};

