import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Platform, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Consult from './src/consulta/consulta';
import ConsultarCPF from './src/consultarCPF/consultarCPF';
import Situation from './src/situation/situation';
import LimparSeu from './src/limparSeu/limparSeu';
import Politia from './src/politia/politia';
import { NAV_CONST } from './src/constants/navconst';
const Stack = createStackNavigator();


const styles = StyleSheet.create({
  container: {
    flex:1,
    // marginTop: Platform.OS == 'android' ? 35 : 0,
  },
});

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={NAV_CONST.consult}
            component={Consult}
            options={{ headerShown: false }}
            />
          <Stack.Screen
            name={NAV_CONST.consultarCPF}
            component={ConsultarCPF}
            options={{ 
              headerTitle: props => <Header {...props} />,
              headerShown: false,
            }}
            />
          <Stack.Screen
            name={NAV_CONST.situation}
            component={Situation}
            options={{ 
              headerTitle: props => <Header {...props} />,
              headerShown: false,
            }}
            />
          <Stack.Screen
            name={NAV_CONST.limparSeu}
            component={LimparSeu}
            options={{ 
              headerTitle: props => <Header {...props} />,
              headerShown: false,
            }}
            />
          <Stack.Screen
            name={NAV_CONST.politia}
            component={Politia}
            options={{ 
              headerTitle: props => <Header {...props} />,
              headerShown: false,
            }}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

