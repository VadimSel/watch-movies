import axios from "axios";
import { SearchResponseType } from "./types";

export const getMovies = async (name: string) => {
	const request = {
		params: { query: name },
		headers: { "X-API-KEY": "XGQCQD9-QBZ4W3Y-PBNHHR7-ASJC7QH" },
	};

	try {
		const response = await axios.get<SearchResponseType>(
			`https://api.kinopoisk.dev/v1.4/movie/search`,
			request
		);
		console.log('Результат из app.tsx:', name);
		console.log('ответ от апи', response.data.docs)
		return response.data.docs
	} catch (error) {
		alert(error);
	}
};
