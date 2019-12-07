import { createStore } from "redux";
import { reducer } from "./reducers/reducer";

const initialState = {
	movies: [
		{
			img:
				"https://s1.qwant.com/thumbr/0x380/2/8/2109f2b1d299c1b58e63b013bb4143a58be49dafee93ce1e48ec33db02b3b8/16833485_1300x1733.jpg?u=http%3A%2F%2Fstatic.tvgcdn.net%2Frovi%2Fshowcards%2Fmovie%2F291705%2Fthumbs%2F16833485_1300x1733.jpg&q=0&b=1&p=0&a=1",
			title: "Revolver",
			rating: "7"
		},
		{
			img:
				"https://s1.qwant.com/thumbr/0x380/b/e/c9e6403c8c1f765192e017cc8375df272c299b7a2a699b1fae0e683df61ac4/n0XZXIKMyC1voNE4Z4d8rOrj4Dq-4.jpg?u=http%3A%2F%2Fbarkerhost.com%2Fwp-content%2Fuploads%2Fsites%2F4%2F2016%2F07%2Fn0XZXIKMyC1voNE4Z4d8rOrj4Dq-4.jpg&q=0&b=1&p=0&a=1",
			title: "fight Club",
			rating: "9"
		},
		{
			img:
				"https://s1.qwant.com/thumbr/0x380/3/a/73449c4f5afebc7f6d2d22bab8d75997e9b969cbbe9b7c93b6b9b8d153b36d/seven-film-volume-simple-1247.jpg?u=http%3A%2F%2Fimg.bd-sanctuary.com%2Fcis%2Fbig%2Fseven-film-volume-simple-1247.jpg&q=0&b=1&p=0&a=1",
			title: "Seven",
			rating: "5"
		}
	],
	x: "",
	star: 0
};
export const store = createStore(
	reducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(store.getState());
