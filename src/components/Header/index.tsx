import React from 'react';
import { View, ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, BackButton, Title, BackIcon } from './styles';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, showBackButton = true }) => {
  const navigation = useNavigation();

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={() => navigation.goBack()}>
          <BackIcon />
        </BackButton>
      )}
      <Title>{title}</Title>
      <View style={headerStyle} />
    </Container>
  );
};

const headerStyle: ViewStyle = {
  flex: 1,
};

export default Header;
