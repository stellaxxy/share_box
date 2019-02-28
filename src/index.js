import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';//provider is kind like parent ; provider of the app(information)
import { createStore } from 'redux';
import rootReducer from './reducers';

import App from './components/app';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
