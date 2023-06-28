import React from "react";

const MyCart = ({ cartItems, removeItem }) => {
  const totalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };
  return (
    <>
    <h2 className="text-xl text-blue-500 font-bold text-center">My Cart</h2>
    <div className="w-full flex justify-center pt-36">
      {cartItems.length === 0 ? (
        <div className="text-xl"> Empty Cart</div>
      ) : (
        <ul className="mt-10 w-1/2 bg-stone-100 rounded-lg p-4">
          {cartItems.map((item) => (
            <li key={item.id} className="flex p-2 ">
              <img src={item.image} alt={item.title} className="h-20 w-36" />

              <div className="w-2/5 flex justify-around">
                <div className="w-1/2 ml-10">{item.title}</div>

                <div className="ml-2 flex text-green-700 font-bold">${item.price}</div>

                <div className="ml-2"> X{item.quantity}</div>
              </div>

              <button
                className="p-4 bg-red-500 ml-4 h-max w-20 rounded-lg "
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button> 
            </li>
          ))}
          {/* {cartItems.length> 0 &&( */}
            <div className="mt-8 text-center text-blue-500 text-xl">Total Price: ${totalPrice()}</div>
          {/* )} */}
        </ul>
      )}
    </div>
    </>
  );
};

export default MyCart;
