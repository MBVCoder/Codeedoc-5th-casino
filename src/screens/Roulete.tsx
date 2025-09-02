import { CircleQuestionMark } from "lucide-react";
import redandwhitecoin from "@assets/coins/redwhitecoin.png";
import pagebg from "@assets/bg/casinobg.png";
import light from "@assets/coins/lightning.png";
import furycoin from "@assets/coins/funfury.svg";
import CoinSlider from "@components/CoinSlider";
import {
  Heart,
  Maximize,
  Settings,
  ShieldCheck,
  ChartColumnDecreasing,
  History,
  Rewind,
  CircleX,
} from "lucide-react";
import wheel from "@assets/gamespart/wheel.png";
import foreground from "@assets/gamespart/foreground.png";
import xmid from "@assets/gamespart/xmid.png";
import { useEffect, useState } from "react";
import Loader from "@components/miniComponents/Loader";
import { Board } from "@components/Board";

const allNumbers = [
  0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24,
  16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26,
];

const Roulete = () => {
  const [hoveredNums, setHoveredNums] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <Loader />;
  }
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
      <div className="Main-container h-[80%] w-[70%] relative ">
        {/* <div className="grid grid-flow-row-dense grid-cols-8 grid-rows-8 gap-6 w-full h-full">
          <div className=" bg-pink-500 row-span-7 col-span-2">01</div>
          <div className=" bg-pink-600  row-span-7 col-span-6">02</div>
          <div className="bg-pink-700 col-span-2">03</div>
          <div className="bg-pink-800 col-span-6">04</div>
        </div> */}
        <div className="flex w-full h-full gap-[24px]">
          <div className="max-w-[270px] w-full h-full flex flex-col items-center justify-center gap-[24px] rounded-2xl bg-slate-900/90 backdrop-blur-sm border-[1px] border-gray-300/10 Control-Part">
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
                <div className="flex w-full gap-1">
                  <CoinSlider />
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
          <div className=" w-full h-full flex flex-col items-center justify-center gap-[24px] Game-Part">
            <div className=" w-full h-full">
              <div className="bg-gradient-to-t from-purple-900/50 backdrop-blur-2xl border-4 border-purple-900 h-[90%] max-w-[700px] mt-7 mx-auto rounded-2xl">
                <div className="flex items-center h-full w-full relative">
                  <div className="bg-blue-900 flex items-center absolute top-2 right-2 p-1 rounded-2xl hover:translate-y-[-4px] duration-300 cursor-pointer">
                    <History className="size-5" />
                  </div>
                  <div className="absolute top-30 left-[-60px]">
                    <div className="flex justify-between items-center gap-2 -rotate-90 bg-purple-800 px-3 rounded-b-2xl hover:cursor-pointer">
                      <img
                        src={redandwhitecoin}
                        alt="icon"
                        className="w-auto h-7 mt-3"
                      />
                      <h1 className="font-semibold text-md tracking-wide">
                        Section Bets
                      </h1>
                    </div>
                  </div>
                  <div className="w-full h-full rounded-2xl flex flex-col Game-Container">
                    <div className="relative w-fit mx-auto wheel-Container animate-[spin_14s_linear_infinite]">
                      <div className="wheel-container relative">
                        <img
                          src={wheel}
                          alt="spinnerbg"
                          className="w-auto h-70 absolute rotate-90 saturate-200 "
                        />
                        <img
                          src={foreground}
                          alt="spinnerbg"
                          className="w-auto h-70 absolute"
                        />
                      </div>
                      <img
                        src={xmid}
                        alt="spinnerbg"
                        className="w-auto h-70 relative animate-[spin_7s_linear_infinite_reverse]"
                      />
                      {allNumbers.map((num, i) => {
                        const isHighlighted = hoveredNums.includes(num);

                        // base angle around the circle
                        const angle = (i / allNumbers.length) * 2 * Math.PI;
                        const radius = 36;

                        // position
                        const x = 50 + radius * Math.cos(angle);
                        const y = 50 + radius * Math.sin(angle);

                        // rotation in degrees
                        // +90° makes the tall rectangle point toward center
                        const rotationDeg = (angle * 180) / Math.PI + 90;

                        return (
                          <div
                            key={num}
                            className={`absolute transition-all duration-300 ${
                              isHighlighted ? "opacity-40" : "opacity-0"
                            }`}
                            style={{
                              top: `${y}%`,
                              left: `${x}%`,
                              backgroundColor:
                                num === 0
                                  ? "green"
                                  : isRed(num)
                                  ? "yellow"
                                  : "yellow",
                              transform: `translate(-50%, -50%) rotate(${rotationDeg}deg)`,
                              width: "22px", // outer width (at bottom)
                              height: "39px", // radial depth
                              clipPath: "polygon(3% 0%, 105% 0%, 85% 100%, 15% 100%)",
                            }}
                          />
                        );
                      })}
                    </div>
                    <div className="w-full h-full relative Board-Container">
                      <div className="absolute -top-8 right-15 flex gap-2">
                        <div className="bg-purple-700 px-2 py-1 rounded-md">
                          <Rewind className="size-4" />
                        </div>
                        <div className="bg-purple-700 px-2 py-1 rounded-md">
                          <CircleX className="size-4" />
                        </div>
                      </div>
                      <Board hoveredNums={hoveredNums} setHoveredNums={setHoveredNums} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-15">
              <div className="flex justify-between items-center h-full w-full">
                <div className="bg-slate-900/90 border-[1px] border-gray-300/10 rounded-2xl p-1 flex items-center">
                  <div className="bg-slate-800 rounded-xl flex items-center px-3 py-2 gap-2">
                    <Heart className="size-5 text-red-500 fill-red-500" />
                    <span>1.9k</span>
                  </div>
                </div>
                <div className="bg-slate-900/90 border-[1px] border-gray-300/10 rounded-2xl p-1 flex items-center">
                  <div className=" rounded-2xl flex items-center h-full gap-2">
                    <div className="flex items-center bg-slate-800 px-3 py-2 rounded-xl hover:cursor-pointer hover:bg-slate-700 duration-300">
                      <ChartColumnDecreasing className="size-5" />
                    </div>
                    <div className="flex items-center bg-slate-800 px-3 py-2 rounded-xl hover:cursor-pointer hover:bg-slate-700 duration-300">
                      <ShieldCheck className="size-5" />
                    </div>
                    <div className="flex items-center bg-slate-800 px-3 py-2 rounded-xl hover:cursor-pointer hover:bg-slate-700 duration-300">
                      <CircleQuestionMark className="size-5" />
                    </div>
                    <div className="flex items-center bg-slate-800 px-3 py-2 rounded-xl hover:cursor-pointer hover:bg-slate-700 duration-300">
                      <Maximize className="size-5" />
                    </div>
                    <div className="flex items-center bg-slate-800 px-3 py-2 rounded-xl hover:cursor-pointer hover:bg-slate-700 duration-300">
                      <Settings className="size-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roulete;

function isRed(n: number) {
  const reds = new Set([
    1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
  ]);
  return reds.has(n);
}
