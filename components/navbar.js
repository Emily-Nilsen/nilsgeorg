import Image from 'next/image';
import Link from 'next/link';
import LanguageSwitcher from '../components/language-switcher';
import { motion } from 'framer-motion';
import { Fragment } from 'react';

import { DotsVerticalIcon, XIcon } from '@heroicons/react/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

// logo: 243 x 157

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 z-30 flex justify-between w-full p-6 sm:px-20">
      <LanguageSwitcher />
      <button>
        <div className="flex gap-3 sm:gap-8">
          <Link href="/nyheter" passHref>
            <p className="text-xs uppercase transition duration-300 ease-in-out text-zinc-400 hover:text-white sm:text-sm">
              Nyheter
            </p>
          </Link>
          <Link href="/tjenester" passHref>
            <p className="text-xs tracking-wide uppercase transition duration-300 ease-in-out text-zinc-400 hover:text-white sm:text-sm">
              Tjenester
            </p>
          </Link>
          <Link href="/kontakt" passHref>
            <p className="text-xs uppercase transition duration-300 ease-in-out text-zinc-400 hover:text-white sm:text-sm">
              Kontakt
            </p>
          </Link>
          {/* <DotsVerticalIcon
            className="w-6 h-6 transition duration-300 ease-in-out text-slate-400 hover:text-blue-200"
            aria-hidden="true"
          /> */}
        </div>
      </button>
    </div>
  );
};

export default Navbar;
