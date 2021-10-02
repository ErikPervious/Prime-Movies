import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.View`
  background-color: ${colors.blueBlack};
  flex: 1;
  padding: 4px 0;
`;
export const ContainerLoading = styled.SafeAreaView`
  background-color: ${colors.blueBlack};
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const ListMovies = styled.FlatList`
`;