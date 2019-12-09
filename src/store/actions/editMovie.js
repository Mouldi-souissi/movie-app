import { EDIT_MOVIE } from "./actionTypes";

export const editMovie = (title, newtitle, newrating) => ({
	type: EDIT_MOVIE,
	title,
	newtitle,
	newrating
});
