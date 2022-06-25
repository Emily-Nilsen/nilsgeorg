import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dayjs from 'dayjs';
import { LinkIcon, MailIcon, CalendarIcon } from '@heroicons/react/solid';
import useTranslation from 'next-translate/useTranslation';
import Pagination from '../components/news/pagination';

export default function Nyheter() {
  const { t } = useTranslation();

  const currentDatestamp = Date.now();

  const events = [
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
    {
      title: `Christmas with Nordic Tenors`,
      location: `Askim Kulturhus`,
      date: '2022-11-26',
      expiryDate: `${new Date('2022-11-27').getTime()}`,
      dateFull: `${t('news:saturday')}, ${t('news:el')}26${t('news:of')} ${t(
        'news:november'
      )}, 2022`,
      artists: `Roald Haarr, Nils Georg Nilsen ${t(
        'news:and'
      )} Jan-Tore Saltnes`,
      link: `https://tix.no/nb/askim/buyingflow/tickets/15881/?utm_medium=social&utm_source=nordictenors.no&utm_campaign=askim+cwnt+2025`,
    },
    {
      title: `Christmas with Nordic Tenors`,
      location: `Ringerike Kulturhsenter, Hønefoss`,
      date: '2022-11-27',
      expiryDate: `${new Date('2022-11-28').getTime()}`,
      dateFull: `${t('news:sunday')}, ${t('news:el')}27${t('news:of')} ${t(
        'news:november'
      )}, 2022`,
      artists: `Roald Haarr, Nils Georg Nilsen ${t(
        'news:and'
      )} Jan-Tore Saltnes`,
      link: `https://www.ringbillett.no/ai.aspx?id=2041&utm_medium=social&utm_source=nordictenors.no&utm_campaign=h%C3%B8nefoss+cwnt+2026`,
    },
    {
      title: `Christmas with Nordic Tenors`,
      location: `Oslo Konserthus`,
      date: '2022-11-28',
      expiryDate: `${new Date('2022-11-29').getTime()}`,
      dateFull: `${t('news:monday')}, ${t('news:el')}28${t('news:of')} ${t(
        'news:november'
      )}, 2022`,
      artists: `Roald Haarr, Nils Georg Nilsen ${t(
        'news:and'
      )} Jan-Tore Saltnes`,
      link: `https://tix.no/nb/oslok/buyingflow/tickets/15922/33276/?utm_medium=social&utm_source=nordictenors.no&utm_campaign=oslo+cwnt+2027`,
    },
    {
      title: `Christmas with Nordic Tenors`,
      location: `Blå Grotte, Fredrikstad`,
      date: '2022-11-29',
      expiryDate: `${new Date('2022-11-30').getTime()}`,
      dateFull: `${t('news:tuesday')}, ${t('news:el')}29${t('news:of')} ${t(
        'news:november'
      )}, 2022`,
      artists: `Roald Haarr, Nils Georg Nilsen ${t(
        'news:and'
      )} Jan-Tore Saltnes`,
      link: `https://checkout.ebillett.no/178/events/113784/purchase/setup?utm_source=nordictenors.no&utm_campaign=fredrikstad%20cwnt%202028&utm_medium=social`,
    },
    {
      title: `Christmas with Nordic Tenors`,
      location: `Ibsenhuset, Skien`,
      date: '2022-12-1',
      expiryDate: `${new Date('2022-12-2').getTime()}`,
      dateFull: `${t('news:thursday')}, ${t('news:el')}1${t('news:of')} ${t(
        'news:december'
      )}, 2022`,
      artists: `Roald Haarr, Nils Georg Nilsen ${t(
        'news:and'
      )} Jan-Tore Saltnes`,
      link: `https://www.ibsenhuset.no/program/christmas-with-nordic-tenors/?utm_medium=social&utm_source=nordictenors.no&utm_campaign=skien+cwnt+2029`,
    },
    {
      title: `Christmas with Nordic Tenors`,
      location: `Moss Kulturhus`,
      date: '2022-12-2',
      expiryDate: `${new Date('2022-12-3').getTime()}`,
      dateFull: `${t('news:friday')}, ${t('news:el')}2${t('news:of')} ${t(
        'news:december'
      )}, 2022`,
      artists: `Roald Haarr, Nils Georg Nilsen ${t(
        'news:and'
      )} Jan-Tore Saltnes`,
      link: `https://www.mosskulturhus.no/event/christmas-with-nordic-tenors/?utm_medium=social&utm_source=nordictenors.no&utm_campaign=moss+cwnt+2030`,
    },
    {
      title: `Christmas with Nordic Tenors`,
      location: `Nøtterøy Kulturhus`,
      date: '2022-12-3',
      expiryDate: `${new Date('2022-12-4').getTime()}`,
      dateFull: `${t('news:saturday')}, ${t('news:el')}3${t('news:of')} ${t(
        'news:december'
      )}, 2022`,
      artists: `Roald Haarr, Nils Georg Nilsen ${t(
        'news:and'
      )} Jan-Tore Saltnes`,
      link: `https://notteroy.kulturhus.no/program/christmas-with-nordic-tenors/?utm_medium=social&utm_source=nordictenors.no&utm_campaign=notteroy+cwnt+2031`,
    },
    {
      title: `Christmas with Nordic Tenors`,
      location: `Hjertnes Kulturhus, Sandefjord`,
      date: '2022-12-4',
      expiryDate: `${new Date('2022-12-5').getTime()}`,
      dateFull: `${t('news:sunday')}, ${t('news:el')}4${t('news:of')} ${t(
        'news:december'
      )}, 2022`,
      artists: `Roald Haarr, Nils Georg Nilsen ${t(
        'news:and'
      )} Jan-Tore Saltnes`,
      link: `https://checkout.ebillett.no/262/events/103427/purchase/setup?utm_medium=social&utm_source=nordictenors.no&utm_campaign=sandefjord+cwnt+2032`,
    },
    {
      title: `Christmas with Nordic Tenors`,
      location: `Arendal Kulturhus`,
      date: '2022-12-5',
      expiryDate: `${new Date('2022-12-6').getTime()}`,
      dateFull: `${t('news:monday')}, ${t('news:el')}5${t('news:of')} ${t(
        'news:december'
      )}, 2022`,
      artists: `Roald Haarr, Nils Georg Nilsen ${t(
        'news:and'
      )} Jan-Tore Saltnes`,
      link: `https://tix.no/nb/arendal/buyingflow/tickets/15894/?utm_medium=social&utm_source=nordictenors.no&utm_campaign=arendal+cwnt+2033`,
    },
    {
      title: `Christmas with Nordic Tenors`,
      location: `Kilden, Kristiansand`,
      date: '2022-12-6',
      expiryDate: `${new Date('2022-12-7').getTime()}`,
      dateFull: `${t('news:tuesday')}, ${t('news:el')}6${t('news:of')} ${t(
        'news:december'
      )}, 2022`,
      artists: `Roald Haarr, Nils Georg Nilsen ${t(
        'news:and'
      )} Jan-Tore Saltnes`,
      link: `https://kilden.com/forestilling/christmas-with-nordic-tenors-3/?utm_medium=social&utm_source=nordictenors.no&utm_campaign=kristiansand+cwnt+2034`,
    },
    {
      title: `Christmas with Nordic Tenors`,
      location: `Olavshallen, Trondheim`,
      date: '2022-12-7',
      expiryDate: `${new Date('2022-12-8').getTime()}`,
      dateFull: `${t('news:wednesday')}, ${t('news:el')}7${t('news:of')} ${t(
        'news:december'
      )}, 2022`,
      artists: `Roald Haarr, Nils Georg Nilsen ${t(
        'news:and'
      )} Jan-Tore Saltnes`,
      link: `https://www.olavshallen.no/forestillinger/2022-03-10-christmas-with-nordic-tenors?utm_medium=social&utm_source=nordictenors.no&utm_campaign=trondheim+cwnt+2022`,
    },
    {
      title: `Christmas with Nordic Tenors`,
      location: `Kimen Kulturhus, Stjørdal`,
      date: '2022-12-8',
      expiryDate: `${new Date('2022-12-9').getTime()}`,
      dateFull: `${t('news:thursday')}, ${t('news:el')}8${t('news:of')} ${t(
        'news:december'
      )}, 2022`,
      artists: `Roald Haarr, Nils Georg Nilsen ${t(
        'news:and'
      )} Jan-Tore Saltnes`,
      link: `https://kimenkulturhus.no/Program/?Activities=400&utm_medium=social&utm_source=nordictenors.no&utm_campaign=stjoradl+cwnt+2036`,
    },
    {
      title: `Christmas with Nordic Tenors`,
      location: `Bølgen, Larvik`,
      date: '2022-12-9',
      expiryDate: `${new Date('2022-12-10').getTime()}`,
      dateFull: `${t('news:friday')}, ${t('news:el')}9${t('news:of')} ${t(
        'news:december'
      )}, 2022`,
      artists: `Roald Haarr, Nils Georg Nilsen ${t(
        'news:and'
      )} Jan-Tore Saltnes`,
      link: `https://www.bolgenkulturhus.no/event/christmas-with-nordic-tenors-2022/?utm_medium=social&utm_source=nordictenors.no&utm_campaign=larvik+cwnt+2037`,
    },
    {
      title: `Christmas with Nordic Tenors`,
      location: `Rådhus-Teatret, Kongsvinger`,
      date: '2022-12-10',
      expiryDate: `${new Date('2022-12-11').getTime()}`,
      dateFull: `${t('news:saturday')}, ${t('news:el')}10${t('news:of')} ${t(
        'news:december'
      )}, 2022`,
      artists: `Roald Haarr, Nils Georg Nilsen ${t(
        'news:and'
      )} Jan-Tore Saltnes`,
      link: `https://checkout.ebillett.no/206/events/24394/purchase/setup?kanal=fw&utm_medium=social&utm_source=nordictenors.no&utm_campaign=kongsvinger+cwnt+2038`,
    },
    {
      title: `Christmas with Nordic Tenors`,
      location: `Maihaugsalen, Lillehammer`,
      date: '2022-12-11',
      expiryDate: `${new Date('2022-12-12').getTime()}`,
      dateFull: `${t('news:sunday')}, ${t('news:el')}11${t('news:of')} ${t(
        'news:december'
      )}, 2022`,
      artists: `Roald Haarr, Nils Georg Nilsen ${t(
        'news:and'
      )} Jan-Tore Saltnes`,
      link: `https://www.ticketmaster.no/event/685891?utm_medium=social&utm_source=nordictenors.no&utm_campaign=lillehammer+cwnt+2039`,
    },
    {
      title: `Christmas with Nordic Tenors`,
      location: `Lilleststrøm Kultursenter`,
      date: '2022-12-12',
      expiryDate: `${new Date('2022-12-13').getTime()}`,
      dateFull: `${t('news:monday')}, ${t('news:el')}12${t('news:of')} ${t(
        'news:december'
      )}, 2022`,
      artists: `Roald Haarr, Nils Georg Nilsen ${t(
        'news:and'
      )} Jan-Tore Saltnes`,
      link: `https://www.lillestrom-kultursenter.no/event/christmas-with-nordic-tenors/?utm_medium=social&utm_source=nordictenors.no&utm_campaign=lillestrom+cwnt+2040`,
    },
    {
      title: `Christmas with Nordic Tenors`,
      location: `Bjørnsonhuset, Molde`,
      date: '2022-12-13',
      expiryDate: `${new Date('2022-12-14').getTime()}`,
      dateFull: `${t('news:tuesday')}, ${t('news:el')}13${t('news:of')} ${t(
        'news:december'
      )}, 2022`,
      artists: `Roald Haarr, Nils Georg Nilsen ${t(
        'news:and'
      )} Jan-Tore Saltnes`,
      link: `https://www.eventim.no/event/christmas-with-nordic-tenors-molde-bjoernsonhuset-15034915/?utm_campaign=molde%20cwnt%202041&utm_medium=social&utm_source=nordictenors.no`,
    },
    {
      title: `Christmas with Nordic Tenors`,
      location: `Parken Kulturhus, Ålesund`,
      date: '2022-12-14',
      expiryDate: `${new Date('2022-12-15').getTime()}`,
      dateFull: `${t('news:wednesday')}, ${t('news:el')}14${t('news:of')} ${t(
        'news:december'
      )}, 2022`,
      artists: `Roald Haarr, Nils Georg Nilsen ${t(
        'news:and'
      )} Jan-Tore Saltnes`,
      link: `https://checkout.ebillett.no/217/events/54539/purchase/setup?utm_medium=social&utm_source=nordictenors.no&utm_campaign=alesund+cwnt+2042`,
    },
    {
      title: `Christmas with Nordic Tenors`,
      location: `Festiviteten, Haugesund`,
      date: '2022-12-15',
      expiryDate: `${new Date('2022-12-16').getTime()}`,
      dateFull: `${t('news:thursday')}, ${t('news:el')}15${t('news:of')} ${t(
        'news:december'
      )}, 2022`,
      artists: `Roald Haarr, Nils Georg Nilsen ${t(
        'news:and'
      )} Jan-Tore Saltnes`,
      link: `https://festiviteten.no/alle/christmas-with-nordic-tenors-3/?utm_medium=social&utm_source=nordictenors.no&utm_campaign=haugesund+cwnt+2043`,
    },
    {
      title: `Christmas with Nordic Tenors`,
      location: `Varen Kulturscene, Randaberg`,
      date: '2022-12-16',
      expiryDate: `${new Date('2022-12-17').getTime()}`,
      dateFull: `${t('news:friday')}, ${t('news:el')}16${t('news:of')} ${t(
        'news:december'
      )}, 2022`,
      artists: `Roald Haarr, Nils Georg Nilsen ${t(
        'news:and'
      )} Jan-Tore Saltnes`,
      link: `https://www.linticket.no/page/no/69/1/330?utm_medium=social&utm_source=nordictenors.no&utm_campaign=randaberg%20cwnt%202044`,
    },
    {
      title: `Christmas with Nordic Tenors`,
      location: `Sandnes Kulturhus`,
      date: '2022-12-17',
      expiryDate: `${new Date('2022-12-18').getTime()}`,
      dateFull: `${t('news:saturday')}, ${t('news:el')}17${t('news:of')} ${t(
        'news:december'
      )}, 2022`,
      artists: `Roald Haarr, Nils Georg Nilsen ${t(
        'news:and'
      )} Jan-Tore Saltnes`,
      link: `https://tix.no/nb/sandnes/buyingflow/tickets/15916/33269/?utm_medium=social&utm_source=nordictenors.no&utm_campaign=sandnes+cwnt+2045#tixsp`,
    },
    {
      title: `Christmas with Nordic Tenors`,
      location: `Stavanger Konserthus`,
      date: '2022-12-18',
      expiryDate: `${new Date('2022-12-19').getTime()}`,
      dateFull: `${t('news:sunday')}, ${t('news:el')}18${t('news:of')} ${t(
        'news:december'
      )}, 2022`,
      artists: `Roald Haarr, Nils Georg Nilsen ${t(
        'news:and'
      )} Jan-Tore Saltnes`,
      link: `https://www.stavanger-konserthus.no/event/christmas-with-nordic-tenors/?utm_medium=social&utm_source=nordictenors.no&utm_campaign=stavanger+cwnt+2046`,
    },
    {
      title: `Christmas with Nordic Tenors`,
      location: `Grieghallen, Bergen`,
      date: '2022-12-19',
      expiryDate: `${new Date('2022-12-20').getTime()}`,
      dateFull: `${t('news:monday')}, ${t('news:el')}19${t('news:of')} ${t(
        'news:december'
      )}, 2022`,
      artists: `Roald Haarr, Nils Georg Nilsen ${t(
        'news:and'
      )} Jan-Tore Saltnes`,
      link: `https://www.ticketmaster.no/event/686853?utm_medium=social&utm_source=nordictenors.no&utm_campaign=bergen+cwnt+2047`,
    },
    {
      title: `Christmas with Nordic Tenors`,
      location: `Stormen, Bodø`,
      date: '2022-12-20',
      expiryDate: `${new Date('2022-12-21').getTime()}`,
      dateFull: `${t('news:tuesday')}, ${t('news:el')}20${t('news:of')} ${t(
        'news:december'
      )}, 2022`,
      artists: `Roald Haarr, Nils Georg Nilsen ${t(
        'news:and'
      )} Jan-Tore Saltnes`,
      link: `https://checkout.ebillett.no/144/events/35442/purchase/setup?utm_medium=social&utm_source=nordictenors.no&utm_campaign=bod%C3%B8+cwnt+2048`,
    },
    {
      title: `Christmas with Nordic Tenors`,
      location: `Kulturhuset i Tromsø`,
      date: '2022-12-21',
      expiryDate: `${new Date('2022-12-22').getTime()}`,
      dateFull: `${t('news:wednesday')}, ${t('news:el')}21${t('news:of')} ${t(
        'news:december'
      )}, 2022`,
      artists: `Roald Haarr, Nils Georg Nilsen ${t(
        'news:and'
      )} Jan-Tore Saltnes`,
      link: `https://tix.no/nb/tr/buyingflow/tickets/15871/?utm_medium=social&utm_source=nordictenors.no&utm_campaign=tromso+cwnt+2049`,
    },
    {
      title: `Christmas with Nordic Tenors`,
      location: `Drammens Teater`,
      date: '2022-12-22',
      expiryDate: `${new Date('2022-12-23').getTime()}`,
      dateFull: `${t('news:thursday')}, ${t('news:el')}22${t('news:of')} ${t(
        'news:december'
      )}, 2022`,
      artists: `Roald Haarr, Nils Georg Nilsen ${t(
        'news:and'
      )} Jan-Tore Saltnes`,
      link: `https://www.drammenscener.no/teatret/program/15932-christmas-with-nordic-tenors/?utm_medium=social&utm_source=nordictenors.no&utm_campaign=drammen+cwnt+2050`,
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
        {/* Pagination */}
        {/* <Pagination
          postsPerPage={postsPerPage}
          totalPosts={events.length}
          paginate={paginate}
        /> */}
      </div>
    </section>
  );
}
