import React, { Fragment } from 'react';
import { createPortal } from 'react-dom';
import useModal from '../../hooks/useModal';

const MovieModal = ({ Title, handleDismiss }) => {
	const ModalElement = document.querySelector('#modal');
	const [movie] = useModal(Title);

	const renderModal = () => {
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

		const loader = () => {
			return <div className="ui active text loader">Loading</div>;
		};

		const modalElements = () => {
			return (
				<Fragment>
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
				</Fragment>
			);
		};

		return (
			<div
				className="ui page modals dimmer visible active"
				onClick={handleDismiss}
			>
				{!Poster ? loader() : modalElements()}
			</div>
		);
	};

	return createPortal(renderModal(), ModalElement);
};

export default MovieModal;
