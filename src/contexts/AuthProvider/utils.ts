import api from '../../services/api';
import { IUser, IUserCadastro, IUserUpdate } from './types';

// Salva o usuario no BD local
export function setUserLocalStorage(user: IUser | null) {
  localStorage.setItem('u', JSON.stringify(user));
}

// Checa se existe o usuario no BD local
export function getUserLocalStorage() {
  const json = localStorage.getItem('u');
  if (!json) {
    return null;
  }

  const user = JSON.parse(json);

  return user ?? null;
}

// Faz request do login passando email e senha como payload
export async function LoginRequest(email: string, password: string) {
  try {
    const request = await api.post('/login', { email, password });

    return request.data;
  } catch {
    return null;
  }
}

export async function LogoutRequest(email: string, password: string) {
  try {
    const request = await api.delete('/logout', { data: { email, password } });
    return request.data;
  } catch {
    return null;
  }
}

// Faz request do cadastro
export async function SignupRequest({
  name,
  tags,
  matricula,
  disciplinaOUcargo,
  email,
  password,
  confPassword,
  role,
}: IUserCadastro) {
  try {
    const request = await api.post('/users', {
      name,
      tags,
      matricula,
      disciplinaOUcargo,
      email,
      password,
      confPassword,
      role,
    });

    return request.data;
  } catch {
    return null;
  }
}

export async function updateUserRequest({
  id,
  name,
  tags,
  matricula,
  disciplinaOUcargo,
  email,
  password,
  confPassword,
  role,
}: IUserUpdate) {
  try {
    const request = await api.patch(`/users/${id}`, {
      name,
      tags,
      matricula,
      disciplinaOUcargo,
      email,
      password,
      confPassword,
      role,
    });

    return request.data;
  } catch {
    return null;
  }
}
