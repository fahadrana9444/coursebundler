import {
  Button,
  Card,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

function CourseCard({
  src = 'https://images.pexels.com/photos/7364280/pexels-photo-7364280.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  title = ' default title of the course',
  description = 'default description of the course goes here',
  createdBy = 'default user name',
  lecturesCount = '00',
}) {
  return (
    <Card cursor={'pointer'} padding={5} gap={2} w="72">
      <Image
        alignSelf={'center'}
        src={src}
        boxSize={'60'}
        objectFit="contain"
      />
      <Heading size={'sm'} noOfLines={1} children={title} />
      <Text fontSize={'sm'} noOfLines={2} children={description} />
      <Text
        color={'yellow.400'}
        textTransform="capitalize"
        children={createdBy}
      />
      <Text children={'Lectures: ' + lecturesCount} />
      <Stack flexDirection={['column', 'row']} alignItems="center">
        <Link to='/course/sample' style={{width:'100%'}}>
        <Button mt={2} colorScheme={'yellow'} variant="solid" w={'100%'} >
          Watch Now
        </Button>
        </Link>
        <Button variant={'ghost'} colorScheme="yellow" w={'100%'}>
          Add to Playlist
        </Button>
      </Stack>
    </Card>
  );
}

export default CourseCard;
