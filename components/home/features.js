import Link from 'next/link';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { motion } from 'framer-motion';

export default function Features() {
  const { t } = useTranslation();

  const features = [
    // {
    //   name: `${t('common:nyheter')}`,
    //   url: '/nyheter',
    // },
    {
      name: `${t('common:tjenester')}`,
      url: '/tjenester',
    },
    {
      name: `${t('common:kontakt')}`,
      url: '/kontakt',
    },
  ];

  return (
    <div className="relative py-16 bg-white sm:py-24 lg:py-32">
      <div className="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          {t('home:features_title')}
        </h1>
        {/* <p className="mx-auto mt-5 text-xl font-light text-slate-500 max-w-prose">
          {t('home:features_text')}
        </p> */}
        <div className="mt-12">
          <div className="grid max-w-2xl grid-cols-1 gap-2 mx-auto sm:gap-8 sm:grid-cols-2">
            {features.map((feature, i) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: '10vh',
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  initialDelay: 0.3,
                  duration: 0.7,
                  delay: i * 0.3,
                  ease: 'easeOut',
                }}
                key={i}
                className="pt-6"
              >
                <Link href={feature.url} passHref>
                  <div className="flow-root px-6 py-5 duration-300 ease-in-out rounded-lg cursor-pointer bg-slate-100 hover:bg-blue-500 hover:text-white tranistion group">
                    <div className="flex items-center justify-center">
                      <h4 className="text-xl font-medium tracking-tight transition duration-300 ease-in-out text-slate-800 group-hover:text-white">
                        {feature.name}
                      </h4>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
