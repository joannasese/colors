import React from 'react';
import Verbs from './Verbs';
import { connect } from 'react-redux';

class Madlibs extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      verb: '',
    };
  }

  handleChange(event) {
    this.setState({
      verb: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addVerb();
    // this.props.store.dispatch({
    //   type: 'ADD_VERB',
    //   verb: this.state,
    // });
    this.setState({
      verb: '',
    });
  }

  render() {
    return (
      <div>
      <p>Number of verbs in Verbs array: {Verbs.length}</p>
        <p>It's madlib time! Provide a noun, an adjective and a verb. We'll give you a wacky phrase in return!</p>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>Verb: </label>
            <input type="text" value={this.state.text} onChange={(event) => this.handleChange(event)} />
          </p>
          <input type="submit" />
        </form>
        <p>The ADJ NOUN likes to <strong>{this.state.verb}</strong> while drinking his coffee.</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { verb: state.verb };
};

const mapDispatchToProps = () => {
  return {
    addVerb: addVerb
  }
}

const addVerb = (word) => {
  return {
    type: 'ADD_VERB',
    verb: this.state,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Madlibs);
