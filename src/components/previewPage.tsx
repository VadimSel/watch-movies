import { ChangeEvent, useState } from "react";
import { getMovies } from "./getSearchResult";
import { MovieResponse } from "./types";
import { useNavigate } from "react-router-dom";
import s from "./previewPage.module.css";

type PreviewPageProps = {
	setSelectedMovie: (movie: MovieResponse) => void;
};

export const PreviewPage = ({ setSelectedMovie }: PreviewPageProps) => {
	const [searchValue, setSearchValue] = useState("");
	const [searchResValue, setSearchResValue] = useState<MovieResponse[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);

	const navigate = useNavigate();

	const inputHandler = async (event: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
	};

	const searchSubmit = async () => {
		if (!searchValue.trim()) {
			setError(true);
			return;
		}

		const res = await getMovies(searchValue);
		if (res) {
			setError(false);
			setIsLoading(true);
			setSearchResValue(res);
			setIsLoading(false);
		}
	};

	const selectedMovieHandler = (movie: MovieResponse) => {
		setSelectedMovie(movie);
		navigate("/movie");
	};

	console.log(searchValue);

	return (
		<div>
			{searchResValue.length === 0 ? (
				<div className={s.searchContainer}>
					<div className={s.search}>
						<input
							className={s.input}
							type="text"
							value={searchValue}
							onChange={inputHandler}
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									searchSubmit();
								}
							}}
						/>
						<button className={s.button} onClick={searchSubmit}>
							Найти фильм
						</button>
						<div className={s.error}>{error && "Введите название фильма"}</div>
						{isLoading && <p>Идёт загрузка</p>}
					</div>
				</div>
			) : (
				<div className={s.resultsContainer}>
				{searchResValue.map((movie) => (
					<div className={s.movieContainer} key={movie.id}>
						<div className={s.imageContainer}>
							<img
								className={s.resultImage}
								src={movie.poster.previewUrl}
								alt="poster"
							/>
						</div>
						<div className={s.movieInfo}>
							<span>{movie.name}</span>
							<span>{movie.alternativeName}</span>
							<span className={s.movieInfoYear}>Год: {movie.year}</span>
							<button onClick={() => selectedMovieHandler(movie)}>
								Выбрать фильм
							</button>
						</div>
					</div>
				))}
			</div>
		)}
	</div>
);
};
