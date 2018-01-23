import React, { Component } from 'react';
import Verb from './Verb';

class Verbs extends Component {

  render() {

    const verbs = this.props.store.getState().verbs.map((verb, index) => {
      return <Verb verb={verb.text} key={index} />
    });

    return(
      <ul>
        {verbs}
      </ul>
    );
  }
};

export default Verbs;
