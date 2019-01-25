import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import { loadState } from './localStorage';
import rootReducer from './reducers';

const persistedState = loadState();

const composeEnhancers =
	process.env.NODE_ENV !== 'production' &&
	typeof window !== 'undefined' &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		: compose;

export const store = createStore(rootReducer, persistedState, composeEnhancers(applyMiddleware(ReduxThunk)));
