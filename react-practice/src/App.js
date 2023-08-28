import React from 'react';
import ColorBox from './Chapter_15/ColorBox';
import { ColorProvider } from './Chapter_15/ColorContext';
import SelectColors from './Chapter_15/SelectColors';

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;