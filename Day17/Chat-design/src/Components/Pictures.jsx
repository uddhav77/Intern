import React from "react";

const Pictures = ({ img }) => {
  return (
    <>
      <div className="">
        <img src={img} className="h-16 w-16 rounded-full" loading="lazy"/>
      </div>
    </>
  );
};

export default Pictures;
