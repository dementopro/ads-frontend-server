import { Listbox, Transition } from '@headlessui/react';
import * as React from 'react';
import { BiChevronDown } from 'react-icons/bi';

type Option = {
  name: string;
  value: number;
}

interface ISelectProps {
  options: Option[];
  className?: string;
}

const Select: React.FunctionComponent<ISelectProps> = (props) => {
  const { options } = props;
  const [selected, setSelected] = React.useState<number>(0);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className={`relative ${props.className ? props.className : ''}`}>
        <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left border rounded-lg cursor-default border-background-300 bg-background-200 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm h-[40px]">
          <span className="block truncate">{options[selected].name}</span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <BiChevronDown
              className="w-5 h-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={React.Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base rounded-md shadow-lg bg-background-100 max-h-60 ring-1 ring-black/5 focus:outline-none sm:text-sm">
            {options.map((option, i) => (
              <Listbox.Option
                key={i}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 px-4 text-white ${
                    active ? 'bg-background-200' : 'bg-background-100'
                  }`
                }
                value={option.value}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {option.name}
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
};

export default Select;
