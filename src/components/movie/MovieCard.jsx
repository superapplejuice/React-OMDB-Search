import React, { useState, Fragment } from 'react';
import MovieModal from './MovieModal';

const MovieCard = ({ movie }) => {
	const [show, setShow] = useState(false);
	const { Poster, Title, Year } = movie;

	const renderMovieCard = () => {
		const movieNotLoaded = () => {
			return (
				<Fragment>
					<div className="image">
						<div className="ui placeholder">
							<img src="" alt="movie has no poster!" />
						</div>
					</div>
					<div className="content">
						<div className="ui placeholder">
							<div className="header">Loading...</div>
							<div className="meta">Loading...</div>
						</div>
					</div>
				</Fragment>
			);
		};

		const movieLoaded = () => {
			return (
				<Fragment>
					<div className="image">
						<img src={Poster} alt="movie has no poster!" />
					</div>
					<div className="content">
						<div className="header">{Title}</div>
						<div className="meta">{Year}</div>
					</div>
				</Fragment>
			);
		};

		return (
			<div className="ui link card" onClick={() => setShow(true)}>
				{!Poster ? movieNotLoaded() : movieLoaded()}
			</div>
		);
	};

	const handleDismiss = () => {
		setShow(false);
	};

	return (
		<Fragment>
			{show && <MovieModal Title={Title} handleDismiss={handleDismiss} />}
			{renderMovieCard()}
		</Fragment>
	);
};

export default MovieCard;
