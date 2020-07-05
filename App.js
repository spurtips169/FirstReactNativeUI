import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './components/Home';
import login from './components/login';
import Register from './components/Register';

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
       headerstyle: {
        backgroundColor:'#da70d6',
      },
      headerTintColor:'#d2b48c',
      headertitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <Stack.Screen name={'Home'} component={Home} options={{
       
      }}/>
      
      <Stack.Screen name={'login'} component={login}/>
      <Stack.Screen name={'Register'} component={Register}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
