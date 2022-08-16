import { View } from "react-native";

export default function(props){
   
    
    return(
      <View style={{width:"100%",height:"400%", flexDirection:"column", justifyContent:"center", alignItems:"stretch"}}>
        <View style={{width:50,height:50,backgroundColor:"lightblue"}}></View>
        <View style={{width:50,height:50,backgroundColor:"blue"}}></View>
        <View style={{width:50,height:50,backgroundColor:"darkblue"}}></View>
      </View>
    )
  
  
  }