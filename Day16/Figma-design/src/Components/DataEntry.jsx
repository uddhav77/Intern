import React from "react";
import {BiSearch } from 'react-icons/bi'

const DataEntry = ({ text, input }) => {
  return (
    <div className="flex flex-col gap-2 items-center mt-10">
      <div className="text-[36px] font-medium">{text}</div>
      <div className="relative">
     <div className="mt-2 ">{input}</div>
     <div className="absolute text-black top-4 left-2 text-2xl"><BiSearch/></div>
    </div>
    </div>
  );
};

export default DataEntry;
