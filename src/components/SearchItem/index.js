import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { 
  Container, 
  Banner,
  Title,
  RateContainer,
  Rate 
} from './styles';
import colors from '../../styles/colors';

export function SearchItem({data, navigateDetailPage}) {

  function detailMovie() {
    if(data.release_data === '') {
      alert('Filme ainda sem data');
      return;
    }
    
    navigateDetailPage(data?.id);
  }

  return (
    <Container 
      activeOpacity={0.7}
      onPress={() => detailMovie()}
    >
      { data?.poster_path ? (
        <Banner
          source={{uri: `https://image.tmdb.org/t/p/original/${data?.poster_path}`}}
          resizeMethod="resize"
        />
      ) : (
        <Banner
          source={require('../../assets/noImage.png')}
          resizeMethod="resize"
        />
      )}
      <Title>{data?.title}</Title>
      <RateContainer>
        <Ionicons name="md-star" size={12} color={colors.yellow} />
        <Rate>{data?.vote_average}/10</Rate>
      </RateContainer>
    </Container>
  )
}