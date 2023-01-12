import { useEffect, useState } from 'react';

import api from '../services/api';

export interface ISala {
  uuid?: string;
  name: string;
  numero: string;
  status?: string;
  createdAt?: string;
}

function useSalas() {
  async function createSala({ name, numero }: ISala) {
    try {
      const request = await api.post('/salas', {
        name,
        numero,
        status: 'inativo',
      });

      return request.data;
    } catch {
      return null;
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

  useEffect(() => {
    allSalas();
  }, []);

  return { createSala, salas, getSingleSala, deleteSala };
}

export default useSalas;
