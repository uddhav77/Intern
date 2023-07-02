import React from "react";

const FriendsStory = ({ image }) => {
  return (
    <div>
      <div className="w-15 h-15 rounded-full border-2 p-[1px]">
        <img src={image} className="h-14 w-14 rounded-full" loading="lazy" />
      </div>
    </div>
  );
};

export default FriendsStory;
