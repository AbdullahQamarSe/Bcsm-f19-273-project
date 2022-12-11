import React from 'react'
import { StyleSheet, Text, View, FlatList,ImageBackground,ScrollView } from 'react-native';
import { useState, useEffect } from "react";
import { Component } from 'react'
import axios from "axios";
import {TextInput, Button,Card } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Navigate} from 'react-router-dom';
import { and } from 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import App from '../App';



function Signup() {
  
  const navigation = useNavigation();
  const [firstname,setfirstname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const InsertData = () => {
   var otp = Math.floor(1000 + Math.random() * 9000);
   navigation.navigate('Verification',{
   Fname:firstname,Uemail:email,Upassword:password,otp1:otp
   })
}
const gotoLogin= () =>{
  navigation.navigate("Login")
}
  return (
    <ScrollView>
      <View style={{width:'100%', height:20, marginTop:8,}}>
      </View>
      <ImageBackground
      source={require('../assets/background.jpg')}
      style={{width:'100%',height:300}}
      >
        <View style={{backgroundColor:'green', width:'80%',justifyContent:'center',
        alignSelf:'center', height:400, 
        borderColor:'red', borderRadius:10,opacity:0.9,
        marginTop:150,
        }}>
          <Text style={{alignSelf:'center', fontSize:25, color:'white',}}>
            Sign Up
          </Text>
          <TextInput
            style={styles.inputstyle}
            label = "First Name"
            value = {firstname}
            mode  = "outlined"
            onChangeText= {Text => setfirstname(Text) }
          />

          <TextInput
            style={styles.inputstyle}
            label = "Email"
            value = {email}
            mode  = "outlined"
            onChangeText= {Text => setemail(Text) }
          />

          <TextInput
            style={styles.inputstyle}
            label = "Password"
            value = {password}
            mode  = "outlined"
            onChangeText= {Text => setpassword(Text) }
          />

          <Button
            style={{marginTop:15, width:200,alignSelf:'center', backgroundColor:'red',}}
            mode="contained"
            onPress={() => InsertData()}
            title="Insert Data"
          >
            Sign Up
          </Button>
          <Button onPress={gotoLogin}>
            Click Here To Go to to Login Page
          </Button>
        </View>
      </ImageBackground>
      <View style={{ marginTop:300,
        backgroundColor:'green',width:'100%', height:190,paddingTop:20,justifyContent:'center', alignSelf:'center', }}>
        <Text style={{color:'white', justifyContent:'center', alignSelf:'center',
        paddingLeft:0,}}>
        {"\n"}  
        Subscribe to our
        Newsletter
        </Text>
        <TextInput
        style={styles.inputstyle}
        placeholder={" Enter Your Text Here"}
        >
        </TextInput>
          <Text style={{color:'white', justifyContent:'center', alignSelf:'center',
          paddingLeft:0, justifyContent:'center', alignContent:'center',}}>
            {"\n"}
            About Us
            {"\n"}
            {"\n"}
            Our Services
            {"\n"}
            {"\n"}
          </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    
    inputstyle:{
        
        marginTop:15,
        width:200,
        alignSelf:'center',
    }

})

export default Signup
