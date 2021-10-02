import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.TouchableOpacity`
  padding: 14px;
`;
export const Banner = styled.Image`
  width: 100%;
  height: 140px;
  border-radius: 8px;
`;
export const Title = styled.Text`
  font-weight: bold;
  color: ${colors.white};
  font-size: 18px;
  padding-top: 8px;
`;
export const RateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 4px;
`;
export const Rate = styled.Text`
  padding-left: 4px;
  color: ${colors.white};
  font-size: 12px;
`;