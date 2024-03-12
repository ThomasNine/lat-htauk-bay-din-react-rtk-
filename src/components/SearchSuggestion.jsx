import { Command, CommandEmpty, CommandGroup, CommandList } from "./ui/command";

export function SearchSuggestion({
  searchWords,
  handleClickSuggestion,
  filteredData,
}) {
  return (
    <Command
      className={`border shadow-md w-72 md:w-96 ${!searchWords && "hidden"}`}
    >
      <CommandList className="">
        {filteredData.length === 0 && (
          <CommandEmpty>No results found.</CommandEmpty>
        )}
        <CommandGroup heading="Suggestions" className="">
          {filteredData.map((i) => (
            <p
              key={i.questionNo}
              className=" text-sm py-2 px-3 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg"
              onClick={() => handleClickSuggestion(i)}
            >
              {i.questionName}
            </p>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
