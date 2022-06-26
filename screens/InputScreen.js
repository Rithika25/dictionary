import React, { Component } from 'react';
import { Button, View, Text,TouchableOpacity,TextInput } from 'react-native';
import {Header} from 'react-native-elements'


export default class App extends Component {
  render() {
    return (
      <View>
           <Header
           background={'red'}
           centerComponent={{ text: 'Pocket Dictionary',
            style: { color: '#fff', fontSize: 20 }, }}
           />
       
    <Text>click on the Button to find the meaning of the word</Text>

<TouchableOpacity
style ={styles.searchButton}
onPress={()=>{
    this.props.navigation.navigate('HomeScreen')
}}
>
</TouchableOpacity>
</View>

    );
  }
}