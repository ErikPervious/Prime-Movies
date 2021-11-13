import React, { useEffect, useState } from 'react';
import {
  StatusBar,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import { KEY_SECRET } from '../../utils/key';
import { getListMovies, randomBanner } from '../../utils/movie';

import { Header } from '../../components/Header';
import { SliderItem } from '../../components/SliderItem';

import colors from '../../styles/colors';
import { 
  Container,
  ContainerLoading,
  SearchContainer, 
  Input, 
  SearchButton,
  Title,
  BannerButton,
  Banner,
  SliderMovie
} from './styles';

export function Home() {
  const [nowMovies, setNowMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [bannerMovie, setBannerMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState('');

  const navigation = useNavigation();

  function handleSearchMovie() {
    if(input === '') return;
    navigation.navigate('Search', {input: input});
    setInput('');
  };

  useEffect(() => {
    let isActive = true;
    const ac = new AbortController();
    async function getMovies() {
      const [nowData, popularData, topData] = await Promise.all([
        api.get('/movie/now_playing', {
          params: {
            api_key: KEY_SECRET,
            language: 'pt-BR',
            page: 1
          }
        }),
        api.get('/movie/popular', {
          params: {
            api_key: KEY_SECRET,
            language: 'pt-BR',
            page: 1
          }
        }),
        api.get('/movie/top_rated', {
          params: {
            api_key: KEY_SECRET,
            language: 'pt-BR',
            page: 1
          }
        })
      ]);

      if(isActive) {
        const nowList = getListMovies(10, nowData.data.results);
        const popularList = getListMovies(5, popularData.data.results);
        const topList = getListMovies(5, topData.data.results);
        
        setBannerMovie(nowData.data.results[randomBanner(nowData.data.results)]);
        setNowMovies(nowList);
        setPopularMovies(popularList);
        setTopMovies(topList);
        setLoading(false);
      }
    }
    getMovies();

    // Chama esse return quando a tela é desmontada;
    return () => {
      isActive = false;
      ac.abort();
    };
  }, []);

  function navigateDetailPage(item) {
    navigation.navigate('Detail', {id: item.id});
  };

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
      <Header title="Prime Movies"/>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <SearchContainer>
          <Input
            placeholder="Ex Vingadores"
            placeholderTextColor={colors.blueBlack}
            value={input}
            onChangeText={v => setInput(v)}
          />
          <SearchButton onPress={() => handleSearchMovie()}>
            <Feather
              name="search"
              size={30}
              color={colors.white}
            />
          </SearchButton>
        </SearchContainer>
        <Title>Em Cartaz</Title>
        <BannerButton 
          activeOpacity={0.9}
          onPress={() => navigateDetailPage(bannerMovie)}
        >
          <Banner
            source={{uri: `https://image.tmdb.org/t/p/original/${bannerMovie.poster_path}`}}
            resizeMethod="resize"
          />
        </BannerButton>
        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={nowMovies}
          renderItem={ ({item}) => <SliderItem data={item} navigatePage={ () => navigateDetailPage(item) }/>}
          keyExtractor={item => String(item.id)}
        />
        <Title>Populares</Title>
        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={popularMovies}
          renderItem={ ({item}) => <SliderItem data={item} navigatePage={ () => navigateDetailPage(item) }/>}
          keyExtractor={item => String(item.id)}
        />
        <Title>Mais Votados</Title>
        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={topMovies}
          renderItem={ ({item}) => <SliderItem data={item} navigatePage={ () => navigateDetailPage(item) }/>}
          keyExtractor={item => String(item.id)}
        />
      </ScrollView>
    </Container>
  )
}