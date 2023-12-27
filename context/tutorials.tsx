import { createContext, ReactNode, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useDisclosure } from '@nextui-org/react'

import TutorialFinishModal from '@/components/tutorial/TutorialFinishModal';
import './tutorials.css';

export type TutorialCampaign = 'NONE' | 'NAVIGATION' | 'HOME' | 'SEO' | 'EMAIL' | 'SOCIAL';
export type TutorialNavigationGuideMode = 'NONE' | 'HOME' | 'SEO' | 'EMAIL' | 'SOCIAL';
export type TutorialNavigationGuideModesChildType = { mode: TutorialNavigationGuideMode, highlightElement: string };
export const TutorialNavigationGuideModes: TutorialNavigationGuideModesChildType[] = [
  {
    mode: 'HOME',
    highlightElement: 'aside-menus'
  },
  {
    mode: 'SEO',
    highlightElement: 'aside-menus'
  },
  {
    mode: 'EMAIL',
    highlightElement: 'aside-menus'
  },
  {
    mode: 'SOCIAL',
    highlightElement: 'aside-menus'
  }
];

export type TutorialHomeGuideMode = 'GENERAL' | 'CONTENTTYPE';
export type TutorialHomeGuideModesChildType = { mode: TutorialHomeGuideMode, highlightElement: string };
export const TutorialHomdeGuideModes: TutorialHomeGuideModesChildType[] = [
  {
    mode: 'GENERAL',
    highlightElement: 'starting-menu company-information'
  },
  {
    mode: 'CONTENTTYPE',
    highlightElement: 'content-type'
  }
];

export type TutorialSEOGuideMode = 'ADDITIONAL1' | 'ADDITIONAL2' | 'OBJECTIVES' | 'RECOMMENDATION' | 'DETAIL' | 'FINISH';
export type TutorialSEOGuideModesChildType = { mode: TutorialSEOGuideMode, highlightElement: string };
export const TutorialSEOGuideModes: TutorialSEOGuideModesChildType[] = [
  {
    mode: 'ADDITIONAL1',
    highlightElement: 'company-additional-details stepper-menu target-audience-section ideal-customer-section'
  },
  {
    mode: 'ADDITIONAL2',
    highlightElement: 'competitors-section analytics-connect-section'
  },
  {
    mode: 'OBJECTIVES',
    highlightElement: 'business-objectives-section'
  },
  {
    mode: 'RECOMMENDATION',
    highlightElement: 'recommendations-menu stepper-menu first-seo-on-result seo-page-tab'
  },
  {
    mode: 'DETAIL',
    highlightElement: 'seo-recommendation-menu seo-technical-recommendations-section'
  },
  {
    mode: 'FINISH',
    highlightElement: ''
  }
];

export type TutorialEmailGuideMode = 'OAUTH' | 'ADDITIONAL1' | 'ADDITIONAL2' | 'OBJECTIVES' | 'RECOMMENDATION' | 'DETAIL1' | 'DETAIL2' | 'DETAIL3' | 'DETAIL4' | 'DETAIL5' | 'FINISH';
export type TutorialEmailGuideModesChildType = { mode: TutorialEmailGuideMode, highlightElement: string };
export const TutorialEmailGuideModes: TutorialEmailGuideModesChildType[] = [
  {
    mode: 'OAUTH',
    highlightElement: 'company-additional-details stepper-menu mail-platforms-menu mail-oauth-section'
  },
  {
    mode: 'ADDITIONAL1',
    highlightElement: 'email-templates-schedule-section'
  },
  {
    mode: 'ADDITIONAL2',
    highlightElement: 'email-audience-customer-section'
  },
  {
    mode: 'OBJECTIVES',
    highlightElement: 'business-objectives-section'
  },
  {
    mode: 'RECOMMENDATION',
    highlightElement: ''
  },
  {
    mode: 'DETAIL1',
    highlightElement: ''
  },
  {
    mode: 'DETAIL2',
    highlightElement: ''
  },
  {
    mode: 'DETAIL3',
    highlightElement: '',
  },
  {
    mode: 'DETAIL4',
    highlightElement: '',
  },
  {
    mode: 'DETAIL5',
    highlightElement: ''
  },
  {
    mode: 'FINISH',
    highlightElement: ''
  }
];

