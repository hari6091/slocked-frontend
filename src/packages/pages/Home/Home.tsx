import React from 'react';
import { useNavigate } from 'react-router-dom';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Box, Grid } from '@mui/material';

import { Header } from '../../../components';
import { useAuth } from '../../../hooks/useAuth';
import useProfile from '../../../hooks/useProfile';
import * as C from './styles';

export function dataCadastro(param: string | undefined) {
  const data = new Date(param ?? '');
  const dia = data.getDate().toString();
  const diaF = dia.length === 1 ? `0${dia}` : dia;
  const mes = (data.getMonth() + 1).toString();
  const mesF = mes.length === 1 ? `0${mes}` : mes;
  const anoF = data.getFullYear();
  return `${diaF}/${mesF}/${anoF}`;
}

function Home() {
  const { logout } = useAuth();
  const { profile, salas } = useProfile();
  const navigate = useNavigate();

  return (
    <>
      <title>SLOCKED - HOME</title>

      <Header />
      <Grid container justifyContent="space-between" mt="56px" p="40px">
        <Grid
          container
          item
          md={12}
          lg={5}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <C.CustomBox2 maxWidth="550px">
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-evenly"
              width="100%"
              alignItems="center"
            >
              <C.Title>Meus Acessos:</C.Title>
              <Box
                display="flex"
                flexDirection="column"
                width="100%"
                alignItems="center"
                gap={2}
              >
                <Box display="flex" justifyContent="space-between" width="95%">
                  <C.Subtitle>Sala</C.Subtitle>
                  <C.Subtitle>ID</C.Subtitle>
                </Box>

                {salas?.map((sala) => {
                  return (
                    <C.Card>
                      <C.CardContent>
                        {sala?.name ?? 'Carregando...'}
                      </C.CardContent>
                      <C.CardContent>
                        {sala?.numero ?? 'Carregando...'}
                      </C.CardContent>
                    </C.Card>
                  );
                })}
              </Box>
            </Box>
          </C.CustomBox2>
        </Grid>
        <Grid justifyContent="center" alignItems="center" textAlign="center">
          <Grid item md={12} lg={7}>
            <C.CustomBox border="1px solid #000">
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-evenly"
                alignItems="center"
                width="100%"
              >
                <Box textAlign="left" width="50%">
                  <C.Title>Meu Usuário</C.Title>

                  <C.Subtitle>Nome:</C.Subtitle>
                  <C.Content>{profile?.name}</C.Content>

                  <C.Subtitle>Cargo - Nível de acesso:</C.Subtitle>
                  <C.Content>
                    {profile?.disciplinaOUcargo} - {}
                    {profile?.role === 'admin'
                      ? 'Administrador'
                      : 'Usuário comum'}
                  </C.Content>

                  <C.Subtitle>Ingresso no sistema:</C.Subtitle>
                  <C.Content>{dataCadastro(profile?.createdAt)}</C.Content>
                </Box>
                <Box>
                  <AccountCircleIcon
                    style={{
                      width: '360px',
                      height: '360px',
                      color: '#d9d9d9',
                    }}
                  />
                </Box>
              </Box>
              <Box width="75%" textAlign="end">
                <C.Button
                  onClick={() => {
                    logout();
                    navigate('/');
                  }}
                >
                  Sair
                </C.Button>
              </Box>
            </C.CustomBox>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
