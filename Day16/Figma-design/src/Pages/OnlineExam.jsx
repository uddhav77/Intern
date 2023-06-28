import React from "react";

const OnlineExam = () => {
  return (
    <>
      <div className="ml-[106px] mt-8">
        <div className="text-[36px] font-[550]">Online Exam</div>

        <div className="flex flex-col items-center">
          <div className="text-[30px] font-medium">Are you ready for online exam practice ?</div>
          <div className="mt-8"> <button className="p-2 bg-gradient-to-r from-[#BDAEEA] to-[#3E3876] rounded-[18px] text-lg w-[200px] border-[1px]">Start Exam</button></div>
        </div>

        <div className="flex mt-10">
        <div className="bg-gradient-to-r from-purple-900 bg-opacity-25 to-indigo-900  rounded-[12px] p-2 border-white border-[1px] w-[82%] pb-4">
          <div className="text-[30px] font-[600]">Instructions :</div>

          <ul className="list-disc mt-2 ml-5 text-[18px]">
            <li>
              You will get 30 minute to solve 20 questions.
            </li>
              <li>You must get 10 out of 20 to pass exam. </li>
              <li>
                All the question will be objective(question with answer options)
                no any subjective questions included.
              </li>
              <li>
                You must clearly tick in the answer(Tips: better not to leave
                any questions).
              </li>
              <li>
                You must carry necessary thing for exam (pen, your citizenship
                card and payment bill).
              </li>
              <li>
                Other necessary information and process are told before exam.
              </li>
          </ul>
        </div>
        </div>
      </div>
    </>
  );
};

export default OnlineExam;
