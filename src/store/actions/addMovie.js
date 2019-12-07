import { ADD_MOVIE } from "./actionTypes";

export const addMovie = newMovie => ({
	type: ADD_MOVIE,
	newMovie
});
