import Link from 'next/link';
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Pagination({ postsPerPage, totalPosts, paginate }) {
  const [isActive, setIsActive] = useState(false);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-slate-200 sm:px-6">
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-slate-700">
            Total of{' '}
            {/* <span className="font-medium">{postsPerPage}</span> events
            per page of  */}
            <span className="font-medium">{totalPosts}</span> events
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <ul className="flex overflow-hidden list-none">
              {pageNumbers.map((number) => (
                <li key={number} className="mr-1">
                  <a
                    onClick={() => paginate(number)}
                    href="#events"
                    aria-current="page"
                    className={`${`relative z-10 inline-flex items-center px-4 py-2 overflow-hidden text-sm font-normal transition duration-300 ease-in-out border rounded-md hover:bg-blue-500 hover:text-white border-slate-200 bg-slate-100 text-slate-800`} `}
                  >
                    {number}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
