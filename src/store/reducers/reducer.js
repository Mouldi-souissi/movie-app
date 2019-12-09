import {
	SEARCH,
	SEARCH_STAR,
	ADD_MOVIE,
	REMOVE_MOVIE,
	EDIT_MOVIE,
	SHOW_DESC
} from "../actions/actionTypes";

export const reducer = (state, action) => {
	switch (action.type) {
		case SEARCH:
			return { ...state, x: action.input };
		case ADD_MOVIE:
			return {
				...state,
				movies: [...state.movies, action.newMovie]
			};
		case SEARCH_STAR:
			return { ...state, star: action.rating };
		case REMOVE_MOVIE:
			return {
				...state,
				movies: state.movies.filter(el => el.title !== action.title)
			};
		case EDIT_MOVIE:
			return {
				...state,
				movies: state.movies.map(el =>
					el.title === action.title
						? { ...el, title: action.newtitle, rating: action.newrating }
						: el
				)
			};
		case SHOW_DESC:
			return { ...state, titleDesc: action.title };
		default:
			return state;
	}
};
