import "./EmailEditModal.css";
import {
  Button,
  CircularProgress,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';
import { Editor, EditorRef, EmailEditorProps } from 'react-email-editor';
import React, { FC, Fragment, useEffect, useRef, useState } from 'react';
import { BiInfoCircle } from 'react-icons/bi';
import dynamic from 'next/dynamic';
import sample from "./sample.json";
import axios from "axios";
import { message } from "antd";
import Image from "next/image";

const EmailEditor = dynamic (()=>import ('react-email-editor'))

interface EmailEditModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
};

const EmailEditModal: FC<EmailEditModalProps> = ({
  isOpen,
  onOpenChange,
}) => {
  const emailEditorRef = useRef<EditorRef | null>(null);
  const [preview, setPreview] = useState(false);
  const [template, setTemplate] = useState<number>(-1);
  const [templates, setTemplates] = useState([sample]);
  const [messageApi, contextHolder] = message.useMessage();
  const [isSavingDesign, setIsSavingDesign] = useState<boolean>(false);

  useEffect(() => {
    // axios.get('/load_email_template_api')
    //   .then((res) => {
    //     if (res.data.status) {
    //       setTemplates([
    //         ...templates,
    //         ...res.data.templates.map((temp: string) => JSON.parse(temp))
    //       ])
    //     } else {
    //       messageApi.error('Something went wrong!');
    //       console.warn('load email template error:', res.data);
    //     }
    //   })
    //   .catch((err) => {
    //     messageApi.error('Something went wrong!');
    //     console.warn('load email template error:', err);
    //   })
    const templatesString = localStorage.getItem('templates');
    if (!templatesString) localStorage.setItem('templates', '[]');
    else {
      const localTemplates: any[] = JSON.parse(localStorage.getItem('templates') as string);
      setTemplates([
        sample,
        ...localTemplates
      ]);
    }
  }, [])

  const saveDesign = () => {
    const unlayer = emailEditorRef.current?.editor;
    unlayer?.exportHtml(({ design, html }: { design: any, html: string }) => {
      setIsSavingDesign(true);
      const htmlBlob = new Blob([html], { type: "text/html" }),
        designBlob = new Blob([JSON.stringify(design)], { type: "application/json" })
      const formData = new FormData();
      formData.append('html', htmlBlob);
      formData.append('design', designBlob);
      axios.post('/fapi/save_email_template_api', formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then((res) => {
        if (res.data.status) {
          const localTemplates: any[] = JSON.parse(localStorage.getItem('templates') as string);
          localTemplates.push({
            thumbnail: res.data.img_url,
            html: html,
            design: design
          });
          localStorage.setItem('templates', JSON.stringify(localTemplates));
          setTemplates([
            ...templates,
            {
              thumbnail: res.data.img_url,
              design: design
            }
          ])
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

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml((data) => {
      const { design, html } = data;
    });
  };

  const togglePreview = () => {
    const unlayer = emailEditorRef.current?.editor;

    if (preview) {
      unlayer?.hidePreview();
      setTimeout(() => {
        const logo = document.getElementById("adsgency-logo");
        if (logo) logo.style.display = 'flex';
      }, 100);
      setPreview(false);
    } else {
      unlayer?.showPreview('desktop');
      setTimeout(() => {
        const logo = document.getElementById("adsgency-logo");
        if (logo) logo.style.display = 'none';
      }, 100);
      setPreview(true);
    }
  };

  const onDesignLoad = (data: any) => {

  };

  const onLoad: EmailEditorProps['onLoad'] = (unlayer) => {
    unlayer.addEventListener('design:loaded', onDesignLoad);
    unlayer.loadDesign(templates[template].design as any);
    if (emailEditorRef.current) {
      emailEditorRef.current.editor = unlayer;
    } else {
      emailEditorRef.current = {
        editor: unlayer
      }
    }
  };

  const onReady: EmailEditorProps['onReady'] = (unlayer) => {
    const editorIframe = document.getElementById("email-editor");
    const emailEditor = document.getElementById('editor-2');
    if (emailEditor) {
      emailEditor.style.position = 'relative';
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

      if (editorIframe) {
        editorIframe.style.position = "relative";
        editorIframe.appendChild(newLogo);
      }
    }, 100);
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      hideCloseButton
      className='overflow-visible max-w-screen-2xl h-5/6'
    >
      {contextHolder}
      <ModalContent className="p-6 text-white bg-background-100">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-2xl">
                <BiInfoCircle className="w-7 h-7" />
                Edit Email
              </div>
            </ModalHeader>
            <ModalBody>
              {
                template === -1
                  ? <div className="flex flex-wrap gap-4">
                    { templates.map((temp, i) => (
                      <div
                        key={i}
                        className="w-[160px] h-[240px] overflow-hidden shadow-md bg-cover bg-center hover:brightness-75"
                        onClick={() => {
                          setTemplate(i);
                        }}
                      >
                        <Image
                          src={process.env.NEXT_PUBLIC_API_URL + '/' +  temp.thumbnail}
                          width={160}
                          height={240}
                          alt={`template_${i}`}
                        />
                      </div>
                    ))}
                  </div>
                  : <>
                    <div className="flex items-center justify-end gap-3">
                      <Button onClick={() => setTemplate(-1)}>
                        Back
                      </Button>
                      <Button onClick={saveDesign}>
                        { isSavingDesign ? <CircularProgress color="default" aria-label="Loading..."/> : 'Save Design' }
                      </Button>
                    </div>
                    <React.StrictMode>
                      <div id="email-editor">
                        <EmailEditor onLoad={onLoad} onReady={onReady} options={{
                          features: {
                            preview: false
                          }
                        }} />
                      </div>
                    </React.StrictMode>
                  </>
              }
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

export default EmailEditModal;
