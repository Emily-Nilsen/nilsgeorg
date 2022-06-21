import Image from 'next/image';
import Link from 'next/link';

/* This example requires Tailwind CSS v2.0+ */
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  MailIcon,
  ScaleIcon,
} from '@heroicons/react/outline';

const transferFeatures = [
  {
    id: 1,
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    id: 2,
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    id: 3,
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: LightningBoltIcon,
  },
];
const communicationFeatures = [
  {
    id: 1,
    name: 'Mobile notifications',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: AnnotationIcon,
  },
  {
    id: 2,
    name: 'Reminder emails',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: MailIcon,
  },
];

export default function Example() {
  return (
    <section>
      <header className="relative h-[33vh] bg-slate-800">
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
              objectPosition="top"
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
              A better way to send money
            </h1>
            <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in, accusamus quisquam.
            </p>
          </div>

          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                Transfer funds world-wide
              </h1>
              <p className="mt-3 text-lg text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam laborum ab aliquid veritatis impedit odit
                adipisci optio iste blanditiis facere. Totam, velit.
              </p>

              <dl className="mt-10 space-y-10">
                {transferFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-md">
                        <item.icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg font-medium leading-6 text-slate-900">
                        {item.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-slate-500">
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative mt-10 -mx-4 lg:mt-0" aria-hidden="true">
              <div className="relative mx-auto">
                <Image
                  className="rounded-md"
                  width={490}
                  height={300}
                  src="https://res.cloudinary.com/dt3k2apqd/image/upload/v1655798574/Nils%20Georg/general/NG_sitting_zikdoj.webp"
                  alt="Tenor Nils Georg Nilsen"
                  unoptimized={true}
                />
              </div>
            </div>
          </div>

          <div className="relative mt-12 sm:mt-16 lg:mt-24">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="lg:col-start-2">
                <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                  Always in the loop
                </h1>
                <p className="mt-3 text-lg text-slate-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit ex obcaecati natus eligendi delectus, cum deleniti
                  sunt in labore nihil quod quibusdam expedita nemo.
                </p>

                <dl className="mt-10 space-y-10">
                  {communicationFeatures.map((item) => (
                    <div key={item.id} className="relative">
                      <dt>
                        <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-md">
                          <item.icon className="w-6 h-6" aria-hidden="true" />
                        </div>
                        <p className="ml-16 text-lg font-medium leading-6 text-slate-900">
                          {item.name}
                        </p>
                      </dt>
                      <dd className="mt-2 ml-16 text-base text-slate-500">
                        {item.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="relative mt-10 -mx-4 lg:mt-0 lg:col-start-1">
                <div className="relative mx-auto">
                  <Image
                    className="rounded-md"
                    width={490}
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
    </section>
  );
}
