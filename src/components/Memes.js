import React, { Component } from 'react';
import { memesHasErrored, memesIsLoading, memesFetchDataSuccess } from '../actions/memes';

class Memes extends Component {
    constructor() {
        super();

        this.state = {
          memes: [],
          hasErrored: false,
          isLoading: false
        };
    }

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
      this.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
    }

    render() {
        if (this.state.hasErrored) {
            return <p>Sorry! There was an error loading the memes.</p>;
        }

        if (this.state.isLoading) {
            return <p>Loading…</p>;
        }
console.log(this.state.memes)
        return (

            <ul>
                {this.state.memes.map((meme) => (
                    <li key={meme.id}>
                        {meme.label}
                    </li>
                ))}
            </ul>

        );
    }
}

export function memesFetchData(url) {
    return (dispatch) => {
        dispatch(memesIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(memesIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((memes) => dispatch(memesFetchDataSuccess(memes)))
            .catch(() => dispatch(memesHasErrored(true)));
    };
}


export default Memes;
