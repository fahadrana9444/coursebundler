import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import AdminSideBar from '../components/AdminSideBar';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import CourseModel from '../components/CourseModel';

function Row({ item ,courseDetailHandler }) {

  return (
    <Tr>
      <Td>{item._id}</Td>
      <Td>
        <Image
        boxSize={'20'}
        objectFit={'contain'}
        src={item.poster}
        />

      </Td>
      <Td>{item.title}</Td>
      <Td>{item.category}</Td>
      <Td>{item.creator}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.lectures}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
        <Button color={'purple.500'} variant={'outline'} onClick={courseDetailHandler}>
            View Lecture
          </Button>
          <Button color={'purple.600'}>
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}

function AdminCourse() {
  const {isOpen , onClose , onOpen} = useDisclosure()
  const courseDetailHandler = ()=>{
    onOpen()
  } 
  const courses = [{
    _id:'asdkhsdfsdhvsk',
    poster:'https://images.pexels.com/photos/7364280/pexels-photo-7364280.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    title:'React Course',
    category:'web Development',
    creator:'ahsan',
    views:12,
    lectures:79,
  }];
  return (
    <Stack
      width={'full'}
      direction={['column', 'row']}
      py={24}
      px={5}
      minH={'95vh'}
    >
      <Box
        width={'full'}
        px={[0, 16]}
        overflowX={'auto'}
        textAlign={['left', 'center']}
      >
        <Heading children='All courses' py={5} textAlign={['center' ,'left' ]}/>
        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size={'lg'}>
            <TableCaption>All Courses are here</TableCaption>
            <Thead>
              <Tr>
                <Th>id</Th>
                <Th>poster</Th>
                <Th>title</Th>
                <Th>category</Th>
                <Th>creator</Th>
                <Th isNumeric>views</Th>
                <Th isNumeric>Lecture</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                courses.map((item)=>(<Row item={item} courseDetailHandler={courseDetailHandler} />))
              }
            </Tbody>
          </Table>
        </TableContainer>
        <CourseModel isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      </Box>
      <Box>
        <AdminSideBar />
      </Box>
    </Stack>
  );
}

export default AdminCourse;
