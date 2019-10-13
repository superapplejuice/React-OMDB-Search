import React, { useState, Fragment } from 'react';
import useFetch from '../hooks/useFetch';
import randValue from '../config/randomTerm';

import Search from './Search';
import MovieList from './movie/MovieList';
import Loader from './placeholders/Loader';
import ErrorMessage from './placeholders/ErrorMessage';
import Navbar from './Navbar';

import '../styles/App.css';

const App = () => {
	const url = `http://www.omdbapi.com/?apikey=98b07407&type=movie&s=`;
	const [term, setTerm] = useState(randValue);
	const [movies, loading, errorMessage] = useFetch(url, term);

	const searchTerm = searchValue => {
		setTerm(searchValue);
	};

	const renderMovieList = () => {
		if (!loading && !errorMessage && movies) {
			return <MovieList movies={movies} />;
		} else if (!loading && errorMessage && !movies) {
			return <ErrorMessage errorMessage={errorMessage} />;
		}
		return <Loader />;
	};

	const renderComponents = () => {
		return (
			<Fragment>
				<Navbar />
				<div className="main-container ui container">
					<Search searchTerm={searchTerm} />
					{renderMovieList()}
				</div>
			</Fragment>
		);
	};

	return <Fragment>{renderComponents()}</Fragment>;
};

export default App;
