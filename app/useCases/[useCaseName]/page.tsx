import React from 'react';
import ReactGATag from '@/components/ReactGATag';
import DefaultLayout from '@/layout/default';
import { useCases } from '@/data/UseCases/useCases';
import AboveFooter from '@/components/common/AboveFooter';
import UseCaseIntro from '@/components/useCases/UseCaseIntro';
import WithAdsGency from '@/components/useCases/WithAdsGency';
import Conclusion from '@/components/useCases/Conclusion';
import BoostUseCase from '@/components/useCases/BoostUseCase';

async function getUseCaseByName(name: string) {
  return useCases.find((useCase) => useCase.name === name)!
}

const IUseCasesPage = async ({ params }: { params: { useCaseName: string } }) => {
  const useCase = await getUseCaseByName(params.useCaseName);
  return (
    <DefaultLayout>
      <ReactGATag
        fieldObject={{
          hitType: 'pageview',
          page: `/useCases/${params.useCaseName}`,
          title: `Use Case: ${params.useCaseName} - AdsGency AI`,
        }}
      />
      <div className="ipad:px-[60px] desktop:px-[100px] android:pt-[100px] ipad:pt-[150px] w-full relative z-10 bg-hero-gradient bg-cover">
        <UseCaseIntro useCase={useCase} />
      </div>
      <WithAdsGency useCase={useCase} />
      <BoostUseCase useCase={useCase} />
      <Conclusion useCase={useCase} />
      <AboveFooter target='Sign Up' link='/register' icon={false} />
    </DefaultLayout>
  );
};

export default IUseCasesPage;
