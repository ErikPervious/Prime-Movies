import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.blueBlackTwo};
`;
export const ContainerLoading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.blueBlackTwo};
`;
export const Name = styled.Text`
  font-size: 18px;
  color: ${colors.white};
`;
export const ListMovies = styled.FlatList`
`;