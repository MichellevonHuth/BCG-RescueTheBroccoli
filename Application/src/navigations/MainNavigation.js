import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer' 
import IntroScreen from '../screens/Home/IntroScreen';
import ShopContainer from './ShopNavigation';
import UserContainer from './UserNavigation';

 const Stack = createStackNavigator();

function MainNavigator() {
  return(
    <Stack.Navigator
      screenOptions={{
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'center',
            flex: 1,
            display: 'none'
          }
      }}
    >
      <Stack.Screen name='Intro' component={IntroScreen} options={{ headerShown: false }} />
      <Stack.Screen name='User' component={UserContainer} options={{ headerShown: false }} />
      <Stack.Screen name='Shop' component={ShopContainer} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
} 



 const Drawer = createDrawerNavigator();

function DrawerStack() {
  return(
    <Drawer.Navigator
      drawerPosition='right'
      initialRouteName='Intro'
      drawerStyle={{
        width: 0,
        height: 0,
        display: 'none'
      }}
      screenOptions={{headerShown: false}}
    >
      <Drawer.Screen name='Intro' component={MainNavigator} />
    </Drawer.Navigator>
  )
} 


 export default function MainContainer() {
  return(
    <NavigationContainer>
      <DrawerStack/>
    </NavigationContainer>
  )
} 
 

console.disableYellowBox = true;