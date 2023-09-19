import {
  Box,
  Button,
  HStack,
  Heading,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';
import AdminSideBar from '../components/AdminSideBar';
import { RiDeleteBin7Fill } from 'react-icons/ri';

function Row({item}) {
  return (
    <Tr>
      <Td>{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      <Td>
        {item.subscription === 'active' ? 'Active' : 'Not Active'}
      </Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button color={'purple.500'} variant={'outline'}>
            Change Role
          </Button>
          <Button color={'purple.600'}>
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}

function AdminUser() {
  const users = [{
    _id:'asdkhsdfsdhv',
    name:'ahsan',
    role:'admin',
    subscription:'active',
    email:'adasfbb@gmail.com'
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
        px={['0', '16']}
        overflowX={'auto'}
        textAlign={['center', 'left']}
      >
        <Heading children='All Users' py={5} textAlign={['center' ,'left' ]}/>
        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size={'lg'}>
            <TableCaption>All User Available in database</TableCaption>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>Subscription</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody >
            {
                users.map((item)=>{return(<Row key={item._id} item={item}/>)})
              }
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Box>
        <AdminSideBar />
      </Box>
    </Stack>
  );
}

export default AdminUser;
