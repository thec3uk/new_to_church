import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { PrismicRichText } from '@prismicio/react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const FAQ = ({ children }) => {
  return (
    <Disclosure as="div" className="pt-6">
      {({ open }) => (
        <>
          <dt className="text-lg">
            <Disclosure.Button className="flex items-start justify-between w-full text-left text-black ">
              <span className="font-medium">{children.question}</span>
              <span className="flex items-center ml-6 h-7">
                <ChevronDownIcon
                  className={classNames(
                    open ? '-rotate-180' : 'rotate-0',
                    'h-6 w-6 transform'
                  )}
                  aria-hidden="true"
                />
              </span>
            </Disclosure.Button>
          </dt>
          <Disclosure.Panel as="dd" className="pr-12 mt-2">
            <div className="text-base font-light text-gray-900">
              <PrismicRichText field={children.answer.richText} />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default FAQ
