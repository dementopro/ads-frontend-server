interface IResponse {
  status: 0 | 1 | 2 | 3;
  message: string;
  error?: string;
}
