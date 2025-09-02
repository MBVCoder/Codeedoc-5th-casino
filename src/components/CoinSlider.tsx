import Slider from "react-slick";
import coin1 from "@assets/coins/1.svg";
import coin2 from "@assets/coins/10.svg";
import coin3 from "@assets/coins/100.svg";
import coin4 from "@assets/coins/1k.svg";
import coin5 from "@assets/coins/10k.svg";
import coin6 from "@assets/coins/100k.svg";
import coin7 from "@assets/coins/1m.svg";

const CoinSlider = () => {
  const coins = [coin1, coin2, coin3, coin4, coin5, coin6, coin7];
  const settings = {
    className: "center",
    infinite: false,
    centerPadding: "20px", // Reduced padding for better fit
    slidesToShow: 3, // Adjusted number of items to show on smaller screens
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024, // For larger screens
        settings: {
          slidesToShow: 5,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 768, // For medium-sized screens
        settings: {
          slidesToShow: 3,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 480, // For mobile screens
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div className="slider-container w-full overflow-hidden">
      <Slider {...settings}>
        {coins.map((coin, index) => (
          <div key={index} className="slider-item flex justify-center">
            <img src={coin} alt="coin" className="size-5" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CoinSlider;
