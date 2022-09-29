import React from "react";

const Card = ({ movie }) => {
  const formatDate = (date) => {
    let [y, m, d] = date.split("-");
    return [d, m, y].join("/");
  };

  const genreFinder = () => {
    let genreArray = [];
    for (let i = 0; i < movie.genre_ids.length; i++) {
      switch (movie.genre_ids[i]) {
        case 28:
          genreArray.push(`Action`);
          break;
        case 12:
          genreArray.push(`Aventure`);
          break;
        case 16:
          genreArray.push(`Animation`);
          break;
        case 35:
          genreArray.push(`Comédie`);
          break;
        case 80:
          genreArray.push(`Policier`);
          break;
        case 99:
          genreArray.push(`Documentaire`);
          break;
        case 18:
          genreArray.push(`Drame`);
          break;
        case 10751:
          genreArray.push(`Famille`);
          break;
        case 14:
          genreArray.push(`Fantasy`);
          break;
        case 36:
          genreArray.push(`Histoire`);
          break;
        case 27:
          genreArray.push(`Horreur`);
          break;
        case 10402:
          genreArray.push(`Musique`);
          break;
        case 9648:
          genreArray.push(`Mystère`);
          break;
        case 10749:
          genreArray.push(`Romance`);
          break;
        case 878:
          genreArray.push(`Science-fiction`);
          break;
        case 10770:
          genreArray.push(`Téléfilm`);
          break;
        case 53:
          genreArray.push(`Thriller`);
          break;
        case 10752:
          genreArray.push(`Guerre`);
          break;
        case 37:
          genreArray.push(`Western`);
          break;
        default:
          break;
      }
    }
    return genreArray.map((genre) => <li key={genre}>{genre}</li>);
  };

  const addStorage = () => {
    let dataStorage = localStorage.movies ? localStorage.movies.split(",") : [];

    if (!dataStorage.includes(movie.id.toString())) {
      dataStorage.push(movie.id);
      localStorage.movies = dataStorage;
    }
  };

  return (
    <div className="card-container">
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
            : "https://picsum.photos/200/300"
        }
        alt={movie.title}
      />
      <div className="text-container">
        <h2>{movie.title}</h2>
        <p className="date">
          Sortie le :{" "}
          {movie.release_date ? (
            <span>{formatDate(movie.release_date)}</span>
          ) : (
            "Inconue..."
          )}
        </p>
        <p className="rate">{movie.vote_average}/10 ⭐</p>
        <ul className="category-container">{genreFinder()}</ul>
        <h2>Synopsis</h2>
        <p className="description">
          {movie.overview ? movie.overview : "⛔ Aucune description..."}
        </p>
      </div>
      <button onClick={() => addStorage()}>Ajouter au coups de coeur</button>
    </div>
  );
};

export default Card;
