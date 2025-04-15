'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Fragment } from 'react'
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  PopoverBackdrop,
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  Transition,
} from '@headlessui/react'
import clsx from 'clsx'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'

import logo from '/public/images/tbreak-logo.png'
import logoIcon from '/public/images/tbreak-icon-logo.png'

const menu = [
  {
    name: 'Tech',
    href: '/categories/technology',
  },
  {
    name: 'Gaming',
    href: '/categories/gaming',
  },
  {
    name: 'TV & Movies',
    href: '/categories/tv-movies',
  },
  {
    name: 'Food',
    href: '/categories/food',
  },
  {
    name: 'Cars',
    href: '/categories/cars',
  },
]

const pages = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Category page',
    href: '/categories/technology',
  },
  {
    name: 'Article',
    href: '/articles/apple-payment-terminals-in-fintech-push',
  },
  {
    name: 'Author page',
    href: '/authors/mark-jack',
  },
  {
    name: 'Tag page',
    href: '/tags/tips',
  },
  {
    name: 'About us',
    href: '/about',
  },
  {
    name: 'Contact us',
    href: '/contact',
  },
  {
    name: 'Privacy policy',
    href: '/privacy',
  },
  {
    name: '404 page',
    href: '/404',
  },
]

export default function Navbar() {
  const pathname = usePathname()

  function Logo() {
    return (
      <div className="flex shrink-0 items-center">
        <Link href="/" className="h-9 lg:hidden">
          <Image src={logoIcon} alt="Tbreak Logo Icon" className="h-auto w-9" />
        </Link>
        <Link href="/" className="hidden h-9 lg:block">
          <Image src={logo} alt="Tbreak logo" className="h-9 w-auto" />
        </Link>
      </div>
    )
  }

  function Dropdown() {
    return (
      <Menu as="div" className="relative">
        <MenuButton className="group flex items-center px-3 py-1 text-md font-medium text-gray-800 outline-hidden transition duration-300 ease-in-out hover:text-primaryred focus:outline-hidden data-open:text-primaryred">
          <span>Pages</span>
          <ChevronDownIcon
            className="ml-2 h-5 w-5 transform text-secondaryblue duration-300 group-hover:text-primaryred group-data-open:rotate-180 group-data-open:text-primaryred"
            aria-hidden="true"
          />
        </MenuButton>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems
            transition
            className="absolute right-0 z-20 mt-3 w-52 transform space-y-1 rounded-xl bg-white p-2.5 outline-hidden drop-shadow-sm filter transition focus:outline-hidden data-closed:scale-95 data-closed:opacity-0 data-enter:duration-100 data-leave:duration-75 data-enter:ease-out data-leave:ease-in"
          >
            {pages.map((subLink, i) => {
              return (
                <MenuItem key={`desktop-dropdown-link-${i}`}>
                  <Link
                    href={subLink.href}
                    className={clsx(
                      'block rounded-lg px-5 py-3.5 font-medium',
                      pathname === subLink.href
                        ? 'bg-gray-50 text-primaryred'
                        : `text-gray-800 transition duration-300 ease-in-out hover:bg-gray-50 hover:text-primaryred`,
                    )}
                  >
                    {subLink.name}
                  </Link>
                </MenuItem>
              )
            })}
          </MenuItems>
        </Transition>
      </Menu>
    )
  }

  function DesktopNavigation() {
    return (
      <div className="ml-6 hidden items-center justify-between text-xl md:flex md:space-x-0.5 md:text-base lg:space-x-2">
        {menu.map((link, index) => (
          <DesktopNavItem key={`desktop-link-${index}`} link={link} />
        ))}
        {/*<Dropdown />*/}
      </div>
    )
  }

  function HamburgerButton() {
    return (
      <PopoverButton
        className="group relative z-50 ml-6 flex cursor-pointer items-center justify-center rounded-full bg-gray-50 p-3 shadow-xs ring-1 ring-gray-900/5 transition duration-300 ease-in-out hover:bg-gray-100 focus:outline-hidden md:hidden"
        aria-label="Toggle Navigation"
      >
        <span className="relative h-3.5 w-4">
          <span className="absolute left-0 top-0 block h-0.5 w-full rotate-0 transform rounded-full bg-gray-600 opacity-100 transition-all duration-300 ease-in-out group-hover:bg-gray-900 group-data-open:left-1/2 group-data-open:top-1.5 group-data-open:w-0" />
          <span className="absolute left-0 top-1.5 block h-0.5 w-full transform rounded-full bg-gray-600 opacity-100 transition-all duration-300 ease-in-out group-hover:bg-gray-900 group-data-open:rotate-45" />
          <span className="absolute left-0 top-1.5 block h-0.5 w-full transform rounded-full bg-gray-600 opacity-100 transition-all duration-300 ease-in-out group-hover:bg-gray-900 group-data-open:-rotate-45" />
          <span className="absolute left-0 top-3 block h-0.5 w-full rotate-0 transform rounded-full bg-gray-600 opacity-100 transition-all duration-300 ease-in-out group-hover:bg-gray-900 group-data-open:left-1/2 group-data-open:top-1.5 group-data-open:w-0" />
        </span>
      </PopoverButton>
    )
  }

  function MobileMenu() {
    return (
      <>
        <PopoverBackdrop
          transition
          className="fixed inset-0 z-20 bg-slate-900 bg-opacity-50 data-closed:opacity-0 data-enter:duration-200 data-leave:duration-150 data-enter:ease-out data-leave:ease-in"
        />
        <PopoverPanel
          transition
          className="absolute inset-x-0 top-0 z-40 transform pt-20 data-closed:-translate-y-full data-closed:opacity-0 data-enter:duration-300 data-leave:duration-200 data-enter:ease-out data-leave:ease-in"
        >
          {({ close }) => (
            <nav
              className="border-b border-gray-300/60 bg-white md:hidden"
              aria-label="Global"
              id="mobile-menu"
            >
              <div className="space-y-1 px-2 pb-3 pt-2">
                {menu.map((link, index) => (
                  <Link
                    key={`mobile-menu-link-${index}`}
                    href={link.href}
                    className={clsx(
                      'block rounded-lg px-4 py-3 font-medium',

                      pathname === link.href
                        ? 'bg-gray-50 text-primaryred'
                        : `text-gray-800 transition duration-300 ease-in-out hover:bg-gray-50 hover:text-primaryred`,
                    )}
                    onClick={close}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/*<div className="border-t border-gray-300/70 pb-3 pt-4">*/}
              {/*  <div className="mt-2 px-6 text-xs font-medium uppercase tracking-widest text-gray-500">*/}
              {/*    Pages*/}
              {/*  </div>*/}
              {/*  <div className="mt-3 space-y-1 px-2 text-[15px]">*/}
              {/*    {pages.map((subLink, j) => (*/}
              {/*      <Link*/}
              {/*        key={`mobile-pages-link-${j}`}*/}
              {/*        href={subLink.href}*/}
              {/*        className={clsx(*/}
              {/*          'block rounded-lg px-4 py-2 font-medium',*/}
              {/*          pathname === subLink.href*/}
              {/*            ? 'bg-gray-50 text-primaryred'*/}
              {/*            : `text-secondaryblue transition duration-300 ease-in-out hover:bg-gray-50 hover:text-primaryred`,*/}
              {/*        )}*/}
              {/*        onClick={close}*/}
              {/*      >*/}
              {/*        {subLink.name}*/}
              {/*      </Link>*/}
              {/*    ))}*/}
              {/*  </div>*/}
              {/*</div>*/}
            </nav>
          )}
        </PopoverPanel>
      </>
    )
  }

  function Search() {
    return (
      <div className="relative ml-6 h-10 w-full max-w-xxs rounded-3xl">
        <form className="group rounded-3xl transition duration-300 ease-in-out">
          <div className="absolute inset-y-0 left-3 flex items-center">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="email"
            className="h-10 w-full rounded-3xl border border-gray-200 bg-white px-10 py-3 text-sm leading-5 text-gray-800 transition duration-300 ease-in-out hover:bg-gray-50 focus:bg-gray-50 focus:outline-hidden focus:ring-2 focus:ring-red-100"
            required
            placeholder="Search..."
            autoComplete="email"
          />
        </form>
      </div>
    )
  }

  function DesktopNavItem({ link }) {
    let isActive = usePathname() === link.href

    return (
      <Link
        href={link.href}
        className={clsx(
          'px-3 py-1 text-md font-medium',
          isActive
            ? 'text-primaryred'
            : 'text-gray-800 transition duration-300 ease-in-out hover:text-primaryred',
        )}
      >
        {link.name}
      </Link>
    )
  }

  return (
    <Popover as="header" className="relative">
      <div className="relative z-50 border-b border-gray-300/60">
        <nav className="mx-auto flex h-20 max-w-7xl items-center bg-white px-4 sm:px-6 lg:border-0 lg:px-8">
          {/* Main navbar for large screens */}
          <div className="flex w-full items-center justify-between">
            <Logo />

            <DesktopNavigation />
            <Search />

            <HamburgerButton />
          </div>
        </nav>
      </div>

      <MobileMenu />
    </Popover>
  )
}
