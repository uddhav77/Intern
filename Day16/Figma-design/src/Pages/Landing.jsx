import React from "react";
import Image from "../assets/image/mobile.png";
import { AiFillApple } from "react-icons/ai";
import {BiLogoPlayStore} from "react-icons/bi";

const Landing = () => {
  return (
    <>
      <div className="flex h-4/5">
        <div className="flex-1 ml-24 mt-10 ">
          <div className="text-6xl font-bold">
            Download Our <br /> APP Today
          </div>

          <div className="mt-24">
            ड्राइभिङ परीक्षा तयारीको लागि अब सजिलो अध्ययन गर्नुहोस्। यसमा
            तपाईंलाई <br /> पूर्ण पाठ्यक्रम, महत्वपूर्ण सूचना, प्रश्नोत्तरहरू र
            अभ्यास सामग्री प्राप्त हुनेछ। <br /> आफ्नो ड्राइभिङ परीक्षा तयारीलाई
            अब सहज बनाएर सुरक्षित सडक यात्रामा पूर्ण <br /> विश्वास जोगाउनुहोस्।
          </div>

          <div className=" gap-4 flex mt-10">
            <div className="">
              <button className="text-black bg-gray-300 rounded-lg p-2 flex w-[140px]">
               <div className="p-[8px] "> <AiFillApple className="text-2xl "/></div>
                <div className="font-medium"><p className="text-[8px]">Download on the </p> App Store</div>
              </button>
            </div>
            <div>
              <button className="text-black bg-gray-300 rounded-lg p-2 w-36 flex">
                <div className="p-[8px]"><BiLogoPlayStore className="text-2xl"/></div>
                <div className="font-medium"><p className="text-[8px] "> Get IT ON</p> Google Play</div>
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="bg-gradient-to-t from-indigo-600 via-purple-300 to-purple-200 w-[260px] h-[540px] rounded-xl ml-56 "></div>
          <div className=" mr-36 absolute top-0">
            <img src={Image} className=" " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
