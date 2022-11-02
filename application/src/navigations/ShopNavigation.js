import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/Home/HomeScreen';
import RecipeScreen from '../screens/Recipe/RecipeScreen';
import RecipesListScreen from '../screens/RecipesList/RecipesListScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import IngredientScreen from '../screens/Ingredient/IngredientScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import IngredientsDetailsScreen from '../screens/IngredientsDetails/IngredientsDetailsScreen';
import Cam from '../Cam';

const Stack = createStackNavigator();

function ShopNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
          alignSelf: 'center',
          flex: 1,
        },
      }}
    >
      <Stack.Screen name="Camera" component={Cam} />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function DrawerStack() {
  return (
    <Drawer.Navigator
      drawerPosition="bottom"
      initialRouteName="Main"
      drawerStyle={{
        width: 150,
      }}
      screenOptions={{ headerShown: false }}
      drawerContent={({ navigation }) => (
        <DrawerContainer navigation={navigation} />
      )}
    >
      <Drawer.Screen name="Main" component={ShopNavigator} />
    </Drawer.Navigator>
  );
}

export default function ShopContainer() {
  return (
    <NavigationContainer independent={true}>
      <DrawerStack />
    </NavigationContainer>
  );
}

console.disableYellowBox = true;
