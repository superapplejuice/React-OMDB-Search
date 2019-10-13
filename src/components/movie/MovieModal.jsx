import React from 'react';
import { createPortal } from 'react-dom';
import useModal from '../../hooks/useModal';

const MovieModal = ({ Title, handleDismiss }) => {
	const ModalElement = document.querySelector('#modal');
	const [movie] = useModal(Title);
	console.log(Title);

	const modalElements = () => {
		const {
			Actors,
			Director,
			Plot,
			Poster,
			Rated,
			Released,
			Runtime,
			Title,
			imdbRating
		} = movie;

		return (
			<div
				className="ui page modals dimmer visible active"
				onClick={handleDismiss}
			>
				<div
					className="ui standard modal visible active"
					onClick={event => event.stopPropagation()}
				>
					<div className="header">{Title}</div>
					<div className="image content">
						<div className="ui medium image">
							<img src={Poster} alt="movie poster" />
							<br />
						</div>
						<div className="description">
							<h3>{Actors}</h3>
							<p>Directed by {Director}</p>
							<br />
							<p>{Plot}</p>
							<br />
							<div>Released: {Released}</div>
							<div>Runtime: {Runtime}</div>
							<div>Rating: {Rated}</div>
							<div>IMDB Rating: {imdbRating}</div>
						</div>
					</div>
				</div>
			</div>
		);
	};

	return createPortal(modalElements(), ModalElement);
};

export default MovieModal;
