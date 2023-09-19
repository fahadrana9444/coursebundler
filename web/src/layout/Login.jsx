import {
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
import {Link} from 'react-router-dom'
import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Container height={'95vh'}>
      <VStack gap={5} height='full' py={'24'}>
        <Heading size={['lg' , 'xl']} children="Welcome to CourseBundler" />
        <FormControl >
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
            focusBorderColor='yellow.500'
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
            focusBorderColor='yellow.500'
          />
          <Link to='/password/forget'>
           <Button marginY={2} variant={'link'} colorScheme={'yellow'}>Forget Password</Button>
          </Link>
          <Button variant={'solid'} colorScheme='yellow' width={'full'} marginY={5} type='submit'>
            Login
          </Button>
          <Box>
            New User?{' '} <Link to='/register'><Button variant={'link'} colorScheme='yellow'>Sign Up</Button></Link>{' '}Here
          </Box>
        </FormControl>
      </VStack>
    </Container>
  );
}

export default Login;
