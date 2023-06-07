async function fun1(){
     await fetch('https://jsonplaceholder.typicode.com/todos/')
    // console.log(data.json())
    .then(response => response.json())
    .then(json => console.log(json))
}
fun1()