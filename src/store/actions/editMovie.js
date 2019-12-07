import { EDIT_MOVIE } from "./actionTypes";

export const editMovie = (title, newtitle, rating) => ({
	type: EDIT_MOVIE,
	title,
	newtitle,
	rating
});
