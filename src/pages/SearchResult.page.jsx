import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import DataList from "../components/DataList";
import GoToTopBtn from "../components/GoToTopBtn";
import { Button } from "../components/ui/button";

const SearchResultPage = () => {
  const location = useLocation();
  const data = location.state?.filteredData;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <div className=" py-5">
        {data.length === 0 ? (
          <div className=" flex flex-col min-h-[90vh] justify-center items-center space-y-3">
            <h4>ရှာဖွေနေသောဟောကိန်းအား မတွေ့ရှိပါ။</h4>
            <Link to={-1}>
              <Button>နောက်သို့</Button>
            </Link>
          </div>
        ) : (
          <DataList data={data} />
        )}
      </div>
      <div className="fixed bottom-5 right-3">
        <GoToTopBtn />
      </div>
    </motion.div>
  );
};

export default SearchResultPage;
