import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import fileUploadCss from '../styles/fileUpload';
import { Link } from 'react-router-dom';
import PlaylistCard from '../components/PlaylistCard';
function Profile() {
  const [imagePrev, setImagePrev] = useState(
    'https://avatars.githubusercontent.com/u/122227948?v=4'
  );
  const [image, setImage] = useState(
    'https://avatars.githubusercontent.com/u/122227948?v=4'
  );
  const [email, setEmail] = useState('ahsan.dev.404@gmail.com');
  const [name, setName] = useState('Muhammad Ahsan');
  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };
  return (
    <Container py={24} minH={'95vh'}>
      <Heading children="Profile" />
      <Stack my={5}>
        <Avatar src={imagePrev} size={'2xl'} alignSelf={'center'} />
        <FormControl>
          <Input
            required
            type={'file'}
            css={{ '&::file-selector-button': fileUploadCss }}
            border="none"
            accept="image/**"
            id="choseAvatar"
            onChange={changeImageHandler}
          />
          <FormLabel children="Name" htmlFor="name" />
          <Input
            required
            id="name"
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
            placeholder="e.g. ahsan"
            type={'text'}
            focusBorderColor="yellow.500"
          />
          <FormLabel children="Email" htmlFor="email" />
          <Input
            required
            id="email"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
            placeholder="e.g. abc@gmail.com"
            type={'email'}
            focusBorderColor="yellow.500"
          />
          <Button
            variant={'solid'}
            colorScheme="yellow"
            width={'full'}
            marginY={5}
            type="submit"
          >
            Update
          </Button>
        </FormControl>
        <Text fontFamily={'cursive'} textAlign={'center'} children="OR" />
        <Link to={'/password/change'}>
          <Button colorScheme="blue" w='full'>Change Password</Button>
        </Link>
      </Stack>
      <Heading children='Playlist'/>
      <Stack direction={'row'} flexWrap={'wrap'} columnGap={3} rowGap={3} justifyContent={'center'} py={5}>
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
      </Stack>
    </Container>
  );
}

export default Profile;
