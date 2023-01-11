import { useEffect, useState } from 'react';

import api from '../services/api';

interface ISala {
  id?: string;
  name: string;
  numero: string;
}

function useSalas() {
  async function createSala({ name, numero }: ISala) {
    try {
      const request = await api.post('/salas', {
        name,
        numero,
        status: 'fechada',
        userId: 'id',
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

  useEffect(() => {
    allSalas();
  }, []);

  return { createSala, salas };
}

export default useSalas;
