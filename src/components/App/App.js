import React from 'react';
import styled from 'styled-components';
import 'focus-visible';
import { format } from 'date-fns';

import avatar from '../../assets/carmen-sandiego.png';

import Tweet from '../Tweet';


const initialState = {
  "numOfLikes": 100,
  "numOfRetweets": 100,
  "isLiked": false,
  "isRetweeted": false
}

function reducer(state, action) {
  switch (action.type) {
    case 'like': {
      return {
        ...state,
        isLiked: state.isLiked ? false : true,
        numOfLikes: state.isLiked ? (state.numOfLikes - 1) : (state.numOfLikes + 1),
      }
    }
    case "retweet": {
      return {
        ...state,
        isRetweeted: state.isRetweeted ? false : true,
        numOfRetweets: state.isRetweeted ? state.numOfRetweets - 1 : state.numOfRetweets + 1

      }
    }
    default:
      throw new Error("Unrecognized action")
  }
}

const App = () => {

  const [state, dispatch] = React.useReducer(reducer, initialState);


  const handleToggleRetweet = () => {
    dispatch({ type: "retweet" })
  }


  const handleToggleLike = () => {
    dispatch({ type: "like" })
  }

  return (
    <Wrapper>
      <Tweet
        tweetContents="Where in the world am I?"
        displayName="Carmen Sandiego ✨"
        username="carmen-sandiego"
        avatarSrc={avatar}
        timestamp={format(new Date(), "p") + " • " + format(new Date(), "PPP")}
        handleToggleRetweet={handleToggleRetweet}
        handleToggleLike={handleToggleLike}
        numOfLikes={state.numOfLikes}
        numOfRetweets={state.numOfRetweets}
        isLikedByCurrentUser={state.isLiked}
        isRetweetedByCurrentUser={state.isRetweeted}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #eee;
`;
export default App;
