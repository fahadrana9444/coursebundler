import React from 'react';
import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import intro from '../assets/videos/intro.mp4';
import CoursePageCard from '../components/CoursePageCard';
function CoursePage() {
  return (
    <Stack py={20} direction={['column', 'row']} px={5} gap={4}>
      <Stack gap={2} flex={{ base: 1, lg: 3 }}>
        <video
          controls
          src={intro}
          controlsList="nodownload  noremoteplayback"
        />
        <Heading size={'lg'} children="title of the vedio " />
        <Text children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt, enim cursus ultrices vestibulum, purus nisl faucibus risus, eget ullamcorper mi risus quis nunc. Nullam euismod rhoncus ex ac maximus. Suspendisse convallis arcu quis mi ornare viverra. In at egestas lorem. Sed vel felis ligula. Aenean mi arcu, scelerisque sit amet maximus vel, accumsan et nunc. Pellentesque ut sapien urna. Ut vitae mauris lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum consectetur lacus consectetur ante gravida, nec aliquet tellus consectetur. Nullam eget ullamcorper dui. Nulla eu massa dui." />
      </Stack>
      <Stack
        gap={2}
        flex={1}
        overflowY={'scroll'}
        maxH={'70vh'}
        css={{
          '&::-webkit-scrollbar': { width: '.5em' },
          '&::-webkit-scrollbar-thumb': {
            borderRadius: '10px',
            backgroundColor: 'gray',
          },
        }}
        alignItems={'center'}
      >
        <CoursePageCard />
        <CoursePageCard />
        <CoursePageCard />
        <CoursePageCard />
        <CoursePageCard />
        <CoursePageCard />
        <CoursePageCard />
        <CoursePageCard />
        <CoursePageCard />
        <CoursePageCard />
        <CoursePageCard />
        <CoursePageCard />
        <CoursePageCard />
        <CoursePageCard />
        <CoursePageCard />
        <CoursePageCard />
        <CoursePageCard />
        <CoursePageCard />
        <CoursePageCard />
        <CoursePageCard />
        <CoursePageCard />
        <CoursePageCard />
      </Stack>
    </Stack>
  );
}

export default CoursePage;
