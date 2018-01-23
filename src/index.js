import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import manageVerb from './reducers/manageVerb';
import createStore from './createStore';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(manageVerb);

export function render() {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  );
}

store.dispatch({ type: '@@INIT' });
registerServiceWorker();
