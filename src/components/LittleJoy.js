import React from 'react';
import { videos } from './data';

const LittleJoy = () => {
  return (
    <div>
      <iframe title="random-video" width="560" height="315" src={videos[Math.floor(Math.random()*videos.length)]} frameborder="0"></iframe>
    </div>
  )
}

export default LittleJoy;
