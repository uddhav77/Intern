import React from "react";

const Goto = ({ icons, text, icon }) => {
  return (
    <div className="border-2 border-white border-solid flex w-[360px] p-2 justify-between rounded-2xl hover:bg-white hover:text-black cursor-pointer">
      <div className="text-2xl"> {icons} </div>
      <div> {text} </div>
      <div className="text-lg"> {icon} </div>
    </div>
  );
};

export default Goto;
