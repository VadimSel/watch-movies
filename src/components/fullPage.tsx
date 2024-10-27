import { MovieResponse } from "./types";

type InfoProps = {
	movie: MovieResponse | null;
};

export const FullPage = ({ movie }: InfoProps) => {
	if (!movie) {
		return null;
	}
	return (
		<div>
			<img src={movie.poster.previewUrl} alt="poster" />
			<p>
				Название: {movie.name} ({movie.alternativeName})
			</p>
			<p>Год: {movie.year}</p>
			<p>Жанры: {movie.genres.map((genre) => genre.name).join(", ")}</p>
			<p>
				{movie.isSeries ? (
					<p>Продолжительность одной серии: {movie.seriesLength % 60} мин</p>
				) : (
					`Продолжительность: ${Math.floor(movie.movieLength / 60)} ч ${
						movie.movieLength % 60
					} мин`
				)}
			</p>
			<p>Описание: {movie.description}</p>
			<a href={`https://www.kinopoisk.gg/film/${movie.id}`} target="_blank" rel="noopener noreferrer">Смотреть</a>
		</div>
	);
};
