import React, { createContext, useEffect, useState } from 'react';

import { IAuthProvider, IContext, IUser, IUserCadastro } from './types';
import {
  getUserLocalStorage,
  LoginRequest,
  setUserLocalStorage,
  SignupRequest,
} from './utils';

export const AuthContext = createContext<IContext>({} as IContext);

export function AuthProvider({ children }: IAuthProvider) {
  const [user, setUser] = useState<IUser | null>();

  useEffect(() => {
    const users = getUserLocalStorage();

    if (users) {
      setUser(users);
    }
  }, []);

  // Faz login
  const authenticate = async (email: string, password: string) => {
    const response = await LoginRequest(email, password);
    const payload = { token: response.accessToken, email };

    setUser(payload);
    setUserLocalStorage(payload);
  };

  // Se cadastra
  const signup = async ({
    name,
    tags,
    matricula,
    disciplinaOUcargo,
    email,
    password,
    confPassword,
    role,
  }: IUserCadastro) => {
    const response = await SignupRequest({
      name,
      tags,
      matricula,
      disciplinaOUcargo,
      email,
      password,
      confPassword,
      role,
    });

    return response.data;
  };

  // Faz logout
  const logout = () => {
    setUser(null);
    setUserLocalStorage(null);
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ ...user, authenticate, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
}
