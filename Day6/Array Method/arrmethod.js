const arr = [
    {name:'Uddhav', address:'Pokhara', age:'23'},
    {name:'Milan', address:'Sydney', age:'25'},
    {name:'Sujan', address:'Myagdi', age:'28'},
    {name:'Ghure', address:'Chuwa', age:'35'},
    {name:'Ramesh', address:'Kathmandu', age:'30'}
]

const output = arr.filter((x)=> x.age > 25).map((x) => x.name +" "+ x.address)



console.log(output)
