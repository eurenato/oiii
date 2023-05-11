import styled from 'styled-components/native';
import { ArrowLeft, Funnel} from 'phosphor-react-native';

export const Container = styled.View`
   display: flex;
  flex-direction: row;
 
  margin-bottom: 40px;
  margin-top: 20px;
  align-items: center;

`;

export const BackButton = styled.TouchableOpacity`
  
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 23px;
  color: ${({ theme }) => theme.colors.text};
  margin-left: 7px;
`;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
    size: 30,
    color: theme.colors.text
}))``;

export const BackIconFilter = styled(Funnel).attrs(({ theme }) => ({
    
    size: 30,
    color: theme.colors.text
}))`
  margin-left: 100px;
  align-items: center;
`;

