import React from 'react';
// import { videso } from '/data';

// //stateless component
// const LittleJoy = () => {
//   return (
//     <div>
//       <iframe title="random-video" width="560" height="315" src={videos[Math.floor(Math.random()*videos.length)]}></iframe>
//       <div>
//         <button>I like this</button>
//       </div>
//     </div>
//
//   )
// }
//
// export default LittleJoy;

export default class LittleJoy extends React.Component{
  constructor() {
    super();

    this.state = {
      memes: []
    }
  }

  fetchData(url) {
    fetch(url)
      .then((response) => response.json())
      .then((memes) => this.setState({ memes }))
  }

  componentDidMount() {
    this.fetchData('https://api.imgflip.com/get_memes');
  }

  render(){
    return(
      <p>
      // {this.state.memes.map((meme) => (
      //   <p key={meme.id}>
      //       return {meme.url}
      //   </p>
      // ))}
      {this.state.memes}
      </p>
    )
  }
}
