/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ArrowBack, Contactless } from '@material-ui/icons';
import {
  Box,
  FormControl,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
} from '@mui/material';

import useProfile, { MyUser } from '../../../hooks/useProfile';
import * as C from './styles';

function EditUser() {
  const [user, setUser] = useState<MyUser>();

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [disciplinaOUcargo, setCargo] = useState(user?.disciplinaOUcargo);
  const [tags, setTag] = useState(user?.tags);
  const [role, setRole] = useState(user?.role);
  const [matricula, setMatricula] = useState(user?.matricula);
  const [password, setSenha] = useState('');
  const [confPassword, setSenhaConf] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { id } = useParams();

  const { getSingleUser, updateUser } = useProfile();

  const loadUser = useCallback(async () => {
    const getUser = await getSingleUser(id);
    setUser(getUser);
  }, [id, getSingleUser]);

  useEffect(() => {
    loadUser();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRole((event.target as HTMLInputElement).value);
  };

  const handleUpdateUser = async () => {
    if (password !== confPassword) {
      setError('As senhas não coincidem');
      return;
    }
    if (password.length < 4) {
      setError('A senha tem que ter 4 ou mais caracteres');
      return;
    }
    try {
      await updateUser({
        id: user?.uuid,
        name: name ?? user?.name,
        tags: tags ?? user?.tags,
        matricula: matricula ?? user?.matricula,
        disciplinaOUcargo: disciplinaOUcargo ?? user?.disciplinaOUcargo,
        email: email ?? user?.email,
        password,
        confPassword,
        role: role ?? user?.role,
      });
      navigate(`/singleuser/${id}`);
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
      <title>SLOCKED - Editar Usuário</title>
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
                navigate(`/singleuser/${id}`);
              }}
            >
              <ArrowBack style={{ color: 'white', fontSize: '44px' }} />
            </IconButton>
          </Box>
          <C.Title2>Editar Usuário</C.Title2>
          <Box display="flex" flexDirection="column" gap={2}>
            <C.labelInput>Nome</C.labelInput>
            <C.Input
              onChange={(e) => {
                setName(e.target.value);
              }}
              defaultValue={user?.name}
            />

            <C.labelInput>Email</C.labelInput>
            <C.Input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              defaultValue={user?.email}
            />

            <C.labelInput>Cargo</C.labelInput>
            <C.Input
              onChange={(e) => {
                setCargo(e.target.value);
              }}
              defaultValue={user?.disciplinaOUcargo}
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
                  defaultValue={user?.tags}
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
              defaultValue={user?.matricula}
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
              <C.Button itemID="cadastrar" onClick={handleUpdateUser}>
                Confirmar
              </C.Button>
            </Box>
          </Box>
        </C.BoxCadastro>
      </Grid>
    </Grid>
  );
}

export default EditUser;
