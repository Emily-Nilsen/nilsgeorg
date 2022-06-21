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
import Testimonials from '../components/home/testimonials';

export default function Home() {
  const { t } = useTranslation();

  return (
    <Layout>
      <header className="relative h-screen bg-slate-800">
        <div className="absolute inset-0">
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
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1655456097/Nils%20Georg/general/hero_gak7b3.webp"
              alt="Nils Georg Nilsen | Tenor"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              unoptimized={true}
              priority={true}
            />
          </motion.div>
        </div>

        <div className="absolute inset-0 flex items-end p-6 sm:p-20 lg:items-center">
          <div className="flex flex-col lg:pb-0 pb-[12vh]">
            <h2 className="text-5xl font-medium leading-5 text-blue-200 sm:text-6xl lg:text-8xl">
              Tenor
            </h2>
            <h1 className="py-6 text-5xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl">
              Nils
              <span className="block">Nilsen</span>
            </h1>
          </div>
        </div>
      </header>

      <main>
        <Features />
        <Bio />
        <NordicTenors />
        <Testimonials />
      </main>
    </Layout>
  );
}
