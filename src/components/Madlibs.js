import React, {Component} from 'react';
import Verbs from './Verbs';

class Madlibs extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      verb: '',
    }
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
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>Submit a verb:</label>
            <input type="text" value={this.state.text} onChange={(event) => this.handleChange(event)} />
          </p>
          <input type="submit" />
        </form>

        <p>Form to submit noun. (persist in data array, ditto for all below?)</p>
        <p>Form to submit adjective.</p>
        <p>Form to submit verb.</p>
        <p>Submit button.</p>
        <p>On submit, generate madlib.</p>
        <Verbs store={this.props.store} />
        
      </div>
    )
  }
}

export default Madlibs;
