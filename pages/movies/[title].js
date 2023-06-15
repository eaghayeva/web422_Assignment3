import { useRouter } from 'next/router';
import useSWR from 'swr';
import MovieDetails from '@/components/MovieDetails';
import Error from 'next/error';
import PageHeader from '@/components/PageHeader';

const Movie = () => {
  const router = useRouter();
  // Getting the title from the route
  const { title } = router.query;
  // Calling the api and fetching the data
  const { data, error } = useSWR(`https://dull-frock-cow.cyclic.app//api/movies?page=1&perPage=10&title=${title}`);

  // Validating the data
  if (!data) {
    return null;
  }
  if (data.length === 0) {
    return <Error statusCode={404} />;
  }

  // Returning the data
  return (
    <div>
      {data.map((movie) => (
        <div key={movie._id}>
          <PageHeader text={ movie.title } />
          <MovieDetails movie={ movie } />
        </div>
      ))}
    </div>
  );
};

export default Movie;
