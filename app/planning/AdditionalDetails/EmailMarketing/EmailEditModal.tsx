import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';
import dynamic from 'next/dynamic';
import React, { FC, Fragment, useRef, useState, useEffect } from 'react';
import { BiInfoCircle } from 'react-icons/bi';
import { EditorRef, EmailEditorProps } from 'react-email-editor';
import styled from 'styled-components';

import sample from "../sample.json";
import "./EmailEditModal.css";

interface EmailEditModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
};


const EmailEditModal: FC<EmailEditModalProps> = ({
  isOpen,
  onOpenChange,
}) => {
  const EmailEditor = dynamic (()=>import ('react-email-editor'))

  const StyledEmailEditor = styled(EmailEditor)`
    .blockbuilder-branding {
      display: none !important;
    }
  `;

  const emailEditorRef = useRef<EditorRef | null>(null);
  const [preview, setPreview] = useState(false);

  const saveDesign = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.saveDesign((design: any) => {
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
      setPreview(false);
    } else {
      unlayer?.showPreview('desktop');
      setPreview(true);
    }
  };

  const onDesignLoad = (data: any) => {

  };

  const onLoad: EmailEditorProps['onLoad'] = (unlayer) => {
    unlayer.addEventListener('design:loaded', onDesignLoad);
    unlayer.loadDesign(sample as any);
  };

  const onReady: EmailEditorProps['onReady'] = (unlayer) => {
    const emailEditor = document.getElementById('editor-2');
    if (emailEditor) {
      emailEditor.style.position = 'relative';
    }
    const newLogo = document.createElement('div');
    newLogo.style.width = '425px';
    newLogo.style.height = '50px';
    newLogo.style.background = 'rgb(238, 238, 238)';
    newLogo.style.position = 'absolute';
    newLogo.style.right = '0';
    newLogo.style.bottom = '0';
    newLogo.style.display = 'flex';
    newLogo.style.justifyContent = 'center';
    newLogo.style.alignItems = 'center';
    newLogo.innerHTML = '<img alt="logo" loading="lazy" width="132" height="28" decoding="async" data-nimg="1" src="/logo_black.svg" style="color: transparent;">';

    emailEditor?.appendChild(newLogo);
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      hideCloseButton
      className='overflow-visible max-w-screen-2xl h-5/6'
    >
      <ModalContent className="p-6 text-white bg-background-100">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-2xl">
                <BiInfoCircle className="w-7 h-7" />
                Edit Email
              </div>

              <div className="flex items-center justify-end gap-3">
                <Button onClick={togglePreview}>
                  {preview ? 'Hide' : 'Show'} Preview
                </Button>
                <Button onClick={saveDesign}>Save Design</Button>
                <Button onClick={exportHtml}>Export HTML</Button>
              </div>
              <React.StrictMode>
                <StyledEmailEditor ref={emailEditorRef} onLoad={onLoad} onReady={onReady} />
              </React.StrictMode>
            </ModalHeader>
            <ModalBody>

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
