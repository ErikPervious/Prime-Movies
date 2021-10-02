import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import api, { KEY } from '../../services/api';

import {
  Container,
  ContainerLoading,
  ListMovies,
  Name
} from './styles';
import colors from '../../styles/colors';
import { SearchItem } from '../../components/SearchItem';

export function Search() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();
  const route = useRoute();

  function navigateDetailPage(item) {
    navigation.navigate('Detail', {id: item.id});
  };

  useEffect(() => {
    let isActive = true;

    async function getSearchMovie() {
      const response = await api.get('/search/movie', {
        params: {
          query: route.params?.input,
          api_key: KEY,
          language: 'pt-BR',
          page: 1
        }
      });
      if(isActive) {
        setMovie(response.data.results);
        setLoading(false);
      }
    };

    if(isActive) {
      getSearchMovie();
    };

    return () => {
      isActive = false;
    }

  }, []);

  if(loading) {
    return (
      <ContainerLoading>
        <ActivityIndicator color={colors.white} size={40} />
        <Name>Buscando por: {route.params?.input}</Name>
      </ContainerLoading>
    );
  };

  return (
    <Container>
      <StatusBar translucent={false} backgroundColor={colors.blueBlack} />
      <ListMovies
        data={movie}
        showsVerticalScrollIndicator={false}
        keyExtractor={ item => String(item.id)}
        renderItem={({item}) => <SearchItem data={item} navigateDetailPage={() => navigateDetailPage(item)} />}
      />
    </Container>
  )
}