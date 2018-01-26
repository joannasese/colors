import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './store/configureStore';
import manageWords from './reducers/manageWords';

import registerServiceWorker from './registerServiceWorker';

// const store = configureStore();
const store = createStore(manageWords,
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
