export type MovieResponse = {
	id: number;
	name: string;
	alternativeName: string;
	enName: string;
	type: string;
	year: number;
	description: string;
	shortDescription: string;
	movieLength: number;
	names: Array<{
		name: string;
		language: string;
		type: string;
	}>;
	externalId: {
		kpHD: string;
		imdb: string;
		tmdb: number;
	};
	logo: {
		url: string;
	};
	poster: {
		url: string;
		previewUrl: string;
	};
	backdrop: {
		url: string;
		previewUrl: string;
	};
	rating: {
		kp: number;
		imdb: number;
		tmdb: number;
		filmCritics: number;
		russianFilmCritics: number;
		await: number;
	};
	votes: {
		kp: number;
		imdb: number;
		tmdb: number;
		filmCritics: number;
		russianFilmCritics: number;
		await: number;
	};
	genres: Array<{
		name: string;
	}>;
	countries: Array<{
		name: string;
	}>;
	releaseYears: Array<{
		start: number;
		end: number;
	}>;
	isSeries: boolean;
	ticketsOnSale: boolean;
	totalSeriesLength: number;
	seriesLength: number;
	ratingMpaa: string;
	ageRating: number;
	top10: number;
	top250: number;
	typeNumber: number;
	status: string;
};

export type SearchResponseType = {
	docs: Array<MovieResponse>;
	total: number;
	limit: number;
	page: number;
	pages: number;
};
