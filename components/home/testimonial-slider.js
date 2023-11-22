import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { ChevronDownIcon, CheckIcon } from '@heroicons/react/solid';

export default function TestimonialSlider() {
  const { t } = useTranslation();

  const testimonials = [
    {
      testimonial: `${t('home:testimonial_1')}`,
      author: `Neil Rosenshein`,
      source: `${t('home:testimonial_1_source')}`,
    },
    {
      testimonial: `${t('home:testimonial_2')}`,
      author: `Patricia McCaffrey`,
      source: `${t('home:testimonial_2_source')}`,
    },
    {
      testimonial: `${t('home:testimonial_3')}`,
      author: `John Lidal`,
      source: `${t('home:testimonial_3_source')}`,
    },
    {
      testimonial: `${t('home:testimonial_4')}`,
      author: `Sherrill Milnes`,
      source: `${t('home:testimonial_4_source')}`,
    },
  ];
  return (
    <div className="py-2 bg-white sm:py-16">
      <div className="relative px-0 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <Carousel
          infiniteLoop
          autoPlay
          showThumbs={false}
          interval="6000"
          transitionTime="1000"
          useKeyboardArrows
          swipeable={false}
          stopOnHover
          showStatus={false}
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            const defStyle = {
              marginLeft: 30,
              cursor: 'pointer',
              width: 1,
              height: 1,
              color: 'transparent',
              backgroundColor: '#f1f5f9',
              borderRadius: 100,
            };
            const style = isSelected
              ? {
                  ...defStyle,
                  backgroundColor: '#60a5fa',
                  color: 'transparent',
                }
              : { ...defStyle };
            return (
              <span
                style={style}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                key={index}
                role="button"
                tabIndex={0}
                aria-label={`${label} ${index + 1}`}
              >
                {`GA`}
              </span>
            );
          }}
        >
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="relative flex items-center justify-center h-full px-8 pt-16 pb-24 bg-white lg:px-16"
            >
              <div className="relative text-center">
                <blockquote className="mt-0 text-slate-800">
                  <h4 className="max-w-3xl text-lg font-normal tracking-tight sm:text-xl">
                    “{testimonial.testimonial}”
                  </h4>

                  <footer className="mt-6">
                    <div className="md:flex md:items-center md:justify-center">
                      <div className="md:flex-shrink-0"></div>
                      <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                        <div className="text-base font-normal text-slate-900">
                          {testimonial.author}
                        </div>
                        <span>
                          <svg
                            className="hidden w-5 h-5 mx-1 text-blue-500 md:block"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M11 0h3L9 20H6l5-20z" />
                          </svg>
                        </span>
                        <div className="text-base font-light text-slate-600">
                          {testimonial.source}
                        </div>
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
