import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App';
import SimpleReactLightbox from 'simple-react-lightbox';
import './reset.scss';
import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightbox>
      <App />
    </SimpleReactLightbox>
  </React.StrictMode>,
  document.getElementById('root')
);
