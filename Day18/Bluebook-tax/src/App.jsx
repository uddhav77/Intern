import React from "react";
import Terms from "./Component/Terms";
import VehicleInput from "./Component/VehicleInput";

const App = () => {
  return (
    <div className="bg-gray-400 flex justify-center">
      <div className="bg-white mt-10 p-6 ">
        <div className="">
          <div className="text-purple-500 font-[600] text-3xl">Bluebook Service with Pick & Drop</div>
          
          <div className="p-4 text-[14px] bg-amber-100 border-[2px] border-solid border-orange-200 mt-8 rounded-xl">
            <div>Customer Support: 01-5970053</div>
            <div>WhatsApp/Viber(Chat only): 9801890083</div>
            <div className="mt-4">This service is only for Kathmandu Valley</div>
          </div>
        </div>

        <div className="mt-8">
          <Terms/>
        </div>
      </div>

      <VehicleInput/>
    </div>
  );
};

export default App;
