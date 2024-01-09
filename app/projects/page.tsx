'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import React, {
  ChangeEvent,
  Fragment,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useDisclosure } from '@nextui-org/react';
import { Spin, message } from 'antd';
import Image from 'next/image';
import { FormikHelpers, useFormik } from 'formik';
import axios from '@/lib/axios';

import { useTutorialsContext } from '@/context/tutorials';
import BugReportModal from '@/components/contactUs/BugReportModal';
import NotEnoughtCredits from '@/components/NotEnoughtCredits';
import ReactGATag from '@/components/ReactGATag';
import AdminLayout from '@/layout/admin';
import { NOT_ENOUGH_CREDIT, SUCCESS_CODE } from '@/data/constant';
import SaveProject from '@/components/saveProject/SaveProject';
import SuccessPopup from '@/components/successPopup/SuccessPopup';
import { useProjectContext } from '@/context/project';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import ProjectCard from '@/components/projectCard/ProjectCard';
import ProjectRecommendations from '@/components/projectRecommendations/ProjectRecommendations';

const contentTypes = [
  'SEO',
  'Social Media',
  'Email Marketing',
  'Infographics',
  'Landing Page',
  'Video',
];

const ProjectsPage = () => {
  const { projectData, setProjectData } = useProjectContext();
  const [messageApi, contextHolder] = message.useMessage();
  const {
    isOpen: isBugReportModalOpen,
    onOpen: onOpenBugReportModal,
    onOpenChange: onOpenBugReportModalChange,
    onClose: onCloseBugReportModal,
  } = useDisclosure();
  const [isGenerating, setIsGenerating] = useState(false);
  const [showNotEnoughCredits, setShowNotEnoughCredits] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<any>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    if (projectData && Object.keys(projectData).length > 0) {
      console.log(projectData, 'Project Page');
    }
  }, [projectData]);

  const toggleSuccessPopup = () => {
    setIsSuccessPopupOpen(!isSuccessPopupOpen);
  };

  const handleSaveProject = () => {
    if (projectData && Object.keys(projectData).length > 0) {
      console.log(projectData, 'Projects page');
      setProjectData(projectData);
      toggleSuccessPopup();
    }
  };

  return (
    <AdminLayout>
      {contextHolder}
      <ReactGATag
        fieldObject={{
          hitType: 'pageview',
          page: '/projects',
          title: 'Projects - AdsGency AI',
        }}
      />
      <NotEnoughtCredits
        show={showNotEnoughCredits}
        setShow={() => setShowNotEnoughCredits(false)}
      />

      <Spin
        spinning={isGenerating}
        wrapperClassName="w-[80%] m-auto max-w-[1500px] text-[15px]"
      >
        <section className="flex flex-col justify-center">
          <div className="flex items-center gap-4 w-full">
            <img src="/images/sidebar/projects.svg" className="w-6 h-6" />
            <h1 className="text-xl font-bold">Projects</h1>
            {/* <Listbox value={selected} onChange={setSelected}>
              <div className="relative mt-1">
                <Listbox.Button className="relative w-60 cursor-default rounded-lg bg-[#23252B] py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="block truncate">
                    {selected ? selected : 'Please select a content type'}
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
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
                  <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-[#23252B] py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                    {contentTypes.map((contentType, contentTypeIdx) => (
                      <Listbox.Option
                        key={contentTypeIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active ? 'bg-[#17181a]' : 'text-white'
                          }`
                        }
                        value={contentType}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                              }`}
                            >
                              {contentType}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox> */}
          </div>
          <div className="flex items-center gap-4 w-full bg-[#1B1C21] mt-8 p-5 rounded-tl-lg rounded-tr-lg">
            <div className="flex flex-col gap-4 w-fit">
              <div className="flex items-center justify-center w-fit bg-[#35363A] p-4 rounded-lg">
                <div className="flex items-center justify-center w-fit bg-[#844FFF] p-4 rounded-lg">
                  <img src="/images/sidebar/projects.svg" className="w-6 h-6" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <h1 className="text-xl font-semibold">Project List</h1>
              <p className="text-md text-[#ABABAB]">
                See your project details and historical recommendations
              </p>
            </div>
          </div>
          {selectedProject && Object.keys(selectedProject).length > 0 && (
            <button
              className="flex items-center justify-center w-40 h-10 bg-[#27282F] rounded-lg my-4"
              onClick={() => setSelectedProject(null)}
            >
              Back to Projects
            </button>
          )}
          <div className="flex flex-wrap items-center gap-4 w-full bg-[#27282F] p-5 rounded-bl-lg rounded-br-lg">
            {selectedProject && Object.keys(selectedProject).length > 0 ? (
              <ProjectRecommendations
                contentType={selectedProject.content_type}
                recommendations={selectedProject.data}
              />
            ) : (
              projectData.length > 0 &&
              projectData.map((project: any) => (
                <button
                  key={project.name}
                  onClick={() => setSelectedProject(project)}
                >
                  <ProjectCard project={project} />
                </button>
              ))
            )}
          </div>
        </section>
        <div className="flex float-right mt-[32px] gap-[10px]">
          <p className="text-white text-[15px] text-[color:var(--primary-300,#ABABAB)]">
            Find a bug or encountering an error? Submit an issue report with
            us&nbsp;
            <button
              className="text-[#ABABAB] text-sm not-italic font-semibold leading-[normal] underline"
              onClick={() => {
                onOpenBugReportModal();
              }}
            >
              here
            </button>
            <BugReportModal
              isOpen={isBugReportModalOpen}
              onOpenChange={onOpenBugReportModalChange}
              onClose={onCloseBugReportModal}
            />
          </p>
          <Image
            width={28}
            height={28}
            src={'/images/admin/plan/info.svg'}
            alt="#"
          />
        </div>
        <SuccessPopup
          isOpen={isSuccessPopupOpen}
          togglePopup={toggleSuccessPopup}
          goToProjects={() => {}}
        />
      </Spin>
    </AdminLayout>
  );
};

export default ProjectsPage;
