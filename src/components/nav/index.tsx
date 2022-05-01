import * as React from 'react'

import { Popover, Transition } from '@headlessui/react'
import NavButton from './button'
import Menu from './menu'

const NavBar = () => {
  return (
    <nav className="fixed bottom-0 h-16 -mx-2 md:relative shadow-top md:shadow-none md:h-20 md:bottom-auto md:pt-8 md:grid md:grid-cols-12 md:gap-x-4 md:px-4 md:w-screen">
      <Menu isMobile={false} />
      <Popover className="relative z-50 lg:hidden">
        {({ open }) => (
          <>
            <NavButton isOpen={open} />
            <Transition
              show={open}
              // option to do height here instead
              enter="transition-all duration-500 ease-[ease-in-out]"
              enterFrom="transform translate-y-0 opacity-100"
              enterTo="transform -translate-y-[95vh]"
              leave="transition-all duration-500 ease-in"
              leaveFrom="transform -translate-y-[95vh]"
              leaveTo="transform translate-y-0"
            >
              <Popover.Panel
                static
                className="fixed inset-0 z-10 w-screen h-screen bg-gray-50 "
              >
                <Menu />
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </nav>
  )
}

export default NavBar
