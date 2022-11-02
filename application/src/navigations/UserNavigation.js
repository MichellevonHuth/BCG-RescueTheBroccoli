import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer' 
import HomeScreen from '../screens/Home/HomeScreen';
import IntroScreen from '../screens/Home/IntroScreen';
import Discover from '../screens/Categories/Discover';
import RecipeScreen from '../screens/Recipe/RecipeScreen';
import RecipesListScreen from '../screens/RecipesList/RecipesListScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import IngredientScreen from '../screens/Ingredient/IngredientScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import IngredientsDetailsScreen from '../screens/IngredientsDetails/IngredientsDetailsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

 const Tab = createBottomTabNavigator();

 export default function UserContainer() {
  return(
    <Tab.Navigator>
      <Tab.Screen name='Wishlist' component={Discover} options={{ headerShown: false }}/>
      <Tab.Screen name='Home' component={HomeScreen} options={{ headerShown: false }}/>
      <Tab.Screen name='Map' component={HomeScreen} options={{ headerShown: false }}/>
      <Tab.Screen name='User' component={IngredientsDetailsScreen} options={{ headerShown: false }}/>
    </Tab.Navigator>
  )
} 
 

console.disableYellowBox = true;