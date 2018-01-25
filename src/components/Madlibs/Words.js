import React from 'react';
import { connect } from 'react-redux';
import { phrases } from '../data';

const Words = ({words}) =>
  <div>
    {words.map((word, index) =>
       <h2 key={index}>The {word.adj} {word.noun} enjoys when I {word.verb}. {phrases}</h2>
    )}
    {console.log({words})}
    {console.log({phrases})}
  </div>

// i think the culprit is mapStateToProps
function mapStateToProps (state){
  return { words: state.words };
};

export const ConnectedWords = connect(mapStateToProps)(Words);
