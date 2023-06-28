// console.log('Hello World')
const subject=['maths', 'english','social']
const person1 = {
    name: "Uddhav",
    Rollno: 29,
    address: {
        District:'Kaski',
        Municipality: 'Pokhara',
        Ward: 08
    },
    subject: subject,
}

const person2 = {
    name: "Poonam",
    Rollno: 19,
    address: {
        District:'Kaski',
        Municipality: 'Pokhara',
        Ward: 15,
    },
    subject: subject,
}

const employee = [person1, person2]

subject.push('Health')

console.log(employee)