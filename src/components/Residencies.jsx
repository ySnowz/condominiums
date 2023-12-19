import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../utils/slider.json";
import { sliderSettings } from "../common";

export const Residencies = () => {
  return (
    <>
      <section className="w-full mt-16 flex flex-col items-center justify-center py-4">
        <div className="w-full px-8 flex flex-row items-center justify-between">
          <div>
            <h2 className="text-2xl font-medium text-orange-400">
              Best Choices
            </h2>
            <h1 className="text-4xl font-bold tracking-wide text-slate-700 mb-4">
              Popular Residencies
            </h1>
          </div>
        </div>
        <Swiper className="w-full px-8" {...sliderSettings}>
          <div className="flex gap-4 mt-6">
            <SliderButtons />
          </div>
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="flex gap-2 lg:w-[550px] items-start justify-start bg-gray-50 p-4 rounded-md drop-shadow-sm">
                <div>
                  <img src={item.image} className="lg:w-[250px] lg:h-[150px]" />
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-slate-800 font-bold tracking-wide text-xl">
                    {item.name}
                  </h2>
                  <h3 className="text-slate-600 opacity-70 text-[12px] w-[280px]">
                    {item.detail}
                  </h3>
                  <p className="text-orange-400 font-light">${item.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <>
      <button
        onClick={() => swiper.slidePrev()}
        className="px-4 py-2 bg-blue-50 rounded duration-100 ease-linear active:scale-95 text-slate-600 drop-shadow-sm hover:bg-blue-100"
      >
        &lt;
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="px-4 py-2 bg-blue-500 rounded duration-100 ease-linear active:scale-95 text-slate-600 drop-shadow-sm hover:bg-blue-600"
      >
        &gt;
      </button>
    </>
  );
};
