import React from "react";
import { Routes, Route } from "react-router-dom";
import { AnswerPage, HomePage, NotFoundPage, SearchResultPage } from "../pages";
import { AnimatePresence } from "framer-motion";
const RoutePath = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/questions/:id" element={<AnswerPage />} />
        <Route path="/search" element={<SearchResultPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default RoutePath;
