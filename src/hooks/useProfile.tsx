import { useEffect, useState } from 'react';

import api from '../services/api';

export interface MyUser {
  uuid?: string;
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

  useEffect(() => {
    getUSer();
    allSalas();
  }, []);

  return { profile, users };
}

export default useProfile;
