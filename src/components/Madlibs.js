import React, {Component} from 'react';
import Verbs from './Verbs';

class Madlibs extends React.Component {
  constructor(){
    super()

    this.state = {
      text: '',
    };
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_VERB',
      verb: this.state,
    });
  //   this.setState({
  //     verb: '',
  //   });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>Submit a verb:</label>
            <input type="text" onChange={(event) => this.handleChange(event)} />
          </p>
          <input type="submit" />
          {this.state.text}
        </form>

        <p>Form to submit noun. (persist in data array, ditto for all below?)</p>
        <p>Form to submit adjective.</p>
        <p>Form to submit verb.</p>
        <p>Submit button.</p>
        <p>On submit, generate madlib.</p>

      </div>
    )
  }
}

export default Madlibs;
