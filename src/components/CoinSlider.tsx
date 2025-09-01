import { useState } from "react";
import coin1 from "@assets/coins/1.svg";
import coin2 from "@assets/coins/10.svg";
import coin3 from "@assets/coins/100.svg";
import coin4 from "@assets/coins/1k.svg";
import coin5 from "@assets/coins/10k.svg";
import coin6 from "@assets/coins/100k.svg";
import coin7 from "@assets/coins/1m.svg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CoinSlider = () => {
  const coins = [coin1, coin2, coin3, coin4, coin5, coin6, coin7];
  const values = [1, 10, 100, 1_000, 10_000, 100_000, 1_000_000];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCoin, setSelectedCoin] = useState(coin1);

  const visibleCount = 5;

  const handleButton = (direction: "left" | "right") => () => {
    setCurrentIndex((prev) => {
      if (direction === "left") {
        return prev === 0 ? coins.length - visibleCount : prev - 1;
      } else {
        return prev >= coins.length - visibleCount ? 0 : prev + 1;
      }
    });
  };

  const formatValue = (val: number) => {
    if (val >= 1_000_000) return val / 1_000_000 + "M";
    if (val >= 1_000) return val / 1_000 + "k";
    return val;
  };

  return (
    <div className="slider-container w-full overflow-hidden">
      <div className="flex items-center justify-center gap-2 w-full h-full border border-gray-300/10 rounded-md bg-black/30">
        <button
          onClick={handleButton("left")}
          className="slider-button bg-gray-700 rounded-r-md py-2 hover:bg-gray-600 hover:cursor-pointer duration-300 flex items-center"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 62}px)`,
            }}
          >
            {coins.map((coin, index) => (
              <div
                onClick={() => setSelectedCoin(coin)}
                key={index}
                className="flex-shrink-0 w-[40px] flex items-center justify-center py-2 relative  hover:translate-y-[-2px] hover:cursor-pointer"
              >
                <img
                  src={coin}
                  alt="coin"
                  className={`size-7 ${
                    coin === selectedCoin
                      ? "opacity-100 ring-3 ring-blue-600 rounded-4xl"
                      : "opacity-50"
                  }`}
                />
                <p className="text-[10px] font-semibold absolute text-black mx-auto">
                  {formatValue(values[index])}
                </p>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleButton("right")}
          className="slider-button bg-gray-700 rounded-l-md py-2  hover:bg-gray-600 hover:cursor-pointer duration-300 flex items-center"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default CoinSlider;
