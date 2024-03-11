import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { AnimatePresence, motion } from "framer-motion";
import SearchInputForSm from "./SearchInputForSm";
import DarkModeBtn from "./DarkModeBtn";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [smSearchInput, setSmSearchInput] = useState(false);

  return (
    <AnimatePresence>
      <div className=" shadow-lg dark:shadow-gray-500 dark:shadow sticky top-0 bg-white dark:bg-black z-40">
        {smSearchInput ? (
          <SearchInputForSm setSmSearchInput={setSmSearchInput} />
        ) : (
          <motion.div
            className="flex justify-between items-center h-16 container mx-auto px-2 sm:px-9"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0 }}
          >
            <Link to={"/"}>
              <h4 className=" text-lg font-bold text-amber-700 dark:text-amber-500">
                လက်ထောက်ဗေဒင်
              </h4>
            </Link>

            <Input
              type="search"
              className="hidden sm:block w-80 md:w-96 rounded-full"
              placeholder="သိလိုသောမေးခွန်းအား ရှာဖွေပါ"
            />
            <div className=" flex ">
              {/* search icon  */}
              <Button
                variant="ghost"
                size="icon"
                className="sm:hidden rounded-full"
                onClick={() => setSmSearchInput(true)}
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
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </Button>
              <DarkModeBtn />
            </div>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
};

export default Navbar;
