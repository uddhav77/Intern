import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Cards = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        async function fetchData(){
        try{
            const response = await fetch('https://fakestoreapi.com/products',
            {
                method: "GET",
            });
            const value = await response.json();
            setData(value)
        }catch(err){
            console.log('Error', err)
        }
    }
    fetchData();
    }, [])

    console.log(data)

  return (
    <>
    <div className=" flex flex-wrap mt-8 gap-6 ml-5 justify-center ">
     {data.map((datas)=>(
        <div className="p-8 w-1/5 h-max flex flex-col shadow-2xl">
        <Link to={`/description/${datas.id}`} >
            <img src={datas.image} className="h-44 w-full"/>
            <div className="text-center h-20 mt-8 text-2lg font-bold">
                {datas.title}
            </div> 
            <br />
            <p className="text-center text-xl"> ${datas.price}</p>
        </Link>
            <button className="rounded-lg bg-blue-200 p-2 mt-2 w-full">Add To Cart</button>
        </div>
))}
    </div>
    </>
  )
}

export default Cards
