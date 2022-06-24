import Image from 'next/image';
import Link from 'next/link';
import dayjs from 'dayjs';
import { LinkIcon, MailIcon, CalendarIcon } from '@heroicons/react/solid';
import useTranslation from 'next-translate/useTranslation';

export default function Nyheter() {
  const { t } = useTranslation();
  const currentDatestamp = Date.now();

  const events = [
    {
      title: `Test`,
      location: `Test`,
      date: '2022-06-22',
      expiryDate: `${new Date('2022-06-25').getTime()}`,
      dateFull: `${t('news:friday')}, ${t('news:el')}24${t('news:of')} ${t(
        'news:june'
      )}, 2022`,
      artists: `Nils Georg Nilsen ${t('news:and')} Susanne Hvinden Hals`,
      link: `https://www.musikkislemmestad.no/konsert-2-juli-musikal-operette-og-operaperler`,
    },
    {
      title: `Musikal, Operette- og Opera-Perler`,
      location: `Café Plenum, Slemmestad`,
      date: '2022-07-09',
      expiryDate: `${new Date('2022-07-10').getTime()}`,
      dateFull: `${t('news:saturday')}, ${t('news:el')}9${t('news:of')} ${t(
        'news:july'
      )}, 2022`,
      artists: `Nils Georg Nilsen ${t('news:and')} Susanne Hvinden Hals`,
      link: `https://www.musikkislemmestad.no/konsert-2-juli-musikal-operette-og-operaperler`,
    },
    {
      title: `Nordic Tenors Classics`,
      location: `Vesterålen Kulturhus, Stokmarknes`,
      date: '2022-09-13',
      expiryDate: `${new Date('2022-09-14').getTime()}`,
      dateFull: `${t('news:tuesday')}, ${t('news:el')}13${t('news:of')} ${t(
        'news:september'
      )}, 2022`,
      artists: `Roald Haarr, Nils Georg Nilsen ${t(
        'news:and'
      )} Jan-Tore Saltnes`,
      link: `https://checkout.ebillett.no/108/events/12481/purchase/setup?kanal=dxf&utm_medium=social&utm_source=nordictenors.no&utm_campaign=Stokmarknes+classics+2022`,
    },
    {
      title: `Nordic Tenors Classics`,
      location: `Sola Kulturhus`,
      date: '2022-09-18',
      expiryDate: `${new Date('2022-09-19').getTime()}`,
      dateFull: `${t('news:sunday')}, ${t('news:el')}18${t('news:of')} ${t(
        'news:september'
      )}, 2022`,
      artists: `Roald Haarr, Nils Georg Nilsen ${t(
        'news:and'
      )} Jan-Tore Saltnes`,
      link: `https://www.solakulturhus.no/event/nordic-tenors-classics/`,
    },
    {
      title: `Nordic Tenors Classics`,
      location: `Bærum Kulturhus, Sandvika`,
      date: '2022-10-18',
      expiryDate: `${new Date('2022-10-19').getTime()}`,
      dateFull: `${t('news:tuesday')}, ${t('news:el')}18${t('news:of')} ${t(
        'news:october'
      )}, 2022`,
      artists: `Roald Haarr, Nils Georg Nilsen ${t(
        'news:and'
      )} Jan-Tore Saltnes`,
      link: `https://www.baerumkulturhus.no/arrangement/nordic-tenors-classics/?utm_medium=social&utm_source=nordictenors.no&utm_campaign=Sandvika+classics+2022`,
    },
    {
      title: `Christmas with Nordic Tenors`,
      location: `Bakkenteigen, Horten`,
      date: '2022-11-22',
      expiryDate: `${new Date('2022-11-23').getTime()}`,
      dateFull: `${t('news:tuesday')}, ${t('news:el')}22${t('news:of')} ${t(
        'news:november'
      )}, 2022`,
      artists: `Roald Haarr, Nils Georg Nilsen ${t(
        'news:and'
      )} Jan-Tore Saltnes`,
      link: `https://bakkenteigen.ticketco.events/no/en/e/turnepremiere_christmas_with_nordic_tenors?utm_campaign=horten+cwnt+2022&amp;utm_medium=social&amp;utm_source=nordictenors.no`,
    },
    {
      title: `Christmas with Nordic Tenors`,
      location: `Asker Kulturhus`,
      date: '2022-11-23',
      expiryDate: `${new Date('2022-11-24').getTime()}`,
      dateFull: `${t('news:wednesday')}, ${t('news:el')}23${t('news:of')} ${t(
        'news:november'
      )}, 2022`,
      artists: `Roald Haarr, Nils Georg Nilsen ${t(
        'news:and'
      )} Jan-Tore Saltnes`,
      link: `https://www.askerkulturhus.no/program/christmas-with-nordic-tenors/?utm_medium=social&utm_source=nordictenors.no&utm_campaign=asker+cwnt+2023`,
    },
    {
      title: `Christmas with Nordic Tenors`,
      location: `Ullensaker Kulturhus`,
      date: '2022-11-25',
      expiryDate: `${new Date('2022-11-26').getTime()}`,
      dateFull: `${t('news:friday')}, ${t('news:el')}25${t('news:of')} ${t(
        'news:november'
      )}, 2022`,
      artists: `Roald Haarr, Nils Georg Nilsen ${t(
        'news:and'
      )} Jan-Tore Saltnes`,
      link: `https://www.ticketmaster.no/event/685855?language=no-no&track=DiscoveryAPI&subchannel_id=1&brand=ullensakerkulturhus&_ga=2.109271811.703174804.1645691954-329025345.1622720366&utm_medium=social&utm_source=nordictenors.no&utm_campaign=ullensaker+cwnt+2024`,
    },
  ];

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
              {t('news:news')}
            </h2>
          </div>
        </div>
      </header>
      {/* Title */}
      <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-base font-semibold tracking-wide text-blue-500 uppercase">
            {t('news:subtitle')}
          </h3>
          <h1 className="mt-1 text-4xl font-extrabold text-slate-800 sm:text-5xl sm:tracking-tight lg:text-6xl">
            {t('news:title')}
          </h1>
          <p className="max-w-xl mx-auto mt-5 text-xl text-slate-500">
            {t('news:text')}
          </p>
        </div>
      </div>
      {/* List of events */}
      <div className="max-w-3xl mx-auto mb-16 overflow-hidden bg-white shadow sm:rounded-md sm:mb-24">
        <ul role="list" className="divide-y divide-slate-200">
          {events.map((event, i) => (
            <li key={i}>
              {currentDatestamp > event.expiryDate ? null : (
                <a href={event.link} className="block hover:bg-blue-500 group">
                  <div className="grid items-start grid-cols-1 px-4 py-4 sm:grid-cols-5 sm:px-6">
                    <div className="col-span-1 sm:col-span-3">
                      <div className="truncate">
                        <div className="flex text-sm lg:text-base">
                          <p className="font-medium text-blue-500 truncate group-hover:text-white">
                            {event.title}
                          </p>
                          <p className="flex-shrink-0 ml-1 font-normal text-slate-500 group-hover:text-blue-100">
                            - {event.location}
                          </p>
                        </div>
                        <div className="flex mt-2">
                          <div className="">
                            <p className="text-sm lg:text-base text-slate-500 group-hover:text-blue-50">
                              {event.artists}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1 sm:col-span-2">
                      <div className="flex items-stretch justify-between">
                        <div className="mt-4 sm:mt-0 sm:ml-5">
                          <div className="flex items-center text-sm lg:text-base text-slate-500">
                            <CalendarIcon
                              className="flex-shrink-0 mr-1.5 h-5 w-5 text-slate-400 group-hover:text-blue-200"
                              aria-hidden="true"
                            />
                            <p className="group-hover:text-white">
                              <time dateTime={event.date}>
                                {event.dateFull}
                              </time>
                            </p>
                          </div>
                        </div>
                        <div className="self-end ml-5">
                          <LinkIcon
                            className="w-5 h-5 text-slate-400 group-hover:text-blue-200"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
