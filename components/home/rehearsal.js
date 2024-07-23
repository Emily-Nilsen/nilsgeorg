import Link from 'next/link';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

export default function Rehearsal() {
  const { t } = useTranslation();
  return (
    <div className="flex items-center bg-white rounded-md h-fit">
      <div className="self-center flex-shrink-0 mr-4">
        <figure>
          <figcaption>
            <h3 className="text-base font-medium text-slate-800">
              Nils Georg{' '}
              <span className="font-thin text-slate-600">
                {t('home:rehearsing')}
              </span>
            </h3>{' '}
          </figcaption>
          <audio controls src="/audio/rehearsal.mp3">
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </figure>
      </div>
    </div>
  );
}
