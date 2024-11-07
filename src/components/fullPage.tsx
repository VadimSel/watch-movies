import { MovieResponse } from "./types";
import s from "./fullPage.module.css";
import { useState } from "react";

type InfoProps = {
	movie: MovieResponse | null;
};

export const FullPage = ({ movie }: InfoProps) => {
	const urls = [
		`https://www.kinopoisk.gg/film/${movie?.id}`,
		`https://www.kinopoiskkk.gg/film/${movie?.id}`,
		`https://www.kinopoisk.cx/film/${movie?.id}`,
	];

	const [isModalOpen, setIsModalOpen] = useState(false);

	if (!movie) {
		return null;
	}
	return (
		<div className={s.container}>
			<div className={s.fullPageContainer}>
				<div className={s.imageContainer}>
					<img src={movie.poster.previewUrl} alt="poster" />
				</div>
				<div className={s.fullPageInfo}>
					<p>Название: {movie.name}</p>
					<p>{movie.alternativeName}</p>
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
					<button onClick={() => setIsModalOpen(true)}>Смотреть</button>
				</div>
			</div>
			{isModalOpen && (
				<div onClick={() => setIsModalOpen(false)} className={s.modal}>
					<div className={s.modalContent}>
						<span>Варианты просмотра</span>
						{urls.map((url, index) => (
							<a key={index} href={url} target="_blank" rel="noopener noreferrer">
								Ссылка {index + 1}
							</a>
						))}
					</div>
				</div>
			)}
		</div>
	);
};
