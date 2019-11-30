import React from 'react'
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { Platform } from 'react-native'
import  MainScreen  from './src/screens/MainScreen'
import  BigImageScreen  from './src/screens/BigImageScreen'


const ImageNavigator = createStackNavigator(
  {
  Main: MainScreen,
  Image: {
      screen:BigImageScreen
      }
  }, 
  {
      initialRouteName: 'Main',
      defaultNavigationOptions: {
          headerStyle: {
              backgroundColor: Platform.OS === 'android' ? '#005da8' : '#fff'
          },
          headerTitleStyle: {
              fontSize: 21
          },
          headerTintColor: Platform.OS === 'android' ? '#fff' : '#005da8'
      }
  }
)

export const AppNavigation = createAppContainer(ImageNavigator)

export default function App() {
  return <AppNavigation />
}
