import initialData from '../initial-data';
import { NEW_STATE1, NEW_STATE2 } from '../actions/types';

const initialState = initialData;
export const postReducer = (state = initialState, action) => {
	switch (action.type) {
		case NEW_STATE1:
			return {
				...state,
				columns: {
					...state.columns,
					[action.payload.column.id]: action.payload.column
				}
			};
		case NEW_STATE2:
			return {
				...state,
				columns: {
					...state.columns,
					[action.payload.column1.id]: action.payload.column1,
					[action.payload.column2.id]: action.payload.column2
				}
			};
		default:
			return state;
	}
};
export default postReducer;
