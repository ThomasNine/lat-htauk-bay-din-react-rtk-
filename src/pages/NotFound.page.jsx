import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <div className=" flex items-center justify-center h-[85vh] w-full">
        <div className=" flex flex-col">
          <img src="/404error.svg" alt="404 page" className="  w-[500px]" />
          <div className="flex flex-col justify-center items-center space-y-5">
            <h4 className=" text-center text-base sm:text-xl">
              ယခုစာမျက်နှာအား မတွေ့ရှိပါ။
            </h4>
            <Link to={"/"}>
              <Button>မူလစာမျက်နှာသို့</Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NotFoundPage;
