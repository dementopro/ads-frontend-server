'use client';

import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
  } from '@nextui-org/react';
  import React, { FC, Fragment, useEffect, useState } from 'react';
  import { BiInfoCircle } from 'react-icons/bi';
  import { Listbox, Transition } from '@headlessui/react'
  import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
  import { useFormik } from 'formik';

  import Chart from 'react-apexcharts';
  
  import { CompanyForm } from '@/types/planning';
  
  interface PinterestAnalyticsModalProps {
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
  
  const PinterestAnalyticsModal: FC<PinterestAnalyticsModalProps> = ({
    isOpen,
    onOpenChange,
    formik,
    selectedAdAccount,
    setSelectedAdAccount,
    accounts,
    analyticsData
  }) => {
    const spentFundSeries = [{
        name: 'Price',
        data: analyticsData.map(item => (item as any).SPEND_IN_DOLLAR)
    }];
    const impressionSeries = [{
        name: 'Total Impressions',
        data: analyticsData.map(item => (item as any).TOTAL_IMPRESSION)
    }];
    const toFixedWithoutZeros = (num: number, precision: number) => Number.parseFloat(num.toFixed(precision));

    const spentFundOptions = {
        chart: {
            id: 'pinterest-analytics-chart',
            type: 'bar',
            stacked: false,
            height: 350,
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
                columnWidth: "50px"
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
            text: 'Spend in Ads (USD)',
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
                text: 'Price',
                style: {
                    color: "white"
                }
            },
        },
        xaxis: {
            type: 'category',
            categories: analyticsData.map(item => (item as any).DATE),
            labels: {
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
    };

    const impressionOptions = {
        fill: {
            colors: analyticsData.map(() => "red")
        },
        chart: {
            id: 'pinterest-analytics-impression-chart',
            type: 'bar',
            stacked: false,
            height: 350,
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
                columnWidth: "30px",
                colors: {
                    ranges: analyticsData.map(() => ({
                        color: "green"
                    })),
                }
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
            text: 'Total Impressions',
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
                text: 'Impression',
                style: {
                    color: "white"
                }
            },
        },
        xaxis: {
            type: 'datetime',
            categories: analyticsData.map(item => (item as any).DATE),
            labels: {
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
    };

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
                  Pinterest Analytics Dashboard for {formik.values.companyName}
                </div>
              </ModalHeader>
              <ModalBody className="h-[70vh] overflow-y-auto">
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
                <div>
                  <Chart options={spentFundOptions as any} series={spentFundSeries} type="bar" height="350" />
                  <Chart options={impressionOptions as any} series={impressionSeries} type="bar" height="350" />
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
  
  export default PinterestAnalyticsModal;
  