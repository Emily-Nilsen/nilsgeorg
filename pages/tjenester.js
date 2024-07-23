import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';
import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';

export default function Tjenester() {
  const { t } = useTranslation();

  return (
    <Layout
      title={t('layout:tjenester_title')}
      description={t('layout:tjenester_description')}
      keywords={t('layout:tjenester_keywords')}
    >
      <header className="relative h-[40vh] bg-slate-800">
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
              src="/images/oslo_at_night.webp"
              alt="Oslo city at night"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 30%"
              unoptimized={true}
              priority={true}
            />
          </motion.div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex pb-[12vh]">
            <h2 className="text-5xl font-medium leading-5 text-blue-200 sm:text-6xl lg:text-8xl">
              {t('services:tjenester')}
            </h2>
          </div>
        </div>
      </header>

      <div className="pb-16 overflow-hidden bg-white lg:pb-24">
        <div className="relative max-w-xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl">
          {/* <div className="relative">
            <h1 className="text-3xl font-extrabold leading-8 tracking-tight text-center text-slate-900 sm:text-4xl">
              {t('services:title')}
            </h1>
            <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-slate-500">
              {t('services:subtitle')}
            </p>
          </div> */}

          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                {t('services:title_booking')}
              </h1>
              <p className="mt-3 text-lg text-slate-500">
                {t('services:text_booking')}
              </p>
              <div className="mt-6 prose prose-lg prose-blue text-slate-500">
                <ul role="list">
                  <li>{t('services:item_1_booking')}</li>
                  <li>{t('services:item_2_booking')}</li>
                  <li>{t('services:item_3_booking')}</li>
                  <li>{t('services:item_4_booking')}</li>
                </ul>
              </div>
            </div>

            <div className="relative mt-10 -mx-4 lg:mt-0" aria-hidden="true">
              <div className="p-4 aspect-w-12 aspect-h-10 lg:aspect-none lg:pl-8 lg:p-0">
                <motion.div
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{
                    delay: 0.5,
                    duration: 0.8,
                    type: 'fade',
                  }}
                  className="relative object-cover object-center rounded-lg shadow-lg"
                >
                  <Image
                    className="rounded-lg"
                    layout="responsive"
                    objectFit="cover"
                    objectPosition="center"
                    width={360}
                    height={300}
                    src="/images/sitting.webp"
                    alt="Tenor Nils Georg Nilsen"
                    unoptimized={true}
                  />
                </motion.div>
              </div>
            </div>
          </div>

          <div className="relative mt-12 sm:mt-16 lg:mt-24">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="lg:col-start-2">
                <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                  {t('services:title_sangtimer')}
                </h1>
                <p className="mt-3 text-lg text-slate-500">
                  {t('services:text_sangtimer')}
                </p>

                <div className="mt-6 prose prose-lg prose-blue text-slate-500">
                  <ul role="list">
                    <li>{t('services:item_1_sangtimer')}</li>
                    <li>{t('services:item_2_sangtimer')}</li>
                  </ul>
                </div>
              </div>

              <div className="relative mt-10 -mx-4 lg:mt-0 lg:col-start-1">
                <div className="p-4 lg:pr-8 lg:p-0 aspect-w-12 aspect-h-10 lg:aspect-none">
                  <motion.div
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{
                      delay: 0.5,
                      duration: 0.8,
                      type: 'fade',
                    }}
                    className="relative object-cover object-center rounded-lg shadow-lg"
                  >
                    <Image
                      className="rounded-lg"
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="center"
                      width={360}
                      height={300}
                      src="/images/voice.webp"
                      alt="Tenor Nils Georg Nilsen"
                      unoptimized={true}
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
