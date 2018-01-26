import React from 'react';
import { connect } from 'react-redux';
import { phrases } from './data';

const Words = ({words}) =>
  <div>
    <h2>
      {words.map((word, index) => {
// There's probably a nicer way to accomplish this. Also, formatting needs fixing.
        if (word.noun && word.adj && word.verb){
          const phrase = phrases[Math.floor(Math.random()*phrases.length)];
          let newStr = phrase.replace(/NOUN/, word.noun).replace(/ADJ/, word.adj).replace(/VERB/, word.verb)
          return newStr;
        } else {
          return "Hey, you forgot something!"
        }
      })}
    </h2>
  </div>

function mapStateToProps (state){
  return { words: state.words };
};

export const ConnectedWords = connect(mapStateToProps)(Words);
export default Words;
