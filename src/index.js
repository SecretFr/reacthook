import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UseInput from './useInput/UseInput';
import UseTabs from './useTabs/UseTabs';
import UseEffect from './useEffect/UseEffect';
import UseTitle from './useTitle/UseTitle';
import UseClick from './useClick/UseClick';
import UseConfirm from './useConfirm/UseConfirm';
import UsePreventLeave from './usePreventLeave/UsePreventLeave';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <UseInput />
    <UseTabs />
    <UseEffect />
    <UseTitle />
    <UseClick />
    <UseConfirm />
    <UsePreventLeave/>
  </React.StrictMode>,
  document.getElementById('root')
);

