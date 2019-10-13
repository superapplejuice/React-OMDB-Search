import React, { useState } from 'react';
import MovieModal from './MovieModal';

const MovieCard = ({ movie }) => {
	const [show, setShow] = useState(false);
	const { Poster, Title, Year } = movie;

	const renderMovieCard = () => {
		return (
			<div className="ui link card" onClick={() => setShow(true)}>
				<div className="image">
					<img src={Poster} alt="movie has no poster!" />
				</div>
				<div className="content">
					<div className="header">{Title}</div>
					<div className="meta">{Year}</div>
				</div>
			</div>
		);
	};

	const handleDismiss = () => {
		setShow(false);
	};

	return (
		<>
			{show && <MovieModal Title={Title} handleDismiss={handleDismiss} />}
			{renderMovieCard()}
		</>
	);
};

export default MovieCard;
