import React, { useEffect, useState } from 'react';
import { ScrollView, Modal, ActivityIndicator, Share } from 'react-native';
import { Feather, Ionicons, AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import api, { KEY } from '../../services/api';

import { 
  Container, 
  Header,
  HeaderButton,
  Banner,
  ButtonLink,
  Title,
  ContentArea,
  Rate,
  ListGenres,
  Description,
  ContainerListGenres,
  ContainerLoading,
  ButtonShare
} from './styles';
import colors from '../../styles/colors';
import Stars from 'react-native-stars';

import { Genres } from '../../components/Genres';
import { ModalLink } from '../../components/ModalLink';

import { deleteMovie, hasMovie, saveMovie } from '../../utils/storage';

export function Detail() {
  const [movie, setMovie] = useState({});
  const [movieFavorite, setMovieFavorite] = useState(false);
  const [openLink, setOpenLink] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();
  const route = useRoute();

  async function favoriteMovie(movie) {
    if(movieFavorite) {
      await deleteMovie(movie.id);
      setMovieFavorite(false);
    } else {
      await saveMovie('@moviesStored', movie);
      setMovieFavorite(true);
    };
  };

  async function shareMovie() {
    try {
      const result = await Share.share({
        message: `React Prime - ${movie?.title}\n${movie?.homepage}`,
        url: movie?.homepage
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    let isActive = true;
    async function getMovie() {
      const response = await api.get(`/movie/${route.params?.id}`, {
        params: {
          api_key: KEY,
          language: 'pt-BR'
        }
      })
      .catch(err => {
        console.log(err);
      });

      if(isActive) {
        setMovie(response.data);
        const isFavorite = await hasMovie(response.data);
        setMovieFavorite(isFavorite);
      };
      setLoading(false);
    };

    if(isActive) {
      getMovie();
    };
    return () => {
      isActive = false.valueOf;
    };
  }, []);

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
  return (
    <Container>
      <Header>
        <HeaderButton 
          activeOpacity={0.7} 
          onPress={() => navigation.goBack()}
        >
          <Feather
            name="arrow-left"
            size={28}
            color={colors.white}
          />
        </HeaderButton>
        <HeaderButton
          onPress={() => favoriteMovie(movie)}
        >
          { movieFavorite ? (
            <Ionicons
              name="bookmark"
              size={28}
              color={colors.white}
            />
          ): (
            <Ionicons
              name="bookmark-outline"
              size={28}
              color={colors.white}
            />
          )}
        </HeaderButton>
      </Header>
      <Banner
        source={{uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}`}}
        resizeMethod="resize"
      />
      <ButtonLink
        onPress={() => setOpenLink(true)}
      >
        <Feather
          name="link"
          size={24}
          color={colors.white}
        />
      </ButtonLink>
      <ButtonShare
        onPress={() => shareMovie()}
      >
        <AntDesign
          name="sharealt"
          size={24}
          color={colors.white}
        />
      </ButtonShare>
      <Title numberOfLines={2}>{movie.title}</Title>
      <ContentArea>
        <Stars
          default={movie.vote_average}
          count={10}
          half={true}
          starSize={20}
          fullStar={ <Ionicons name="md-star" size={24} color={colors.yellow} />}
          emptyStar={ <Ionicons name="md-star-outline" size={24} color={colors.yellow} />}
          halfStar={<Ionicons name="md-star-half" size={24} color={colors.yellow} />}
          disable={true}
        />
        <Rate>{movie.vote_average}/10</Rate>
      </ContentArea>
      <ContainerListGenres>
        <ListGenres
          data={movie?.genres}
          horizontal
          showsHorizontalIndicator={false}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <Genres data={item} />}
        />
      </ContainerListGenres>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Title>Descrição</Title>
        <Description>
          {movie.overview}
        </Description>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={openLink}
      >
        <ModalLink
          link={movie?.homepage}
          title={movie?.title}
          closeModal={() => setOpenLink(false)}
        />
      </Modal>
    </Container>
  )
}