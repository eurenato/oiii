import { ArrowLeft, Funnel } from 'phosphor-react-native';
import styled from 'styled-components/native';

/*export const Container = styled.View`
  flex: 1;
  padding: 30px 15px;
`;*/

export const Form = styled.View`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.shape};
  margin-bottom: 30px;
  margin-top: 20px;
  

  align-items: center;
`; 

export const Chart = styled.View`
  width: 100%;
  align-items: center;

`;


export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: flex-start;
`;

export const HeaderContainer = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const DrawerContainer = styled.View`
  width: 80%;
  height: 100%;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px;
`;

export const DrawerOption = styled.TouchableOpacity`
  padding: 10px;
  margin-bottom: 10px;
`;

export const DrawerOptionText = styled.Text`
  font-size: 18px;
  color: #333;
`;

export const BackButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const BackIcon = styled(ArrowLeft)`
  color: #333;
  width: 24px;
  height: 24px;
`;

export const BackIconFilter = styled(Funnel)`
  color: #333;
  width: 24px;
  height: 24px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #333;
  font-weight: bold;
`;

export const ButtonContainer = styled.View`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const DrawerBackdrop = styled.TouchableOpacity`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
