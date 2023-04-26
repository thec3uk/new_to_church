import * as React from 'react'
import { Popover } from '@headlessui/react'

// import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/solid'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid'

import Search from './search/index'
import { PrismicLink } from '@prismicio/react'
const searchIndices = [{ name: `Pages`, title: `Pages` }]

const NavButton = ({ isOpen }: { isOpen: boolean }) => {
  const Icon = isOpen ? ChevronDownIcon : ChevronUpIcon
  return (
    <div className="fixed bottom-0 left-0 z-20 w-screen px-2 bg-gray-50/90">
      <div className="flex justify-between w-full border-t border-t-black">
        <div className="flex items-center justify-start w-1/3">
          <PrismicLink href={'/'}>
            <img src="/manifest-logo.png" className="w-12 h-12" />
          </PrismicLink>
        </div>
        <div className="flex justify-center w-1/3">
          <Popover.Button>
            <Icon className={`w-16 h-16 cursor-pointer hover:text-gray-600`} />
          </Popover.Button>
        </div>
        <div className="flex items-center justify-end w-1/3">
          {/* <Search indices={searchIndices} /> */}
        </div>
      </div>
    </div>
  )
}

export default NavButton
