import {
  Box,
  Card,
  HStack,
  Heading,
  Progress,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import AdminSideBar from '../components/AdminSideBar';
import { RiArrowUpFill, RiArrowDownFill } from 'react-icons/ri';
import { DoughnutChart, LineChart } from '../components/Chart';

function DataBox({
  title = 'title',
  qty = '00',
  percentage = '00',
  profit = false,
}) {
  return (
    <Card p={5} w={['full', '20%']} color="gray.500">
      <Text textTransform={'capitalize'} children={title} />
      <HStack>
        <Heading children={qty} size={'lg'} mr={5} color="black" />
        <Text color={profit ? 'green' : 'red'} children={`${percentage}%`} />
        {profit ? (
          <RiArrowUpFill color="green" />
        ) : (
          <RiArrowDownFill color="red" />
        )}
      </HStack>
      <Text children="since last month" />
    </Card>
  );
}

function ProgressBar({ value = 80, title = 'title', profit = false }) {
  return (
    <Stack p={5} gap={2}>
      <Heading size={'sm'} textTransform={'capitalize'} children={title} />
      <HStack>
        <Text
          children={profit ? `${value}%` : `-${value}%`}
          color={profit ? 'green' : 'red'}
        />
        <Progress
          value={profit ? value : 0}
          colorScheme="purple"
          size={'sm'}
          w={'full'}
        />
        <Text children={`100%`} />
      </HStack>
    </Stack>
  );
}

function AdminDashboard() {
  return (
    <Stack
      width={'full'}
      direction={['column', 'row']}
      py={24}
      px={5}
      minH={'95vh'}
    >
      <Box width={'full'}>
        <Text
          fontSize={'sm'}
          fontFamily={'cursive'}
          children={`last update on ${String(new Date()).split('G')[0]}`}
          textAlign={'center'}
          color={'gray.500'}
        />
        <Heading children="Dashboard" my={5} />
        <Stack
          direction={['column', 'row']}
          my={5}
          justifyContent={'space-evenly'}
          alignItems={'center'}
          flexWrap={'wrap'}
          gap={5}
        >
          <DataBox title="views" qty="123" percentage="30" profit />
          <DataBox title="user" qty="23" percentage="78" profit />
          <DataBox title="subscription" qty="12" percentage="20" />
        </Stack>
        <Card py={8} px={5}>
          <Heading children="View Graph" textAlign={'center'} />
          <LineChart />
        </Card>
        <Card direction={['column', 'row']} gap={5} my={5} py={5}>
          <Box flex={1}>
            <Heading
              children="Progress Bar"
              size={'lg'}
              p={5}
              textAlign={'center'}
            />
            <ProgressBar value="30" title="views" profit />
            <ProgressBar value="78" title="user" profit />
            <ProgressBar value="20" title="subscription" />
          </Box>
          <Stack flex={1} alignItems={'center'}>
            <Heading children="Users" size={'lg'} p={5} textAlign={'center'} />
           <Box>
           <DoughnutChart />
           </Box>
          </Stack>
        </Card>
      </Box>
      <Box>
        <AdminSideBar />
      </Box>
    </Stack>
  );
}

export default AdminDashboard;
