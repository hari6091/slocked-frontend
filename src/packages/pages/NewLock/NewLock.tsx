import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ArrowBack } from '@material-ui/icons';
import { Box, Grid, IconButton } from '@mui/material';

import * as C from './styles';

function NewLock() {
  const [name, setName] = useState('');
  const [info, setInfo] = useState('');
  const [id, setId] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleCadastrar = async () => {
    if (!name || !id) {
      setError('Preencha todos os campos');
      return;
    }
    try {
      // await cadastro(name, id,info);

      // eslint-disable-next-line no-alert
      alert('Usuário cadatrado com sucesso!');

      navigate('/trancas');
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
          <Box display="flex" flexDirection="row" justifyContent="start">
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
            <C.Input
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
            <C.labelInput>Outras informações</C.labelInput>
            <C.Input
              onChange={(e) => {
                setInfo(e.target.value);
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
