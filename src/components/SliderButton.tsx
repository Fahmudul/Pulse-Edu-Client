"use client";
import { useSwiper } from "swiper/react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
const SliderButton = ({
  containerStyles,
  btnStyle,
  iconStyle,
}: {
  containerStyles: string;
  btnStyle: string;
  iconStyle?: string;
}) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyle} onClick={() => swiper.slidePrev()}>
        <SlArrowLeft className={iconStyle} />
      </button>
      <button className={btnStyle} onClick={() => swiper.slideNext()}>
        <SlArrowRight className={iconStyle} />
      </button>
    </div>
  );
};

export default SliderButton;
