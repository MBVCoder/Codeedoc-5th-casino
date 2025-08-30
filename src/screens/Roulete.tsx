import { CircleQuestionMark } from "lucide-react";
import pagebg from "@assets/bg/casinobg.png";
import light from "@assets/coins/lightning.png";
import furycoin from "@assets/coins/funfury.svg";
import CoinSlider from "@components/CoinSlider";

const Roulete = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      <img
        src={pagebg}
        alt="roulette"
        className="w-auto h-[90%] absolute top-0 left-0 z-0"
      />
      <div
        className="absolute bottom-0 left-0 z-0 w-full h-[30vh]"
        style={{
          background: `linear-gradient(to top, rgba(0, 0, 0, 0.9) 20%, rgba(0, 0, 0, 0.9) 35%, rgba(255,0,0,0) 100%)`,
        }}
      />
      <div className="game-container h-[80%] w-[70%] relative ">
        {/* <div className="grid grid-flow-row-dense grid-cols-8 grid-rows-8 gap-6 w-full h-full">
          <div className=" bg-pink-500 row-span-7 col-span-2">01</div>
          <div className=" bg-pink-600  row-span-7 col-span-6">02</div>
          <div className="bg-pink-700 col-span-2">03</div>
          <div className="bg-pink-800 col-span-6">04</div>
        </div> */}
        <div className="flex w-full h-full gap-[24px]">
          <div className="max-w-[270px] w-full h-full flex flex-col items-center justify-center gap-[24px] rounded-2xl bg-slate-900/90 backdrop-blur-sm border-[1px] border-gray-300/10">
            <div className=" w-full h-full">
              <div className="flex justify-around items-center border-b-[1px] border-gray-300/10 h-[50px] font-primary modepannel">
                <h1>Manual</h1>
                <h1>Auto</h1>
              </div>
              <div className="flex flex-col p-3 betinfopannel gap-3">
                <div className="flex justify-between chipvalue">
                  <p className="text-[13px] tracking-wide text-gray-500 font-semibold">
                    Chip value
                  </p>
                  <div className="flex items-center gap-1 text-white">
                    <img src={furycoin} alt="icon" className="size-4" />
                    <p className="text-[13px] text-gray-500">10.000000</p>
                  </div>
                </div>
                <div className="flex flex-col gap-1 betinput">
                  <div className="betselect bg-black/30 p-2 rounded-md border-[1px] border-gray-300/20">
                    <div className="flex items-center gap-3 px-1">
                      <img src={furycoin} alt="icon" className="size-6" />
                      <div>
                        <h1 className="text-[13px] text-gray-500 font-semibold">
                          Total Bet
                        </h1>
                        <h1 className="text-sm">0</h1>
                      </div>
                    </div>
                    <div></div>
                  </div>
                  <div className="flex w-full gap-1">
                    <button className="w-full bg-slate-800 p-1 text-sm text-gray-400 rounded-md border-[1px] border-gray-300/20">
                      /2
                    </button>
                    <button className="w-full bg-slate-800 p-1 text-sm text-gray-400 rounded-md border-[1px] border-gray-300/20">
                      x2
                    </button>
                  </div>
                </div>
                <div>
                  <CoinSlider />
                </div>
                <button className="bg-red-700 py-3 rounded-lg shadow-lg inset-shadow-sm inset-shadow-white/50 shadow-red-500/30 tracking-wide">
                  BET
                </button>
              </div>
            </div>
            <div className=" w-full h-15">
              <div className="flex justify-center items-center bg-gray-800 w-fit mx-auto px-3 py-1 h-10 rounded-full text-white gap-2 overflow-hidden">
                <img src={light} alt="icon" className="w-auto h-8 mt-3" />
                <div className="flex justify-center gap-1 text-[15px] font-bold">
                  <h1>RTP</h1>
                  <h1 className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-transparent bg-clip-text">
                    97.30 %
                  </h1>
                </div>
                <CircleQuestionMark className="size-5 text-white/30" />
              </div>
            </div>
          </div>
          <div className="bg-pink-800 w-full h-full flex flex-col items-center justify-center gap-[24px]">
            <div className="bg-green-600 w-full h-full"></div>
            <div className="bg-green-700 w-full h-15"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roulete;
