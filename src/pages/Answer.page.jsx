import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { numberList } from "../db/numberList";
import { Button } from "../components/ui/button";
import { AnswerModal } from "../components/AnswerModal";

const AnswerPage = () => {
  const location = useLocation();
  const { id } = useParams();
  const nav = useNavigate();
  const questionName = location.state?.questionName;
  const handleBackBtn = () => {
    nav(-1);
  };
  const questionNo = Number(id);

  return (
    <div className="pb-8">
      <div className=" flex flex-col items-center min-h-[85vh] space-y-8 sm:space-y-14 pb-10">
        <h4 className=" font-medium mt-6 sm:mt-14 text-center px-3">
          {questionName}
        </h4>
        <div className=" flex flex-wrap gap-2 justify-center items-center ">
          {numberList.map((i, index) => (
            <AnswerModal questionNo={questionNo} answer={i} key={index} />
          ))}
        </div>
      </div>
      <Button onClick={handleBackBtn} className="w-full mt-auto">
        နောက်သို့
      </Button>
    </div>
  );
};

export default AnswerPage;
