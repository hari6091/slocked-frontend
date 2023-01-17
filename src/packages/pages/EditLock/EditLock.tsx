/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ArrowBack } from '@material-ui/icons';
import { Box, Grid, IconButton } from '@mui/material';

import useSalas, { ISala } from '../../../hooks/useSalas';
import * as C from './styles';

function EditLock() {
  const { editSala, getSingleSala } = useSalas();

  const { id } = useParams();
  const [sala, setSala] = useState<ISala>();

  const loadSala = useCallback(async () => {
    const getSala = await getSingleSala(id);
    setSala(getSala);
  }, [id, getSingleSala]);

  useEffect(() => {
    loadSala();
  }, []);

  const [name, setName] = useState(sala?.name);
  const [numero, setNumero] = useState(sala?.numero);
  const [grupo, setGrupo] = useState(sala?.grupo);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleEditar = async () => {
    try {
      await editSala({
        uuid: sala?.uuid,
        name: name ?? sala?.name,
        numero: numero ?? sala?.numero,
        grupo: grupo ?? sala?.grupo,
      });
      navigate(`/userpermissions/${sala?.uuid}`);
    } catch (err) {
      setError('Algo deu errado');
    }
  };

  return (
    <Grid
      container
      height="100vh"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <title>SLOCKED - Editar Sala</title>
      <Grid
        item
        xs={12}
        sm={12}
        md={7}
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        minWidth="400px"
      >
        <C.BoxCadastro p="20px" boxShadow="0 1px 2px #0003">
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="start"
            alignItems="center"
          >
            <IconButton
              onClick={() => {
                navigate(`/userpermissions/${sala?.uuid}`);
              }}
            >
              <ArrowBack style={{ color: 'white', fontSize: '44px' }} />
            </IconButton>
          </Box>
          <C.Title2>Editar Sala</C.Title2>
          <Box display="flex" flexDirection="column" gap={2}>
            <C.labelInput>Nome da sala</C.labelInput>
            <C.Input
              onChange={(e) => {
                setName(e.target.value);
              }}
              defaultValue={sala?.name}
            />
            <C.labelInput>Identificação da sala</C.labelInput>
            <C.InputSala
              onChange={(e) => {
                setNumero(e.target.value);
              }}
              defaultValue={sala?.numero}
            />
            <C.labelInput>Grupo da sala</C.labelInput>
            <C.Input
              onChange={(e) => {
                setGrupo(e.target.value);
              }}
              defaultValue={sala?.grupo}
            />
            <C.labelError>{error}</C.labelError>
            <Box textAlign="end" width="100%" mt="4px">
              <C.Button itemID="cadastrar" onClick={handleEditar}>
                Confirmar
              </C.Button>
            </Box>
          </Box>
        </C.BoxCadastro>
      </Grid>
    </Grid>
  );
}

export default EditLock;
