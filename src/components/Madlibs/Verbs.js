import React, { Component } from 'react';
import { connect } from 'react-redux';



export class Verbs extends Component {
  render() {
    // const verbs = this.props.store.getState().verbs.map((verb, index) => {
    //   return <Verb text={verb.text} key={index} />
    // });
    console.log(this.props.verbs)
    let verbs = this.props.verbs.map((verb, index) =>
      <li key={index}>
        <h1>I wanted to <strong>{verb}</strong> melons.</h1>
      </li>
    );

    return(
      <ul>
        {verbs}
      </ul>
    );
  }
};

function mapStateToProps (state){
  return { verbs: state.verbs };
};

// export default Verbs;
export const ConnectedVerbs = connect(mapStateToProps)(Verbs);
