import { Box, Card, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

function CoursePageCard({
 src = 'https://images.pexels.com/photos/7364280/pexels-photo-7364280.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  title = ' default title of the course',
  createdBy = 'default user name',
}) {
  return (
    <Card p={4} w={'64'} direction={'row'} gap={2} cursor={'pointer'} >
         <Image
        src={src}
        boxSize={'20'}
        objectFit="contain"
        borderRadius={10}
      />
      <Box>
        <Heading children='title of the video and much more and blah balh' noOfLines={2} size={'sm'} />
        <Text children={'M.Ahsan'} fontFamily={'cursive'} fontSize={'sm'} mt={2} />
      </Box>
    </Card>
  )
}

export default CoursePageCard