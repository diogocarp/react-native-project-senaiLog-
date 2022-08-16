import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Caixa from './components/Caixa';
import Tela from './components/Tela';



export default class App extends Component{

    render(){
    return (
      <View>
      <Caixa/>
      </View>
    );
    };
};

