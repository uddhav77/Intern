const btn = document.querySelector('.register')
const formEl = document.querySelector('.form')
const fName = document.querySelector('.name1')
const lName = document.querySelector('.name2')
const emailEl = document.querySelector('.email')
const passwordEl = document.querySelector('.password')
const cpasswordEl = document.querySelector('.cpassword')




formEl.addEventListener('submit',  event =>{
    event.preventDefault()

    let data = {
        firstName: fName.value,
        lastName: lName.value,
        email: emailEl.value,
        password: passwordEl.value,
        cpassword: cpasswordEl.value
    };

    fetch('https://rest-api-bjno.onrender.com/register',{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },

        body: JSON.stringify(data)
        
    })
    .then((response) => response.json())
    .then((value)=> console.log(value))
    .catch((err)=> {console.log('Error')})

})




















// fetch('https://reqres.in/api/users',{
//     method: 'POST',
//     headers: {
//         'Content-Type' : 'application/json'
//     },
//     body: JSON.stringify({
//         name:'uddhav',
//         club:'Arsenal',
//         age:'23'
//     })
// })
// .then((response)=> {return response.json()})
// .then((value)=> {console.log(value)})
// .catch((error)=> {console.log('404 error')})
