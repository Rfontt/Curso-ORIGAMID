import React from 'react';
import ReactDOM from 'react-dom';
import App from './challenges/App';
import ChallengeLoadingAndApiDatas from './challenges/ChallengeLoadingAndApiDatas';
import Hooks from './hooks/useRef';
import CarouselSlick from './challenges/CarouselSlick';

ReactDOM.render(
  <React.StrictMode>
    <CarouselSlick />
  </React.StrictMode>,
  document.getElementById('root')
);
