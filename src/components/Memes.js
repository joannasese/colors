import React, { Component } from 'react';

class Memes extends Component {
    constructor() {
        super();

        this.state = {
          memes: [],
          hasErrored: false,
          isLoading: false
        };
    }

    fetchData(url) {
      this.setState({ isLoading: true });

      fetch(url)
          .then((response) => {
              if (!response.ok) {
                  throw Error(response.statusText);
              }

              this.setState({ isLoading: false });

              return response;
          })
          .then((response) => response.json())
          .then((memes) => this.setState({ memes }))
          .catch(() => this.setState({ hasErrored: true }));
    }

    render() {
        if (this.state.hasErrored) {
            return <p>Sorry! There was an error loading the memes</p>;
        }

        if (this.state.isLoading) {
            return <p>Loading…</p>;
        }

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

export default Memes;
