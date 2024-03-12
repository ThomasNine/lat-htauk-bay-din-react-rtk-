import React, { useState } from "react";
import { Button } from "./ui/button";
import { AnimatePresence, motion } from "framer-motion";
import DarkModeBtn from "./DarkModeBtn";
import { Link } from "react-router-dom";
import { SearchSuggestion } from "./SearchSuggestion";
import { useGetQuestionsQuery } from "../store/api_services/endpoints/questions.endpoint";
import { useNavigate } from "react-router-dom";
import { Input } from "./ui/input";
import { questions } from "../db/mock";

const Navbar = () => {
  const [smSearchInput, setSmSearchInput] = useState(false);
  const data = questions;
  const [searchWords, setSearchWords] = useState("");
  const nav = useNavigate();

  const filteredData = data.filter((item) =>
    item.questionName.includes(searchWords)
  );

  const handleTypeSearch = (e) => {
    setSearchWords(e.target.value);
  };
  const handleClickSuggestion = (i) => {
    nav(`/questions/${i.questionNo}`, {
      state: { questionName: i.questionName },
    });
    setSearchWords("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    nav(`/search`, {
      state: { filteredData },
    });
    setSearchWords("");
  };

  return (
    <AnimatePresence>
      <div className=" shadow-lg dark:shadow-gray-500 dark:shadow sticky top-0 bg-white dark:bg-black z-40">
        {smSearchInput ? (
          <motion.div
            className="flex justify-center items-start h-16 space-x-1 container mx-auto py-3 px-2 sm:px-9"
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
            <div className={` w-60 space-y-1`}>
              <form onSubmit={handleSubmit}>
                <Input
                  value={searchWords}
                  type="search"
                  className=" rounded-full"
                  placeholder="သိလိုသောမေးခွန်းအား ရှာဖွေပါ"
                  onChange={handleTypeSearch}
                  required
                  autoFocus={true}
                />
              </form>
              <SearchSuggestion
                searchWords={searchWords}
                handleClickSuggestion={handleClickSuggestion}
                filteredData={filteredData}
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="flex justify-between items-start h-16 container mx-auto py-3 px-2 sm:px-9"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0 }}
          >
            <Link to={"/"}>
              <h4 className=" text-lg font-bold mt-1 text-amber-700 dark:text-amber-500">
                လက်ထောက်ဗေဒင်
              </h4>
            </Link>
            <div className={`hidden sm:block space-y-1`}>
              <form onSubmit={handleSubmit}>
                <Input
                  value={searchWords}
                  type="search"
                  className="hidden sm:block w-72 md:w-96 rounded-full"
                  placeholder="သိလိုသောမေးခွန်းအား ရှာဖွေပါ"
                  onChange={handleTypeSearch}
                  required
                />
              </form>
              <SearchSuggestion
                searchWords={searchWords}
                handleClickSuggestion={handleClickSuggestion}
                filteredData={filteredData}
              />
            </div>
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
