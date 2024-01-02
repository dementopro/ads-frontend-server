import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import {
  BiChevronLeft,
  BiExpand,
  BiSave,
  BiDownload,
  BiExitFullscreen,
} from 'react-icons/bi';
import { CircularProgress } from '@nextui-org/react';
import { EditorRef, EmailEditorProps } from 'react-email-editor';
import StyledComponents from 'styled-components';
import { message } from 'antd';
const EmailEditor = dynamic(() => import('react-email-editor'));

import { useSeoAnalyzerContext } from '@/context/seo';
import axios from '@/lib/axios';
import styles from '@/./app/planning/planning.module.css';

interface InfographicDesign {
  id: string;
  thumbnail_path: string;
}

const StyledEditorWrapper = StyledComponents.div`
  &>div {
    width: 100%;
    height: 100%;
  }
`;

const InfographicsRecommendation = () => {
  const { company, infographics } = useSeoAnalyzerContext();
  const emailEditorRef = useRef<EditorRef | null>(null);
  const [infographicsMode, setInfographicsMode] = useState<
    'TEMPLATES' | 'EDIT' | 'DESIGNS'
  >('EDIT');
  const [designs, setDesigns] = useState<InfographicDesign[]>([]);
  const [selectedDesign, setSelectedDesign] =
    useState<InfographicDesign | null>(null);
  const [isSavingDesign, setIsSavingDesign] = useState<boolean>(false);
  const [isEditorFullScreenMode, setIsEditorFullScreenMode] =
    useState<boolean>(false);
  const [messageApi, contextHolder] = message.useMessage();

  const onLoad: EmailEditorProps['onLoad'] = (unlayer) => {
    if (selectedDesign) {
      axios
        .get(
          `/fapi/get_infographic_design_by_id_api?infographic_id=${selectedDesign.id}`
        )
        .then((res) => {
          if (res.data.status) {
            unlayer.loadDesign(JSON.parse(res.data.infographic));
          } else {
            console.warn('email template save error:', res.data.message);
          }
        })
        .catch((err) => {
          console.warn('email template save error:', err);
        });
    } else unlayer.loadDesign(infographics as any);
    if (emailEditorRef.current) {
      emailEditorRef.current.editor = unlayer;
    } else {
      emailEditorRef.current = {
        editor: unlayer,
      };
    }
  };

  const onReady: EmailEditorProps['onReady'] = (unlayer) => {
    const infographicsEditor = document.getElementById('infographics-editor');
    if (infographicsEditor) {
      infographicsEditor.style.position = 'relative';
    }
    setTimeout(() => {
      const newLogo = document.createElement('div');
      newLogo.id = 'adsgency-logo';
      newLogo.style.width = '352px';
      newLogo.style.height = '50px';
      newLogo.style.background = 'rgb(238, 238, 238)';
      newLogo.style.position = 'absolute';
      newLogo.style.right = '0';
      newLogo.style.bottom = '0';
      newLogo.style.display = 'inline-flex';
      newLogo.style.justifyContent = 'center';
      newLogo.style.alignItems = 'center';
      newLogo.innerHTML =
        '<img alt="logo" loading="lazy" width="132" height="28" decoding="async" data-nimg="1" src="/logo_black.svg" style="color: transparent;">';

      if (infographicsEditor) {
        infographicsEditor.appendChild(newLogo);
      }
    }, 100);
  };

  const handleEditorFullScreen = () => {
    const element: any = document.getElementById('infographics-editor-wrapper');
    let isFullScreenModeChanged = false;

    if (isEditorFullScreenMode) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        isFullScreenModeChanged = true;
      } else if ((document as any).webkitExitFullscreen) {
        /* Safari */
        (document as any).webkitExitFullscreen();
        isFullScreenModeChanged = true;
      } else if ((document as any).msExitFullscreen) {
        /* IE11 */
        (document as any).msExitFullscreen();
        isFullScreenModeChanged = true;
      }
    } else {
      if (element.requestFullscreen) {
        element.requestFullscreen();
        isFullScreenModeChanged = true;
      } else if (element.webkitRequestFullscreen) {
        /* Safari */
        element.webkitRequestFullscreen();
        isFullScreenModeChanged = true;
      } else if (element.msRequestFullscreen) {
        /* IE11 */
        element.msRequestFullscreen();
        isFullScreenModeChanged = true;
      }
    }

    isFullScreenModeChanged &&
      setIsEditorFullScreenMode(
        (isEditorFullScreenMode: boolean) => !isEditorFullScreenMode
      );
  };

  const handleSaveDesign = () => {
    const unlayer = emailEditorRef.current?.editor;
    unlayer?.exportHtml(({ design, html }: { design: any; html: string }) => {
      setIsSavingDesign(true);
      const htmlBlob = new Blob([html], { type: 'text/html' }),
        designBlob = new Blob([JSON.stringify(design)], {
          type: 'application/json',
        });
      const formData = new FormData();
      formData.append('html', htmlBlob);
      formData.append('design', designBlob);
      axios
        .post('/fapi/save_infographic_design_api', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          if (res.data.status) {
            const newDesigns = [...designs];
            newDesigns.unshift({
              id: res.data.infographic_id,
              thumbnail_path: res.data.thumbnail_path,
            });
            setDesigns(newDesigns);
            messageApi.success('Saved successfully!');
          } else {
            messageApi.error('Something went wrong!');
            console.warn('email template save error:', res.data.message);
          }
        })
        .catch((err) => {
          messageApi.error('Something went wrong!');
          console.warn('email template save error:', err);
        })
        .finally(() => {
          setIsSavingDesign(false);
        });
    });
  };

  const handleDownloadDesign = () => {
    const unlayer = emailEditorRef.current?.editor;
    unlayer?.exportHtml(({ html }: { html: string }) => {
      const htmlBlob = new Blob([html], { type: 'text/html' });
      const formData = new FormData();
      formData.append('html', htmlBlob);
      axios
        .post('/fapi/export_infographic_design_to_pdf_api', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          if (res.data.status) {
            const element = document.createElement('a');
            element.setAttribute('href', res.data.link);
            element.setAttribute(
              'download',
              `${company.name} Infographics.pdf`
            );
            element.setAttribute('target', '_blank');
            element.click();
            messageApi.success('Download successfully!');
          } else {
            messageApi.error('Something went wrong!');
            console.warn('email template save error:', res.data.message);
          }
        })
        .catch((err) => {
          messageApi.error('Something went wrong!');
          console.warn('email template save error:', err);
        })
        .finally(() => {
          setIsSavingDesign(false);
        });
    });
  };

  useEffect(() => {
    axios
      .get('/fapi/get_infographic_designs_api')
      .then((res) => {
        if (res.data.status) {
          setDesigns(res.data.infographics);
        } else {
          console.warn('email template save error:', res.data.message);
        }
      })
      .catch((err) => {
        console.warn('email template save error:', err);
      });
  }, []);

  return (
    <div
      id="infographics-editor-wrapper"
      className={`${styles.onPageDiv} overflow-x-auto`}
    >
      {contextHolder}
      <div className="flex w-full items-center justify-between gap-3">
        <div className="flex gap-4">
          <button
            className="flex w-fit h-11 justify-center items-center gap-2 border px-4 py-1.5 rounded-lg border-solid border-[#5F6368]"
            onClick={() => setInfographicsMode('DESIGNS')}
          >
            <BiChevronLeft className="w-5 h-5" />
            Back to Designs
          </button>
          <button
            className="flex w-fit h-11 justify-center items-center gap-2 border px-4 py-1.5 rounded-lg border-solid border-[#5F6368] bg-background-300"
            onClick={handleEditorFullScreen}
          >
            {isEditorFullScreenMode ? (
              <>
                <BiExitFullscreen className="w-5 h-5" />
                Exit Fullscreen
              </>
            ) : (
              <>
                <BiExpand className="w-5 h-5" />
                Fullscreen
              </>
            )}
          </button>
        </div>
        <div className="flex gap-4">
          <button
            className="flex w-[160px] h-11 justify-center items-center gap-2 border px-4 py-1.5 rounded-lg border-solid border-[#5F6368] bg-primary-purple"
            onClick={handleSaveDesign}
          >
            {isSavingDesign ? (
              <CircularProgress
                color="default"
                className="w-5 h-5"
                aria-label="Loading..."
              />
            ) : (
              <>
                <BiSave className="w-5 h-5" />
                Save Design
              </>
            )}
          </button>
          <button
            className="flex w-fit h-11 justify-center items-center gap-2 border px-4 py-1.5 rounded-lg border-solid border-[#5F6368] bg-background-300"
            onClick={handleDownloadDesign}
          >
            <BiDownload className="w-5 h-5" />
            Download
          </button>
        </div>
      </div>
      <StyledEditorWrapper className={`${styles.mainDiv} w-full h-full !p-0`}>
        {infographicsMode === 'DESIGNS' && (
          <div className="p-3 flex flex-wrap gap-5">
            {designs.map((design: InfographicDesign) => (
              <div
                key={design.id}
                className="w-[160px] h-[240px] overflow-hidden shadow-md bg-cover bg-center hover:brightness-75 cursor-pointer"
                onClick={() => {
                  setSelectedDesign(design);
                  setInfographicsMode('EDIT');
                }}
              >
                <Image
                  src={design.thumbnail_path}
                  width={160}
                  height={240}
                  alt={`design_${design.id}`}
                />
              </div>
            ))}
          </div>
        )}
        {infographicsMode === 'EDIT' && (
          <EmailEditor
            editorId="infographics-editor"
            options={{ className: 'w-full' }}
            onLoad={onLoad}
            onReady={onReady}
          />
        )}
      </StyledEditorWrapper>
    </div>
  );
};

export default InfographicsRecommendation;
