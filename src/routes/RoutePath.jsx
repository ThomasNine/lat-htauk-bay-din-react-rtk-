import React from "react";
import { Routes, Route } from "react-router-dom";
import { AnswerPage, HomePage, SearchResultPage } from "../pages";
import { AnimatePresence } from "framer-motion";
const RoutePath = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/questions/:id" element={<AnswerPage />} />
        <Route path="/:result" element={<SearchResultPage />} />
        {/* <Route path="/result/:search_keywords" element={<SearchResultPage />} /> */}
      </Routes>
    </AnimatePresence>
  );
};

export default RoutePath;
