import { useEffect, useState } from 'react';

import api from '../services/api';

interface ISala {
  uuid?: string;
  name: string;
  numero: string;
  status?: string;
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

  useEffect(() => {
    allSalas();
  }, []);

  return { createSala, salas };
}

export default useSalas;
