const btn = document.querySelector('.register')
const formEl = document.querySelector('.form')
const fName = document.querySelector('.name1')
const lName = document.querySelector('.name2')
const emailEl = document.querySelector('.email')
const passwordEl = document.querySelector('.password')
const cpasswordEl = document.querySelector('.cpassword')

formEl.addEventListener('submit',  event =>{
    event.preventDefault()
    
    if (passwordEl.value !== cpasswordEl.value) {
            alert("Password and Confirm Password do not match")
        
            return;
        }

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




















