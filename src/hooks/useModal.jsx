import { useState, useEffect } from 'react';

const useFetch = Title => {
	const [movie, setMovie] = useState({});
	const encodedTitle = encodeURIComponent(Title);

	useEffect(() => {
		const fetchMovies = () => {
			fetch(`https://www.omdbapi.com/?apikey=98b07407&t=${encodedTitle}`)
				.then(res => res.json())
				.then(jsonRes => setMovie(jsonRes));
		};
		fetchMovies();
		// eslint-disable-next-line
	}, [Title]);

	return [movie];
};

export default useFetch;
