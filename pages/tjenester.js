import Image from 'next/image';
import Link from 'next/link';

export default function Tjenester() {
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
              src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1655798071/Nils%20Georg/general/Oslo_at_night_2_ebe1vq.webp"
              alt="Oslo city at night"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 30%"
              unoptimized={true}
              priority={true}
            />
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center pb-[12vh]">
          <div className="flex  lg:pb-0 pb-[12vh]">
            <h2 className="text-5xl font-medium leading-5 text-blue-200 sm:text-6xl lg:text-8xl">
              Tjenester
            </h2>
          </div>
        </div>
      </header>

      <div className="py-16 overflow-hidden bg-white lg:py-24">
        <div className="relative max-w-xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="relative">
            <h1 className="text-3xl font-extrabold leading-8 tracking-tight text-center text-slate-900 sm:text-4xl">
              Private eventer og sangtimer
            </h1>
            <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-slate-500">
              Tenor Nils Georg Nilsen er tilgjengelig for booking for private
              anledninger og private sangtimer.
            </p>
          </div>

          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                Tilgjengelig for booking
              </h1>
              <p className="mt-3 text-lg text-slate-500">
                Klassisk opplært tenor Nils Georg Nilsen har turnert over hele
                verden som solist. Nils Georg trollbinder sitt publikum med sin
                fyldige tenorstemme og fremfører et omfattende repertoar. Han
                har sunget for HM Kong Harald V, opptrådt på Operahuset, Opera
                Tampa og med Minsk kammerorkester.
              </p>
              <div className="mt-6 prose prose-lg prose-blue text-slate-500">
                <ul role="list">
                  <li>Et elegant tillegg til enhver spesiell anledning.</li>
                  <li>
                    Nils Nilsen kan også tilby en pianist eller andre sangere og
                    instrumenter.
                  </li>
                  <li>
                    Den allsidige Nils Nilsen leverer en fantastisk opptreden
                    hver gang, og kan tilby alt fra pop til opera.
                  </li>
                  <li>
                    Enten du tenker på å bestille Nils til bryllup,
                    bedriftsarrangement, fest eller begravelsestjeneste, ta
                    kontakt.
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative mt-10 -mx-4 lg:mt-0" aria-hidden="true">
              <div className="p-4 aspect-w-12 aspect-h-10 lg:aspect-none lg:pl-8 lg:p-0">
                <div className="relative object-cover object-center rounded-lg shadow-lg">
                  <Image
                    className="rounded-lg"
                    layout="responsive"
                    objectFit="cover"
                    objectPosition="center"
                    width={360}
                    height={300}
                    src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1655798574/Nils%20Georg/general/NG_sitting_zikdoj.webp"
                    alt="Tenor Nils Georg Nilsen"
                    unoptimized={true}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-12 sm:mt-16 lg:mt-24">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="lg:col-start-2">
                <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                  Tilgjengelig for sangtimer
                </h1>
                <p className="mt-3 text-lg text-slate-500">
                  Nils Nilsen er sangprofessor ved det prestisjetunge Galamian
                  Academy for klassisk musikk i Málaga, Spania.
                </p>

                <div className="mt-6 prose prose-lg prose-blue text-slate-500">
                  <ul role="list">
                    <li>
                      Nils Georg er også tilgjengelig for private sangtimer i
                      Oslo.
                    </li>
                    <li>
                      Motta profesjonell instruksjon i lyrisk fremføring og
                      kropps- og oppvarmingsteknikker.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative mt-10 -mx-4 lg:mt-0 lg:col-start-1">
                <div className="p-4 lg:pr-8 lg:p-0 aspect-w-12 aspect-h-10 lg:aspect-none">
                  <div className="relative object-cover object-center rounded-lg shadow-lg">
                    <Image
                      className="rounded-lg"
                      layout="responsive"
                      objectFit="cover"
                      objectPosition="center"
                      width={360}
                      height={300}
                      src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1653712772/Galamian/voice/voice-photo-img-05_acbsra.webp"
                      alt="Tenor Nils Georg Nilsen"
                      unoptimized={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
