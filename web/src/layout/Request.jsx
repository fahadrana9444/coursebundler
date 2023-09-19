import React, { useState } from 'react'
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
function Request() {
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [course , setCourse] = useState('')
  return (
    <Container h='95vh'>
        <VStack py={24} gap={5}>
            <Heading size={['lg' , 'xl']} children='Request A New Course' />
            <FormControl>
                <FormLabel children='Name' htmlFor='name' />
                <Input
                id='name'
                placeholder='e.g. ahsan'
                focusBorderColor='yellow.500'
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
                type='text'
                />
                <FormLabel children='Email' htmlFor='email' />
                <Input
                id='email'
                placeholder='e.g. abc@gmail.com'
                focusBorderColor='yellow.500'
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                type='email'
                />
                <FormLabel children='Course Details' htmlFor='course' />
                <Textarea
                 id='course'
                 placeholder='course'
                 focusBorderColor='yellow.500'
                 value={course}
                 onChange={(e)=>{setCourse(e.target.value)}}
                />
                <Button colorScheme='yellow' width={'full'} my={5}>
                    Send Course Request
                </Button>
                <Box>
                See available course!{' '}
                <Link to={'/courses'}>
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

export default Request