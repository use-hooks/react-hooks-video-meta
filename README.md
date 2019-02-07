# react-hooks-video-meta

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]
[![Build Status][travis-image]][travis-url]

Custom React Hooks for video meta.

## Install

>**Note:** Make sure that you have installed the correct version of `react(>= v16.8.0)` and `react-dom(>= v16.8.0)`.

### npm

```bash
npm install --save @use-hooks/video-meta
```

### yarn

```bash
yarn add @use-hooks/video-meta
```

## API

### Params

```js
/**
 * Params
 * @param {string} url - The url of video
 */
```

### Returns

```js
/**
 * Returns
 * @param {number} width - The width of video
 * @param {number} height - The height of video
 * @param {number} duration - The duration of video
 */
```

## Usage

```js
import React from 'react';

import useVideoMeta from '@use-hooks/video-meta';

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
        {/* eslint-disable-next-line */}
        <video src={url} controls height={200} />
        <div>Width: {width}, Height: {height}, Duration: {duration}</div>
      </div>
    </div>
  );
}

```

[Live Show](https://use-hooks.github.io/react-hooks-video-meta/)

## Development

> Node >= v8 LTS

 - Clone the project to local disk
 - `npm install`
 - `npm start`

## License

MIT

> Generated by [create-react-hooks](https://github.com/use-hooks/create-react-hooks).

 [npm-image]: https://img.shields.io/npm/v/@use-hooks/video-meta.svg?style=flat-square
 [npm-url]: https://npmjs.org/package/@use-hooks/video-meta
 [download-image]: https://img.shields.io/npm/dm/@use-hooks/video-meta.svg?style=flat-square
 [download-url]: https://npmjs.org/package/@use-hooks/video-meta
 [travis-url]: https://travis-ci.org/use-hooks/react-hooks-video-meta
 [travis-image]: https://img.shields.io/travis/use-hooks/react-hooks-video-meta.svg?style=flat-square