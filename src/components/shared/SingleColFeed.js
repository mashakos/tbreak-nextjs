import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'
import { format, parseISO } from 'date-fns'
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline'

export default function SingleColFeed({ articles }) {
  return (
    <>
      {articles.map((article, index) => (
        <article className="md:grid md:grid-cols-4 md:gap-8" key={article.slug}>
          {/* Image */}
          <div className="md:col-span-1">
            <Link
              href={article.url}
              className="group aspect-h-9 aspect-w-16 relative z-10 block overflow-hidden rounded-2xl bg-gray-50 md:aspect-h-1 md:aspect-w-1"
            >
              <Image
                className="rounded-2xl object-cover object-center transition duration-300 ease-in-out group-hover:scale-110"
                src={article.image}
                alt={article.title}
                fill
                sizes="(min-width: 1280px) 11rem, (min-width: 1024px) 16vw, (min-width: 768px) 9rem, (min-width: 640px) 30rem, calc(100vw - 2rem)"
              />
            </Link>
          </div>

          {/* Content */}
          <div className="relative mt-6 flex flex-col flex-wrap md:col-span-3 md:mt-0">
            <div
              className={clsx(
                'box-border flex w-full flex-1 flex-col justify-between px-6 md:px-0',
                {
                  'mb-8 border-b-2 border-gray-100 pb-8':
                    index != articles.length - 1,
                },
              )}
            >
              <div>
                <Link
                  href={article.category.url}
                  className="relative z-10 text-tiny font-medium uppercase tracking-widest text-primaryred transition-colors duration-300 ease-in-out hover:text-red-600"
                >
                  {article.category.name}
                </Link>

                <h3 className="mt-2.5 text-xl font-medium leading-tight text-secondaryblue decoration-gray-800 decoration-2 transition duration-300 ease-in-out hover:underline sm:text-2xl lg:text-xl xl:text-2xl">
                  <Link href={article.url}>
                    <span className="absolute inset-0" aria-hidden="true" />
                    {article.title}
                  </Link>
                </h3>
                <p className="mt-3.5 block text-base leading-relaxed text-gray-500">
                  {article.description}
                </p>
              </div>

              {/* Article Footer Info */}
              <footer className="mt-5 flex items-center sm:mt-7">
                {/* Author Image */}
                <Link
                  href={article.author.url}
                  className="relative mr-3 h-7 w-7 rounded-lg bg-gray-50 lg:h-8 lg:w-8"
                >
                  <Image
                    className="shrink-0 rounded-lg object-cover object-center"
                    src={article.author.avatar}
                    alt={article.author.name}
                    fill
                    sizes="2rem"
                  />
                </Link>

                <div className="flex items-center text-sm lg:text-[15px]">
                  <span className="hidden text-gray-500 sm:inline-block">
                    By&nbsp;
                  </span>
                  <Link
                    href={article.author.url}
                    className="relative font-medium text-gray-700 hover:underline"
                  >
                    {article.author.name}
                  </Link>

                  <CalendarIcon className="ml-2.5 h-[18px] w-[18px] text-gray-400" />
                  <time dateTime={article.date} className="ml-1 text-gray-500">
                    {format(parseISO(article.date), 'LLL d, yyyy')}
                  </time>
                  <span className="hidden items-center sm:flex">
                    <ClockIcon className="ml-2.5 h-[18px] w-[18px] text-gray-400" />
                    <span className="ml-1 text-gray-500">
                      {article.time_to_read_in_minutes} min read
                    </span>
                  </span>
                </div>
              </footer>
            </div>
          </div>
        </article>
      ))}
    </>
  )
}
