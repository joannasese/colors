import React from 'react';
import { ConnectedVerbs, Verbs } from './Verbs';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
    this.props.addVerb(this.state.verb);
  }

  render() {
    return (
      <div>
        <p>It's madlib time! Provide a noun, an adjective and a verb. We'll give you a wacky phrase in return!</p>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>Verb: </label>
            <input
              type="text"
              value={this.state.verb}
              onChange={(event) => this.handleChange(event)}
            />
          </p>
          <input type="submit" />
        </form>
        <p>The ADJ NOUN likes to <strong>{this.state.verb}</strong> while drinking his coffee.</p>
        <ConnectedVerbs/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addVerb: addVerb
  }, dispatch);
};

const addVerb = (verb) => {
  return {
    type: 'ADD_VERB',
    verb,
  }
}

export default connect(null, mapDispatchToProps)(Madlibs);

// export const ConnectedMadlibs = connect(null, mapDispatchToProps)(Madlibs);
