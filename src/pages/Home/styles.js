import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.SafeAreaView`
  background-color: ${colors.blueBlack};
  flex: 1;
  flex-direction: column;
  padding: 4px 0;
`;
export const ContainerLoading = styled.SafeAreaView`
  background-color: ${colors.blueBlack};
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const SearchContainer = styled.View`
  flex-direction: row;
  width: 100%;
  height: 50px;
  align-items: center;
  padding: 0 14px;
  margin-bottom: 8px;
`;
export const Input = styled.TextInput`
  background: ${colors.gray};
  width: 85%;
  height: 50px;
  border-radius: 12px;
  padding: 8px 15px;
  font-size: 20px;
  color: ${colors.blueBlack};
`;
export const SearchButton = styled.TouchableOpacity`
  width: 15%;
  height: 50px;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.Text`
  color: ${colors.white};
  padding: 20px 14px 8px 14px;
  font-weight: bold;
  font-size: 24px;
`;
export const BannerButton = styled.TouchableOpacity`
  
`;
export const Banner = styled.Image`
  height: 150px;
  border-radius: 6px;
  margin: 0 14px;
`;
export const SliderMovie = styled.FlatList`
  height: 250px;
  padding: 0 14px;
`;