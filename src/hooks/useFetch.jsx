import { useState, useEffect } from 'react';

const useFetch = (url, term) => {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState(null);

	useEffect(() => {
		const fetchMovies = () => {
			fetch(`${url}${term}`)
				.then(res => res.json())
				.then(jsonRes => {
					if (jsonRes.Response === 'True') {
						setMovies(jsonRes.Search);
						setLoading(false);
					}
					setErrorMessage(jsonRes.Error);
					setLoading(false);
				});
		};
		fetchMovies();
		// eslint-disable-next-line
	}, [term]);

	return [movies, loading, errorMessage];
};

export default useFetch;
