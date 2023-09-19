import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import intro from '../assets/videos/intro.mp4';
import terms from '../assets/docs/termsAndCondition';
import { RiSecurePaymentFill } from 'react-icons/ri';
function About() {
  return (
    <Container maxW={'container.lg'} py={24} boxShadow={'lg'} minH={'95vh'}>
      <Heading children="About Us" />
      <Stack my={5} direction={['column', 'row']} gap={5}>
        <VStack>
          <Avatar
            boxSize={['40', '48']}
            src="https://avatars.githubusercontent.com/u/122227948?v=4"
          />
          <Text children="Co-Founder" color={'gray'} />
        </VStack>
        <VStack>
          <Heading children="Muhammad Ahsan" size={['md', 'lg']} />
          <Text
            textAlign={['center', 'left']}
            children="Hi , I am a Full Stack developer and a teacher. Our mission is to provide quality content at reasonable price. "
          />
        </VStack>
      </Stack>
      <Stack direction={['column', 'row']} alignItems={'center'}>
        <Text
          fontFamily={'cursive'}
          m="8"
          textAlign={['center', 'left']}
          children="We are a video streaming platform with some premium course available only for premium users"
        />
        <Link to={'/subscribe'}>
          <Button variant={'link'} colorScheme="yellow">
            Check out our plan
          </Button>
        </Link>
      </Stack>

      <Stack my={5}>
        <video
          controls
          muted
          loop
          src={intro}
          disablePictureInPicture
          disableRemotePlayback
          controlsList="nodownload nofullscreen noremoteplayback"
        />
      </Stack>

      <Stack textAlign={['center', 'left']}>
        <Heading size={'md'} children="Terms and Conditions" />
        <Box h={'sm'} overflowY={'scroll'}>
          <Text children={terms} />
          <Heading
            my={5}
            size={'sm'}
            children="Refund only available for cancellation within 7 days!"
          />
        </Box>
      </Stack>

      <HStack fontSize={20} mt={10}>
        <RiSecurePaymentFill />
        <Text fontFamily={'cursive'} children="payment secure by razerpay" />
      </HStack>
    </Container>
  );
}

export default About;
