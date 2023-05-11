import { StatusBar } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { Groups } from './src/screens/Groups';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import { NavigationContainer } from '@react-navigation/native';
import {useFonts,Quicksand_400Regular,Quicksand_700Bold} from '@expo-google-fonts/quicksand';

import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({Quicksand_400Regular, Quicksand_700Bold});

  return (
    <NavigationContainer>{ 
    <ThemeProvider theme={theme}>
      <StatusBar
       barStyle='dark-content'
      />
     {fontsLoaded ? <Groups/>: <Loading/>}
    </ThemeProvider>
    }</NavigationContainer>
  );
}
