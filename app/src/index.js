import React from 'react';
import { render } from 'react-dom'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './Reducers/reducers';
import thunk from 'redux-thunk';

const initialState = {};
const store = createStore(reducer, initialState, applyMiddleware(thunk));

const root = document.getElementById('root');
render(<Provider store={store}>
      <BrowserRouter>
        <Route component={App} path="*" />
      </BrowserRouter>
    </Provider>, root);
registerServiceWorker();

