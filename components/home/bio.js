import Link from 'next/link';
import Image from 'next/image';
import { CameraIcon } from '@heroicons/react/solid';
import Rehearsal from './rehearsal';
import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';

export default function Bio() {
  const { t } = useTranslation();

  return (
    <div className="overflow-hidden bg-white">
      <div className="relative px-4 pb-16 mx-auto sm:pb-24 lg:pb-32 max-w-7xl sm:px-6 lg:px-8">
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h1 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-slate-900 sm:text-4xl">
              Nils Georg
            </h1>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <div className="relative mx-auto text-base max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-10 lg:aspect-none">
                  <motion.div
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{
                      delay: 0.5,
                      duration: 0.8,
                      type: 'fade',
                    }}
                    className="object-cover object-center rounded-lg shadow-lg"
                  >
                    <Image
                      className="rounded-lg"
                      src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1656320467/Nils%20Georg/general/NG_compressed_mif4dm.jpg"
                      alt="Tenor Nils Georg Nilsen"
                      width={1184}
                      height={987}
                      unoptimized={true}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="top"
                    />
                  </motion.div>
                </div>
                <figcaption className="flex mt-3 text-sm text-slate-600">
                  <CameraIcon
                    className="flex-none w-5 h-5 text-slate-500"
                    aria-hidden="true"
                  />
                  <span className="ml-2">{t('home:photo_by')}</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mx-auto text-base max-w-prose lg:max-w-none">
              <p className="text-base sm:text-lg text-slate-600">
                {t('home:sent_1')}
              </p>
            </div>
            <div className="mx-auto mt-5 prose prose-blue text-slate-600 lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p>{t('home:sent_2')}</p>
              <p>{t('home:sent_3')}</p>
              <p>
                {' '}
                {t('home:sent_4_start')}{' '}
                <Link
                  href="https://www.academiagalamian.com/en/estudios/voz"
                  target="_blank"
                  rel="noreferrer"
                >
                  <a className="font-normal text-blue-500 no-underline duration-300 ease-in-out hover:text-blue-600 tranisition">
                    {t('home:galamian_link')}
                  </a>
                </Link>{' '}
                {t('home:sent_4_end')}
              </p>

              <Rehearsal />
              <h4 className="text-xl">{t('home:extensive_title')}</h4>
              <p>{t('home:sent_5')}</p>
              <p>{t('home:sent_6')}</p>
              <p>{t('home:sent_7')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
