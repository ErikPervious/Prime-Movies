import styled from "styled-components";
import colors from "../../styles/colors";

export const BackButton = styled.TouchableOpacity`
  padding: 10px;
  background-color: ${colors.blueBlackTwo};
  margin-top: 60px;
  flex-direction: row;
  align-items: center;
`;
export const Name = styled.Text`
  margin-left: 8px;
  color: ${colors.white};
  font-size: 18px;
  font-weight: bold;
`;