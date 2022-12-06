"use client";

import {useRouter} from "next/navigation";
import {FormEvent, useState} from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/search/${search}`);
  };

  return (
    <form onSubmit={handleSearch} className="w-full flex content-evenly pt-1">
      <input
        type="text"
        value={search}
        placeholder="Enter the search term"
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 bg-gray-100"
      />
      <button
        type="submit"
        className="ml-4 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
