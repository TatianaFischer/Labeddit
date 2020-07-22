import styled from 'styled-components';

///////////feed page
export const FeedContainer = styled.div`
  display: flex;
  background: #fffff2;
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;
export const FormCreatePost = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-around;
  margin: 50px;
  margin-top: 125px;

  width: 450px;
  height: 500px;
  background: #f1ecec;
  position: fixed;
  border-radius: 5px;

  box-shadow: 5px 5px 5px rgba(50, 50, 50, 0.5);
`;

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 450px;

  margin-top: 125px;

  background: #f1ecec;
  margin-left: 650px;
  border-radius: 5px;
  text-align: center;
  flex-wrap: wrap;

  :hover {
    box-shadow: 10px 5px 5px rgba(50, 50, 50, 0.5);
    transform: scale(1.1);
  }
`;
export const PostTitleInput = styled.input`
  border-radius: 5px;
  border: none;
  :hover {
    border: 1px solid rgba(50, 50, 50, 0.5);
  }
  height: 45px;
  width: 250px;
  font-size: 15px;
  text-align: center;
`;

export const PostTextarea = styled.textarea`
  border-radius: 5px;
  border: none;
  :hover {
    border: 1px solid rgba(50, 50, 50, 0.5);
  }
  height: 200px;
  width: 350px;
  font-size: 15px;
  font-size: 10px;
`;
export const CreatePostButton = styled.button`
  font-size: 20px;
  padding: 10px 15px;
  background: #3a0d45;
  color: #f1ecec;
  border: none;
  border-radius: 5px;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const DivUsername = styled.div`
  color: #f1ecec;
  background: #3a0d45;
  margin-top: 0;
  width: 450px;
  height: 50px;
  border-radius: 5px;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;

export const Title = styled.h4`
  font-size: 20px;
  color: rgb(35, 31, 36);
`;

export const Text = styled.p`
  font-size: 20x;
  color: rgb(35, 31, 36);
  height: auto;
  margin: auto;
  padding-bottom: 50px;
`;

export const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 450px;
`;
export const VoteAndComents = styled.div`
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  margin-left: 5px;
  padding-top: 15px;
  width: 200px;
`;

export const ButtonLikeDislike = styled.div`
  font-size: 15px;
  padding-top: 15px;
  margin-right: 5px;
  width: 125px;
`;
export const LogoutButton = styled.button`
  margin-left: -600px;
  margin-right: 400px;
  margin-top: 25px;
  margin-bottom: 25px;
  font-size: 15px;
  padding: 5px 3px;
  background: #f1ecee;
  color: #3a0d45;
  border: none;
  border-radius: 5px;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
