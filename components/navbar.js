import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LanguageSwitcher from '../components/language-switcher';
import { motion } from 'framer-motion';
import { Fragment } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { DotsVerticalIcon, XIcon } from '@heroicons/react/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const { t } = useTranslation();

  return (
    <div className="absolute top-0 left-0 z-30 flex justify-between w-full p-6 sm:px-20">
      <Link href="/" passHref className="z-50 cursor-pointer hover:scale-105">
        <Image
          src="/images/logo-long-white.svg"
          alt="Nils Georg logo"
          width={150}
          height={50}
        />
      </Link>
      <LanguageSwitcher />
      <button>
        <div className="flex gap-3 sm:gap-8">
          {asPath === '/' ? null : (
            <Link href="/" passHref>
              <p className="text-xs font-normal tracking-wide uppercase transition duration-300 ease-in-out text-zinc-400 hover:text-white sm:text-sm">
                {t('common:hjem')}
              </p>
            </Link>
          )}
          {/* {asPath.includes('/nyheter') ? null : (
            <Link href="/nyheter" passHref>
              <p className="text-xs font-normal tracking-wide uppercase transition duration-300 ease-in-out text-zinc-400 hover:text-white sm:text-sm">
                {t('common:nyheter')}
              </p>
            </Link>
          )} */}
          {asPath.includes('/tjenester') ? null : (
            <Link href="/tjenester" passHref>
              <p className="text-xs font-normal tracking-wide uppercase transition duration-300 ease-in-out text-zinc-400 hover:text-white sm:text-sm">
                {t('common:tjenester')}
              </p>
            </Link>
          )}
          {asPath.includes('/kontakt') ? null : (
            <Link href="/kontakt" passHref>
              <p className="text-xs font-normal tracking-wide uppercase transition duration-300 ease-in-out text-zinc-400 hover:text-white sm:text-sm">
                {t('common:kontakt')}
              </p>
            </Link>
          )}
        </div>
      </button>
    </div>
  );
};

export default Navbar;
