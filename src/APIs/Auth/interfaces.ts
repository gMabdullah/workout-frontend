export interface IuserLogin {
  email: string;
  password: string;
  name?: string;
}

export interface IuserData {
  email?: string;
  name?: string;
}
export interface IRoles {
  id: string;
  name: string;
  permissions: [];
  users: [];
}
export interface IResponseUser {
  token?: string;
  user?: IuserData;
  role?: IRoles;
}
