import React from 'react';
import { videos } from './data';

const LittleJoy = () => {
  return (
    <div>
      <iframe width="560" height="315" src={videos[Math.floor(Math.random()*videos.length)]} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
  )
}

export default LittleJoy;
