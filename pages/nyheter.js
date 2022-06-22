import Image from 'next/image';
import Link from 'next/link';
import {
  LinkIcon,
  ChevronRightIcon,
  MailIcon,
  CalendarIcon,
} from '@heroicons/react/solid';

const positions = [
  {
    id: 1,
    title: `Nordic Tenors Classics`,
    location: `Vesterålen Kulturhus, Stokmarknes`,
    date: '2022-13-09',
    dateFull: `tirsdag, 13. september, 2022`,
    artists: `Roald Haarr, Nils Georg Nilsen og Jan-Tore Saltnes`,
  },
  {
    id: 2,
    title: `Nordic Tenors Classics`,
    location: `Sola Kulturhus`,
    date: '2022-18-09',
    dateFull: `søndag, 18. september, 2022`,
    artists: `Roald Haarr, Nils Georg Nilsen og Jan-Tore Saltnes`,
  },
  {
    id: 3,
    title: `Nordic Tenors Classics`,
    location: `Bærum Kulturhus, Sandvika`,
    date: '2022-18-10',
    dateFull: `tirsdag, 18. oktober, 2022`,
    artists: `Roald Haarr, Nils Georg Nilsen og Jan-Tore Saltnes`,
  },
  {
    id: 4,
    title: `Christmas with Nordic Tenors`,
    location: `Bakkenteigen, Horten`,
    date: '2022-22-11',
    dateFull: `tirsdag, 22. november, 2022`,
    artists: `Roald Haarr, Nils Georg Nilsen og Jan-Tore Saltnes`,
  },
  {
    id: 5,
    title: `Christmas with Nordic Tenors`,
    location: `Asker Kulturhus`,
    date: '2022-23-11',
    dateFull: `onsdag, 23. november, 2022`,
    artists: `Roald Haarr, Nils Georg Nilsen og Jan-Tore Saltnes`,
  },
  {
    id: 6,
    title: `Christmas with Nordic Tenors`,
    location: `Ullensaker Kulturhus`,
    date: '2022-25-11',
    dateFull: `fredag, 25. november, 2022`,
    artists: `Roald Haarr, Nils Georg Nilsen og Jan-Tore Saltnes`,
  },
];

export default function Nyheter() {
  return (
    <section>
      <header className="relative h-[40vh] bg-slate-800">
        <div className="absolute inset-0">
          <div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{
              duration: 0.8,
              type: 'fade',
            }}
            className="object-cover w-full h-full"
          >
            <Image
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1655788429/Nils%20Georg/general/Oslo_at_night_bkh3z1.webp"
              alt="Nils Georg Nilsen | Tenor"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 30%"
              unoptimized={true}
              priority={true}
            />
          </div>
        </div>

        <div className="absolute inset-0 flex items-end p-6 sm:p-20 lg:items-center">
          <div className="flex flex-col lg:pb-0 pb-[12vh]">
            <h2 className="text-5xl font-medium leading-5 text-blue-200 sm:text-6xl lg:text-8xl">
              Nyheter
            </h2>
          </div>
        </div>
      </header>
      {/* Title */}
      <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-base font-semibold tracking-wide text-blue-500 uppercase">
            Upcoming Events
          </h3>
          <h1 className="mt-1 text-4xl font-extrabold text-slate-800 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Concerts and festivals
          </h1>
          <p className="max-w-xl mx-auto mt-5 text-xl text-slate-500">
            Find a list of upcoming concerts, festivals and private events for
            tenor Nils Georg Nilsen.
          </p>
        </div>
      </div>
      {/* List of events */}
      <div className="max-w-3xl mx-auto mb-16 overflow-hidden bg-white shadow sm:rounded-md sm:mb-24">
        <ul role="list" className="divide-y divide-slate-200">
          {positions.map((position) => (
            <li key={position.id}>
              <a href="#" className="block hover:bg-slate-50">
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="flex-1 min-w-0 sm:flex sm:items-center sm:justify-between">
                    <div className="truncate">
                      <div className="flex text-sm">
                        <p className="font-medium text-blue-500 truncate">
                          {position.title}
                        </p>
                        <p className="flex-shrink-0 ml-1 font-normal text-slate-500">
                          - {position.location}
                        </p>
                      </div>
                      <div className="flex mt-2">
                        <div className="flex items-center text-sm text-slate-500">
                          <CalendarIcon
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-slate-400"
                            aria-hidden="true"
                          />
                          <p>
                            <time dateTime={position.date}>
                              {position.dateFull}
                            </time>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0 mt-4 sm:mt-0 sm:ml-5">
                      <div className="flex -space-x-1 overflow-hidden">
                        <p className="text-slate-500">{position.artists}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-5">
                    <LinkIcon
                      className="w-5 h-5 text-slate-400"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
