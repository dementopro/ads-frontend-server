import { FC, useRef } from 'react';
// import EmailEditor, { EditorRef, EmailEditorProps } from 'react-email-editor';

import styles from '@/./app/planning/planning.module.css';

const InfographicsRecommendation: FC = () => {
  // const emailEditorRef = useRef<EditorRef>(null);

  // const onReady: EmailEditorProps['onReady'] = (unlayer) => {

  // };

  return (
    <div className={`${styles.onPageDiv} overflow-x-auto`}>
      <div className={`${styles.mainDiv} w-full !p-0`}>
        {/* <EmailEditor ref={emailEditorRef} onReady={onReady} /> */}
      </div>
    </div>
  );
};

export default InfographicsRecommendation;
