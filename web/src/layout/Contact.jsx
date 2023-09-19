import React, { useState } from 'react'
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Text, Textarea, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
function Contact() {
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [message , setMessage] = useState('')
  return (
    <Container minH={'95vh'}>
        <VStack gap={5} py={24}>
            <Heading size={['lg' , 'xl']} children='Contact Us' />
            <FormControl>
                <FormLabel children='Name' htmlFor='name' />
                <Input
                 id='name'
                 focusBorderColor='yellow.500'
                 type='text'
                 placeholder='e.g. ahsan'
                 value={name}
                 onChange={(e)=>{setName(e.target.value)}}
                />
                <FormLabel children='Email' htmlFor='email' />
                <Input
                id='email'
                focusBorderColor='yellow.500'
                type='email'
                placeholder='e.g. abc@gmail.com'
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                /> 
                <FormLabel children='Message' htmlFor='message' />
                <Textarea
                 id='message'
                 placeholder='message'
                 focusBorderColor='yellow.500'
                 value={message}
                 onChange={(e)=>{setMessage(e.target.value)}}
                />
                <Button width={'full'} my={5} colorScheme='yellow'>
                    Send Mail
                </Button>
                <Box>
                Request for a course?{' '}
                <Link to={'/request'}>
                <Button variant={'link'} colorScheme='yellow'>
                    Click
                </Button>
                </Link>
                {' '}Here
            </Box>
            </FormControl>
           
        </VStack>
    </Container>
  )
}

export default Contact