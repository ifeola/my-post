import { Bell, Plus, Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile";

const Header = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <header className="fixed top-0 left-0 flex items-center justify-between w-full px-6 py-2 border-b border-b-gray-800 bg-background-clr z-20">
      <Link to="/" className="flex items-center gap-2">
        <div className="w-6 h-6 bg-teal-600 " />
        <span className="text-xl font-bold">PostMail</span>
      </Link>
      <label
        htmlFor="search"
        className="flex items-center w-full gap-2 bg-gray-900 pl-2 border border-transparent has-[input:focus]:border-gray-700 rounded-xl max-w-96">
        <Search />
        <input
          id="search"
          name="search"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search"
          className="w-full px-4 py-2 pl-0 bg-transparent border-0 outline-none "
        />
      </label>
      <div className="flex items-center gap-2">
        <button className="grid w-10 h-10 bg-gray-300 rounded-lg place-content-center">
          <Plus className="fill-background-clr stroke-background-clr" />
        </button>
        <button className="relative grid w-10 h-10 bg-gray-800 rounded-lg place-content-center">
          <span className="absolute inline-flex items-center justify-center w-5 h-5 bg-red-600 rounded-md -right-1 -top-1 text-white text-xs font-medium">
            30
          </span>
          <Bell className="stroke-gray-300" />
        </button>
        <Profile className="w-10 h-10" />
      </div>
    </header>
  );
};
export default Header;
