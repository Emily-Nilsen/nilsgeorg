import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout';
import useTranslation from 'next-translate/useTranslation';
import { MailIcon, PhoneIcon } from '@heroicons/react/outline';
import NilsGeorg from '../components/contact/nils-georg';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <Layout
      title={t('layout:kontakt_title')}
      description={t('layout:kontakt_description')}
      keywords={t('layout:kontakt_keywords')}
    >
      <NilsGeorg />
      <div className="relative bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-slate-50" />
        </div>
        <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
          <div className="px-4 py-16 bg-slate-50 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="max-w-lg mx-auto">
              <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                {t('contact:ta_kontakt')}
              </h1>
              <p className="mt-3 text-lg leading-6 text-slate-500">
                {t('contact:sent_1')}
              </p>
              <p className="mt-3 text-lg leading-6 text-slate-500">
                {t('contact:sent_2')}
              </p>
              <p className="mt-3 text-lg leading-6 text-slate-500">
                {t('contact:sent_3') ? t('contact:sent_3') : null}
              </p>
              <dl className="mt-8 text-base text-slate-500">
                <div className="mt-6 group">
                  <dt className="sr-only">Phone number</dt>
                  <a href="tel:+4740220414">
                    <dd className="flex">
                      <PhoneIcon
                        className="flex-shrink-0 w-6 h-6 transition duration-300 ease-in-out text-slate-400 group-hover:text-blue-500"
                        aria-hidden="true"
                      />
                      <span className="ml-3 transition duration-300 ease-in-out group-hover:text-slate-600">
                        402 20 414
                      </span>
                    </dd>
                  </a>
                </div>
                <div className="mt-3 group">
                  <dt className="sr-only">Email</dt>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:nils.g.nilsen@gmail.com"
                  >
                    <dd className="flex">
                      <MailIcon
                        className="flex-shrink-0 w-6 h-6 transition duration-300 ease-in-out text-slate-400 group-hover:text-blue-500"
                        aria-hidden="true"
                      />
                      <span className="ml-3 transition duration-300 ease-in-out group-hover:text-slate-600">
                        nils.g.nilsen@gmail.com
                      </span>
                    </dd>
                  </a>
                </div>
              </dl>
            </div>
          </div>
          <div className="px-4 py-16 bg-white sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <form
                action="#"
                subject="Ta kontakt med Nils Nilsen"
                name="Nils Nilsen - Ta Kontakt"
                data-netlify="true"
                className="grid grid-cols-1 gap-y-6"
              >
                <input
                  type="hidden"
                  name="form-name"
                  value="Nils Nilsen - Ta Kontakt"
                />
                <input
                  type="hidden"
                  name="subject"
                  value="Ta kontakt med Nils Nilsen"
                />
                <div>
                  <label htmlFor="full-name" className="sr-only">
                    {t('contact:full_name')}
                  </label>
                  <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    required
                    autoComplete="name"
                    className="block w-full px-4 py-3 rounded-md shadow-none placeholder-slate-500 focus:ring-blue-500 focus:border-blue-500 border-slate-300"
                    placeholder={t('contact:full_name')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    {t('contact:email')}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full px-4 py-3 rounded-md shadow-none placeholder-slate-500 focus:ring-blue-500 focus:border-blue-500 border-slate-300"
                    placeholder={t('contact:email')}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    {t('contact:phone')}
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="block w-full px-4 py-3 rounded-md shadow-none placeholder-slate-500 focus:ring-blue-500 focus:border-blue-500 border-slate-300"
                    placeholder={t('contact:phone')}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    {t('contact:message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    maxLength="500"
                    rows={4}
                    className="block w-full px-4 py-3 border rounded-md shadow-none placeholder-slate-500 focus:ring-blue-500 focus:border-blue-500 border-slate-300"
                    placeholder={t('contact:message')}
                    defaultValue={''}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex justify-center px-6 py-3 text-base font-medium text-white transition duration-300 ease-in-out bg-blue-500 border border-transparent rounded-md shadow-none hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    {t('contact:submit')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
