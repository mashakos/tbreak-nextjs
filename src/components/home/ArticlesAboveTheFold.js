import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'
import { allArticles } from 'contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'

function CoverStory({ article }) {
  return (
    <article className="relative lg:sticky lg:top-8 lg:w-1/2">
      {/* Image */}
      <Link
        href={article.url}
        className="group aspect-h-9 aspect-w-16 relative block overflow-hidden rounded-2xl bg-gray-100"
      >
        <Image
          className="rounded-2xl object-cover object-center transition duration-300 ease-in-out group-hover:scale-110"
          src={article.image}
          alt={article.title}
          fill
          sizes="(min-width: 1536px) 44rem, (min-width: 1024px) calc(50vw - 2rem), (min-width: 640px) 39rem, calc(100vw - 2rem)"
        />
      </Link>

      {/* Content */}
      <div className="mt-6 md:align-middle">
        <Link
          href={article.category.url}
          className="relative text-sm font-medium uppercase tracking-widest text-primaryred transition-colors duration-300 ease-in-out hover:text-red-600"
        >
          {article.category.name}
        </Link>
        <Link href={article.url} className="group mt-3 block">
          <h2 className="text-3xl font-medium tracking-normal text-secondaryblue decoration-gray-800 decoration-3 transition duration-300 ease-in-out group-hover:underline md:tracking-tight lg:text-4xl lg:leading-tight">
            {article.title}
          </h2>
          <div>
            <p className="mt-4 text-base leading-loose text-secondaryblue">
              {article.description}
            </p>
          </div>
        </Link>

        {/* Author */}
        <div className="mt-4 flex items-center sm:mt-8">
          <Link
            href={article.author.url}
            className="relative h-10 w-10 rounded-xl bg-gray-100"
          >
            <Image
              className="h-full w-full rounded-xl object-cover object-center transition duration-300 ease-in-out"
              src={article.author.avatar}
              alt={article.author.name}
              fill
              sizes="2.5rem"
            />
          </Link>

          <div className="ml-3">
            <Link
              href={article.author.url}
              className="text-sm font-medium text-gray-800 hover:underline"
            >
              {article.author.name}
            </Link>
            <p className="text-sm text-gray-500">
              <time dateTime={article.date}>
                {format(parseISO(article.date), 'LLL d, yyyy')}
              </time>
              <span className="mx-0.5">·</span>
              <span> {article.time_to_read_in_minutes} min read </span>
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}

function RecentArticle({ article, index }) {
  return (
    <article
      className={clsx('py-8 sm:flex lg:flex-col xl:flex-row xl:items-center', {
        'border-t border-gray-300/70 lg:border-t-0 xl:border-t': index > 0,
      })}
    >
      {/* Image */}
      <Link
        href={article.url}
        className="order-2 w-full sm:w-2/5 lg:order-1 lg:w-full xl:w-2/5"
      >
        <div className="group aspect-h-9 aspect-w-16 overflow-hidden rounded-2xl bg-gray-100">
          <Image
            className="rounded-2xl object-cover object-center transition duration-300 ease-in-out group-hover:scale-110"
            src={article.image}
            alt={article.title}
            fill
            sizes="(min-width: 1536px) 17.6rem, (min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 640px) 15rem, calc(100vw - 2rem)"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="order-1 mt-5 w-full px-2 sm:mt-0 sm:max-w-sm sm:pl-0 sm:pr-5 lg:order-2 lg:mt-4 xl:ml-5 xl:mt-0 xl:flex-1">
        <Link
          href={article.category.url}
          className="text-xs font-medium uppercase tracking-widest text-primaryred transition-colors duration-300 ease-in-out hover:text-red-600"
        >
          {article.category.name}
        </Link>

        <Link href={article.url}>
          <h3 className="mt-2 text-xl font-medium leading-normal tracking-normal text-secondaryblue decoration-gray-800 decoration-2 transition duration-300 ease-in-out hover:underline">
            {article.title}
          </h3>
        </Link>

        {/* Author */}
        <div className="mt-4 flex items-center justify-between">
          {/* Author meta */}
          <div className="flex items-center justify-center">
            <Link
              href={article.author.url}
              className="relative mr-3 h-6 w-6 rounded-lg bg-gray-100"
            >
              <Image
                className="h-6 w-6 shrink-0 rounded-lg object-cover object-center transition duration-300 ease-in-out"
                src={article.author.avatar}
                alt={article.author.name}
                fill
                sizes="1.5rem"
              />
            </Link>

            <div className="text-sm">
              <span className="text-gray-500">By </span>
              <Link
                href={article.author.url}
                className="font-medium text-gray-700 hover:underline"
              >
                {article.author.name}
              </Link>

              <span className="text-gray-500 lg:hidden xl:inline-block">
                <span className="mx-0.5">·</span>
                <time dateTime={article.date}>
                  {format(parseISO(article.date), 'LLL d, yyyy')}
                </time>
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function ArticlesAboveTheFold() {
  const coverStory = allArticles.find((article) => article.cover_story)

  const recentArticles = allArticles
    .filter(
      (article) => !article.featured && !article.cover_story && !article.banner,
    )
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 6)

  return (
    <section className="bg-gray-50 pt-12 sm:pt-16 lg:pt-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:flex lg:max-w-(--breakpoint-2xl) lg:items-start lg:px-8">
        <CoverStory article={coverStory} />

        {/* Recent Articles */}
        <div className="mt-12 sm:mt-16 lg:ml-12 lg:mt-0 lg:w-1/2 xl:ml-16">
          <h3 className="relative border-b border-gray-300/70 pb-2.5 text-2xl font-medium text-secondaryblue before:absolute before:-bottom-px before:left-0 before:h-px before:w-24 before:bg-red-600 before:content-['']">
            Recent stories
          </h3>

          {/* Articles Container */}
          <div className="grid lg:grid-cols-2 lg:gap-x-5 xl:grid-cols-1">
            {recentArticles.map((article, index) => (
              <RecentArticle
                article={article}
                index={index}
                key={`recent-article-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
