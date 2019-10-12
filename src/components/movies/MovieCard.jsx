import React from 'react';

const MovieCard = ({ movie }) => {
	const { Poster, Title, Year } = movie;
	return (
		<div className="ui card">
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

export default MovieCard;
