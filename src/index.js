import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configStore from './store/store'
import {Provider} from 'react-redux'

const store = configStore()

store.subscribe(() => {
    console.log(store.getState())
})

console.log(store.getState())

const jsx = (
    <Provider store={store}>
        < App />
    </Provider>
)

ReactDOM.render(jsx , document.getElementById('root'));

