import React, { useState,useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Hero = () => {


  const slides = [

    {
      url: "../images/img_1.jpeg" ,
    },

    {
      url: "../images/img_2.jpeg" ,
    },
    // {
    //   url: "../images/img_2.jpeg" ,
    // },

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) =>
				prevIndex === slides.length - 1 ? 0 : prevIndex + 1
			);
		}, 2000);
		return () => clearInterval(interval);
	}, [currentIndex, slides.length]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="h-[160px] md:h-[250px]  lg:h-[500px] relative group border border-gray-400">
      {/* <img src="../images/img_1.jpeg" alt="" /> */}
      {/* Hero left side */}
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='sm:w-full h-full bg-center bg-cover duration-1000'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
