export interface IBlog {
  id: string;
  title: string;
  miniTitle: string,
  content: {
    title: string;
    para: string[];
  }[];
  introductionText: string;
  publishDate: string;
  publisher: string;
  coverImage: string;
  authorImage: string;
  layout: string;
  type: string
}