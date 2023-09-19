import React from 'react'
import { Box, Button, Container, Heading, Stack, Text } from '@chakra-ui/react'
function Subscribe() {
  return (
    <Container py={24} h={'95vh'}>
        <Heading textAlign={'center'} children='Welcome' />
        <Stack my={5} shadow={'lg'}>
            <Box bg={'yellow.400'} p={5} css={{borderRadius:'8px 8px 0 0'}}>
                <Text children='Pro Pack - Rs: 299.00' />
            </Box>
            <Box p={10} >
                <Text mt={10} textAlign={'center'} fontFamily={'cursive'} children='Join pro pack and get access to all content' />
                <Heading mt={10} textAlign={'center'} size={'lg'} children='Rs: 299 only' />
                <Button mt={10} colorScheme='yellow' w={'full'}>
                    Buy Now
                </Button>
            </Box>
            <Box bg={'blackAlpha.600'} p={'4'} color={'white'} css={{borderRadius:'0 0 8px 8px'}}>
                <Heading size={'sm'} children='* 100% Refund At Cancelation' />
                <Text children='terms and condition apply' fontSize={'xs'} />

            </Box>
        </Stack>

    </Container>
  )
}

export default Subscribe