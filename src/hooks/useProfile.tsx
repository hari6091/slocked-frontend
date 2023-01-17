import { useEffect, useState } from 'react';

import api from '../services/api';

export interface MyUser {
  uuid?: string;
  id?: string;
  name: string;
  email: string;
  disciplinaOUcargo: string;
  role: string;
  createdAt: string;
}

export interface MyUserSalas {
  uuid?: string;
  id?: string;
  name: string;
  numero: string;
  status: string;
  users: MyUser[];
}

function useProfile() {
  const [profile, setProfile] = useState<MyUser>();
  async function getUSer() {
    await api.get('me').then((response) => {
      setProfile(response.data);
    });
  }

  const [users, setUsers] = useState<MyUser[]>();
  async function allSalas() {
    await api.get('users').then((response) => {
      setUsers(response.data);
    });
  }

  async function getSingleUser(id: string | undefined): Promise<MyUser> {
    const request = await api.get(`users/${id}`);
    return request.data;
  }

  async function getUserSalas(id: string | undefined): Promise<MyUserSalas[]> {
    const request = await api.get(`salas/user/${id}`);
    return request.data;
  }

  async function deleteUser(id: string | undefined) {
    const request = await api.delete(`users/${id}`);
    return request.data;
  }

  async function deleteUserSala(
    salaId: string | undefined,
    userId: string | undefined,
  ) {
    const request = await api.delete(`usersala/${userId}`, {
      data: { salaId },
    });
    return request.data;
  }

  const [salas, setSalas] = useState<MyUserSalas[]>();
  async function userSalas() {
    await api.get('salas').then((response) => {
      setSalas(response.data);
    });
  }

  async function addUserSala(
    salaId: string | undefined,
    userId: string | undefined,
  ) {
    try {
      const request = await api.post('/salauser', {
        salaId,
        userId,
      });

      return request.data;
    } catch {
      return null;
    }
  }

  async function addUserSalaGroup(
    grupo: string | undefined,
    userId: string | undefined,
  ) {
    try {
      const request = await api.post('/salauser/group', {
        grupo,
        userId,
      });

      return request.data;
    } catch {
      return null;
    }
  }

  useEffect(() => {
    getUSer();
    allSalas();
    userSalas();
  }, []);

  return {
    profile,
    users,
    getSingleUser,
    deleteUser,
    salas,
    getUserSalas,
    deleteUserSala,
    addUserSala,
    addUserSalaGroup,
  };
}

export default useProfile;