export type TutorialSocialGuideMode = 'OAUTH' | 'ADDITIONAL1' | 'ADDITIONAL2' | 'OBJECTIVES' | 'RECOMMENDATION1' | 'RECOMMENDATION2' | 'DETAIL1' | 'DETAIL2' | 'DETAIL3' | 'DETAIL4' | 'DETAIL5' | 'DETAIL6' | 'DETAIL7' | 'DETAIL8' | 'DETAIL9' | 'DETAIL10' | 'DETAIL11' | 'DETAIL12' | 'FINISH';
export type TutorialSocialGuideModesChildType = { mode: TutorialSocialGuideMode, highlightElement: string };
export const TutorialSocialGuideModes: TutorialSocialGuideModesChildType[] =
[
  {
    mode: 'OAUTH',
    highlightElement: 'company-additional-details stepper-menu social-media-platforms-menu social-oauth-section'
  },
  {
    mode: 'ADDITIONAL1',
    highlightElement: 'social-media-audience-section'
  },
  {
    mode: 'ADDITIONAL2',
    highlightElement: 'social-customer-schedule-section'
  },
  {
    mode: 'OBJECTIVES',
    highlightElement: 'business-objectives-section'
  },
  {
    mode: 'RECOMMENDATION1',
    highlightElement: ''
  },
  {
    mode: 'RECOMMENDATION2',
    highlightElement: ''
  },
  {
    mode: 'DETAIL1',
    highlightElement: ''
  },
  {
    mode: 'DETAIL2',
    highlightElement: ''
  },
  {
    mode: 'DETAIL3',
    highlightElement: ''
  },
  {
    mode: 'DETAIL4',
    highlightElement: ''
  },
  {
    mode: 'DETAIL5',
    highlightElement: ''
  },
  {
    mode: 'DETAIL6',
    highlightElement: ''
  },
  {
    mode: 'DETAIL7',
    highlightElement: ''
  },
  {
    mode: 'DETAIL8',
    highlightElement: ''
  },
  {
    mode: 'DETAIL9',
    highlightElement: ''
  },
  {
    mode: 'DETAIL10',
    highlightElement: ''
  },
  {
    mode: 'DETAIL11',
    highlightElement: ''
  },
  {
    mode: 'DETAIL12',
    highlightElement: ''
  },
  {
    mode: 'FINISH',
    highlightElement: ''
  }
];

export interface TutorialsContext {
  isInTutorialMode: boolean;
  tutorialCampaign: TutorialCampaign | null;
  guideModeIndex: number;
  currentGuideMode: TutorialNavigationGuideModesChildType | TutorialHomeGuideModesChildType | TutorialSEOGuideModesChildType | TutorialEmailGuideModesChildType | TutorialSocialGuideModesChildType;
  setIsInTutorialMode: (isInTutorialMode: boolean) => void;
  setTutorialCampaign: (tutorialCampaign: TutorialCampaign) => void;
  setGuideModeIndex: (index: number) => void;
  startTutorial: (campaign: TutorialCampaign) => void;
  closeTutorial: () => void;
  getGuideModes: (campaign: TutorialCampaign) => [] | TutorialNavigationGuideModesChildType[] | TutorialHomeGuideModesChildType[] | TutorialSEOGuideModesChildType[] | TutorialEmailGuideModesChildType[] | TutorialSocialGuideModesChildType[];
  getCurrentGuideMode: () => (TutorialNavigationGuideModesChildType | TutorialHomeGuideModesChildType | TutorialSEOGuideModesChildType | TutorialEmailGuideModesChildType | TutorialSocialGuideModesChildType);
  goBack: () => void;
  goNext: () => void;
};

