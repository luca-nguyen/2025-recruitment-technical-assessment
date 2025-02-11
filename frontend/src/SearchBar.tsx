function SearchBar() {
  return (
    <form className="w-full h-full">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-300 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full py-1.25 ps-10 border focus:border-2 border-gray-400 focus:border-theme hover:border-black text-lg rounded-sm focus:outline-none [&::-webkit-search-cancel-button]:hidden placeholder:text-gray-400"
          placeholder="Search for a building..."
          autoComplete="off"
        />
      </div>
    </form>
  );
}

export default SearchBar;
