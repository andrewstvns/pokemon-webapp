import React from 'react';
import { LoaderWrapper, LoaderSVG, LoaderCircle } from './loader.elements';

const Loader = () => {
  return (
    <LoaderWrapper>
      <LoaderSVG>
        <LoaderCircle cx="70" cy="70" r="70" />
      </LoaderSVG>
    </LoaderWrapper>
  )
};

export default Loader;