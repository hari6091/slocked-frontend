export interface IUser {
  email?: string;
  token?: string;
}

export interface IContext extends IUser {
  authenticate: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (params: IUserCadastro) => Promise<void>;
}

export interface IAuthProvider {
  children: JSX.Element;
}

export type IUserCadastro = {
  name: string;
  tags: string;
  matricula: string;
  disciplinaOUcargo: string;
  email: string;
  password: string;
  confPassword: string;
  role: string;
};
