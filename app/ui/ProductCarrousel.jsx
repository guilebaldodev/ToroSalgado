"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";

const ProductCarousel = () => {

    const images=["carrousel-1.jpg","carrousel-2.jpg","carrousel-3.jpg"]

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      loop
      className="w-full carousel-height rounded-md"
      >

      
    {images.map((item)=>(
        <>

<SwiperSlide>
        <div className="relative w-full h-full">
          <Image
            src={`/img/carrousel/${item}`}
            alt="Promoción 1"
            fill
            className="object-cover"
          />
        </div>
      </SwiperSlide>

        </>
    ))}

    </Swiper>
  );
};

export default ProductCarousel;