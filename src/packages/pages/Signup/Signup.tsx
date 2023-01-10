import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ArrowBack, Contactless } from '@material-ui/icons';
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
} from '@mui/material';

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

      // eslint-disable-next-line no-alert
      alert('Usuário cadatrado com sucesso!');

      navigate('/home');
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
            <C.labelInput>Matricula (Não obrigatório)</C.labelInput>
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
                <FormLabel component="legend">Nivel de acesso:</FormLabel>
              </Box>
              <RadioGroup
                aria-label="role"
                name="role"
                value={role}
                onChange={handleChange}
              >
                <Box>
                  <FormControlLabel
                    value="admin"
                    control={<Radio />}
                    label="Administrador"
                  />
                  <FormControlLabel
                    value="user"
                    control={<Radio />}
                    label="Usuário"
                  />
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
