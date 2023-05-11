import { TouchableOpacity } from "react-native";
import { Touchable } from "react-native";
import styled, { css } from "styled-components/native";

export type FilterStyleProps = {
    isActive?: boolean;
}

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  
`;