import { useEffect, useState } from 'react';

import api from '../services/api';

export interface ISala {
  uuid?: string;
  id?: string;
  name: string;
  numero: string;
  status?: string;
  grupo: string;
  createdAt?: string;
  users?: {
    name: string;
    email: string;
    salaUser: {
      userId: string;
    };
  }[];
}

export interface ISalaEdit {
  uuid: string | undefined;
  name: string | undefined;
  numero: string | undefined;
  grupo: string | undefined;
}

function useSalas() {
  async function createSala({ name, numero, grupo }: ISala) {
    try {
      const request = await api.post('/salas', {
        name,
        numero,
        status: 'inativo',
        grupo,
      });

      return request.data;
    } catch (e) {
      return e;
    }
  }

  async function editSala({ uuid, name, numero, grupo }: ISalaEdit) {
    try {
      const request = await api.patch(`/salas/${uuid}`, {
        name,
        numero,
        status: 'inativo',
        grupo,
      });

      return request.data;
    } catch (e) {
      return e;
    }
  }

  const [salas, setSalas] = useState<ISala[]>();

  async function allSalas() {
    await api.get('salas').then((response) => {
      setSalas(response.data);
    });
  }

  async function getSingleSala(id: string | undefined): Promise<ISala> {
    const request = await api.get(`salas/${id}`);
    return request.data;
  }

  async function deleteSala(id: string | undefined) {
    const request = await api.delete(`salas/${id}`);
    return request.data;
  }

  async function deleteSalaUser(
    salaId: string | undefined,
    userId: string | undefined,
  ) {
    const request = await api.delete(`salauser/${salaId}`, {
      data: { userId },
    });
    return request.data;
  }

  useEffect(() => {
    allSalas();
  }, []);

  return {
    createSala,
    salas,
    getSingleSala,
    deleteSala,
    deleteSalaUser,
    editSala,
  };
}

export default useSalas;
