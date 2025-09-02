import {CircleLoader} from "react-spinners";
const Loader = () => {
  return (
    <div className="w-full min-h-screen z-50 bg-black flex justify-center items-center">
      <CircleLoader color="#d83dff" size={90} />
    </div>
  );
};

export default Loader;
