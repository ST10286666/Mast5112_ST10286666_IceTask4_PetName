/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Button,
  Switch,
  Alert,
  Image,
} from 'react-native';

const App = () => {
const [PetData,SetPetInputData] = useState("");


const checkswitch = (pet: any) =>
{

  switch (pet) {
    case 'dog':
      case 'Dog':
      return 'Rex, Odin, Diesel, Butch, Ninja';
    case 'cat':
      case 'Cat':
      return 'Buffy, Cleo, Spazy, Smokey, Gizmo';
    case 'bird':
      case 'Bird':
      return 'Tweety, Blue, Snowflake, Gerald, Mike';
    case 'rabbit':
      case 'Rabbit':
      return 'Bugs, Hops, fluff, Max, Sam';
    case 'turtle':
      case 'Turtle':
      return 'Speedy, Leonardo, Mikey, Donotello, Ralph';
    case 'fish':
      case 'Fish':
      return 'Bubbles, Veolin, Goldy, Nemo, Dory';
    case 'horse':
      case 'Horse':
      return 'Pogo, Herald, Miguel, Midnight, Samson';
    default:
      return 'animal would not make a very good pet.';
  }
};

const handlerButtonPress = () =>
{
const result = checkswitch(PetData);
Alert.alert('Outcome',result)
}

  return(
    
    <SafeAreaView style={styles.Background}>
    <ScrollView style={styles.Background}>
      <View style={styles.HeaderContainer}>
        <Text  style={styles.HeaderText}>Pet Name</Text>
      </View>
      <View style={styles.ImgContainer}>
      <Image style={styles.ImgStyle} source={require('../prjSomeNameApp/Images/Pets.png')}/>
      </View>
      <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder ='Enter a pet'
        onChangeText={(data) => SetPetInputData(data)}
      />
      </View>
      <View style={styles.TextHeaderContainer}>
        <Text style={styles.TextHeader}>
          Examples:
        </Text>
      </View>
      <View>
        <Text style={styles.Examples}>
        • Dog {"\n"}
        • Cat {"\n"}
        • Horse {"\n"}
        • Turtle {"\n"} 
        </Text>
      
      </View>
      <View style={styles.ButtonContainer}>
      <Button
  
   title={'Create Name'}
   color="darkgrey"
   onPress={handlerButtonPress}
  />
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

Background:{
backgroundColor:'white'
},

HeaderContainer:{
flex:1,
alignItems:'center',
backgroundColor: 'lightblue',
borderWidth: 5,
borderBottomLeftRadius: 20,
borderBottomRightRadius: 20,
},

HeaderText:{
  fontSize: 47,
  color:'black',
  fontWeight:'bold',
},

inputContainer:{
alignItems: 'center',
marginTop:35,
},

input: {
  height: 60,
  width: 300,
  borderWidth: 2,
  padding: 10,
  fontSize:28,
  backgroundColor: 'lightblue',
},

ImgContainer:{
  alignItems: 'center',
  padding:25,
},

ImgStyle:{
  width:400,
  height:350,
 },

ButtonContainer:{
  marginTop:35,
  alignItems: 'center'
},

TextHeaderContainer:{
  alignItems: 'center',
  marginTop:15,
},

TextHeader:{
  fontSize:27,
  color:'black',

},

Examples:{
 fontSize: 20,
 color: 'black',
 backgroundColor: 'lightblue',
 borderWidth: 5,
padding: 10,
}
})

//Reference List//
//https://stackoverflow.com/questions/32469570/how-can-i-insert-a-line-break-into-a-text-component-in-react-native//
//https://stackoverflow.com/questions/66408227/react-native-switch-case-statement//

export default App;
