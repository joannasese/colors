import React, {Component} from 'react';
import Verbs from './Verbs';

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
    this.props.store.dispatch({
      type: 'ADD_VERB',
      verb: this.state,
    });
    this.setState({
      verb: '',
    });
  }

  render() {
    return (
      <div>
        <p>It's madlib time! Provide a noun, an adjective and a verb. We'll give you a wacky phrase in return!</p>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>Verb: </label>
            <input type="text" value={this.state.text} onChange={(event) => this.handleChange(event)} />
          </p>
          <input type="submit" />
        </form>
        <p>Form to submit noun. (persist in data array, ditto for all below?)</p>
        <p>Form to submit adjective.</p>
        <p>FORM to submit verb.</p>
        <p>Submit button.</p>
        <p>On submit, generate madlib.</p>
        <p>The ADJ NOUN likes to <strong>{this.state.verb}</strong> while drinking his coffee.</p>
      </div>
    )
  }
}

export default Madlibs;
