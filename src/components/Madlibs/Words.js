import React from 'react';
import { connect } from 'react-redux';
import { phrases } from '../data';

const Words = ({words}) =>
  <div>

    {words.map((word, index) =>
      // phrases.map((phrase) =>
      //   <h2 key={index}>{phrase}</h2>
      // )

      {if (phrases[Math.floor(Math.random()*phrases.length)]){
        const phrase = phrases[Math.floor(Math.random()*phrases.length)];
        const newStr = phrase.replace(/NOUN/, word.noun)
        return newStr
      }
    }


    )}
    {console.log({words})}



  </div>

function mapStateToProps (state){
  return { words: state.words };
};

export const ConnectedWords = connect(mapStateToProps)(Words);
export default Words;
