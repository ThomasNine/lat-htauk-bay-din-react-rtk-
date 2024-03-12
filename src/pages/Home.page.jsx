import React, { useState } from "react";
import { motion } from "framer-motion";
import DataList from "../components/DataList";
import GoToTopBtn from "../components/GoToTopBtn";
import { Button } from "../components/ui/button";
import { questions } from "../db/mock.js";
const HomePage = () => {
  const [endData, setEndData] = useState(15);

  const handleMoreBtn = () => {
    setEndData(endData + 15);
  };
  const startData = 0;
  const endDataToShow = Math.min(endData, questions.length);
  const currentData = questions.slice(startData, endDataToShow);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <div className=" py-5">
        <DataList data={currentData} />
        {currentData.length !== questions.length && (
          <Button
            variant="outline"
            className=" w-full py-5 mt-5 rounded-full"
            onClick={handleMoreBtn}
          >
            More
          </Button>
        )}
      </div>
      <div className="fixed bottom-5 right-3">
        <GoToTopBtn />
      </div>
    </motion.div>
  );
};

export default HomePage;
