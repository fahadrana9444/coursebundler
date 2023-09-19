import { Button, Container, FormControl, FormLabel, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function ChangePassword() {
    const [oldPassword , setOldPassword] = useState('')
    const [newPassword , setNewPassword] = useState('')
    const params = useParams()

  return (
    <Container height={'95vh'}>
      <VStack
        gap={5}
        height="full"
        py={'24'}
      >
        <Heading size={['lg', 'xl']} children="Change Password" />
        <FormControl>
        <FormLabel children="Old Password" htmlFor="oldPassword" />
          <Input
            required
            id="oldPassword"
            value={oldPassword}
            onChange={e => {
              setOldPassword(e.target.value);
            }}
            placeholder="e.g.   12345678"
            type={'password'}
            focusBorderColor='yellow.500'
          />
          <FormLabel children="New Password" htmlFor="newPassword" />
          <Input
            required
            id="newPassword"
            value={newPassword}
            onChange={e => {
              setNewPassword(e.target.value);
            }}
            placeholder="e.g.   12345678"
            type={'password'}
            focusBorderColor='yellow.500'
          />
          <Button variant={'solid'} colorScheme='yellow' width={'full'} marginY={5} type='submit'>
            Change Password 
          </Button>
        </FormControl>
      </VStack>
    </Container>
  );
}

export default ChangePassword;




