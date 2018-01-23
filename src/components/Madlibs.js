import React from 'react';
import { connect } from 'react-redux';
import { verbs } from './data';
import Verbs from './Verbs'

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
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>Submit a verb:</label>
            <input type="text" value={this.state.verb} onChange={(event) => this.handleChange(event)} />
          </p>
          <input type="submit" />
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

// export default Madlibs;
export default connect(null)(Madlibs);
