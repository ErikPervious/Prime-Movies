//  Gerar uma lista de filmes com tamanho que eu escolher.
export function getListMovies(size, movies) {
  let popularMovies = [];

  for(let i=0, l=size; i < l; i++) {
    popularMovies.push(movies[i]);
  };

  return popularMovies;
};

// Gerar um número aleatório com base no tamanho da lista de filmes.
export function randomBanner(movies) {
  return Math.floor(Math.random() * movies.length);
};