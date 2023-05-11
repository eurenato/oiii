import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import {MaterialIcons} from '@expo/vector-icons';

export type ButtonIconTypeStyleProps= 'PRIMARY' | 'SECONDARY';

type Props ={
    type: ButtonIconTypeStyleProps;
}

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

`;


export const Icon = styled(MaterialIcons).attrs< Props>(({theme, type }) =>({
    size: 30,
    color: type ==='PRIMARY' ? theme.colors.text : theme.colors.text
}))`
  margin-left: 100px;
  align-items: center;
  margin-bottom: 0px;
  
`;

