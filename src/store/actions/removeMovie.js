import { REMOVE_MOVIE } from "./actionTypes";

export const removeMovie = title => ({
	type: REMOVE_MOVIE,
	title
});
