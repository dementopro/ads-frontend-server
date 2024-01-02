export interface IUseCase {
  id: string;
  name: string;
  intro: {
    whiteHead: string;
    colorHead: string;
    paragraph: string;
    buttonText: string;
    buttonLink: string;
    image: string;
  };
  withAdsGency: string[];
  boostUp: {
    colorHead: string;
    details: {
      title: string;
      description: string;
      color: string;
    }[];
  };
  conclusion: {
    whiteHead: string;
    colorHead?: string;
    paragraph: string;
  };
}