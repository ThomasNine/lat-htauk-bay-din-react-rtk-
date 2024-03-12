import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { answers } from "../db/mock";

export function AnswerModal({ answer, questionNo }) {
  const data = answers;
  let filterData = data.filter(
    (i) => i.questionNo === questionNo && i.answerNo === answer.engValue
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className=" w-12">
          {answer.mmValue}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className=" leading-7 text-center mt-3 mb-1">
            {filterData[0]?.answerResult}
          </DialogTitle>
        </DialogHeader>
        <DialogFooter className="">
          <DialogClose asChild>
            <Button
              type="button"
              variant="secondary"
              className="mx-auto w-full"
            >
              ပိတ်ပါ
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
