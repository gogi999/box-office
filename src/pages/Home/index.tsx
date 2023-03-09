import React, { useState } from 'react';

import usePaginatedFetchMovies from '../../services/PaginateMovies';

const Home = () => {
    const [page, setPage] = useState<number>(1);
    const { data: movies } = usePaginatedFetchMovies(page);
    console.log('movies: ', movies);

    return (
        <div>
            Home
        </div>
    );
}

export default Home;
