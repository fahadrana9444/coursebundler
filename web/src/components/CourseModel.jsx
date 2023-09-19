import {
  Box,
  Button,
  Card,
  FormControl,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import fileUploadCss from '../styles/fileUpload';
function Lecture() {
  return (
    <Card p={5} direction={['column','row']} justifyContent={'space-between'} m={5} gap={2} alignItems={'center'} >
      <Box>
        <Heading size={'md'} children="#1 React Intro" />
        <Text children="this is the intro of the react" my={3}/>
      </Box>
      <Button  color='purple.500' w={['full','-webkit-fit-content']}>
        <RiDeleteBin7Fill />
      </Button>
    </Card>
  );
}

function CourseModel({ isOpen, onOpen, onClose }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePreview(reader.result);
      setImage(file);
    };
  };
  const onCloseHandel = ()=>{
    setTitle('')
    setImage('')
    setImagePreview('')
    setDescription('')
    onClose()
}
  return (
    <Modal isOpen={isOpen} size={'full'}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>React Course</ModalHeader>
        <ModalCloseButton onClick={onCloseHandel} />
        <ModalBody p="16">
          <Heading children="React Course" />
          <Text children="#zkjzxhcbdiuxcgbh" fontSize={'sm'} color={'gray'} />
          <Heading children="Lectures" />
          <Stack direction={['column', 'row']}>
            <Box w="full">
              <Lecture />
              
            </Box>
            <Box>
              <Heading textAlign={'center'} children="Create Lecture" />
              <FormControl py={5}>
                <VStack m="auto" spacing={8}>
                  <Input
                    value={title}
                    onChange={e => {
                      setTitle(e.target.value);
                    }}
                    placeholder="Title"
                    focusBorderColor="purple.300"
                  />
                  <Input
                    value={description}
                    onChange={e => {
                      setDescription(e.target.value);
                    }}
                    placeholder="Description"
                    focusBorderColor="purple.300"
                  />

                  <Input
                    required
                    type={'file'}
                    css={{
                      '&::file-selector-button': {
                        ...fileUploadCss,
                        color: 'purple',
                      },
                    }}
                    accept="image/**"
                    id="choseAvatar"
                    onChange={changeImageHandler}
                    focusBorderColor="purple.300"
                  />
                  {imagePreview && (
                    <Image
                      src={imagePreview}
                      boxSize={'64'}
                      objectFit={'contain'}
                    />
                  )}
                  <Button type="submit" w={'full'} colorScheme="purple">
                    Create
                  </Button>
                </VStack>
              </FormControl>
            </Box>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default CourseModel;
