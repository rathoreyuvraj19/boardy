"use client";

import { Input } from "@/components/ui/input";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import qs from "query-string";
import { ChangeEvent, useEffect, useState } from "react";
import { useDebounceCallback, useDebounceValue } from "usehooks-ts";

export const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const debounce = useDebounceCallback(setValue, 500);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    debounce(e.target.value);
  };

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: {
          search: value,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );
    console.log(url);
    router.push(url);
  }, [value, router]);

  return (
    <div className="w-full relative">
      <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4"></Search>
      <Input
        className="w-full max-w-[516px] pl-9"
        placeholder="Search Boards"
        onChange={handleChange}
        defaultValue={value}
      ></Input>
    </div>
  );
};
