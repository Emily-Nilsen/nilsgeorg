import Link from 'next/link';
import Image from 'next/image';
import { CameraIcon } from '@heroicons/react/solid';
import Rehearsal from './rehearsal';

export default function Bio() {
  return (
    <div className="overflow-hidden bg-white">
      <div className="relative px-4 pb-16 mx-auto sm:pb-24 lg:pb-32 max-w-7xl sm:px-6 lg:px-8">
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 className="text-base font-semibold tracking-wide text-blue-600 uppercase">
              {/* Case Study */}
            </h2>
            <h1 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-slate-900 sm:text-4xl">
              Nils Georg
            </h1>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <div className="relative mx-auto text-base max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-10 lg:aspect-none">
                  <div className="object-cover object-center rounded-lg shadow-lg">
                    <Image
                      className="rounded-lg"
                      src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1655664737/Nils%20Georg/general/about-profile-img_z38xiz.jpg"
                      alt="Whitney leaning against a railing on a downtown street"
                      width={1184}
                      height={987}
                      unoptimized={true}
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </div>
                <figcaption className="flex mt-3 text-sm text-slate-600">
                  <CameraIcon
                    className="flex-none w-5 h-5 text-slate-500"
                    aria-hidden="true"
                  />
                  <span className="ml-2">Photograph by Marcus O’Leary</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mx-auto text-base max-w-prose lg:max-w-none">
              <p className="text-lg text-slate-600">
                Tenor Nils Georg Nilsen made his debut at the Lincoln Center in
                New York after completing a Master’s degree at the Manhattan
                School of Music in 2012.
              </p>
            </div>
            <div className="mx-auto mt-5 prose prose-blue text-slate-600 lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p>
                He has recently been a soloist with the Chicago Symphony
                Orchestra, sung with the Israeli Opera, and performed at various
                festivals and concerts both in Norway and abroad, including
                Málaga Clásica.
              </p>
              <p>
                Nils Georg maintains a high level in several genres and is
                available for hire at weddings, funerals and events.
              </p>
              <p>
                {' '}
                He is also a singing professor at the{' '}
                <Link
                  href="https://www.academiagalamian.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <a className="font-normal text-blue-500 no-underline duration-300 ease-in-out hover:text-blue-600 tranisition">
                    Galamian Academy of Classical Music
                  </a>
                </Link>{' '}
                in Málaga, Spain.
              </p>
              {/* <ul role="list">
                <li>Quis elit egestas venenatis mattis dignissim.</li>
                <li>
                  Cras cras lobortis vitae vivamus ultricies facilisis tempus.
                </li>
                <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
              </ul> */}
              <Rehearsal />
              <h4 className="text-xl">Extensive operatic repertoire</h4>
              <p>
                Nils Georg’s experiences within opera span from his roles as
                Elvino (La Sunnambula), Tito (La Clamenza de Tito), Aumônier
                (Dialogues of the Carmelites), Rinucco (Gianni Schicci), Tinca
                (Il Tabarro), Tom Rakewell (The Rake’s Progress), Torquemada
                (L’heure Espagnole).
              </p>
              <p>
                Nils has sung as an oratorio soloist in Carmina Burana, Messa di
                Gloria (Puccini), Händel’s Messiah, Mozart’s Requiem, Christus
                Mendelssohn and Bach’s Christmas oratorio.
              </p>
              <p>
                Additionally, Nils has sung as a tenor soloist with the dance
                company Dances Patrelle, performing in New York (Gilbert and
                Sullivan Ballet) three years in a row.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
