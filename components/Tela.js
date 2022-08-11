import { StyleSheet, Text, View, TextInput } from 'react-native';




let gay,cor,font;

export default function Tela(props){
    gay = props.recurso
    cor = props.cor
    font = props.font
    return(
      <View>
       <Text style={{color:cor, fontSize:font}}>Exemplo {gay}</Text>
      </View>
    )
  
  
  }

  const styles = StyleSheet.create({
    txt1:{
        color:'black',
        fontSize:20
    }
  })