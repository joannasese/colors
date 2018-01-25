import React from 'react';
import { connect } from 'react-redux';

const Words = ({words}) =>
  <div>
    {words.map((word, index) =>
       <h2 key={index}>The {word.adj} {word.noun} enjoys {word.verb}ing.</h2>
    )}
    {console.log({words})}
   <p>`My sentence won't show!`</p>
  </div>

// i think the culprit is mapStateToProps
function mapStateToProps (state){
  return { words: state.words };
};

export const ConnectedWords = connect(mapStateToProps)(Words);
