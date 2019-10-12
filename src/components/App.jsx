import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';

import Search from './Search';
import MovieList from './movies/MovieList';
import Loader from './placeholders/Loader';
import ErrorMessage from './placeholders/ErrorMessage';

const App = () => {
	const url = `http://www.omdbapi.com/?apikey=98b07407&type=movie&s=`;
	const [term, setTerm] = useState('batman');
	const [movies, loading, errorMessage] = useFetch(url, term);

	const searchTerm = searchValue => {
		setTerm(searchValue);
	};

	const renderMovieList = () => {
		if (!loading && !errorMessage) {
			return <MovieList movies={movies} />;
		} else if (!loading && errorMessage) {
			return <ErrorMessage errorMessage={errorMessage} />;
		}
		return <Loader />;
	};

	const renderComponents = () => {
		return (
			<div className="ui container">
				<Search searchTerm={searchTerm} />
				{renderMovieList()}
			</div>
		);
	};

	return <>{renderComponents()}</>;
};

export default App;