import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './containers/App';
import manageWords from './reducers/manageWords';

import registerServiceWorker from './registerServiceWorker';

let store = createStore(manageWords,
  applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById('root')
);

store.dispatch({ type: '@@INIT' });
registerServiceWorker();
