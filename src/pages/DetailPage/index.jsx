import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import instance from "../../api/axios";

const DetailPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await instance.get(`/movie/${movieId}`);
      setMovie(response.data);
    }
    fetchData();
  }, [movieId]);
  if (!movie) return null;

  return (
    <section>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="detail"
      ></img>
    </section>
  );
};

export default DetailPage;
