const btn = document.querySelector('.register')
const formEl = document.querySelector('.form')
const fName = document.querySelector('.name1')
const lName = document.querySelector('.name2')
const emailEl = document.querySelector('.email')
const passwordEl = document.querySelector('.password')
const cpasswordEl = document.querySelector('.cpassword')


// formEl.addEventListener('submit',  event =>{
//     event.preventDefault()
    
//     if (passwordEl.value !== cpasswordEl.value) {
//             alert("Password and Confirm Password do not match")
        
//             return;
//         };

//     async function postData(){
    
//         let data = {
//             firstName: fName.value,
//             lastName: lName.value,
//             email: emailEl.value,
//             password: passwordEl.value,
//             cpassword: cpasswordEl.value
//         };
    
//     try{
//     const response = await fetch('https://rest-api-bjno.onrender.com/register',{
//         method: 'POST',
//         headers: {
//             'Content-Type' : 'application/json'
//         },

//         body: JSON.stringify(data)
        
//     })
    
//     const value = await response.json();
//     console.log(value)

//     const {firstName, lastName} = value
//     const userlistEL = document.querySelector('#userul')
//     const listEl = document.createElement('.userul')
//     console.log(firstName, lastName)
//     listEl.textContent = `Full Name: ${firstName} ${lastName}`
//     userlistEL.appendChild(listEl)

//     } catch{
//         (err) => console.log('Error')
//     }

// }
// })


const dispbtn = document.querySelector('.disp')

dispbtn.addEventListener('click',getData)
async function getData(){
    let data = {
        firstName: fName.value,
        lastName: lName.value,
        email: emailEl.value,
        password: passwordEl.value,
        cpassword: cpasswordEl.value
    };

    try{
    const response = await fetch('https://rest-api-bjno.onrender.com/users', {
        method:'GET',
        
    })

    const value =await response.json()
    console.log(value)


    const reglist = document.getElementById('regul')
    for(let i=0; i< value.length ; i++){
        const item = value[i]
        const fullName = item.firstName + ' '+ item.lastName
        const listEle = document.createElement('li')
        listEle.textContent = fullName
        reglist.appendChild(listEle)
    }
    } catch{
        (err) => console.log('Error')
    }
}
























