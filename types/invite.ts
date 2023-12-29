export interface InviteCollaboratorForm {
  f_name: string;
  l_name: string;
  email: string;
}
export interface IInviteObj {
  id: number;
  email: string;
  l_name: string;
  f_name: string;
  created_at: string;
  status: number;
  role: string;
  job_title: string;
  access_level: string;
}

export interface IInviteLists extends IResponse {
  invite_list?: IInviteObj[];
}
