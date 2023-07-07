import React from "react";
import FriendsStory from "../Components/FriendsStory";
import image1 from "../assets/images/image1.jpeg";
import image2 from "../assets/images/image2.jpeg";
import image3 from "../assets/images/image3.jpeg";
import image4 from "../assets/images/image4.jpeg";
import image5 from "../assets/images/image5.jpeg";
import image6 from "../assets/images/image6.jpeg";
import image7 from "../assets/images/image7.jpeg";
import image8 from "../assets/images/image8.jpeg";
import image9 from "../assets/images/image9.jpeg";
import image10 from "../assets/images/image10.jpeg";
import image11 from "../assets/images/image11.jpeg";
import image12 from "../assets/images/image12.jpeg";
import { AiOutlineBars } from "react-icons/ai";
import Blogs from "../Components/Blogs";
import { RiMoreFill } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import Footer from "../Components/Footer";

const Home = () => {
  const pictures = [
    { image: image1 },
    { image: image7 },
    { image: image3 },
    { image: image8 },
    { image: image5 },
  ];

  return (
    <div className=" pt-10 flex justify-center">
      <div className="bg-white rounded-xl p-6">
        <div className="text-xl">Moments</div>

        <div className="flex gap-2 mt-6 ">
          <div className="text-[36px] bg-blue-100 text-blue-600 h-14 w-14 rounded-full flex justify-center">
            +
          </div>
          {pictures.map((item, index) => (
            <FriendsStory key={index} image={item.image} />
          ))}
        </div>

        <div className="flex mt-8 justify-between ">
          <div className="text-lg">Latest blogs</div>

          <div className="flex justify-center items-center">
            <AiOutlineBars className="text-blue-500 text-xl" />
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4">
          <Blogs
            image1={image4}
            name="Kathryn Alexander"
            status="4 mins ago"
            icon={<RiMoreFill />}
            content="Working on a large project. I was thinking about potential features and tools that could be added to Figma. One of them is Breakpoints."
            image2={image2}
            image3={image10}
            image4={image9}
            reactions="Connie and other likes it"
            icon1={<AiFillHeart />}
            likes="25 likes"
            icon2={<FaRegComment />}
            comments="13 comments"
          />

          <Blogs
            image1={image11}
            name="Nathan Fox"
            status="15 hours ago"
            icon={<RiMoreFill />}
            content="Putting an exact exipy date on Python would be so much speculation, it might as well pass as Science-Fiction. Instead, I will assess the vitues that are boosting Python's popularity right now, and the weak points that will break it in the future."
            image2={image3}
            image3={image12}
            image4={image7}
            reactions="Mike and other likes it"
            icon1={<AiFillHeart />}
            likes="17 likes"
            icon2={<FaRegComment />}
            comments="9 comments"
          />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
