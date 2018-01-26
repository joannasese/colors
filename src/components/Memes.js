import React, { Component } from 'react';
import { connect } from 'react-redux';
import { memesFetchData } from '../actions/memes';

class Memes extends Component {
    componentDidMount() {
      // this.props.fetchData('https://api.imgflip.com/get_memes');
      this.props.fetchData('./api')
      // this.props.fetchData('https://jsonplaceholder.typicode.com/posts')
      // this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
    }

    render() {
      if (this.props.hasErrored) {
        return <p>Sorry! There was an error loading the memes.</p>;
      }
      if (this.props.isLoading) {
        return <p>Loading…</p>;
      }
console.log(this.props.memes)
        return (

            <ul>
                {this.props.memes.map((meme) => (
                    <li key={meme.id}>
                        <img src={meme.url} alt="img"/>
                    </li>
                ))}
            </ul>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        memes: state.memes,
        hasErrored: state.memesHasErrored,
        isLoading: state.memesIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(memesFetchData(url))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Memes);
