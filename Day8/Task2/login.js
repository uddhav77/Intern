const loginEl = document.querySelector('.login')
const disploginEl = document.getElementById('displogin')
const closeEl = document.querySelector('.close')

loginEl.addEventListener('click', ()=>disploginEl.classList.add('active'))

closeEl.addEventListener('click', ()=> disploginEl.classList.remove('active'))
