import {
  Box,
  Button,
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function LinkButton({ to = '/', title ='Home' , onClick }) {
  return (
    <Link to={to} onClick={onClick}>
      <Button
        backgroundColor={'transparent'}
        _hover={{ backgroundColor: 'transparent' }}
      >
        {title}
      </Button>
    </Link>
  );
}

function Header() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const isAuthenticate = true
  const user = {
    role: 'admin',
  };
  return (
    <Box >
      <IconButton
        onClick={onOpen}
        position={'fixed'}
        top={6}
        left={6}
        colorScheme={'yellow'}
        borderRadius={'100%'}
        icon={<RiMenu5Fill />}
        zIndex={10}
      />
      <ColorModeSwitcher />
      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            borderBottomWidth={'1px'}
            display="flex"
            alignItems={'center'}
            justifyContent="space-around"
            onClick={onClose}
          >
            COURSE BUNDLER
            <CloseButton size={'sm'} />
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} alignItems={'flex-start'}>
              <LinkButton onClick={onClose} to={'/'} title={'Home'} />
              <LinkButton onClick={onClose} to={'/courses'} title={'Browse All Courses'} />
              <LinkButton onClick={onClose} to={'/request'} title={'Request A Course'} />
              <LinkButton onClick={onClose} to={'/contact'} title={'Contact Us'} />
              <LinkButton onClick={onClose} to={'/about'} title={'About'} />
            </VStack>
            <HStack
              justifyContent={'space-evenly'}
              position="absolute"
              bottom={'2rem'}
              width="80%"
            >
              {isAuthenticate ? (
                <>
                  <VStack>
                    <HStack>
                      <Link to={'/profile'} onClick={onClose}>
                        <Button colorScheme={'purple'}>Profile</Button>
                      </Link>
                      <Text>OR</Text>
                      <Link to={'/logout'} onClick={onClose}>
                        <Button colorScheme={'purple'}>
                          <RiLogoutBoxLine />
                          Logout
                        </Button>
                      </Link>
                    </HStack>
                    {user && user.role === 'admin' && (
                      <Link to={'admin/dashboard'} onClick={onClose}>
                      <Button colorScheme={'purple'} variant="outline">
                        <RiDashboardFill />
                        Dashboard
                      </Button>
                      </Link>
                    )}
                  </VStack>
                </>
              ) : (
                <>
                  <Link onClick={onClose} to={'/login'}>
                    <Button colorScheme={'yellow'}>Login</Button>
                  </Link>
                  OR
                  <Link onClick={onClose} to={'/register'}>
                    <Button colorScheme={'yellow'}>Signup</Button>
                  </Link>
                </>
              )}
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Header;
