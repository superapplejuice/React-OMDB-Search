import { useState, useEffect } from 'react';

const useFetch = Title => {
	const [movie, setMovie] = useState({});
	const encodedTitle = encodeURIComponent(Title);
	console.log(encodedTitle);

	useEffect(() => {
		const fetchMovies = () => {
			fetch(`http://www.omdbapi.com/?apikey=98b07407&t=${encodedTitle}`)
				.then(res => res.json())
				.then(jsonRes => setMovie(jsonRes));
		};
		fetchMovies();
		// eslint-disable-next-line
	}, [Title]);

	return [movie];
};

export default useFetch;
