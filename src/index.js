import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
// import createStore from './createStore';
import { Provider } from 'react-redux';
import App from './containers/App';
import manageVerb from './reducers/manageVerb';

import registerServiceWorker from './registerServiceWorker';

let store = createStore(manageVerb,
window.__REDUX_DEVTOOLS_EXTENSION__ &&
window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById('root')
);

store.dispatch({ type: '@@INIT' });
registerServiceWorker();
