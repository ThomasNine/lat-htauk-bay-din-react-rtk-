import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { useNavigate } from "react-router-dom";

const DataList = ({ data }) => {
  const nav = useNavigate();
  const handleClickQuestion = (i) => {
    nav(`/questions/${i.questionNo}`, {
      state: { questionName: i.questionName },
    });
  };
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[30px] sm:w-[50px] text-center">
              စဉ်
            </TableHead>
            <TableHead className="text-center">ဟောကိန်းများ</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((i) => (
            <TableRow key={i.questionNo} onClick={() => handleClickQuestion(i)}>
              <TableCell className="font-medium text-center">
                {i.questionNo}
              </TableCell>
              <TableCell className="py-5">{i.questionName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DataList;
