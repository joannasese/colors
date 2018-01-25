import React from 'react';
import { videos } from './data';

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
      videos
    }
  }

  render(){
    return (
        <div>
          <iframe title="random-video" width="560" height="315" src={videos[Math.floor(Math.random()*videos.length)]}></iframe>
          <div>
            <button>I like this</button>
          </div>
        </div>
      )
  }
}
