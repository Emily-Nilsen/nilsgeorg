import Image from 'next/image';
import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';

export default function NilsGeorg() {
  const { t } = useTranslation();

  return (
    <div className="pt-10 bg-slate-800">
      {/* Tenor Nils Nilsen */}
      <div className="w-screen bg-slate-50">
        <div className="relative mx-auto overflow-x-hidden overflow-hidden rounded-none bg-slate-800 lg:h-[70vh] w-[100vw] h-[38vh] sm:h-[40vh]">
          <div></div>
          <motion.div className="absolute flex items-center justify-end w-2/3 h-full text-white rounded-none bg-slate-800">
            <div className="flex w-[88%] bg-slate-800 h-5/6">
              <div className="flex items-center justify-start h-full bg-t">
                <div className="flex flex-col">
                  <motion.h2
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{
                      delay: 0.5,
                      duration: 0.5,
                      type: 'fade',
                      ease: 'easeIn',
                    }}
                    className="text-4xl font-medium leading-5 text-blue-200 sm:text-6xl lg:text-7xl"
                  >
                    {t('contact:kontakt')}
                  </motion.h2>
                  <motion.p
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{
                      delay: 1,
                      duration: 0.5,
                      type: 'fade',
                      ease: 'easeIn',
                    }}
                    className="py-6 text-4xl font-medium tracking-normal text-white uppercase sm:text-6xl lg:text-7xl"
                  >
                    Nils
                    <span className="block">Nilsen</span>
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div className="absolute bottom-0 right-0 z-20 flex items-center justify-start w-1/3 h-full text-white rounded-none bg-t">
            {/* White square */}
            <motion.div
              animate={{ x: 0 }}
              initial={{ x: '35vw' }}
              transition={{
                delay: 0.5,
                duration: 0.5,
                ease: 'easeOut',
                type: 'spring',
              }}
              className="w-9/12 bg-white h-5/6"
            ></motion.div>
          </motion.div>
          {/* Black disc with with border */}
          <motion.div
            animate={{ width: '33vw', height: '33vw' }}
            initial={{ width: '0vw', height: '0vw' }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              type: 'spring',
              ease: 'easeOut',
            }}
            className="z-10 rounded-full absolute flex items-center justify-center w-[33vw] h-[33vw] bg-t overflow-hidden border border-white right-[16.5vw] top-1/2 -translate-y-1/2"
          ></motion.div>
          {/* NG round image */}
          <motion.div
            animate={{ width: '29vw', height: '29vw' }}
            initial={{ width: '0vw', height: '0vw' }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              type: 'spring',
              ease: 'easeOut',
            }}
            className="z-30 rounded-full absolute flex items-center justify-center w-[29vw] h-[29vw] bg-t overflow-hidden top-1/2 -translate-y-1/2 right-[18.5vw]"
          >
            <Image
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1655731169/Nils%20Georg/general/NG_circle_roiesa.png"
              alt="Nils Georg Nilsen Tenor"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              unoptimized={true}
            />
          </motion.div>
          {/* B&W overlay */}
          <motion.div
            animate={{ opacity: 0 }}
            initial={{ opacity: 1 }}
            transition={{
              delay: 1.3,
              duration: 1.3,
              type: 'fade',
              ease: 'easeIn',
            }}
            className="z-30 rounded-full absolute flex items-center justify-center w-[29vw] h-[29vw] bg-t overflow-hidden top-1/2 -translate-y-1/2 right-[18.5vw] backdrop-grayscale"
          />
        </div>
      </div>
    </div>
  );
}
