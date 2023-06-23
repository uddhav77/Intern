import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Description = ({addToCart}) => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setItem(data);
    } catch (error) {
      console.log("Error fetching item:", error);
    }
  };

  if (!item) {
    return <div className="text-center ">Loading...</div>;
  }
  return (
    <div className="flex justify-center mt-8 ">
      <div className="w-4/12 shadow-2xl p-8">
        <div className="flex">
          <img className="h-40 " src={item.image} alt={item.title} />
          <div className="flex-1">
            <div className="flex justify-center text-2xl font-bold text-teal-400">
              Item Description
            </div>
            <br />
            <div className="flex justify-center items-center text-lg text-teal-400">
              {item.title}
            </div>
            <br />
          </div>
        </div>
        <p className="mt-4 ">{item.description}</p>
        <button className="bg-orange-200 p-2 mt-4 w-full rounded-lg" onClick={() => addToCart(datas)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Description;
