import Link from 'next/link'
import Image from 'next/image'
import { format, parseISO } from 'date-fns'

function Article({ article }) {
  return (
    <article className="group relative flex flex-col flex-wrap rounded-2xl transition duration-300 ease-in-out hover:shadow-xl">
      {/* Image */}
      <div className="aspect-h-1 aspect-w-2 relative z-10 w-full overflow-hidden rounded-t-2xl bg-gray-50">
        <Link href={article.url}>
          <Image
            className="absolute inset-0 h-full w-full rounded-t-2xl object-cover object-center transition duration-300 ease-in-out group-hover:scale-110"
            src={article.image}
            alt={article.title}
            fill
            sizes="(min-width: 1280px) 24.25rem, (min-width: 1024px) 33vw, (min-width: 768px) 21.25rem, (min-width: 640px) 33rem, calc(100vw - 2rem)"
          />
        </Link>
      </div>

      {/* Content */}
      <div className="box-border flex w-full flex-1 flex-col justify-between rounded-b-2xl border-b-2 border-l-2 border-r-2 border-gray-100 bg-white p-6 transition duration-300 ease-in-out group-hover:border-transparent xl:p-7">
        <div>
          <Link
            href={article.category.url}
            className="relative z-10 text-tiny font-medium uppercase tracking-widest text-primaryred transition-colors duration-300 ease-in-out hover:text-red-600"
          >
            {article.category.name}
          </Link>

          <h3 className="mt-3 text-xl font-medium leading-tight text-secondaryblue decoration-gray-800 decoration-2 transition duration-300 ease-in-out hover:underline sm:text-2xl lg:text-xl xl:text-2xl">
            <Link href={article.url}>
              <span className="absolute inset-0" aria-hidden="true" />
              {article.title}
            </Link>
          </h3>

          <p className="mt-4 block text-base leading-relaxed text-gray-500">
            {article.description}
          </p>
        </div>

        {/* Author */}
        <div className="mt-5 flex items-center sm:mt-6">
          <Link
            href={article.author.url}
            className="relative h-10 w-10 rounded-xl bg-gray-50"
          >
            <Image
              className="h-full w-full rounded-xl object-cover object-center transition duration-300 ease-in-out"
              src={article.author.avatar}
              alt={article.author.name}
              fill
              sizes="1.5rem"
            />
          </Link>

          <div className="ml-3">
            <Link
              href={article.author.url}
              className="relative text-sm font-medium text-gray-700 hover:underline"
            >
              {article.author.name}
            </Link>

            <p className="text-sm text-gray-500">
              <time dateTime={article.date}>
                {format(parseISO(article.date), 'LLL d, yyyy')}
              </time>
              <span className="mx-0.5">·</span>
              <span>{article.time_to_read_in_minutes} min read</span>
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function TwoColFeed({ articles }) {
  return (
    <div className="col-span-2">
      <div className="mx-auto max-w-xl px-4 sm:px-6 md:max-w-3xl md:px-8 lg:max-w-none lg:px-0">
        {/* Advertisement Banner */}
        <Link
          href="#0"
          className="relative block w-full rounded-2xl bg-gray-50"
        >
          <Image
            className="h-auto w-full rounded-2xl object-cover"
            src="/images/ads/banner.jpeg"
            quality={95}
            alt="Banner Ad"
            width={960}
            height={240}
            sizes="(min-width: 1280px) 50rem, (min-width: 1024px) 66vw, (min-width: 768px) 44rem, (min-width: 640px) 33rem, calc(100vw - 2rem)"
          />
        </Link>

        {/* Articles */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {articles.map((article, index) => (
            <Article key={`two-col-article-${index}`} article={article} />
          ))}
        </div>
      </div>
    </div>
  )
}
