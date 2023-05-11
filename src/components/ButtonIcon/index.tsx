import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Container } from './styles';

type Props = {
  icon: string;
  onPress: () => void;
};

export function ButtonIcon({ icon, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container>
        <Ionicons name="filter" size={24} color="#fff" />
      </Container>
    </TouchableOpacity>
  );
}
