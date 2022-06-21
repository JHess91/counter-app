const counterEl = document.getElementById('counter')
const totalCount = document.getElementById('total')
let count = 0

// function that increases 
function increase(){
    // count = count + 1
    count+= 1 // this is shorthand for line before
    counterEl.innerHTML = count
}


// function that decreases
function decrease(){
    // count = count - 1
    count-= 1
    counterEl.innerText = count
}

// bonus function that prints total
function printTotal(){
    let countStr = count + ' - '
    totalCount.innerHTML += countStr

}