let number1 = document.querySelector('.num1')


let number2 = document .querySelector('.num2')


const addBtn = document.querySelector('.add')
const subBtn = document.querySelector('.sub')
const mulBtn = document.querySelector('.mul')
const divBtn = document.querySelector('.div')


function add(){
    const num1 = parseInt(number1.value)
    const num2 = parseInt(number2.value)
    const sum = num1 + num2
    console.log(sum)
    document.querySelector('#result').textContent = sum
}

addBtn.addEventListener('click', add )

function sub(){
    const num1 = parseInt(number1.value)
    const num2 = parseInt(number2.value)
    const diff = num1 - num2
    console.log(diff)
    document.querySelector('#result').textContent = diff
}

subBtn.addEventListener('click', sub )

function mul(){
    const num1 = parseInt(number1.value)
    const num2 = parseInt(number2.value)
    const product = num1 * num2
    console.log(product)
    document.querySelector('#result').textContent = product
}

mulBtn.addEventListener('click', mul )

function div(){
    const num1 = parseInt(number1.value)
    const num2 = parseInt(number2.value)
    const divide = num1 / num2
    console.log(divide)
    document.querySelector('#result').textContent = divide
}

divBtn.addEventListener('click', div )






