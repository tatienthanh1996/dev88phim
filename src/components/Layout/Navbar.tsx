import Link from "next/link";
import { FC } from "react";
import { FaSearch } from "react-icons/fa";

import SearchBox from "../Search/SearchBox";

const NavBar: FC = () => {
  return (
    <div className="flex justify-between items-center my-7">
      <Link href="/">
        <a className="flex items-center gap-2">
          <img className="w-25 h-10" src="https://odetv.vn/images/common/headerLogo.svg" alt="" />
          <span className="text-xl font-medium"></span>
        </a>
      </Link>

      <Link href="/search">
        <a className="block md:hidden">
          <FaSearch className="w-6 h-6" />
        </a>
      </Link>

      <div className="max-w-[500px] hidden md:block">
        <SearchBox />
      </div>
    </div>
  );
};

export default NavBar;
