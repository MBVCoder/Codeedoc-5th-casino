import DropDown from "./DropDown";
import { useState } from "react";
import logo from "@assets/bg/logo.png";
const Navbar = () => {
  const [balance, setBalance] = useState(0 as number);
  return (
    <div className="flex items-center h-15 bg-gray-900 px-6 fixed top-0 w-full z-50 border-b-[1px] border-gray-300/10">
      <div className="px-6 flex justify-between items-center w-full">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-auto h-5" />
        </div>
        <div className="flex items-center gap-10">
          <div>
            <input
              value={balance}
              onChange={(e) => setBalance(Number(e.target.value))}
              type="text"
              placeholder="balance"
              className="outline-none bg-gray-600 px-3 py-1 rounded-xl text-white"
            />
          </div>
          <DropDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
