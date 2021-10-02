import styled from "styled-components";
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.blueBlackTwo};
`;
export const ContainerLoading = styled.SafeAreaView`
  background-color: ${colors.blueBlack};
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Header = styled.View`
  z-index: 99;
  position: absolute;
  top: 35px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 14px;
`;
export const HeaderButton = styled.TouchableOpacity`
  width: 46px;
  height: 46px;
  background-color: ${colors.blueBlackTwoOpacity};
  border-radius: 23px;
  justify-content: center;
  align-items: center;
`;
export const Banner = styled.Image`
  width: 100%;
  height: 350px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
`;
export const ButtonLink = styled.TouchableOpacity`
  background-color: ${colors.red};
  width: 63px;
  height: 63px;
  border-radius: 35px;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 300px;
  right: 20px;
  z-index: 99;
`;
export const ButtonShare = styled.TouchableOpacity`
  background-color: ${colors.green};
  width: 63px;
  height: 63px;
  border-radius: 35px;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 300px;
  right: 100px;
  z-index: 99;
`;
export const Title = styled.Text`
  color: ${colors.white};
  font-size: 22px;
  font-weight: bold;
  padding: 8px 14px;
  margin-top: 10px;
`;
export const ContentArea = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 14px;
  justify-content: space-between;
  align-items: center;
`;
export const Rate = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.white};
`;
export const ContainerListGenres = styled.View`
`;
export const ListGenres = styled.FlatList`
  padding-left: 14px;
  margin: 8px 0;
`;
export const Description = styled.Text`
  padding: 0 14px 30px 14px;
  color: ${colors.white};
  line-height: 20px;
`;