import React from 'react';
import {
  Box,
  Button,
  color,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import bg from '../assets/images/bg.png';
import '../styles/home.css';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import intro from '../assets/videos/intro.mp4';
function Home() {
  return (
    <Box>
      <Stack
        height={window.innerHeight}
       py={24}
        alignItems="center"
        margin={5}
      >
         <Image
          className="vector-graphics"
          src={bg}
          boxSize="md"
          objectFit="contain"
          zIndex={-10}
        />
        <VStack
          w={'100%'}
          alignItems={'center'}
          marginX={2}
          gap={2}
        >
          <Heading
            as={'h1'}
            textTransform={'uppercase'}
            children="learn from the experts"
            size={'2xl'}
            textAlign="center"
          />
          <Text
            textTransform={'capitalize'}
            children="find valuable content in reasonable price"
            textAlign="center"
            fontSize={'2xl'}
            fontFamily='cursive'
          />
          <Link to={'/courses'}>
            <Button
              textTransform={'capitalize'}
              colorScheme='yellow'
              color="black"
            >
              explore now
            </Button>
          </Link>
        </VStack>

       
      </Stack>

      <Box bg={'blackAlpha.800'} paddingY={5}>
        <Heading
          textTransform={'uppercase'}
          textAlign="center"
          color={'yellow.400'}
          children="our brands"
          marginBottom={10}
        />
        <HStack
          justifyContent={'space-around'}
          color={'white'}
          fontSize="3rem"
          className="brandBanner"
          marginY={4}
        >
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>

      <HStack
        justifyContent={'center'}
        className="video-container"
        marginY={10}
      >
        <Box width={['100%', '60%']}>
          <video
            controls
            src={intro}
            disablePictureInPicture
            disableRemotePlayback
            controlsList="nodownload nofullscreen noremoteplayback"
          />
        </Box>
      </HStack>
    </Box>
  );
}

export default Home;
