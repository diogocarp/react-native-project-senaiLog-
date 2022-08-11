import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Tela from './components/Tela';


export default class App extends Component{

    render(){
    return (
      <View style={styles.container}>
      <Tela recurso="2021" cor="yellow" font="20"/>
      <Tela recurso="2022" cor="red" font="25"/>
      <Tela recurso="2023" cor="blue" font="25"/>
      </View>
    );
    };
};



const styles = StyleSheet.create({

  container:{
    textAlign:"center",
    flex:1, 
    justifyContent:"center",
    backgroundColor:"white"

  }
})