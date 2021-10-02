import React from 'react';
import { Ionicons, Feather } from '@expo/vector-icons';

import { 
  Container, 
  Title,
  RateContainer,
  Rate,
  ActionContainer,
  DetailButton,
  DeleteButton
} from './styles';
import colors from '../../styles/colors';

export function FavoriteItem({data, handleDelete, navigateDetailsPage}) {
  return (
    <Container>
      <Title size={22} align='left'>{data.title}</Title>
      <RateContainer>
        <Ionicons name="md-star" size={12} color={colors.yellow} />
        <Rate>{data.vote_average}/10</Rate>
      </RateContainer>
      <ActionContainer>
        <DetailButton onPress={() => navigateDetailsPage(data)}>
          <Title size={14} align='center'>Ver detalhes</Title>
        </DetailButton>
        <DeleteButton onPress={() => handleDelete(data.id)}>
          <Feather name="trash" size={24} color={colors.red}/>
        </DeleteButton>
      </ActionContainer>
    </Container>
  )
}