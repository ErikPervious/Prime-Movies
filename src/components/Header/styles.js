import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.View`
  height: 70px;
  flex-direction: row;
  align-items: center;
  padding-left: 14px;
`;

export const MenuButton = styled.TouchableOpacity`
  align-content: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-size: 30px;
  font-weight: bold;
  margin-left: 14px;
`;