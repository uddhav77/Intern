import React from "react";
import image1 from "../src/assets/images/profile1.jpg";
import image2 from "../src/assets/images/profile6.jpeg";
import image3 from "../src/assets/images/profile3.jpg";
import image4 from "../src/assets/images/profile4.jpg";
import image5 from "../src/assets/images/profile5.jpeg";
import Pictures from "./Components/Pictures";
import Friends from "./Components/Friends";

const App = () => {
  const pictures = [
    { image: image1 },
    { image: image2 },
    { image: image3 },
    { image: image4 },
    { image: image5 },
  ];

  const users = [
    {
      image: image3,
      name: "Azar Hosseini",
      nickname: "Evelyn Allen",
    },
    {
      image: image4,
      name: "Phet Putrie",
      nickname: "Thitiwat Shimma",
    },
    {
      image: image5,
      name: "Kay Totleben",
      nickname: "Prescott MacCaffery",
    },
    {
      image: image1,
      name: "Brijamohan Mallick",
      nickname: "Anne-Marije Markink",
    },
    {
      image: image2,
      name: "Miriam de Jesus",
      nickname: "Alf Huncoot",
    },
    {
      image: image5,
      name: "Yahiro Ayuko",
      nickname: "Indu Chakarvati",
    },
  ];
  return (
    <>
      <div className="bg-indigo-500 rounded-xl flex justify-center">
        <div className="p-8 flex flex-col ">
          <div className="text-white text-[34px] font-[700] ">Chats</div>

          <div className="bg-stone-200 h-fit rounded-2xl">
            <div className="bg-white rounded-2xl">
              <div className="flex gap-4 p-10">
                <div className="text-[38px] text-blue-500 h-16 w-16 border-black border-2 border-dashed rounded-full flex justify-center">
                  +
                </div>
                {pictures.map((item) => (
                  <Pictures img={item.image} />
                ))}
              </div>

              <div className="pb-6">
                <ul className="flex text-[24px] ml-8 flex gap-8 text-gray-400">
                  <li className="text-blue-500">All</li>
                  <li>Family</li>
                  <li>Buddies</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-6 p-4">
              {users.map((items) => (
                <Friends
                  img={items.image}
                  name={items.name}
                  nickname={items.nickname}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
