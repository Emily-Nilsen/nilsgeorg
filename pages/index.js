import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';
import useTranslation from 'next-translate/useTranslation';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, PhoneIcon, XIcon } from '@heroicons/react/outline';
import { motion } from 'framer-motion';
import Features from '../components/home/features';
import Bio from '../components/home/bio';
import NordicTenors from '../components/home/nordic-tenors';
import TestimonialSlider from '../components/home/testimonial-slider';

export default function Home() {
  const { t } = useTranslation();

  return (
    <Layout
      title={t('layout:hjem_title')}
      description={t('layout:hjem_description')}
      keywords={t('layout:hjem_keywords')}
    >
      <header className="relative h-screen bg-slate-800">
        {/* Small screens */}
        <div className="absolute inset-0 lg:hidden">
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              duration: 0.8,
              type: 'fade',
            }}
            className="object-cover w-full h-full"
          >
            <Image
              src="/images/smiling.webp"
              alt="Nils Georg Nilsen | Tenor"
              layout="fill"
              objectFit="cover"
              objectPosition="40% 50%"
              unoptimized={true}
              priority={true}
            />
          </motion.div>
        </div>
        {/* Large screens */}
        <div className="absolute inset-0 hidden lg:block">
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              duration: 0.8,
              type: 'fade',
            }}
            className="object-cover w-full h-full"
          >
            <Image
              src="/images/smiling.webp"
              alt="Nils Georg Nilsen | Tenor"
              layout="fill"
              objectFit="cover"
              objectPosition="100% 12%"
              unoptimized={true}
              priority={true}
            />
          </motion.div>
        </div>

        <div className="absolute inset-0 flex items-center p-6 sm:p-20 lg:items-center">
          <div className="flex flex-col pb-0">
            <h2 className="text-5xl font-medium leading-5 text-blue-200 sm:text-6xl lg:text-8xl">
              Tenor
            </h2>
            <p className="py-6 text-5xl font-medium tracking-normal text-white uppercase sm:text-7xl lg:text-8xl">
              Nils
              <span className="block">Nilsen</span>
            </p>
          </div>
        </div>
      </header>

      <main>
        <Features />
        <Bio />
        <NordicTenors />
        <TestimonialSlider />
      </main>
    </Layout>
  );
}
