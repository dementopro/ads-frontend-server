'use client';

import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
  } from '@nextui-org/react';
  import React, { FC, Fragment, useEffect, useMemo } from 'react';
  import { BiInfoCircle } from 'react-icons/bi';
  import { Listbox, Transition } from '@headlessui/react'
  import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
  import { useFormik } from 'formik';
  import moment from 'moment';
  import _ from 'lodash';

  import Chart from 'react-apexcharts';
  
  import type { CompanyForm } from "@/types/planning";
  import type { PageInsight, PageInsightValue } from "@/types/social/meta";
  
  interface MetaAnalyticsModalProps {
    isOpen: boolean;
    onOpenChange: () => void;
    formik: ReturnType<typeof useFormik<CompanyForm>>;
    selectedAdAccount: null | object;
    setSelectedAdAccount: Function;
    accounts: [];
    analyticsData: [];
  }

  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
  }
  
  const MetaAnalyticsModal: FC<MetaAnalyticsModalProps> = ({
    isOpen,
    onOpenChange,
    formik,
    selectedAdAccount,
    setSelectedAdAccount,
    accounts,
    analyticsData
  }) => {
    const toFixedWithoutZeros = (num: number, precision: number) => Number.parseFloat(num.toFixed(precision));

    const analyticsChartData: any[] = useMemo(() => {
        return analyticsData.map((insightData: PageInsight) => ({
            ...insightData,
            data: insightData.values.map((value: PageInsightValue) => value.value),
            chartOptions: {
                chart: {
                    id: insightData.id,
                    type: 'bar',
                    stacked: false,
                    zoom: {
                        type: 'x',
                        enabled: true,
                        autoScaleYaxis: true
                    },
                    toolbar: {
                        autoSelected: 'zoom'
                    }
                },
                plotOptions: {
                    bar: {
                        columnWidth: "20px"
                    }
                },
                dataLabels: {
                    enabled: false
                },
                markers: {
                    size: 0,
                    colors: "black"
                },
                title: {
                    text: insightData.title || _.startCase(_.toLower(insightData.name)),
                    align: 'left',
                    style: {
                        color: "white"
                    }
                },
                yaxis: {
                    labels: {
                        formatter: function (val: any) {
                            return String(toFixedWithoutZeros(val, 2));
                        },
                        style: {
                            colors: ["white"]
                        }
                    },
                    title: {
                        text: 'Value',
                        style: {
                            color: "white"
                        }
                    },
                },
                xaxis: {
                    type: 'category',
                    categories: insightData.values.map((value: PageInsightValue) => value.end_time),
                    labels: {
                        formatter: function (val: any) {
                            return moment(val).local().format('YYYY-MM-DD');
                        },
                        style: {
                            colors: [...new Array(30)].map(() => "white")
                        }
                    },
                    tickPlacement: "between"
                },
                tooltip: {
                    shared: false,
                    y: {
                        formatter: function (val: any) {
                            return val
                        }
                    },
                    theme: "",
                    cssClass: "bg-background-100"
                }
            }
        }))
    }, [analyticsData]);

    useEffect(() => {
        
    }, [selectedAdAccount]);
  
    return (
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        hideCloseButton
        className='max-w-screen-2xl overflow-visible'
      >
        <ModalContent className="p-6 text-white bg-background-100">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-2xl">
                  <BiInfoCircle className="w-7 h-7" />
                  Meta Analytics Dashboard for {formik.values.companyName}
                </div>
              </ModalHeader>
              <ModalBody className="max-h-[80vh] overflow-y-auto">
                <div className="w-[320px] mb-10">
                    <Listbox value={selectedAdAccount} onChange={setSelectedAdAccount as (value: object | null) => void}>
                    {({ open }) => (
                        <>
                        <Listbox.Label className="inline text-sm font-medium leading-6 text-white">Ad Accounts</Listbox.Label>
                        <div className="relative mt-2">
                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                            <span className="flex items-center">
                                <span className="ml-3 block truncate">{selectedAdAccount ? ((selectedAdAccount as any)["name"] || '') : ''}</span>
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </span>
                            </Listbox.Button>

                            <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {
                                    accounts.length === 0 &&
                                        <Listbox.Option className="text-gray-900" value={null} disabled>
                                            No Ad Accounts
                                        </Listbox.Option>
                                }
                                {accounts.map((account) => (
                                    <Listbox.Option
                                        key={(account as any).id}
                                        className={({ active }) =>
                                        classNames(
                                            active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                                            'relative cursor-default select-none py-2 pl-3 pr-9'
                                        )
                                        }
                                        value={account}
                                    >
                                        {({ selected, active }) => (
                                        <>
                                            <div className="flex items-center">
                                            <span
                                                className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                            >
                                                {(account as any).name}
                                            </span>
                                            </div>

                                            {selected ? (
                                            <span
                                                className={classNames(
                                                active ? 'text-white' : 'text-indigo-600',
                                                'absolute inset-y-0 right-0 flex items-center pr-4'
                                                )}
                                            >
                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
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
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {
                        analyticsChartData.map((chartData: any) =>
                            <Chart
                                key={chartData.id}
                                type="bar"
                                height="350"
                                options={chartData.chartOptions}
                                series={[{
                                    name: chartData.name,
                                    data: chartData.data
                                }]}
                                className="w-full"
                            />
                        )
                    }
                </div>
              </ModalBody>
              <ModalFooter className="flex w-full justify-end gap-6">
                <button
                  className="w-[120px] h-[44px] rounded-lg text-white bg-transparent hover:bg-background-200/20 border border-background-500"
                  onClick={onClose}
                >
                  Close
                </button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    );
  };
  
  export default MetaAnalyticsModal;
  