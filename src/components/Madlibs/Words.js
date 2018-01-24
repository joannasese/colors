import React, { Component } from 'react';
import { connect } from 'react-redux';

const Words = ({words}) =>
  <div>

   <p>{words}</p>
      { console.log({words})}
  </div>

function mapStateToProps (state){
  return { words: state.words };
};

// export default Verbs;
export const ConnectedWords = connect(mapStateToProps)(Words);
