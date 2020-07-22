import React, { useReducer } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { initialState, VoteReducers } from './Reducers/VoteReducers';
import VotesCommentContext from './contexts/VotesCommentContext';

function App() {
  const [state, dispatch] = useReducer(VoteReducers, initialState);

  return (
    <VotesCommentContext.Provider
      value={{ Votes: state.votes, dispatch: dispatch }}
    >
      <BrowserRouter>
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </VotesCommentContext.Provider>
  );
}

export default App;
