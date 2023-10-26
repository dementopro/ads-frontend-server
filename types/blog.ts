export interface IBlog {
  id: string;
  title: string;
  miniTitle: string,
  content: {
    title: string;
    para: string[];
  }[];
  introductionImage: string;
  introductionText: string;
  publishDate: string;
  publisher: string;
  coverImage: string;
  layout: string;
  type: string
}
