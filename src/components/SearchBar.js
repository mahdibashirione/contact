import { FiSearch } from "react-icons/fi"

const SearchBar = ({ setSearch }) => {

  const searchValueHandler = (e) => {
    setSearch(e.target.value)
  }


  return (
    <nav className="w-full px-4 bg-white pb-4 flex items-center justify-center">
      <div className="w-full max-w-[500px] bg-[#f4f4f4] flex items-center p-2 rounded-lg">
        <FiSearch className="text-2xl ml-2 text-gray-500" />
        <input
          onChange={searchValueHandler}
          type="text"
          placeholder="جستوجو..."
          className="w-full bg-[#f4f4f4] outline-none" />
      </div>
    </nav>
  );
}

export default SearchBar;