import { useState, useEffect } from 'react';

/**
 * Params
 * @param {string} url - The url of video
 */

/**
 * Returns
 * @param {number} width - The width of video
 * @param {number} height - The height of video
 * @param {number} duration - The duration of video
 */

export default (url) => {
  const [meta, setMeta] = useState({});

  useEffect(() => {
    if (!url) return;
    const video = document.createElement('video');
    video.addEventListener('loadedmetadata', (e) => {
      const { videoWidth: width, videoHeight: height, duration } = e.target;
      setMeta({ width, height, duration });
    });
    video.src = url;
  }, [url]);

  return meta;
};
