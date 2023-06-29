import React from "react";

const Friends = ({ img, name, nickname }) => {
  return (
    <div className="flex gap-4">
        <div className="">
      <img src={img} className="h-16 w-16 rounded-full" />
        </div>
      <div>
        <div className="text-2xl font-bold">{name}</div>
        <div className="text-gray-600">{nickname}</div>
      </div>
    </div>
  );
};

export default Friends;
