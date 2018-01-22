import React from 'react';
import { videos } from './data';

console.log({videos})

const LittleJoy = () => {
  return (
    <div>
      <h1>Video goes here</h1>
      <iframe width="560" height="315" src={videos[Math.floor(Math.random()*videos.length)]} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
  )
}

export default LittleJoy;
