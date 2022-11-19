import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import foto from './pemandangan.jpg';

const App = () => {
  return (
  <View >
  <Teks />
  <Teks />
  <Text>Selamat Datang</Text>
  <Image source={{uri:'https://placeimg.com/100/100/nature'}} style={{width:100, height:100}}></Image>
  <TextInput style ={{borderWidth:1}}/>
  <Photo />
  <Tampilan />
  </View>
  );
}

const Teks = () => {
  return (
    <Text>Hello World...</Text>
  )
}

const Photo = () => {
  return (
      <Image source={foto} style={{width:200, height:200}}/>
  )
}

const Tampilan = () => {
  return (
    <View style={{width:100, height:100, backgroundColor:'red'}}/>
  )
}

export default App;