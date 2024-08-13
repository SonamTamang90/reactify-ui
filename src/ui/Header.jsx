import { FaGithub } from "react-icons/fa6";
import { HiOutlineBell, HiOutlineCog8Tooth } from "react-icons/hi2";

function Header() {
  return (
    <header className="border-b border-[#3d4751]/30">
      <div className="">
        <a href="#" className="text-primary ">
          Reactifyui
        </a>
        <input type="text" placeholder="Search..." className="" />
        <div className="">
          <button>
            <FaGithub />
          </button>
          <button>
            <HiOutlineBell />
          </button>
          <button>
            <HiOutlineCog8Tooth />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
