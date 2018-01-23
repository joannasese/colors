import React, { Component } from 'react';
import { connect } from 'react-redux';

class Verbs extends Component {

  render() {

    // const verbs = this.props.store.getState().verbs.map((verb, index) => {
    //   return <Verb text={verb.text} key={index} />
    // });
    let verbs = this.props.verbs.map((verb, index) => <li key={index}>{verb}</li>);

    return(
      <ul>
        {verbs}
      </ul>
    );
  }
};

const mapStateToProps = (state) => {
  return { verbs: state.verbs };
};

export default Verbs;
export const ConnectedVerbs = connect(mapStateToProps)(Verbs);
