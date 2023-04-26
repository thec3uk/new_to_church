/* This example requires Tailwind CSS v2.0+ */
import { Dispatch, SetStateAction, Fragment, useState } from 'react'
import React from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/24/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

interface Category {
  category_name: string
  email_recipient?: string
}

export default function CategorySelect({
  categories,
  selected,
  setSelected,
}: {
  categories: Category[]
  selected: Category
  setSelected: Dispatch<SetStateAction<Category | undefined>>
}) {
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium text-gray-700">
            Category
          </Listbox.Label>
          <div className="relative mt-1">
            <Listbox.Button
              className={`relative w-full py-2 pl-3 pr-10 text-left ${!selected.hasOwnProperty('email_recipient') && 'text-gray-500'
                } bg-white border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 sm:text-sm`}
            >
              <span className="block truncate">{selected.category_name}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronDownIcon
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {categories.map((category, id) => (
                  <Listbox.Option
                    key={id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-purple-600' : 'text-gray-900',
                        'cursor-default select-none relative py-2 pl-3 pr-9'
                      )
                    }
                    value={category}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? 'font-semibold' : 'font-normal',
                            'block truncate'
                          )}
                        >
                          {category.category_name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-purple-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
