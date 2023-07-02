import React from "react";
import { BiSearch } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import image2 from "../assets/images/image2.jpeg";
import image3 from "../assets/images/image3.jpeg";
import image8 from "../assets/images/image8.jpeg";
import image9 from "../assets/images/image9.jpeg";
import image10 from "../assets/images/image10.jpeg";
import image11 from "../assets/images/image11.jpeg";
import image12 from "../assets/images/image12.jpeg";
import OtherFriends from "../Components/OtherFriends";
import { AiFillMessage } from "react-icons/ai";
import Footer from "../Components/Footer";

const Message = () => {
  return (
    <div className="pt-10 flex justify-center">
      <div className="bg-white w-fit rounded-2xl p-6">
        <div className="flex justify-between">
          <div className="flex">
            <div className="text-4xl font-bold">Messages</div>
            <div className="flex justify-center items-center text-5xl">
              <RiArrowDropDownLine />
            </div>
          </div>
          <div className="text-4xl flex items-center">
            <BiSearch />
          </div>
        </div>

        <div className="mt-6">
          <div className="text-gray-500">Pinned</div>

          <div className="flex items-center mt-4">
            <div className="flex relative">
              <div>
                <img
                  src={image12}
                  alt="profile"
                  className="h-12 w-12 rounded-full"
                />
              </div>
              <div className="absolute bottom-0 left-8 h-2 w-2 bg-green-400 rounded-full">
        
              </div>
            </div>

            <div className="ml-4">
              <div className="text-lg font-medium">Robert Richards</div>
              <div className="flex text-gray-500 items-center">
                <div className="text-xs">Hello, tomorrow in 5 o'clock</div>
                <p className="text-[10px] ml-2">. 5m</p>
              </div>
            </div>

            <div className="bg-[#2663FF] text-white flex items-center justify-center h-6 w-6 rounded-full ml-[76px]">
              2
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="text-gray-500 ">Other</div>
          <div className="relative">
            <div className="flex flex-col gap-4 mt-4">
              <OtherFriends
                image={image2}
                name="Wendy Watson"
                message="We need to meet today"
                status=". 12m"
              />
              <hr />
              <OtherFriends
                image={image8}
                name="Harold Howard"
                message="Check mail, please"
                status=". 1h"
              />
              <hr />
              <OtherFriends
                image={image3}
                name="Connie Lane"
                message="Where are you?"
                status=". yesterday"
              />
              <hr />
              <OtherFriends
                image={image9}
                name="Kathryn Alexander"
                message="Alright"
                status=". yesterday"
              />
              <hr />
              <OtherFriends
                image={image11}
                name="Bernard Nguyen"
                message="is typing..."
                status=". 2d"
              />
              <hr />
              <OtherFriends
                image={image10}
                name="Nathan Fox"
                message="Thank you so much"
                status=". 4d"
              />
            </div>
            <div className="bg-[#2663FF] w-8 flex justify-center rounded-full absolute top-4 right-0 text-white">
              12
            </div>
            <div className="text-5xl bg-[#2663FF] w-14 h-14 flex justify-center items-center text-white rounded-full absolute bottom-6 right-0">
              <AiFillMessage />
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Message;
