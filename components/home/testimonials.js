import useTranslation from 'next-translate/useTranslation';
import React, { Component } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 6.1,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: {
    opacity: [0, 1, 0],
    transition: {
      duration: 6,
      type: 'fade',
      ease: 'easeOut',
    },
  },
};
const itemLast = {
  hidden: { opacity: 0 },
  show: {
    opacity: [0, 1],
    transition: {
      duration: 3,
      type: 'fade',
      ease: 'easeOut',
    },
  },
};

export default function Testimonials() {
  const { t } = useTranslation();
  const testimonials = [
    {
      testimonial: `He has a beautiful instrument and a unique timber.`,
      author: `Neil Rosenshein`,
      source: `World-renowned American operatic tenor, New York`,
    },
    {
      testimonial: `I found him to be a very focused young man with an excellent sense of musicality.`,
      author: `Patricia McCaffrey`,
      source: `Trish McCaffrey Voice Studio, New York`,
    },
    {
      testimonial: `He possesses an attractive, lyrical tenor voice, with an exceptional clarity, and distinct and expressive timbre.`,
      author: `John Lidal`,
      source: `Norwegian National Opera & Ballet, Oslo`,
    },
    {
      testimonial: `Mr. Nilsen is a talented and driven young tenor with an outgoing personality and a great sense of humor. He has both a unique and memorable voice, with interesting color and timbre, as well as a natural musicality apparent in all his performances.`,
      author: `Sherrill Milnes`,
      source: `Universally acclaimed as the foremost operatic baritone of his generation, Illinois`,
    },
  ];

  const firstTestimonials = testimonials.slice(0, 3);

  return (
    <section className="py-12 overflow-hidden bg-white md:py-20 lg:py-24">
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative">
          <blockquote className="mt-6 sm:pb-[13vh] pb-[43vh]">
            <motion.ol variants={container} initial="hidden" whileInView="show">
              {firstTestimonials.map((testimonial, i) => (
                <motion.li
                  className="absolute inset-0 flex flex-col w-full h-full mt-2"
                  key={i}
                  variants={item}
                  exit={{ opacity: 1 }}
                >
                  <div className="max-w-3xl pb-6 mx-auto text-lg font-medium text-center sm:leading-9 sm:text-xl text-slate-900">
                    <h4>“{testimonial.testimonial}”</h4>
                  </div>
                  <footer className="mt-0">
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
                </motion.li>
              ))}
              <motion.li
                className="absolute inset-0 flex flex-col w-full h-full mt-2"
                variants={itemLast}
                exit={{ opacity: 1 }}
              >
                <div className="max-w-3xl pb-6 mx-auto text-lg font-medium text-center sm:leading-9 sm:text-xl text-slate-900">
                  <h4>
                    “Mr. Nilsen is a talented and driven young tenor with an
                    outgoing personality and a great sense of humor. He has both
                    a unique and memorable voice, with interesting color and
                    timbre, as well as a natural musicality apparent in all his
                    performances.”
                  </h4>
                </div>
                <footer className="mt-0">
                  <div className="md:flex md:items-center md:justify-center">
                    <div className="md:flex-shrink-0"></div>
                    <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                      <div className="text-base font-normal text-slate-900">
                        Sherrill Milnes
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
                        Universally acclaimed as the foremost operatic baritone
                        of his generation, Illinois
                      </div>
                    </div>
                  </div>
                </footer>
              </motion.li>
            </motion.ol>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
