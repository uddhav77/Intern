import React from "react";
import Goto from "../Components/Goto";
import { FaWpforms } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { RiTodoLine } from "react-icons/ri";
import { BiCycling } from "react-icons/bi";
import { AiOutlineCreditCard } from "react-icons/ai";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="ml-[106px]">
        <div className="">
          <div className="text-[54px] font-normal">
            Driving License <br /> Process
          </div>
        </div>

        <div className="flex gap-10 mt-10">
          <div className="flex gap-6 flex-col">
            <div>
              <Goto
                icons={<FaWpforms />}
                text="Online Form"
                icon={<FaGreaterThan />}
              />
            </div>

            <div>
              <Goto
                icons={<CgFileDocument />}
                text="Document Submission"
                icon={<FaGreaterThan />}
              />
            </div>

            <div>
              <Goto
                icons={<RiTodoLine />}
                text="Exam (Likhit)"
                icon={<FaGreaterThan />}
              />
            </div>

            <div>
              <Goto
                icons={<BiCycling />}
                text="Trail"
                icon={<FaGreaterThan />}
              />
            </div>

            <div>
              <Goto
                icons={<AiOutlineCreditCard />}
                text="Payment and license"
                icon={<FaGreaterThan />}
              />
            </div>
          </div>

          <div className="flex-1 mr-[190px] pl-8 bg-gradient-to-t from-indigo-600 via-purple-300 to-purple-200 rounded-2xl">
            <div className="text-[64px] font-medium">Online Form</div>

            <div className="w-[90%]">
              <p className="text-[18px]">
                Apply for a new driving license, renewal, or new category
                online. Limited quotas available, and agent assistance is an
                option for those facing form difficulties.{" "}
              </p>
            </div>

            <div>
              <div className="text-[24px] font-bold">Related Links</div>

              <ul className="list-disc ml-[18px]">
                <Link>
                  <li>Online Resistration Form </li>
                </Link>
                <Link>
                  <li>Resistration Process </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
