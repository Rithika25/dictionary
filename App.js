import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import InputScreen from './screens/InputScreen';
import{createAppContainer,createSwitchNavigator}from 'react-navigation'

export default class App extends Component{
  render(){
    return(
      <View style={{flex:1}}>  
         
      </View>
    )
  }
}
var AppNavigator=createSwitchNavigator({
  HomeScreen:HomeScreen,
  InputScreen:InputScreen

})
const AppContainer=createAppContainer(AppNavigator)
