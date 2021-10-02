import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.View`
  padding: 14px;
`;
export const Title = styled.Text`
  color: ${colors.white};
  font-size: ${p => p.size}px;
  font-weight: bold;
  text-align: ${p => p.align};
`;
export const RateContainer = styled.View`
  flex-direction: row;
  align-content: center;
  padding: 8px 0;
`;
export const Rate = styled.Text`
  color: ${colors.white};
  font-size: 12px;
  padding-left: 4px;
`;
export const ActionContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const DetailButton = styled.TouchableOpacity`
  width: 85%;
  height: 30px;
  background-color: ${colors.red};
  justify-content: center;
  align-content: center;
  border-radius: 30px;
`;
export const DeleteButton = styled.TouchableOpacity`
  width: 15%;
  height: 30px;
  justify-content: center;
  align-items: center;
`;