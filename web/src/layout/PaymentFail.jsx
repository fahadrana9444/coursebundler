import React from 'react'
import { Button, Container, Heading, Stack } from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import {RiErrorWarningFill} from 'react-icons/ri'
function PaymentFail() {
  return (
    <Container py={24} h={'95vh'} >
        <Stack h={'full'} justifyContent={'center'} alignItems={'center'} gap={5}>
            <Heading children='Payment Fail'  textAlign={'center'}/>
            <Heading size={'2xl'} >
            <RiErrorWarningFill />
            </Heading>
            <Link to='/subscribe'>
            <Button colorScheme='yellow'>
                Try Again
            </Button>
            </Link>
        </Stack>

    </Container>
  )
}

export default PaymentFail