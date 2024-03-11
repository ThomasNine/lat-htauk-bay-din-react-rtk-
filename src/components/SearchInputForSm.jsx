import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const SearchInputForSm = ({ setSmSearchInput }) => {
  return (
    <motion.div
      className="smSearchInput flex space-x-1 items-center h-14 container mx-auto px-2 sm:px-9"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setSmSearchInput(false)}
        className=" rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
          />
        </svg>
      </Button>
      <Input
        type="search"
        className=" flex-grow rounded-full"
        placeholder="သိလိုသောမေးခွန်းအား ရှာဖွေပါ"
      />
    </motion.div>
  );
};

export default SearchInputForSm;
