import React from "react";

const Blogs = ({
  image1,
  name,
  status,
  icon,
  content,
  image2,
  image3,
  image4,
  reactions,
  icon1,
  likes,
  icon2,
  comments,
}) => {
  return (
    <div className="bg-gray-100 rounded-2xl p-6">
      <div className="flex justify-between ">
        <div className="flex gap-2">
          <div>
            <img src={image1} alt="image1" className="h-12 w-12 rounded-full" />
          </div>
          <div>
            <div className="text-xl font-medium">{name}</div>
            <p className="text-xs text-gray-400">{status}</p>
          </div>
        </div>
        <div className="text-2xl">{icon}</div>
      </div>

      <div className="mt-6 font-medium">{content}</div>

      <div className="flex gap-14 mt-6">
        <div className="flex relative">
          <div>
            <img src={image2} alt="image2" className="h-10 w-10 rounded-full" />
          </div>
          <div>
            <img
              src={image3}
              alt="image3"
              className="h-10 w-10 rounded-full absolute left-6"
            />
          </div>
          <div>
            <img
              src={image4}
              alt="image4"
              className="h-10 w-10 rounded-full absolute left-12"
            />
          </div>
        </div>
        <div className="flex justify-center items-center text-gray-400 text-[14px] font-medium">
          {reactions}
        </div>
      </div>

      <div className="mt-4">
        <hr />
      </div>

      <div className="flex gap-6 mt-4">
        <div className="flex bg-stone-200 p-[4px] rounded-lg text-blue-500">
          <div className="text-2xl ">{icon1}</div> <p>{likes}</p>
        </div>
        <div className="flex items-center">
          <div className="text-2xl text-gray-400">{icon2}</div>{" "}
          <p>{comments}</p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
