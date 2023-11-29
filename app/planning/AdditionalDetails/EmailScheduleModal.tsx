import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';
import { FC, Fragment, useState, useEffect } from 'react';
import { BiCalendarEvent, BiCheck } from 'react-icons/bi';
import { Listbox, Transition } from '@headlessui/react';
import { BiChevronDown } from 'react-icons/bi';
import { useSeoAnalyzerContext } from '@/context/seo';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

interface DayScheduleProps {
  day: number;
  onSelect: (index: number, value: any) => void;
  onClick: () => void;
  onAddTime: () => void;
  schedules: number[] | null;
}

const DaySchedule: FC<DayScheduleProps> = ({
  day,
  schedules,
  onSelect,
  onClick,
  onAddTime,
}) => {
  return (
    <div className="flex flex-wrap w-full gap-4 mt-4">
      <div
        className={`bg-background-300 rounded-lg w-[128px] h-[48px] ${
          !!schedules ? 'border border-primary-gray' : 'border-none'
        } flex items-center justify-center text-primary-gray`}
        onClick={onClick}
      >
        {days[day]}
      </div>
      {schedules?.map((schedule, i) => (
        <Listbox
          key={i}
          value={schedules[i]}
          onChange={(value) => {
            onSelect(i, value);
            // setSchedules((prev) => prev ? prev.map((val, index) => index == i ? value : val) : prev)
          }}
        >
          <div className="relative">
            <Listbox.Button className="relative bg-background-200 w-[128px] h-[48px] py-2 pl-3 pr-10 text-left hover:brightness-110 rounded-lg shadow-md cursor-default focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="block truncate">
                {`${schedules[i] < 0 ? 'Times' : schedules[i] == 12 ? 12 : schedules[i] % 12}${
                  schedules[i] > 0 ? (schedules[i] >= 13 ? 'pm' : 'am') : ''
                }`}
              </span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <BiChevronDown
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base rounded-md shadow-lg bg-background-200 max-h-60 ring-1 ring-black/5 focus:outline-none sm:text-sm">
                <Listbox.Option
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-primary-purple' : ''
                    }`
                  }
                  value={-1}
                  disabled
                >
                  {({ selected }) => (
                    <>
                      <span className="block truncate">Times</span>
                    </>
                  )}
                </Listbox.Option>
                {[...new Array(24)].map((_, idx) => (
                  <Listbox.Option
                    key={idx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-primary-purple' : ''
                      }`
                    }
                    value={idx}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {`${idx == 12 ? 12 : idx % 12}${idx >= 13 ? 'pm' : 'am'}`}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      ))}
      {schedules && (
        <button
          className="text-base bg-transparent text-primary-purple rounded-lg w-[128px] h-[48px] flex items-center justify-center hover:brightness-110"
          onClick={onAddTime}
        >
          Add Time
        </button>
      )}
    </div>
  );
};

interface EmailScheduleModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

const EmailScheduleModal: FC<EmailScheduleModalProps> = ({
  isOpen,
  onOpenChange,
}) => {
  const { company, setCompany } = useSeoAnalyzerContext();
  const [schedules, setSchedules] = useState<any>({});

  useEffect(() => {
    if (company) {
      setSchedules(company.schedule);
    }
  }, [company])

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      hideCloseButton
      size="4xl"
      className='overflow-visible'
    >
      <ModalContent className="p-6 text-white bg-background-100">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-2xl">
                <BiCalendarEvent className="w-7 h-7" />
                Email Schedule
              </div>
              <p className="mt-2 text-sm text-primary-gray">
                Select the days & times you would like to schedule your emails
              </p>
            </ModalHeader>
            <ModalBody>
              <h5 className="text-base font-medium text-white">
                Weekly Calendar
              </h5>
              <div className="w-full">
                {days.map((day, i) => (
                  <DaySchedule
                    key={i}
                    day={i}
                    onSelect={(idx, value) => {
                      let newSchedules = {
                        ...schedules,
                        [day.toLowerCase()]: schedules[day.toLowerCase()].map((val: any, _idx: number) => _idx === idx ? value : val)
                      }
                      setSchedules(newSchedules);
                    }}
                    schedules={schedules[day.toLowerCase()]}
                    onClick={() => {
                      if (!schedules[day.toLowerCase()]) {
                        setSchedules({
                          ...schedules,
                          [day.toLowerCase()]: []
                        })
                      } else {
                        setSchedules({
                          ...schedules,
                          [day.toLowerCase()]: null
                        })
                      }
                    }}
                    onAddTime={() => {
                      const newSchedule = {
                        ...schedules,
                        [day.toLowerCase()]: [...schedules[day.toLowerCase()], -1],
                      };
                      setSchedules(newSchedule);
                    }}
                  />
                ))}
              </div>
            </ModalBody>
            <ModalFooter className="flex w-full gap-6">
              <button
                className="flex items-center justify-center flex-1 h-[44px] rounded-lg text-white bg-transparent hover:bg-background-200/20 border border-background-500"
                onClick={onClose}
              >
                Close
              </button>
              <button
                className="flex items-center justify-center flex-1 h-[44px] rounded-lg text-white bg-primary-purple hover:brightness-110 border-background-500"
                onClick={() => {
                  setCompany({
                    ...company,
                    schedule: schedules
                  })
                  onClose();
                }}
              >
                Ok
              </button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default EmailScheduleModal;
