import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { ArrowBack } from '@material-ui/icons';
import { Box, Grid, IconButton } from '@mui/material';

import useSalas from '../../../hooks/useSalas';
import * as C from './styles';
import 'react-toastify/dist/ReactToastify.css';

function NewLock() {
  const { createSala } = useSalas();

  const [name, setName] = useState('');
  const [numero, setNumero] = useState('');
  const [grupo, setGrupo] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleCadastrar = async () => {
    if (!name || !numero || !grupo) {
      setError('Preencha todos os campos');
      return;
    }
    try {
      await createSala({ name, numero, grupo });

      toast.success('Sala cadastrada com sucesso!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: 'colored',
      });
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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="colored"
      />
      <title>SLOCKED - Cadastro</title>
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
                navigate('/trancas');
              }}
            >
              <ArrowBack style={{ color: 'white', fontSize: '44px' }} />
            </IconButton>
          </Box>
          <C.Title2>Cadastrar Tranca</C.Title2>
          <Box display="flex" flexDirection="column" gap={2}>
            <C.labelInput>Nome da sala</C.labelInput>
            <C.Input
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <C.labelInput>Identificação da sala</C.labelInput>
            <C.InputSala
              onChange={(e) => {
                setNumero(e.target.value);
              }}
            />
            <C.labelInput>Grupo da sala</C.labelInput>
            <C.Input
              onChange={(e) => {
                setGrupo(e.target.value);
              }}
            />
            <C.labelError>{error}</C.labelError>
            <Box textAlign="end" width="100%" mt="4px">
              <C.Button itemID="cadastrar" onClick={handleCadastrar}>
                Confirmar
              </C.Button>
            </Box>
          </Box>
        </C.BoxCadastro>
      </Grid>
    </Grid>
  );
}

export default NewLock;
