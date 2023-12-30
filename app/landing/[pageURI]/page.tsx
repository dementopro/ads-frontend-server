'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

import ReactGATag from "@/components/ReactGATag";
import DefaultLayout from "@/layout/default";

const LandingPage = ({ params }: { params: { pageURI: string } }) => {
  const [html, setHTML] = useState<string>('');

  useEffect(() => {
    (async () => {
      if (params.pageURI) {
        const response = await axios.get(`/fapi/get_landingpage_html_api?publish_url=${params.pageURI}`);
        if (response.data.status)
          setHTML(response.data.html);
      }
    })();
  }, [params]);

  return (
    <>
      <ReactGATag
        fieldObject={{
          hitType: "pageview",
          page: `/landing/${params.pageURI}`,
          title: 'Dynamic landing page - AdsGency AI'
        }}
      />
      <div className="w-100 h-100 fixed z-[999]" dangerouslySetInnerHTML={{ __html: html }}>

      </div>
    </>
  )
};

export default LandingPage;
