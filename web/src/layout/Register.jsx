import {
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import fileUploadCss from '../styles/fileUpload';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [imagePrev, setImagePrev] = useState('');
  const [image, setImage] = useState('');
  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };
  return (
    <Container minH={'95vh'}>
      <VStack
        gap={5}
        height="full"
        py={'24'}
      >
        <Heading size={['lg', 'xl']} children="Welcome to CourseBundler" />
        <Box>
          <Avatar src={imagePrev} size={'2xl'} />
        </Box>
        <FormControl>
          <Input
            required
            type={'file'}
            css={{ '&::file-selector-button': fileUploadCss }}
            border="none"
            accept="image/**"
            id="choseAvatar"
            onChange={changeImageHandler}
          />
          <FormLabel children="Name" htmlFor="name" />
          <Input
            required
            id="name"
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
            placeholder="e.g. ahsan"
            type={'text'}
            focusBorderColor="yellow.500"
          />
          <FormLabel children="Email" htmlFor="email" />
          <Input
            required
            id="email"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
            placeholder="e.g. abc@gmail.com"
            type={'email'}
            focusBorderColor="yellow.500"
          />
          <FormLabel children="Password" htmlFor="password" />
          <Input
            required
            id="password"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
            placeholder="12345678"
            type={'password'}
            focusBorderColor="yellow.500"
          />
          <Button
            variant={'solid'}
            colorScheme="yellow"
            width={'full'}
            marginY={5}
            type="submit"
          >
            Sign Up
          </Button>
          <Box>
            Already have an account?{' '}
            <Link to="/login">
              <Button variant={'link'} colorScheme="yellow">
                Login here
              </Button>
            </Link>{' '}
            Here
          </Box>
        </FormControl>
      </VStack>
    </Container>
  );
}

export default Register;
