import React from "react";
import Image1 from "../assets/image/car.png";
import Image2 from "../assets/image/bike.png";
import Image3 from "../assets/image/book.png";

const AboutUs = () => {
  return (
    <div className="flex mt-10">
      <div className="ml-24 flex-1">
        <div className="text-[40px] font-medium">
          About NDLE: Nepal Driving <br /> License Examination
        </div>
        <div className="mt-2">
          Welcome to NDLE, your trusted destination for National Driver's
          License Examination information and resources. Our mission is to
          ensure road safety and promote responsible driving through
          comprehensive driver's license evaluations.
        </div>

        <div className="mt-[40px]">
          <img src={Image1} className="" />
        </div>

        <div className="mt-10 text-[40px] font-medium">Join us Today</div>
        <div className="mt-2">
          Embark on your journey towards a driver's license with NDLE. <br />
          Prepare with confidence, gain essential knowledge, and <br />
          demonstrate your competence on the road. Together, let's build a safer
          driving community. Contact us to learn more <br /> about NDLE or
          explore our resources to kick-start your preparation today
        </div>
      </div>

      <div className="flex-1">
        <div>
          <img src={Image2} alt="" />
        </div>

        <div className="text-[40px] font-medium mt-10">Our Purpose</div>
        <div className="mt-2">
          At NDLE, we understand the importance of <br />
          competant drivers on the road. Our purpose <br />
          assess and evaluate individuals seeking a driver's <br />
          license to ensure they passess the necessary <br />
          knowledge and skills to drive safely. We aim to <br />
          reduce accidents, improve traffic management, <br /> and enhance
          overall road safety standards.
        </div>

        <div className="mt-10">
          <img src={Image3} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
