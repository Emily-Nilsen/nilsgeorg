import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import useTranslation from 'next-translate/useTranslation';

export default function Language() {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const { t } = useTranslation();

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <span className="relative z-0 hidden shadow-none sm:inline-flex">
      <button
        type="button"
        className="relative inline-flex items-center px-0 transition duration-300 ease-in-out cursor-pointer bg-t focus:z-10 focus:outline-none border-y-0 focus:ring-0 text-slate-400 hover:text-white"
      >
        <Link activeClassName={locale === 'en'} href={asPath} locale="en">
          <p className="text-xs font-normal cursor-pointer sm:text-sm">EN</p>
        </Link>
      </button>
      <button>
        <p className="px-1 text-sm font-normal sm:px-4 text-slate-500">|</p>
      </button>
      <button>
        <Link activeClassName={locale === 'es'} href={asPath} locale="es">
          <p className="px-0 text-xs font-normal transition duration-300 ease-in-out sm:text-sm text-slate-400 hover:text-white">
            ES
          </p>
        </Link>
      </button>
      <button>
        <p className="px-1 text-sm font-normal sm:px-4 text-slate-500">|</p>
      </button>
      <button
        type="button"
        className="relative inline-flex items-center px-0 transition duration-300 ease-in-out bg-t focus:z-10 focus:outline-none border-y-0 focus:ring-0 text-slate-400 hover:text-white"
      >
        <Link activeClassName={locale === 'no'} href={asPath} locale="no">
          <p className="text-xs font-normal sm:text-sm">NO</p>
        </Link>
      </button>
    </span>
  );
}
