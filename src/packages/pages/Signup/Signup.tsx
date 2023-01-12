import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { ArrowBack, Contactless } from '@material-ui/icons';
import {
  Box,
  FormControl,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
} from '@mui/material';

import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../../hooks/useAuth';
import * as C from './styles';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [disciplinaOUcargo, setCargo] = useState('');
  const [tags, setTag] = useState('');
  const [role, setRole] = useState('user');
  const [matricula, setMatricula] = useState('');
  const [password, setSenha] = useState('');
  const [confPassword, setSenhaConf] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole((event.target as HTMLInputElement).value);
  };

  const handleSignup = async () => {
    if (!name || !email || !password || !tags || !disciplinaOUcargo) {
      setError('Preencha todos os campos');
      return;
    }
    if (password !== confPassword) {
      setError('As senhas não coincidem');
      return;
    }
    if (password.length < 4) {
      setError('A senha tem que ter 4 ou mais caracteres');
      return;
    }
    try {
      await signup({
        name,
        tags,
        matricula,
        disciplinaOUcargo,
        email,
        password,
        confPassword,
        role,
      });
      toast.success('Usuário cadastrado com sucesso!', {
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
      <title>SLOCKED - Cadastro</title>
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
                navigate('/usuarios');
              }}
            >
              <ArrowBack style={{ color: 'white', fontSize: '44px' }} />
            </IconButton>
          </Box>
          <C.Title2>Cadastrar Usuário</C.Title2>
          <Box display="flex" flexDirection="column" gap={2}>
            <C.labelInput>Nome</C.labelInput>
            <C.Input
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <C.labelInput>Email</C.labelInput>
            <C.Input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <C.labelInput>Cargo</C.labelInput>
            <C.Input
              onChange={(e) => {
                setCargo(e.target.value);
              }}
            />

            <C.labelInput>ID TAG RFID</C.labelInput>
            <Box
              display="flex"
              width="100%"
              justifyContent="start"
              alignItems="start"
            >
              <Box width="70%">
                <C.Input
                  onChange={(e) => {
                    setTag(e.target.value);
                  }}
                />
              </Box>
              <Box
                display="flex"
                width="20%"
                justifyContent="center"
                alignItems="center"
              >
                <C.Button itemID="cadastrarTag">
                  <Contactless />
                </C.Button>
              </Box>
            </Box>
            <C.labelInput>Matricula (Opcional)</C.labelInput>
            <C.Input
              onChange={(e) => {
                setMatricula(e.target.value);
              }}
            />
            <C.labelInput>Senha</C.labelInput>
            <C.Input
              type="password"
              onChange={(e) => {
                setSenha(e.target.value);
              }}
            />
            <C.labelInput>Confirme sua senha</C.labelInput>
            <C.Input
              type="password"
              onChange={(e) => {
                setSenhaConf(e.target.value);
              }}
            />
            <FormControl component="fieldset" fullWidth>
              <Box textAlign="left" mt="4px">
                <C.labelInput>Nivel de acesso:</C.labelInput>
              </Box>
              <RadioGroup
                aria-label="role"
                name="role"
                value={role}
                onChange={handleChange}
              >
                <Box
                  width="100%"
                  display="flex"
                  justifyContent="space-around"
                  alignItems="center"
                  mt="12px"
                >
                  <Box display="flex" alignItems="center">
                    <Radio value="admin" />
                    <C.labelInput>Administrador</C.labelInput>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Radio value="user" />
                    <C.labelInput>Usuário</C.labelInput>
                  </Box>
                </Box>
              </RadioGroup>
            </FormControl>
            <C.labelError>{error}</C.labelError>
            <Box textAlign="end" width="100%" mt="4px">
              <C.Button itemID="cadastrar" onClick={handleSignup}>
                Confirmar
              </C.Button>
            </Box>
          </Box>
        </C.BoxCadastro>
      </Grid>
    </Grid>
  );
}

export default Signup;
