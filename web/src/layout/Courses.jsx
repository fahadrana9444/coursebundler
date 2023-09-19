import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import CourseCard from '../components/CourseCard';

function Courses() {
  const [keyword, setKeyWord] = useState('');
  const category = [
    'Data Structure',
    'Algorithms',
    'Web Development',
    'Mobile App Development',
    'React',
    'Java Script',
    'HTML',
    'CSS',
    'NEXT.js',
  ];
  return (
    <Container maxW={'container.lg'} paddingY={'8'} minH={'95vh'}>
      <Heading children="All Courses" m={8} />
      <Input
        value={keyword}
        onChange={e => {
          setKeyWord(e.target.value);
        }}
        type="text"
        placeholder="search a course..."
        focusBorderColor="yellow.500"
      />
      <HStack
        overflowX={'auto'}
        paddingY={8}
        css={{ '&::-webkit-scrollbar': { display: 'none' } }}
      >
        {category.map((item, index) => (
          <Button key={index} minW={'60'}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>
      <Stack
        direction={['column', 'row']}
        flexWrap="wrap"
        rowGap={5}
        columnGap={5}
        alignItems="center"
        justifyContent={'center'}
      >
        <CourseCard
          src="https://images.pexels.com/photos/7364280/pexels-photo-7364280.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          title=" default title of the course"
          description="default description of the course goes here"
          createdBy="default user name"
          lecturesCount="00"
        />
      </Stack>
    </Container>
  );
}

export default Courses;
