import {
  Box,
  Button,
  Container,
  FormControl,
  HStack,
  Heading,
  Image,
  Input,
  Select,
  Stack,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import AdminSideBar from '../components/AdminSideBar';
import fileUploadCss from '../styles/fileUpload';
function AdminCreateCourse() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const categories = [
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
  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePreview(reader.result);
      setImage(file);
    };
  };
  return (
    <Stack
      width={'full'}
      direction={['column', 'row']}
      py={24}
      px={5}
      minH={'95vh'}
    >
      <Box width={'full'}>
        <Container>
          <Heading
            textTransform={'uppercase'}
            children="Create Course"
            py={16}
            textAlign={['center', 'left']}
          />
          <FormControl>
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
                value={createdBy}
                onChange={e => {
                  setCreatedBy(e.target.value);
                }}
                placeholder="Created By"
                focusBorderColor="purple.300"
              />
              <Select
              value={category}
              onChange={(e)=>{setCategory(e.target.value)}}
              focusBorderColor="purple.300"
              placeholder='Category'

              >
                {
                  categories.map((item,key)=>{return(
                    <option key={key} value={''}>
                  {item}
                </option>
                  )})
                }
              </Select>
              <Input
            required
            type={'file'}
            css={{ '&::file-selector-button': {...fileUploadCss,color:'purple'} }}
            accept="image/**"
            id="choseAvatar"
            onChange={changeImageHandler}
            focusBorderColor="purple.300"
          />
          {imagePreview&&(
          <Image src={imagePreview} boxSize={'64'} objectFit={'contain'}/>  
          )}
          <Button type='submit' w={'full'} colorScheme='purple'>Create</Button>

            </VStack>
          </FormControl>
        </Container>
      </Box>
      <Box>
        <AdminSideBar />
      </Box>
    </Stack>
  );
}

export default AdminCreateCourse;
