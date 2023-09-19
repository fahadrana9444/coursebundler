import { Box, Button, Card, HStack, IconButton, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import {MdDelete} from 'react-icons/md'
import { Link } from 'react-router-dom'

function PlaylistCard({
    src = 'https://images.pexels.com/photos/7364280/pexels-photo-7364280.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  title = ' default title of the course',
}) {
  return (
    <Card maxW={'44'} p={2} gap={2}>
        <Image
        alignSelf={'center'}
       src={src}
       boxSize={'28'}
       objectFit="contain"
       borderRadius={10}
        />
        <Text textAlign={'center'} children={title}  />
        <HStack>
            <Link to={'/course/id'}>
            <Button colorScheme='yellow'>
                Watch Now
            </Button>
            </Link>
            <IconButton icon={<MdDelete fontSize={'25px'} />} />
        </HStack>
    </Card>
  )
}

export default PlaylistCard