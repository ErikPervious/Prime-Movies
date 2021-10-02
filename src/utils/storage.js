import AsyncStorage from '@react-native-async-storage/async-storage';

// Buscar os filmes salvos;
export async function getMoviesSave(key) {
  const myMovies = await AsyncStorage.getItem(key);
  let moviesSave = JSON.parse(myMovies) || [];
  return moviesSave;
} ;

// Salvar um filme;
export async function saveMovie(key, newMovie) {
  let moviesStored = await getMoviesSave(key);
  // Verifica se o filme já está salvo na lista;
  const hasMovie = moviesStored.some(item => item.id === newMovie.id);
  if(hasMovie) {
    console.log('esse filme já existe');
    return;
  };
  moviesStored.push(newMovie);
  await AsyncStorage.setItem(key, JSON.stringify(moviesStored));
  console.log('filme salvo');
};

// Remover algum filme;
export async function deleteMovie(id) {
  let moviesStored = await getMoviesSave('@moviesStored');
  let myMovies = moviesStored.filter(item => {
    return (item.id !== id)
  });
  await AsyncStorage.setItem('@moviesStored', JSON.stringify(myMovies));
  console.log('filme deletado');
  return myMovies;
}

// Verificar se já está na lista
export async function hasMovie(movie) {
  let moviesStored = await getMoviesSave('@moviesStored');
  const hasMovie = moviesStored.find(item => item.id === movie.id);
  if(hasMovie) {
    return true;
  }
  return false;
} 