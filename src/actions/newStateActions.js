import { NEW_STATE1, NEW_STATE2 } from './types.js';

export const fetchPosts = () => {
	console.log('action called');
	return {
		type: 'NEW_STATE',
		payload: {
			hello: true
		}
	};
};

export const newState1 = (column) => {
	console.log('action 1 called');
	return {
		type: NEW_STATE1,
		payload: {
			column
		}
	};
};

export const newState2 = (column1, column2) => {
	console.log('action 2 called');
	return {
		type: NEW_STATE2,
		payload: {
			column1,
			column2
		}
	};
};
