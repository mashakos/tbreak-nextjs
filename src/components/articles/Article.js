import Link from 'next/link'
import Image from 'next/image'
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline'
import { MdxContent } from '@/components/mdx/MdxContent'
import { format, parseISO } from 'date-fns'
import { SocialButton } from '@/components/social/SocialButton'
import { Share } from './Share'

export default function Article({ article }) {
  return (
    <article className="bg-gray-50 pb-12 sm:pb-16 lg:pb-24">
      {/* Post Header */}
      <header>
        {/* Image */}
        <div className="aspect-h-2 aspect-w-3 w-full bg-gray-100 sm:aspect-h-1">
          <Image
            className="object-cover object-center"
            src={article.image}
            alt={article.title}
            fill
            sizes="100vw"
          />
        </div>

        {/* Post Header Content */}
        <div className="px-5 lg:px-0">
          {/* Article Information */}
          <div className="mx-auto mb-8 max-w-prose border-b border-gray-300/70 pb-8 pt-10 text-lg sm:pt-16">
            <Link
              href={article.category.url}
              className="relative text-sm font-medium uppercase tracking-widest text-primaryred transition-colors duration-300 ease-in-out hover:text-red-600"
            >
              {article.category.name}
            </Link>
            <h2 className="mt-3.5 text-4xl font-medium tracking-normal text-secondaryblue decoration-red-300 decoration-3 transition duration-300 ease-in-out group-hover:underline sm:mt-5 sm:text-5xl sm:leading-tight md:tracking-tight lg:text-6xl">
              {article.title}
            </h2>
            <div>
              <p className="mt-4 text-base leading-loose text-secondaryblue">
                {article.description}
              </p>
            </div>

            {/* Author meta */}
            <div className="mt-6 flex items-center sm:mt-8">
              <Link href={article.author.url} className="mr-3 shrink-0">
                <div className="relative h-8 w-8 rounded-xl bg-gray-100 sm:h-9 sm:w-9">
                  <Image
                    className="rounded-xl object-cover object-center"
                    src={article.author.avatar}
                    alt={article.author.name}
                    fill
                    sizes="(min-width: 640px) 2.25rem, 2rem"
                  />
                  <span
                    className="absolute inset-0 rounded-xl shadow-inner"
                    aria-hidden="true"
                  />
                </div>
              </Link>
              <div className="flex items-center text-sm lg:text-[15px]">
                <span className="hidden text-gray-500 sm:inline-block">
                  By&nbsp;
                </span>
                <Link
                  href={article.author.url}
                  className="font-medium text-gray-700 hover:underline"
                >
                  {article.author.name}
                </Link>
                <CalendarIcon className="ml-4 h-[18px] w-[18px] text-gray-400" />
                <time className="ml-1 text-gray-500" dateTime={article.date}>
                  {format(parseISO(article.date), 'MMMM dd, yyyy')}
                </time>
                <span className="hidden items-center sm:flex">
                  <ClockIcon className="ml-3 h-[18px] w-[18px] text-gray-400" />
                  <span className="ml-1 text-gray-500">
                    {article.time_to_read_in_minutes} min read
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="px-5 lg:px-0">
        {/* Post Content */}
        {/* Uses the official Tailwind CSS Typography plugin */}
        <div className="prose mx-auto sm:prose-lg first-letter:text-4xl first-letter:font-bold first-letter:tracking-[.15em] prose-a:transition prose-a:duration-300 prose-a:ease-in-out prose-a:hover:text-primaryred prose-img:rounded-xl">
          <MdxContent code={article.body.code} />
        </div>

        {/* Post Footer */}
        <footer className="mx-auto mt-12 max-w-prose divide-y divide-gray-300/70 text-lg sm:mt-14">
          {/* Tags */}
          <ul className="-m-1 flex flex-wrap justify-start pb-8 sm:pb-10">
            {article.tags.map((tag) => (
              <li key={tag}>
                <Link href={`/tags/${tag.replace(/ /g, '-').toLowerCase()}`}>
                  <span className="m-1 inline-flex items-center rounded-full border border-gray-300/70 bg-transparent px-4 py-1 text-sm font-medium text-gray-800 transition duration-300 ease-in-out hover:text-primaryred sm:px-6 sm:py-2">
                    {tag}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Share Buttons */}
          <Share />

          {/* Author Details */}
          <div className="py-8 sm:py-10">
            <div className="flex w-full items-center justify-between">
              <div className="flex flex-col sm:flex-row">
                {/* Image */}
                <div className="shrink-0">
                  <div className="relative h-20 w-20 rounded-2xl bg-gray-100 sm:h-24 sm:w-24">
                    <Image
                      className="rounded-2xl object-cover object-center"
                      src={article.author.avatar}
                      alt={article.author.name}
                      fill
                      sizes="(min-width: 640px) 6rem, 5rem"
                    />
                    <span
                      className="absolute inset-0 rounded-2xl shadow-inner"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-5 text-left sm:ml-6 sm:mt-0">
                  <div className="flex items-center justify-between">
                    <div className="'flex flex-col">
                      <p className="text-xs uppercase tracking-widest text-red-600">
                        {article.author.role}
                      </p>
                      <h1 className="mt-1 text-xl font-medium tracking-normal text-secondaryblue md:tracking-tight lg:leading-tight">
                        {article.author.name}
                      </h1>
                    </div>
                  </div>
                  <div className="mt-2.5 text-base leading-loose text-gray-500">
                    <MdxContent code={article.author.body.code} />
                  </div>

                  {/* Author Social Links */}
                  <ul className="mt-3.5 flex items-center space-x-3">
                    {article.author.social_links.map((socialLink) => (
                      <li key={socialLink.name}>
                        <SocialButton
                          type="link"
                          href={socialLink.url}
                          name={socialLink.name}
                          iconClassName="w-[18px] h-[18px] text-gray-400 group-hover:text-secondaryblue"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </article>
  )
}
