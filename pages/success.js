import Link from 'next/link';
import Layout from '../components/layout';
import useTranslation from 'next-translate/useTranslation';

export default function Success() {
  const { t } = useTranslation();

  return (
    <Layout
      title={t('layout:success_title')}
      description={t('layout:success_description')}
      keywords={t('layout:success_keywords')}
    >
      <div className="bg-white">
        <div className="max-w-3xl px-4 py-16 mx-auto text-center sm:px-6 lg:px-8 sm:py-24">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {t('success:heading')}
          </h1>
          <p className="mt-6 text-lg leading-7 text-slate-500">
            {t('success:body')}
          </p>
          <div className="mt-10">
            <Link href="/">
              <a className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white transition duration-300 ease-in-out bg-blue-500 border border-transparent rounded-md shadow-none hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                {t('success:back_home')}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
