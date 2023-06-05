const display = document.querySelector('.button')

function fun1(){
   let text = document.querySelector('.input')
   const name = text.value
   alert(name)
    // console.log(name)
}

display.addEventListener('click', fun1)