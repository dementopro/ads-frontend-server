interface IResponse<T = any> {
  data?: T;
  status: 0 | 1;
  message: string;
}
