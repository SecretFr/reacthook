import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UseInput from './useInput/UseInput';
import UseTabs from './useTabs/UseTabs';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <UseInput />
    <UseTabs />
  </React.StrictMode>,
  document.getElementById('root')
);

