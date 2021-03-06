import { Chip } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import "../Genres/genres.css";

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {
  const handleAdd = (genre) => {
    console.log(genre)
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1)
  };

  const handleRemove = (genre) => {
    console.log(genres)
      setSelectedGenres(
          selectedGenres.filter((selected) => selected.id !== genre.id)
      )
      setGenres([...genres, genre])
      setPage(1)
  }

  const FetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setGenres(data.genres);
  };

  useEffect(() => {
    FetchGenres();

    return () => {
      setGenres({});
    };
  }, []);

  return (
    <div className="genres">
      {selectedGenres &&
        selectedGenres.map((genre) => (
          <Chip className="single-genre"
            label={genre.name}
            size="small"
            color="primary"
            key={genre.id}
                clickable
                onDelete={()=>handleRemove(genre)}
          />
        ))}
      {genres &&
        genres.map((genre) => (
          <Chip className="single-genre"
            label={genre.name}
            clickable
            size="small"
            key={genre.id}
            onClick={() => handleAdd(genre)}
          />
        ))}
    </div>
  );
};

export default Genres;
