import { Button, Container, FormControl, FormLabel, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function ResetPassword() {
    const [password , setPassword] = useState('')
    const params = useParams()

  return (
    <Container height={'95vh'}>
      <VStack
        gap={5}
        height="full"
        py={'24'}
      >
        <Heading size={['lg', 'xl']} children="Reset Password" />
        <FormControl>
        <FormLabel children="Password" htmlFor="password" />
          <Input
            required
            id="password"
            value={password}
            onChange={e => {
                setPassword(e.target.value);
            }}
            placeholder="e.g.   12345678"
            type={'password'}
            focusBorderColor='yellow.500'
          />
          <Button variant={'solid'} colorScheme='yellow' width={'full'} marginY={5} type='submit'>
            Rest Password 
          </Button>
        </FormControl>
      </VStack>
    </Container>
  );
}

export default ResetPassword;
