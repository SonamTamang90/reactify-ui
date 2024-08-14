import { FaGithub } from "react-icons/fa6";
import {
  HiOutlineBell,
  HiOutlineCog8Tooth,
  HiMagnifyingGlass,
} from "react-icons/hi2";

function Header() {
  return (
    <header className="border-b border-neutrals-400/30 p-4">
      <div className="flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center divide-x divide-neutrals-400 space-x-2">
          <a href="#" className="text-primary-default font-semibold uppercase">
            Reactify-ui
          </a>
          <p className="text-sm text-neutrals-200 pl-2">v1.0.0</p>
        </div>
        {/* LOGO */}

        {/* RIGHT NAV */}
        <div className="flex items-center gap-2">
          {/* Search input */}
          <div className="relative">
            <span className="absolute left-3 top-2 text-primary-default">
              <HiMagnifyingGlass />
            </span>
            <input
              type="text"
              placeholder="Search..."
              className="bg-neutrals-500 text-sm py-1.5 pl-9 border border-neutrals-500 rounded-lg focus:outline-none custom-shadow transition-all duration-300 cursor-pointer hover:bg-neutrals-500 hover:border-neutrals-300"
            />
            <span className="absolute right-3 top-1.5 text-sm text-neutrals-200">
              <span>⌘</span>
              <span>K</span>
            </span>
          </div>
          {/* Search input */}

          {/* Buttons */}
          <div className="space-x-2">
            <button className="bg-neutrals-500 text-xl text-primary-light border border-neutrals-500 p-1.5 rounded-xl custom-shadow transition-all duration-300 hover:border-neutrals-300">
              <FaGithub />
            </button>
            <button className="bg-neutrals-500 text-xl text-primary-light border border-neutrals-500 p-1.5 rounded-xl custom-shadow transition-all duration-300 hover:border-neutrals-300">
              <HiOutlineBell />
            </button>
            <button className="bg-neutrals-500 text-xl text-primary-light border border-neutrals-500 p-1.5 rounded-xl custom-shadow transition-all duration-300 hover:border-neutrals-300">
              <HiOutlineCog8Tooth />
            </button>
          </div>
          {/* Buttons */}
        </div>
        {/* RIGHT NAV */}
      </div>
    </header>
  );
}

export default Header;
