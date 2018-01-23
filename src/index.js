import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import manageVerb from './reducers/manageVerb';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  manageVerb,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
   <App store={store}/>
 </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
