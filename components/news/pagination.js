import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

export default function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-slate-200 sm:px-6">
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-slate-700">
            Showing <span className="font-medium">{postsPerPage}</span> events
            per page of <span className="font-medium">{totalPosts}</span>{' '}
            results
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            {/* <a
              onClick={() => paginate(pageNumbers - 1)}
              href="#"
              className="relative inline-flex items-center px-2 py-2 text-sm font-medium bg-white border text-slate-500 border-slate-300 rounded-l-md hover:bg-slate-50"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
            </a> */}
            <ul className="flex overflow-hidden list-none">
              {pageNumbers.map((number) => (
                <li key={number} className="">
                  <a
                    onClick={() => paginate(number)}
                    href="#"
                    aria-current="page"
                    className="relative z-10 inline-flex items-center px-4 py-2 overflow-hidden text-sm font-normal border rounded-full border-slate-100 focus:border-2 focus:text-blue-600 focus:border-blue-500 bg-t overscroll-contain focus:bg-blue-50"
                  >
                    {number}
                  </a>
                </li>
              ))}
            </ul>
            {/* <a
              onClick={() => paginate(pageNumbers + 1)}
              href="#"
              className="relative inline-flex items-center px-2 py-2 text-sm font-medium bg-white border text-slate-500 border-slate-300 rounded-r-md hover:bg-slate-50"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
            </a> */}
          </nav>
        </div>
      </div>
    </div>
    // <nav
    //   className="flex items-center justify-between px-4 py-6 bg-white border-t border-slate-200 sm:px-6"
    //   aria-label="Pagination"
    // >
    //   <ul>
    //     {pageNumbers.map((number) => (
    //       <li key={number}>
    //         <a onClick={() => paginate(number)} href="#">
    //           {number}
    //         </a>
    //       </li>
    //     ))}
    //   </ul>
    // </nav>
  );
}
