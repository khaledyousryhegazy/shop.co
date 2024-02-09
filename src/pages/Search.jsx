// import { useEffect, useState } from "react";
// import { GoSearch } from "react-icons/go";
// import { useNavigate } from "react-router-dom";

// export const Search = () => {
//   //logic
//   const [value, setValue] = useState("");
//   const navigate = useNavigate();

//   const handleSearch = () => {
//     if (value.length > 2) {
//       navigate(`/search?q=${encodeURIComponent(value)}`); //search?q=/:query
//     }
//   };

//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };
//   return (
//     <div className="px-2 mb-10">
//       <label
//         htmlFor="default-search"
//         className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
//       >
//         Search
//       </label>
//       <div className="relative">
//         <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
//           <GoSearch className="text-xl text-gray-400" />
//         </div>
//         <input
//           type="search"
//           className="block w-full p-3 ps-9 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none"
//           placeholder="Search Mockups, Logos..."
//           required
//           value={value}
//           onChange={handleChange}
//         />
//         <button
//           type="button"
//           className="text-white bg-gray-800 hover:bg-black absolute top-1/2 -translate-y-1/2 right-1.5 font-medium rounded-lg text-sm px-4 py-2"
//           onClick={handleSearch}
//         >
//           Search
//         </button>
//       </div>
//     </div>
//   );
// };

import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (value.length > 2) {
      navigate(`/search?q=${value}`); //search?q=/:query
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="px-2 mb-10">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
          <GoSearch className="text-xl text-gray-400" />
        </div>
        <input
          type="search"
          className="block w-full p-3 ps-9 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none"
          placeholder="Search Mockups, Logos..."
          required
          //   value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button
          type="button"
          className="text-white bg-gray-800 hover:bg-black absolute top-1/2 -translate-y-1/2 right-1.5 font-medium rounded-lg text-sm px-4 py-2"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};
