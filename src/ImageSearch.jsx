import React, { useState } from "react";

export default function ImageSearch({ searchText }) {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
        <form onSubmit={onSubmit} action="" className="w-full">
          <div className="flex items-center border-b-2 border-yellow-500 py-2">
            <input
              onChange={(e) => setText(e.target.value)}
              type="text"
              placeholder="Search Image Term..."
              name=""
              id=""
              className=" text-white appearance-none bg-transparent border-none w-full  mr-3 py-1 px-4 leading-tight focus:outline-none"
            />
            <button
              type="submit"
              className="flex-shrink-0 bg-yellow-500 hover:bg-yellow-700 border-yellow-500 hover:border-yellow-700 text-sm border-4 text-white py-1 px-2 rounded"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
