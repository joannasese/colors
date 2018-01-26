import React, { Component } from 'react';
import { connect } from 'react-redux';
import { memesFetchData } from '../actions/memes';

class Memes extends Component {
    // constructor() {
    //     super();
    //
    //     this.state = {
    //       memes: [],
    //       hasErrored: false,
    //       isLoading: false
    //     };
    // }

    // fetchData(url) {
    //   this.setState({ isLoading: true });

    //   fetch(url)
    //       .then((response) => {
    //           if (!response.ok) {
    //               throw Error(response.statusText);
    //           }
    //
    //           this.setState({ isLoading: false });
    //
    //           return response;
    //       })
    //       .then((response) => response.json())
    //       .then((memes) => this.setState({ memes }))
    //       .catch(() => this.setState({ hasErrored: true }));
    // }

    componentDidMount() {
      // this.fetchData('https://api.imgflip.com/get_memes');
      // this.fetchData('http://api.icndb.com/jokes/random');
      // this.fetchData('http://my-cat-api.com/api/v1/cats')
      this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
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
                        {meme.label}
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
