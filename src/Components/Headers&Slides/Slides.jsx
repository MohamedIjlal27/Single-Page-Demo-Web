import React, { useState, useEffect } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import { slides } from '../../Data/data.json';
import './Slides.css';

function Slides() {
    const [slide, setSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 2000);

        return () => clearInterval(interval);
    }, [slide]);

    const nextSlide = () => {
        setSlide(slide === slides.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? slides.length - 1 : slide - 1);
    };

    return (
        <div className='slider'>
            <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide} />
            {slides.map((item, index) => {
                return (
                    <img src={item.src} alt={item.alt} key={index} className={slide === index ? 'slide' : 'slide slide-hidden'} />
                );
            })}
            <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide} />
            <span className='indicators'>
                {slides.map((_, index) => {
                    return (
                        <button key={index} onClick={() => setSlide(index)} className={slide === index ? 'indicator' : 'indicator indicator-inactive'}></button>
                    );
                })}
            </span>
        </div>
    );
}

export default Slides;
