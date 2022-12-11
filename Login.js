import React from 'react'
import { StyleSheet, Text, View, FlatList,ImageBackground,ScrollView } from 'react-native';
import { useState, useEffect } from "react";
import { Component } from 'react'
import axios from "axios";
import {TextInput, Button,Card } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Navigate} from 'react-router-dom';
import { and, ceil } from 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import App from '../App';
import Signup from './Signup';
import DropDownPicker from 'react-native-dropdown-picker';
const Stack = createStackNavigator();

  function Login() {
    const navigation = useNavigation(); 
    const Drawer = createDrawerNavigator();
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [Contact, setStudents] = useState([{}])
    const [loading, setLoading] = useState(true)
    let help
    const Login1 = () => {
      async function getAllStudent() {
        
        try {
          const Contact = await axios.get('http://172.31.0.116:19000/api/Contact/')
          method:'GET',
          setStudents(Contact.data)
          setLoading(true)  
        } 
        catch (error) {
          console.log(error)
        }
      }
    getAllStudent(); 
    
}
const gotoSignup= () =>{
  navigation.navigate(Signup)
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
          alignSelf:'center', height:290, opacity:0.9,
          borderColor:'red', borderRadius:10,
          marginTop:150,
          }} >
          <Text style={{alignSelf:'center', marginTop:20, fontSize:25, color:'white',}}>
            Login
          </Text>
          <TextInput
          style={styles.inputstyle}
          label = "Email"
          value = {email}
          multiline
          onChangeText= {Text => setemail(Text) }
          />
          <TextInput
          style={styles.inputstyle}
          label = "Password"
          value = {password}
          multiline
          onChangeText= {Text => setpassword(Text) }
          />

          <Button
          mode="contained"
          style={{marginTop:15, width:200,alignSelf:'center', backgroundColor:'red',}}
          onPress={() => { Login1();}}
          
          title="Login"
          >
          Login
          </Button>
          <Button onPress={gotoSignup}
          style={{color:'white'}}>
            Click Here To Go to to Signup Page
          </Button>
          <FlatList
          data={Contact}
          renderItem={({item})=>{
          console.log(item.email)
          if(item.email == email & item.password == password){


            if(item.UserType=="customer")
            {
              navigation.navigate('index')
            }
            else
            {
              
              navigation.navigate('Estimate',{iemail:item.email})  
            }
          }
          else{
            console.log("Wrong")
          }

          }
          }
          >
          </FlatList>
          
        </View>
      </ImageBackground>
      <View style={{ marginTop:170,
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

export default Login
