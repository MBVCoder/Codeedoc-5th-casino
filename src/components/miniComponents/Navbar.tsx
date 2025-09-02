import DropDown from "@components/miniComponents/DropDown";
import logo from "@assets/bg/logo.svg";
import { useSelector } from "react-redux";
import furycoin from '@assets/coins/funfury.svg';
const Navbar = () => {
  const balance = useSelector((state: any) => state.balance.balance);

  return (
    <div className="flex items-center h-15 bg-gray-900 px-6 fixed top-0 w-full z-40 border-b-[1px] border-gray-300/10">
      <div className="px-6 flex justify-between items-center w-full">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-auto h-10" />
        </div>
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-3 border-[2px] border-gray-300/10 px-3 py-1 rounded-md">
          <img src={furycoin} alt="icon" className="w-auto h-5" />
            <h1 className="text-white text-md">{balance.toLocaleString()}.00</h1>
          </div>
          <DropDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
