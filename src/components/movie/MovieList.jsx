import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
	const renderList = () => {
		return movies.map((movie, index) => {
			return (
				<div className="four wide column" key={index}>
					<MovieCard movie={movie} />
				</div>
			);
		});
	};

	return <div className="ui grid">{renderList()}</div>;
};

export default MovieList;
