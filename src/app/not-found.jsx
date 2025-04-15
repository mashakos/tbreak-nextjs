import Link from 'next/link'
import { ArrowLongRightIcon } from '@heroicons/react/16/solid'
import RecentArticles from '@/components/404/RecentArticles'

export default function NotFound() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto min-h-screen max-w-2xl px-4 py-12 sm:px-6 sm:pt-16 lg:flex lg:max-w-(--breakpoint-2xl) lg:items-center lg:px-12 xl:py-20">
        {/* Page not found */}
        <div className="flex flex-col justify-center lg:w-1/2 xl:w-2/5">
          <div className="max-w-lg">
            <p className="relative text-sm uppercase tracking-widest text-red-800">
              Error 404
            </p>
            <h2 className="mt-3 text-4xl font-medium tracking-normal text-secondaryblue md:text-5xl md:tracking-tight lg:leading-tight">
              Page not found
            </h2>
            <div>
              <p className="mt-4 text-base leading-loose text-secondaryblue">
                Sorry, the page you are looking for does not exist. Try going
                back or visiting a different link.
              </p>
            </div>
            <div className="inline-block">
              <Link
                href="/"
                className="group mt-4 flex items-center text-primaryred no-underline transition duration-300 ease-in-out hover:text-red-600 sm:mt-5"
              >
                Go back home
                <ArrowLongRightIcon className="ml-2.5 h-4 w-4 transition duration-300 ease-in-out group-hover:translate-x-1.5 group-hover:text-primaryred" />
              </Link>
            </div>
          </div>
        </div>

        <RecentArticles />
      </div>
    </section>
  )
}
