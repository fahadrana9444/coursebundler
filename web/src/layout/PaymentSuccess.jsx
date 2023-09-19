import React from 'react'
import { Box, Button, Container, Heading, Stack, Text } from '@chakra-ui/react'
import {RiCheckboxCircleFill} from 'react-icons/ri'
import { Link } from 'react-router-dom'
function PaymentSuccess() {
  return (
    <Container py={24} h={'95vh'}>
        <Heading textAlign={'center'} children='You have pro pack' pu={8}/>
        <Stack shadow={'xl'} my={10} borderRadius={'8px'}>
            <Box p={4} bg={'yellow.400'} css={{borderRadius:'8px 8px 0 0'}}>
                <Heading size={'md'} children ='Payment Success' />
            </Box>
            <Stack alignItems={'center'} p={10} textAlign={'center'} gap={5}>
                <Text children='Congratulation you are a pro member. You have access to premium content' />
                <Heading size={'4xl'} >
                <RiCheckboxCircleFill />
                </Heading>
                <Link to='/profile'>
                <Button variant={'link'} colorScheme='yellow'>
                    Go to profile
                </Button>
                </Link>

                <Text fontFamily={'cursive'} fontWeight={'bold'} children={'Reference No: asajcasgolasckShcikajsjhsvc'} />

            </Stack>
        </Stack>
    </Container>
  )
}

export default PaymentSuccess