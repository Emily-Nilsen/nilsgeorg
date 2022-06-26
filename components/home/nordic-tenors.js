import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';

export default function NordicTenors() {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <div className="px-4 pb-0 mx-auto max-w-7xl sm:pb-0 sm:px-6 lg:px-8">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: '10vh' }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            type: 'fade',
          }}
          className="relative overflow-hidden rounded-lg"
        >
          <div className="absolute inset-0">
            <div className="relative object-cover object-center w-full h-full">
              <Image
                src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1655789400/Nils%20Georg/general/nordic_tenors_singing_imoral.webp"
                alt="Nordic Tenors"
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                unoptimized={true}
              />
            </div>
          </div>
          <div className="relative px-6 py-32 bg-opacity-20 bg-gradient-to-t from-slate-800 sm:py-40 sm:px-12 lg:px-16">
            <div className="relative flex flex-col items-center max-w-3xl mx-auto text-center">
              <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
                <span className="inline">Nordic</span>
                <span className="inline"> Tenors</span>
              </h1>
              <p className="mt-3 text-base text-white sm:text-lg lg:text-xl">
                {t('home:nordic_tenors_text')}
              </p>
              <Link
                href="https://www.nordictenors.no/"
                target="_blank"
                rel="noreferrer"
              >
                <a className="block w-full px-8 py-3 mt-8 text-base font-medium transition duration-300 ease-in-out bg-white border border-transparent rounded-md text-slate-900 hover:bg-slate-100 sm:w-auto">
                  Nordic Tenors
                </a>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
