import React from 'react';
import { videos } from './data';

const LittleJoy = () => {
  return (
    <div>
      <iframe title="random-video" width="560" height="315" src={videos[Math.floor(Math.random()*videos.length)]}></iframe>
      <div>
        <button>I like this</button>
      </div>
    </div>

  )
}

export default LittleJoy;
