import React from 'react';

import useVideoMeta from '../src';

export default function App() {
  const url = 'https://cdn.int64ago.org/p26nad4i.mp4';
  const {
    width,
    height,
    duration,
  } = useVideoMeta(url);

  return (
    <div>
      <h2>DEMO of <span style={{ color: '#F44336' }}>@use-hooks/video-meta</span></h2>
      <div>
        <video src={url} controls height={200} />
        <div>Width: {width}, Height: {height}, Duration: {duration}</div>
      </div>
    </div>
  );
}
