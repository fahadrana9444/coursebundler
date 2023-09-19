import { Button, Container, FormControl, FormLabel, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

function ForgetPassword() {
    const [email , setEmail] = useState('')
  return (
    <Container height={'95vh'}>
      <VStack
        gap={5}
        height="full"
        py={'24'}
      >
        <Heading size={['lg', 'xl']} children="Forget Password" />
        <FormControl>
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
          <Button variant={'solid'} colorScheme='yellow' width={'full'} marginY={5} type='submit'>
            Send Rest Password Link
          </Button>
        </FormControl>
      </VStack>
    </Container>
  );
}

export default ForgetPassword;
