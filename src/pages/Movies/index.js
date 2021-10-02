import React, { useEffect, useState } from 'react';
import { StatusBar, ActivityIndicator } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';

import { Header } from '../../components/Header';
import { FavoriteItem } from '../../components/FavoriteItem';

import colors from '../../styles/colors';
import { Container, ListMovies, ContainerLoading } from './styles';

import { getMoviesSave, deleteMovie } from '../../utils/storage';

export function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();
  const isFocused = useIsFocused();

  async function handleDelete(id) {
    const result = await deleteMovie(id);
    setMovies(result);
  }

  function navigateDetailsPage(item) {
    navigation.navigate('Detail', {id: item.id});
  };

  useEffect(() => {
    let isActive = true;

    async function getFavoriteMovies() {
      const result = await getMoviesSave('@moviesStored');
      
      if(isActive) {
        setMovies(result);
      };
      setLoading(false);
    };

    if(isActive) {
      getFavoriteMovies();
    };

    return () => {
      isActive = false ;
    };
  }, [isFocused]);

  if(loading) {
    return (
      <ContainerLoading>
        <ActivityIndicator
          size="large"
          color={colors.white}
        />
      </ContainerLoading>
    )
  }
  return(
    <Container>
      <StatusBar translucent={false} backgroundColor={colors.blueBlack} />
      <Header title="Meus Filmes"/>
      <ListMovies
        data={movies}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <FavoriteItem 
            data={item} 
            handleDelete={handleDelete}
            navigateDetailsPage={() => navigateDetailsPage(item)}
          />
        )}
      />
    </Container>
  )
}