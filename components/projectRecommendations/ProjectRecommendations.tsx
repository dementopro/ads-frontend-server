import * as React from 'react';
import Button from '../../app/planning/TabButton';
import { useState } from 'react';
import OnPage from './onPage/OnPage';
import OffPage from './offPage/offPage';
import EmailMarketing from './emailMarketing/EmailMarketing';
import Infographics from './infographics/Infographics';

interface ProjectRecommendationsProps {
  contentType: string;
  recommendations: any;
}

const ProjectRecommendations: React.FunctionComponent<
  ProjectRecommendationsProps
> = ({ contentType, recommendations }) => {
  const [activeSeoType, setActiveSeoType] = useState<number>(0);

  if (contentType === 'seo') {
    return (
      <div className="flex flex-col">
        <div id="seo-page-tab" className="flex items-center mt-8 relative">
          <Button
            isActivated={activeSeoType == 0}
            onClick={() => setActiveSeoType(0)}
          >
            <img
              src="/images/seo/on-page.svg"
              alt={'SEO (on-page)'}
              width={24}
              height={24}
            />
            <span className="truncate" title="SEO (on-page)">
              SEO (on-page)
            </span>
          </Button>
          <Button
            isActivated={activeSeoType == 1}
            onClick={() => setActiveSeoType(1)}
          >
            <img
              src="/images/seo/off-page.svg"
              alt={'SEO (off-page)'}
              width={24}
              height={24}
            />
            <span className="truncate" title="SEO (off-page)">
              SEO (off-page)
            </span>
          </Button>
        </div>
        {activeSeoType == 0 ? (
          <OnPage onpage={recommendations.on_page} />
        ) : (
          <OffPage offpage={recommendations.off_page} />
        )}
      </div>
    );
  } else if (contentType === 'email marketing') {
    return (
      <EmailMarketing emailInstruction={recommendations.email_instruction} />
    );
  } else if (contentType === 'infographics') {
    return <Infographics infographics={recommendations.infographics} />;
  }

  return <></>;
};

export default ProjectRecommendations;
