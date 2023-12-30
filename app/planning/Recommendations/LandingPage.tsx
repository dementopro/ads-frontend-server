import { useCallback, useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from "next/image";
import { BiChevronLeft, BiExpand, BiSave, BiLink, BiExitFullscreen } from 'react-icons/bi';
import { CircularProgress, useDisclosure } from '@nextui-org/react';
import { EditorRef, EmailEditorProps } from 'react-email-editor';
import StyledComponents from 'styled-components';
import { message } from "antd";
const EmailEditor = dynamic (() => import ('react-email-editor'))

import { useSeoAnalyzerContext } from '@/context/seo';
import axios from '@/lib/axios';
import styles from '@/./app/planning/planning.module.css';
import LandingPageShareModal from './LandingPageShareModal';

interface LandingPageDesign {
  id: string;
  thumbnail_path?: string;
  publish_url?: string;
};

const StyledEditorWrapper = StyledComponents.div`
  &>div {
    width: 100%;
    height: 100%;
  }
`;

const LandingPageRecommendation = () => {
  const { company, landingPage } = useSeoAnalyzerContext();
  const emailEditorRef = useRef<EditorRef | null>(null);
  const [landingPageMode, setLandingPageMode] = useState<'TEMPLATES' | 'EDIT' | 'DESIGNS'>('EDIT');
  const [designs, setDesigns] = useState<LandingPageDesign[]>([]);
  const [selectedDesign, setSelectedDesign] = useState<LandingPageDesign | null>(null);
  const [isSavingDesign, setIsSavingDesign] = useState<boolean>(false);
  const [isEditorFullScreenMode, setIsEditorFullScreenMode] = useState<boolean>(false);
  const { isOpen: isLandingPageShareModalOpen, onOpen: onLandingPageShareModalOpen, onOpenChange: onLandingPageShareModalOpenChange } = useDisclosure();
  const [messageApi, contextHolder] = message.useMessage();

  const onLoad: EmailEditorProps['onLoad'] = (unlayer) => {
    if (selectedDesign) {
      axios.get(`/fapi/get_landingpage_design_by_id_api?landingpage_id=${selectedDesign.id}`).then((res) => {
        if (res.data.status) {
          unlayer.loadDesign(JSON.parse(res.data.landing_page));
        } else {
          console.warn('email template save error:', res.data.message);
        }
      }).catch((err) => {
        console.warn('email template save error:', err);
      });
    }
    else unlayer.loadDesign(landingPage as any);
    if (emailEditorRef.current) {
      emailEditorRef.current.editor = unlayer;
    } else {
      emailEditorRef.current = {
        editor: unlayer
      }
    }
  };

  const onReady: EmailEditorProps['onReady'] = (unlayer) => {
    const landingPageEditor = document.getElementById('landingpage-editor');
    if (landingPageEditor) {
      landingPageEditor.style.position = 'relative';
    }
    setTimeout(() => {
      const newLogo = document.createElement('div');
      newLogo.id = "adsgency-logo";
      newLogo.style.width = '425px';
      newLogo.style.height = '50px';
      newLogo.style.background = 'rgb(238, 238, 238)';
      newLogo.style.position = 'absolute';
      newLogo.style.right = '0';
      newLogo.style.bottom = '0';
      newLogo.style.display = 'inline-flex';
      newLogo.style.justifyContent = 'center';
      newLogo.style.alignItems = 'center';
      newLogo.innerHTML = '<img alt="logo" loading="lazy" width="132" height="28" decoding="async" data-nimg="1" src="/logo_black.svg" style="color: transparent;">';

      if (landingPageEditor) {
        landingPageEditor.appendChild(newLogo);
      }
    }, 100);
  };

  const handleEditorFullScreen = () => {
    const element: any = document.getElementById('landingpage-editor-wrapper');
    let isFullScreenModeChanged = false;

    if (isEditorFullScreenMode) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        isFullScreenModeChanged = true;
      } else if ((document as any).webkitExitFullscreen) { /* Safari */
        (document as any).webkitExitFullscreen();
        isFullScreenModeChanged = true;
      } else if ((document as any).msExitFullscreen) { /* IE11 */
        (document as any).msExitFullscreen();
        isFullScreenModeChanged = true;
      }
    } else {
      if (element.requestFullscreen) {
        element.requestFullscreen();
        isFullScreenModeChanged = true;
      } else if (element.webkitRequestFullscreen) { /* Safari */
        element.webkitRequestFullscreen();
        isFullScreenModeChanged = true;
      } else if (element.msRequestFullscreen) { /* IE11 */
        element.msRequestFullscreen();
        isFullScreenModeChanged = true;
      }
    }

    isFullScreenModeChanged && setIsEditorFullScreenMode((isEditorFullScreenMode: boolean) => !isEditorFullScreenMode);
  };

  const handleSaveDesign = () => {
    const unlayer = emailEditorRef.current?.editor;
    unlayer?.exportHtml(({ design, html }: { design: any, html: string }) => {
      setIsSavingDesign(true);
      const htmlBlob = new Blob([html], { type: "text/html" }),
        designBlob = new Blob([JSON.stringify(design)], { type: "application/json" })
      const formData = new FormData();
      formData.append('html', htmlBlob);
      formData.append('design', designBlob);

      axios.post(`/fapi/save_landingpage_design_api${selectedDesign ? "?landingpage_id=" + selectedDesign.id : ""}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then((res) => {
        if (res.data.status) {
          const newDesign: LandingPageDesign = {
            id: res.data.landingpage_id,
            thumbnail_path: res.data.thumbnail_path
          };
          const newDesigns = [...designs];
          newDesigns.unshift(newDesign);
          setSelectedDesign(newDesign);
          setDesigns(newDesigns);
          messageApi.success('Saved successfully!');
        } else {
          messageApi.error('Something went wrong!');
          console.warn('email template save error:', res.data.message);
        }
      }).catch((err) => {
        messageApi.error('Something went wrong!');
        console.warn('email template save error:', err);
      }).finally(() => {
        setIsSavingDesign(false);
      })
    });
  };

  const handleDownloadDesign = () => {
    const unlayer = emailEditorRef.current?.editor;
    unlayer?.exportHtml(({ html }: { html: string }) => {
      const htmlBlob = new Blob([html], { type: "text/html" });
      const formData = new FormData();
      formData.append('html', htmlBlob);
      axios.post('/fapi/export_landingpage_design_to_pdf_api', formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then((res) => {
        if (res.data.status) {
          const element = document.createElement("a");
          element.setAttribute("href", res.data.link);
          element.setAttribute("download", `${company.name} landing page.pdf`);
          element.setAttribute("target", "_blank");
          element.click();
          messageApi.success('Download successfully!');
        } else {
          messageApi.error('Something went wrong!');
          console.warn('email template save error:', res.data.message);
        }
      }).catch((err) => {
        messageApi.error('Something went wrong!');
        console.warn('email template save error:', err);
      }).finally(() => {
        setIsSavingDesign(false);
      })
    });
  };

  const handleSharePage = () => {
    const unlayer = emailEditorRef.current?.editor;

    if (!selectedDesign) {
      messageApi.warning('Save your design first');

      return;
    };

    unlayer?.exportHtml(({ design, html }: { design: any, html: string }) => {
      const htmlBlob = new Blob([html], { type: "text/html" }),
        designBlob = new Blob([JSON.stringify(design)], { type: "application/json" })
      const formData = new FormData();
      formData.append('html', htmlBlob);
      formData.append('design', designBlob);

      axios.patch(`/fapi/share_landingpage_design_api${selectedDesign ? "?landingpage_id=" + selectedDesign.id : ""}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then((res) => {
        if (res.data.status) {
          const design = selectedDesign ? {
            ...selectedDesign,
            publish_url: res.data.publish_url
          } : {
            id: res.data.landingpage_id,
            publish_url: res.data.publish_url
          };
          setSelectedDesign(design);
          onLandingPageShareModalOpen();
        } else {
          console.warn('email template save error:', res.data.message);
        }
      }).catch((err) => {
        messageApi.error('Something went wrong!');
        console.warn('email template save error:', err);
      });
    });
  };

  useEffect(() => {
    axios.get('/fapi/get_landingpage_designs_api').then((res) => {
      if (res.data.status) {
        setDesigns(res.data.landing_pages);
      } else {
        console.warn('email template save error:', res.data.message);
      }
    }).catch((err) => {
      console.warn('email template save error:', err);
    });
  }, []);

  const getLandingPageFullURL = useCallback((publishURL: string) => {
    return `${process.env.NEXT_PUBLIC_FRONTEND_URL}/landing/${publishURL}`
  }, []);

  return (
    <div id="landingpage-editor-wrapper" className={`${styles.onPageDiv} overflow-x-auto`}>
      {contextHolder}
      <div className="flex w-full items-center justify-between gap-3">
        <div className="flex gap-4">
          <button
            className="flex w-fit h-11 justify-center items-center gap-2 border px-4 py-1.5 rounded-lg border-solid border-[#5F6368]"
            onClick={() => setLandingPageMode('DESIGNS')}
          >
            <BiChevronLeft className="w-5 h-5" />Back
          </button>
          <button
            className="flex w-fit h-11 justify-center items-center gap-2 border px-4 py-1.5 rounded-lg border-solid border-[#5F6368] bg-background-300"
            onClick={handleEditorFullScreen}
          >
            {
              isEditorFullScreenMode
                ?
                  <>
                    <BiExitFullscreen className="w-5 h-5" />Exit Fullscreen
                  </>
                :
                  <>
                    <BiExpand className="w-5 h-5" />Fullscreen
                  </>
            }
          </button>
        </div>
        <div className="flex gap-4">
          <button
            className="flex w-[160px] h-11 justify-center items-center gap-2 border px-4 py-1.5 rounded-lg border-solid border-[#5F6368] bg-primary-purple"
            disabled={isSavingDesign}
            onClick={handleSaveDesign}
          >
            { isSavingDesign ? <CircularProgress color="default" className="w-5 h-5" aria-label="Loading..."/> : <><BiSave className="w-5 h-5" />Save Design</> }
          </button>
          <button
            className="flex w-fit h-11 justify-center items-center gap-2 border px-4 py-1.5 rounded-lg border-solid border-[#5F6368] bg-background-300"
            onClick={handleDownloadDesign}
          >
            Publish
          </button>
          <button
            className="flex w-fit h-11 justify-center items-center gap-2 border px-4 py-1.5 rounded-lg border-solid border-[#5F6368] bg-background-300"
            onClick={handleSharePage}
          >
            <BiLink />Share
          </button>
        </div>
      </div>
      <StyledEditorWrapper className={`${styles.mainDiv} w-full h-full !p-0`}>
        {
          landingPageMode === 'DESIGNS' && (
            <div className="p-3 flex flex-wrap gap-5">
              {
                designs.map((design: LandingPageDesign) => (
                  <div
                    key={design.id}
                    className="w-[160px] h-[240px] overflow-hidden shadow-md bg-cover bg-center hover:brightness-75 cursor-pointer"
                    onClick={() => {
                      setSelectedDesign(design);
                      setLandingPageMode('EDIT');
                    }}
                  >
                    <Image
                      src={design.thumbnail_path || ''}
                      width={160}
                      height={240}
                      alt={`design_${design.id}`}
                    />
                  </div>
                ))
              }
            </div>
          )
        }
        {
          landingPageMode === 'EDIT' && <EmailEditor editorId='landingpage-editor' options={{ className: "w-full" }} onLoad={onLoad} onReady={onReady} />
        }
      </StyledEditorWrapper>

      <LandingPageShareModal isOpen={isLandingPageShareModalOpen} onOpenChange={onLandingPageShareModalOpenChange} link={selectedDesign?.publish_url ? getLandingPageFullURL(selectedDesign?.publish_url) : ''} />
    </div>
  );
};

export default LandingPageRecommendation;
