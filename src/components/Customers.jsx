import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import { testimonials } from "../data";
import { Navigation } from "swiper/modules";
import { Starts } from "./Stars";
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";

export const Customers = () => {
  const btnNav = useRef();

  const handleNext = () => {
    btnNav.current.swiper.slideNext();
  };
  const handlePrev = () => {
    btnNav.current.swiper.slidePrev();
  };

  return (
    <div className="py-10 container">
      <div className="flex justify-between  mb-10">
        <h1 className="uppercase font-bold md:text-3xl text-[1.2rem]">
          OUR HAPPY CUSTOMERS
        </h1>
        <div className="flex items-center gap-5">
          <GrFormPreviousLink
            onClick={handlePrev}
            className="text-3xl cursor-pointer"
          />
          <GrFormNextLink
            onClick={handleNext}
            className="text-3xl cursor-pointer"
          />
        </div>
      </div>

      <Swiper
        loop={true}
        ref={btnNav}
        spaceBetween={50}
        grabCursor={true}
        modules={[Navigation]}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },
        }}
        className="mySwiper"
      >
        {testimonials.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <Starts rate={item.rate} />
              <h1 className="text-lg font-semibold my-3">{item.name}</h1>
              <p className="text-sm opacity-80 text-balance">{item.text}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
