import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.TouchableOpacity`
  padding: 15px 14px 16px 0;
  width: 140px;
  height: 180px;
`;
export const BannerItem = styled.Image`
  width: 100%;
  height: 170px;
  border-radius: 8px;
`;
export const Title = styled.Text`
  color: ${colors.white};
  font-size: 14px;
  padding-top: 8px;
`;
export const RateContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Rate = styled.Text`
    padding-left: 4px;
    color: ${colors.white};
    font-size: 17px;
`;