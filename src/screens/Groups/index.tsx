import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { VictoryPie } from 'victory-native';
import { Card, CardProps } from '../../components/Card';
import { ButtonIcon } from '../../components/ButtonIcon';
import { HeaderContainer, Title, BackButton, BackIcon } from './styles';
import { Drawer } from '../../components/Drawer';
import { MONTHS } from '../../utils/months';
import { EXPENSES } from '../../utils/expenses';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Groups: { month: string };
};

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Groups'>;
  route: RouteProp<RootStackParamList, 'Groups'>;
};

type ExpensesData = {
  [key: string]: CardProps[];
};

export function Groups({ route, navigation }: Props) {
  const [selected, setSelected] = useState<string>('');

  const { month } = route.params;

  const data = EXPENSES[month as keyof typeof EXPENSES];

  if (!Array.isArray(data)) {
    return null; // or some error handling
  }

  const handleSelectCard = (id: string) => {
    setSelected(id);
  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <View style={styles.container}>
      <HeaderContainer>
        <BackButton onPress={() => navigation.goBack()}>
          <BackIcon />
        </BackButton>
        <Title>My Expenses</Title>
        <ButtonIcon icon="menu" onPress={toggleDrawer} />
      </HeaderContainer>
      <Drawer
        isOpen={isDrawerOpen}
        onClose={toggleDrawer}
        options={MONTHS.map(month => ({
          label: month.label,
          onPress: () => {
            navigation.setParams({ month: month.value });
            setIsDrawerOpen(false);
          },
        }))}
      />
      <VictoryPie
        data={data}
        x="label"
        y="value"
        colorScale={data.map(item => item.color)}
      />
      {data.map(item => (
        <Card
          key={item.id}
          data={item}
          selected={selected === item.id}
          onPress={() => handleSelectCard(item.id)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
