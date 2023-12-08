'use client';

import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
  } from '@nextui-org/react';
  import React, { FC } from 'react';
  import { BiInfoCircle } from 'react-icons/bi';
  import { useFormik } from 'formik';
  import dynamic from 'next/dynamic';
  import Chart from 'react-apexcharts';
  
  import { CompanyForm } from '@/types/planning';
  
  interface PinterestAnalyticsModalProps {
    isOpen: boolean;
    onOpenChange: () => void;
    formik: ReturnType<typeof useFormik<CompanyForm>>;
    analyticsData: [];
  }
  
  const PinterestAnalyticsModal: FC<PinterestAnalyticsModalProps> = ({
    isOpen,
    onOpenChange,
    formik,
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
              <ModalBody>
                <div>
                  <Chart options={spentFundOptions as any} series={spentFundSeries} type="bar" height="350" />
                  <Chart options={impressionOptions as any} series={impressionSeries} type="bar" height="350" />
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
                  onClick={onClose}
                >
                  Submit
                </button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    );
  };
  
  export default PinterestAnalyticsModal;
  