import { useState } from "react";
import { searchCountry } from "../services/searchCountry";

export default function Search({setCountries}) {
  const [searchValue, setSearchValue] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!searchValue.trim()) return;
    try{
        const res = await searchCountry(searchValue)
        setCountries(res)
    }
    catch(error){
        console.error("search req failed", error)
    }
  }

  return (
    <form className="flex w-full max-w-md gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="flex-1 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm
                   text-gray-900 placeholder-gray-400
                   focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="rounded-md bg-blue-500 px-4 py-2 text-sm text-white
                   hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}
