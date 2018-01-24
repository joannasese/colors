import React from 'react';
import { ConnectedWords, Words } from './Words';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class Madlibs extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      noun: '', adj: '', verb: '',
    };
  }

  handleNounChange(event) {
    this.setState({
      noun: event.target.value
    });
  }

  handleAdjChange(event) {
    this.setState({
      adj: event.target.value
    });
  }

  handleVerbChange(event) {
    this.setState({
      verb: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addWords(this.state);
  }

  render() {
    return (
      <div>
        <p>It's madlib time! Provide a noun, an adjective and a verb. We'll give you a wacky phrase in return!</p>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>Noun: </label>
            <input
              type="text"
              // value={this.state.noun}
              onChange={(event) => this.handleNounChange(event)}
              placeholder="Ex: doohickey"
            />
          </p>
          <p>
            <label>Adjective: </label>
            <input
              type="text"
              // value={this.state.adj}
              onChange={(event) => this.handleAdjChange(event)}
              placeholder="Ex: cantankerous"
            />
          </p>
          <p>
            <label>Verb: </label>
            <input
              type="text"
              // value={this.state.verb}
              onChange={(event) => this.handleVerbChange(event)}
              placeholder = "Ex: defenestrate"
            />
          </p>
          <input type="submit" />
        </form>
        <p>The <strong>{this.state.adj} {this.state.noun}</strong> likes to <strong>{this.state.verb}</strong> while drinking his coffee.</p>
        <ConnectedWords/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addWords
  }, dispatch);
};

const addWords = (words) => {
  return {
    type: 'ADD_WORDS',
    words,
  };
};

export default connect(null, mapDispatchToProps)(Madlibs);

// export const ConnectedMadlibs = connect(null, mapDispatchToProps)(Madlibs);
