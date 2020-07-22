export const initialState = {
  likeComments: {},
  userVotesCount: {},
};
export const VoteReducers = (state, action) => {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case 'LIKE_COMMENTS':
      return {
        ...state,
        likeComments: action.payload.votesCount,
        userVotesCount: action.payload.userVote,
      };
    case 'DISLIKE_COMMENTS':
      return {
        ...state,
        likeComments: action.payload.votesCount,
        userVotesCount: action.payload.userVote,
      };
  }
  return state;
};
