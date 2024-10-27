import { ChangeEvent, useState } from "react";
import { getMovies } from "./getSearchResult";
import { MovieResponse } from "./types";
import { useNavigate } from "react-router-dom";

type PreviewPageProps = {
	setSelectedMovie: (movie: MovieResponse) => void;
};

export const PreviewPage = ({ setSelectedMovie }: PreviewPageProps) => {
	const [searchValue, setSearchValue] = useState("");
	const [searchResValue, setSearchResValue] = useState<MovieResponse[]>([]);
	const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false)

	const navigate = useNavigate();

	const inputHandler = async (event: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
	};

	const searchSubmit = async () => {
    if (!searchValue.trim()) {
      setError(true) 
      return
    }

		const res = await getMovies(searchValue);
		if (res) {
      setError(false)
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
			<input
				type="text"
				value={searchValue}
				onChange={inputHandler}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						searchSubmit();
					}
				}}
			/>
			<button onClick={searchSubmit}>Найти фильм</button>
      {error && 'Введите название фильма'}
			{isLoading && <p>Идёт загрузка</p>}
			{searchResValue.map((movie) => {
				return (
					<div key={movie.id}>
						<img src={movie.poster.previewUrl} alt="poster" />
						<p>
							Название: {movie.name} ({movie.alternativeName})
						</p>
						<p>Год: {movie.year}</p>
						<button onClick={() => selectedMovieHandler(movie)}>Выбрать фильм</button>
					</div>
				);
			})}
		</div>
	);
};