export const TutorialsContext = createContext<TutorialsContext>({
  isInTutorialMode: false,
  tutorialCampaign: 'NAVIGATION',
  guideModeIndex: 0,
  currentGuideMode: ({ mode: 'HOME', highlightElement: '' }) as TutorialNavigationGuideModesChildType,
  setIsInTutorialMode: () => { },
  setTutorialCampaign: () => { },
  setGuideModeIndex: () => { },
  startTutorial: () => { },
  closeTutorial: () => { },
  getCurrentGuideMode: () => ({ mode: 'HOME', highlightElement: '' } as TutorialNavigationGuideModesChildType),
  getGuideModes: () => [],
  goBack: () => { },
  goNext: () => { }
});

export const useTutorialsContext = () => useContext(TutorialsContext);

export const TutorialsProvider = ({ children }: { children: ReactNode }) => {
  const { isOpen: isTutorialFinishModalOpen, onOpen: onTutorialFinishModalOpen, onClose: onTutorialFinishModalClose } = useDisclosure();
  const [isInTutorialMode, setIsInTutorialMode] = useState<boolean>(false);
  const [tutorialCampaign, setTutorialCampaign] = useState<TutorialCampaign>('NONE');
  const [guideModeIndex, setGuideModeIndex] = useState<number>(-1);
  const prevTutorialCampaign = useRef(tutorialCampaign);
  const prevGuideModeIndex = useRef(guideModeIndex);

  const currentGuideMode: TutorialNavigationGuideModesChildType | TutorialHomeGuideModesChildType | TutorialSEOGuideModesChildType | TutorialEmailGuideModesChildType | TutorialSocialGuideModesChildType = useMemo(() => {
    if (tutorialCampaign === 'NONE' || guideModeIndex < 0)
      return {mode: 'NONE', highlightElement: ''} as TutorialNavigationGuideModesChildType;

    switch (tutorialCampaign) {
      case 'NAVIGATION':
        return TutorialNavigationGuideModes[guideModeIndex];
      case 'HOME':
        return TutorialHomdeGuideModes[guideModeIndex];
      case 'SEO':
        return TutorialSEOGuideModes[guideModeIndex];
      case 'EMAIL':
        return TutorialEmailGuideModes[guideModeIndex];
      case 'SOCIAL':
        return TutorialSocialGuideModes[guideModeIndex];
    }
  }, [tutorialCampaign, guideModeIndex]);

  const handleStartTutorial = (campaign: TutorialCampaign) => {
    setTutorialCampaign(campaign);
    setGuideModeIndex(0);
    setIsInTutorialMode(true);
  };

  const handleCloseTutorial = () => {
    setIsInTutorialMode(false);
  };

  const handleGetCurrentGuideMode = () => {
    if (tutorialCampaign === 'NONE' || guideModeIndex < 0)
      return {mode: 'NONE', highlightElement: ''} as TutorialNavigationGuideModesChildType;

    switch (tutorialCampaign) {
      case 'NAVIGATION':
        return TutorialNavigationGuideModes[guideModeIndex];
      case 'HOME':
        return TutorialHomdeGuideModes[guideModeIndex];
      case 'SEO':
        return TutorialSEOGuideModes[guideModeIndex];
      case 'EMAIL':
        return TutorialEmailGuideModes[guideModeIndex];
      case 'SOCIAL':
        return TutorialSocialGuideModes[guideModeIndex];
    }
  };

  const getGuideModes = (tutorialCampaign: TutorialCampaign) => {
    if (tutorialCampaign === 'NONE')
      return [];

    switch (tutorialCampaign) {
      case 'NAVIGATION':
        return TutorialNavigationGuideModes;
      case 'HOME':
        return TutorialHomdeGuideModes;
      case 'SEO':
        return TutorialSEOGuideModes;
      case 'EMAIL':
        return TutorialEmailGuideModes;
      case 'SOCIAL':
        return TutorialSocialGuideModes;
    }

    return [];
  }

  const getGuideMode = (tutorialCampaign: string, guideModeIndex: number) => {
    if (tutorialCampaign === 'NONE' || guideModeIndex < 0)
      return {mode: 'NONE', highlightElement: ''} as TutorialNavigationGuideModesChildType;

    switch (tutorialCampaign) {
      case 'NAVIGATION':
        return TutorialNavigationGuideModes[guideModeIndex];
      case 'HOME':
        return TutorialHomdeGuideModes[guideModeIndex];
      case 'SEO':
        return TutorialSEOGuideModes[guideModeIndex];
      case 'EMAIL':
        return TutorialEmailGuideModes[guideModeIndex];
      case 'SOCIAL':
        return TutorialSocialGuideModes[guideModeIndex];
    }
  };

  const goBack = () => {
    const currentGuideModes = getGuideModes(tutorialCampaign);
    if ((currentGuideModes as []).length && guideModeIndex > 0)
      setGuideModeIndex(guideModeIndex - 1);
  };

  const goNext = () => {
    const currentGuideModes = getGuideModes(tutorialCampaign);
    if ((currentGuideModes as []).length) {
      const limitLength: number = tutorialCampaign === 'NAVIGATION' || tutorialCampaign === 'HOME' ? (currentGuideModes.length - 1) : (currentGuideModes.length - 2);
      if (guideModeIndex < limitLength)
        setGuideModeIndex(guideModeIndex + 1);
      else {
        if (tutorialCampaign === 'SEO' || tutorialCampaign === 'EMAIL' || tutorialCampaign === 'SOCIAL') {
          setGuideModeIndex(guideModeIndex + 1);
          onTutorialFinishModalOpen();
        } else {
          setIsInTutorialMode(false);
        }
      }
    }
  };

  const setZIndexToElements = (idList: string) => {
    idList.split(' ').map((id) => {
      const element = document.getElementById(id);
      if (element) {
        element.classList.add('tutorial-element');
        const subMaskChild = document.querySelector(`#${id} .submask`);
        if (!subMaskChild) {
          const subMaskNode = document.createElement('div');
          subMaskNode.classList.add('absolute', 'w-full', 'h-full', 'left-0', 'top-0', 'tutorial-element', 'submask');
          element.appendChild(subMaskNode);
        }
      }
    });
  }

  const removeZIndexFromElements = (idList: string) => {
    idList.split(' ').map((id) => {
      const element = document.getElementById(id);
      if (element) {
        element.classList.remove('tutorial-element');
        const subMaskChild = document.querySelector(`#${id} .submask`);
        if (subMaskChild)
          subMaskChild.remove();
      }
    });
  }

  useEffect(() => {
    if (isInTutorialMode)
      setZIndexToElements(getGuideMode(tutorialCampaign, guideModeIndex)?.highlightElement as string || '');
    else removeZIndexFromElements(getGuideMode(tutorialCampaign, guideModeIndex)?.highlightElement as string || '');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInTutorialMode]);

  useEffect(() => {
    if (tutorialCampaign != prevTutorialCampaign.current || guideModeIndex != prevGuideModeIndex.current)
      removeZIndexFromElements(getGuideMode(prevTutorialCampaign.current, prevGuideModeIndex.current)?.highlightElement as string || '');

    setZIndexToElements(getGuideMode(tutorialCampaign, guideModeIndex)?.highlightElement as string || '');
    prevTutorialCampaign.current = tutorialCampaign;
    prevGuideModeIndex.current = guideModeIndex;

  }, [tutorialCampaign, guideModeIndex]);


  return (
    <TutorialsContext.Provider value={{
      isInTutorialMode, setIsInTutorialMode,
      tutorialCampaign, setTutorialCampaign,
      guideModeIndex, setGuideModeIndex,
      currentGuideMode,
      startTutorial: handleStartTutorial,
      closeTutorial: handleCloseTutorial,
      getCurrentGuideMode: handleGetCurrentGuideMode,
      getGuideModes,
      goBack, goNext
    }}>
      {children}
      {isInTutorialMode && <div id='tutorials-container' className="backdrop-blur-md" />}
      <TutorialFinishModal tutorialCampaign={tutorialCampaign} isOpen={isTutorialFinishModalOpen} onClose={onTutorialFinishModalClose} />
    </TutorialsContext.Provider>
  )
}
