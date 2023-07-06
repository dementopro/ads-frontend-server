'use client'
import { Listbox, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import chevronDown from '@iconify/icons-mdi/chevron-down';
import { Icon } from '@iconify/react';


type props<T> = {
  selected: T
  setSelected: (value: T) => void
  options: T[]
}

const SelectCom = ({ options, selected, setSelected }: props<{ name: string }>) => {

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative">
        <Listbox.Button className="cursor-pointer hover:opacity-80 relative w-full rounded-lg bg-[#35363A] text-primary-gray h-[44px] pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-primary-purple focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-purple sm:text-sm">
          <span className="block truncate">{selected.name}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <Icon icon={chevronDown} className='text-primary-gray' width={20} height={20} />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-[#35363A] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {options.map((person, personIdx) => (
              <Listbox.Option
                key={personIdx}
                className={({ active }) =>
                  `relative text-center text-white cursor-pointer select-none py-2 ${active ? 'bg-primary-purple' : 'text-gray-900'
                  }`
                }
                value={person}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                        }`}
                    >
                      {person.name}
                    </span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}

export default SelectCom
