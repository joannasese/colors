import React from 'react';
import { connect } from 'react-redux';

const Words = ({words}) =>
  <div>
    {console.log({words})}
   <p>`My sentence won't show!`</p>
  </div>

// i think the culprit is mapStateToProps
function mapStateToProps (state){
  return { words: state.words };
};

export const ConnectedWords = connect(mapStateToProps)(Words);
