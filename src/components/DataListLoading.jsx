import { Skeleton } from "./ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export function DataListLoading() {
  const fakeArray = Array.from({ length: 10 }, (_, index) => index + 1);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[30px] sm:w-[50px] h-10">
            <Skeleton className=" w-full h-full" />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {fakeArray.map((i) => (
          <TableRow key={i}>
            <TableCell className="w-[30px] sm:w-[50px] h-12 ">
              <Skeleton className=" w-full h-full" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
