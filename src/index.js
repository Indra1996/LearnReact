import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@atlaskit/css-reset';
import { Provider } from 'react-redux';
import { store } from './store';
import { saveState } from './localStorage';

console.log(store.getState());

store.subscribe(() => {
	saveState({ posts: store.getState().posts });
});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
