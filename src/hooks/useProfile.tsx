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

  async function deleteUser(id: string | undefined) {
    const request = await api.delete(`users/${id}`);
    return request.data;
  }

  useEffect(() => {
    getUSer();
    allSalas();
  }, []);

  return { profile, users, getSingleUser, deleteUser };
}

export default useProfile;
