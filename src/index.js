import '../node_modules/material-components-web/dist/material-components-web.css'
import React from 'react';
import ReactDOM from 'react-dom';
import Component from './Component';

import { textfield } from 'material-components-web'


window.onload = () => {
  ReactDOM.render(
    <div>
      <textfield />
      <Component />
    </div>,
    document.querySelector('#container')
  );
};
