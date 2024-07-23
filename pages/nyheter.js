import { useState, useEffect } from 'react';
import Layout from '../components/layout';
import Image from 'next/image';
import Link from 'next/link';
import dayjs from 'dayjs';
import { LinkIcon, MailIcon, CalendarIcon } from '@heroicons/react/solid';
import useTranslation from 'next-translate/useTranslation';
import Pagination from '../components/news/pagination';
import { motion } from 'framer-motion';

export default function Nyheter() {
  const { t } = useTranslation();

  const currentDatestamp = Date.now();

  const events = [
    {
      title: `Málaga Clásica: Revoluciones`,
      location: `Teatro Cervantes, Málaga`,
      date: '2023-05-29',
      expiryDate: `${new Date('2023-06-05').getTime()}`,
      dateFull: `${t('news:monday')}, ${t('news:el')}29${t('news:of')} ${t(
        'news:may'
      )}, 2023`,
      artists: `Various artists`,
      link: `https://teatrocervantes.com/es/genero/musica/xi-malaga-clasica-revoluciones/`,
    },
    // Old events below
    {
      title: `Vinterkonserten 2023`,
      location: `Holmen kirke`,
      date: '2023-02-01',
      expiryDate: `${new Date('2023-02-01').getTime()}`,
      dateFull: `${t('news:wednesday')}, ${t('news:el')}01${t('news:of')} ${t(
        'news:february'
      )}, 2023`,
      artists: `Jacob Conradi, Nils Nilsen ${t('news:and')} Susanne- ${t(
        'news:and'
      )} Kathrine Hals`,
      link: `https://nesbru.rotary.no/no/hjem#.Y8Jxq-yZOJm`,
    },
    {
      title: `Operacafé`,
      location: `Kulturhus Stabekk Kino`,
      date: '2023-02-02',
      expiryDate: `${new Date('2023-02-02').getTime()}`,
      dateFull: `${t('news:thursday')}, ${t('news:el')}02${t('news:of')} ${t(
        'news:february'
      )}, 2023`,
      artists: `Cecilie Rønning, Nils Nilsen, Jørgen Haslum ${t(
        'news:and'
      )} Ivar Waagaard`,
      link: `https://www.baerumkulturhus.no/arrangement/operacafe/`,
    },
    {
      title: `Nordic Tenors - Jubileum`,
      location: `Sandnessjøen`,
      date: '2023-03-08',
      expiryDate: `${new Date('2023-03-08').getTime()}`,
      dateFull: `${t('news:wednesday')}, ${t('news:el')}08${t('news:of')} ${t(
        'news:march'
      )}, 2023`,
      artists: `Roald Haarr, Nils Georg Nilsen ${t(
        'news:and'
      )} Jan-Tore Saltnes`,
      link: `https://checkout.ebillett.no/245/events/54797/purchase/setup?campaign_id=1541`,
    },
  ];

  // For pagination
  // const [posts, setPosts] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState(10);

  // Get current posts
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = events.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Remove event
  // const remove = events.map((event) => (
  //   ;
  // ))

  return (
    <Layout
      title={t('layout:nyheter_title')}
      description={t('layout:nyheter_description')}
      keywords={t('layout:nyheter_keywords')}
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
              src="/images/oslo.webp"
              alt="Nils Georg Nilsen | Tenor"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 30%"
              unoptimized={true}
              priority={true}
            />
          </motion.div>
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
      <div className="max-w-3xl mx-auto mb-16 overflow-hidden bg-white shadow sm:rounded-md sm:mb-24 lg:mb-32">
        <ul id="events" role="list" className="divide-y divide-slate-200">
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
                          <div>
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
        {/* Pagination */}
        {/* <Pagination
          postsPerPage={postsPerPage}
          totalPosts={events.length}
          paginate={paginate}
        /> */}
      </div>
    </Layout>
  );
}
