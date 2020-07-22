import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import api from '../../services/api';
import LikePost from '../../components/LikePost';
import { VerifyLogged, Logout } from '../../utils/Auth';

import {
  FeedContainer,
  FormCreatePost,
  PostTitleInput,
  PostTextarea,
  CreatePostButton,
  PostsContainer,
  DivUsername,
  Title,
  Text,
  CardBottom,
  VoteAndComents,
  ButtonLikeDislike,
  LogoutButton,
} from '../feed/style';
import { Header, Image } from '../login/styles';

import Logo from '../../components/img/logo-eddit.png';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const [form, setForm] = useState({
    text: '',
    title: '',
  });

  const token = localStorage.getItem('token');
  VerifyLogged();

  const axiosConfig = {
    headers: {
      Authorization: token,
    },
  };
  const history = useHistory();

  ////////INPUTS VALUES
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  ////////GET POSTS

  const getPosts = () => {
    api
      .get('', axiosConfig)
      .then((response) => {
        setPosts(response.data.posts);
        console.log(response.data.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getPosts();
  }, []);

  /////////POST CREATE

  const createNewPost = async (event) => {
    event.preventDefault();

    const body = {
      text: form.text,
      title: form.title,
    };

    try {
      const response = await api.post('', body, axiosConfig);
      // console.log(response);
      alert('Post criado com sucesso!');
      setForm({
        text: '',
        title: '',
      });

      const data = [...posts, body];
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogout = () => {
    localStorage.clear();
    history.push('/');
  };

  const renderPosts = posts.map((post) => {
    return (
      <PostsContainer key={post.id}>
        <DivUsername>
          <h4>{post.username}</h4>
        </DivUsername>

        <Link to={`/posts/${post.id}`} style={{ textDecoration: 'none' }}>
          <div>
            <Title>{post.title}</Title>
            <Text>{post.text}</Text>
          </div>
        </Link>
        <CardBottom>
          <VoteAndComents>
            <span>{post.votesCount} curtidas</span>
            <span>{post.commentsCount} comentários</span>
          </VoteAndComents>

          <ButtonLikeDislike>
            <LikePost idPost={post.id} />
          </ButtonLikeDislike>
        </CardBottom>
      </PostsContainer>
    );
  });

  return (
    <>
      <Header>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>{' '}
        <Image src={Logo} />
      </Header>
      <FeedContainer>
        <FormCreatePost onSubmit={createNewPost}>
          <Title>Escreva seu post:</Title>

          <PostTitleInput
            name="title"
            value={form.title}
            onChange={handleInputChange}
            type="text"
            required
            placeholder="Título do seu post"
          />

          <PostTextarea
            name="text"
            value={form.text}
            onChange={handleInputChange}
            type="text"
            required
            placeholder="Texto do seu post"
          />

          <CreatePostButton>POSTAR</CreatePostButton>
        </FormCreatePost>
        <div>{renderPosts}</div>
      </FeedContainer>
    </>
  );
};

export default Feed;
