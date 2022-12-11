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
const Stack = createStackNavigator();
import { useRoute } from '@react-navigation/native';


export default function Estimate() {
  const route = useRoute();
  const navigation = useNavigation();
  const iemail = route.params.iemail

  const [add, setStudents] = useState([{}])
    async function getAllStudent() {
      try {
        const add = await axios.get('http://192.168.1.72:19000/api/Estimate/')
        method:'GET',
        setStudents(add.data)
      } 
      catch (error) {
        console.log(error)
      }
    }
    getAllStudent(); 

    
    const Insert = (item) => {
      navigation.navigate('EstimateJob',{
      data:item , iemail:iemail
      })
   }
   const navlog = () =>{
    navigation.navigate("Login")
   }
    const renderData = (item) => {
      if(item.instemail=="0")
      {
      return(
        <Card style={{alignItems:'center',marginTop:10, alignContent:'center', paddingTop:10,paddingBottom:10,}}>
            <Button onPress={navlog}>
              Home
            </Button>
            <View style={{paddingTop:10,}}>
              <Text style={{fontSize:17, fontWeight:'bold',}}>
                {item.brand}
              </Text>
              <Text>
                {item.model}
              </Text>
              <Text style={{fontSize:12, color:'green',}}>
                {item.year}
              </Text>
              <Text style={{fontSize:12, color:'green',}}>
                {item.Variant}
              </Text>
              <Text style={{fontSize:12, color:'green',}}>
                {item.Transmission}
              </Text>
              <Text style={{fontSize:12, color:'green',}}>
                {item.mileage}
              </Text>
              <Text style={{fontSize:12, color:'green',}}>
                {item.email}
              </Text>
              <Text style={{fontSize:12, color:'green',}}>
                {item.phone}
              </Text>
            </View>
            <Button onPress={() => Insert(item)}>
              Accept
            </Button>
        </Card>
      )
      }
      else if(item.instemail==iemail){
        return(
          <Card style={{alignItems:'center',marginTop:10, alignContent:'center', paddingTop:10,paddingBottom:10,}}>
              <Text style={{alignItems:'center',marginTop:10, alignContent:'center',fontSize:18}}>
                Jobs Accepted
              </Text>
              <View style={{paddingTop:10,}}>
                <Text style={{fontSize:17, fontWeight:'bold',}}>
                  {item.brand}
                </Text>
                <Text>
                  {item.model}
                </Text>
                <Text style={{fontSize:12, color:'green',}}>
                  {item.year}
                </Text>
                <Text style={{fontSize:12, color:'green',}}>
                  {item.Variant}
                </Text>
                <Text style={{fontSize:12, color:'green',}}>
                  {item.Transmission}
                </Text>
                <Text style={{fontSize:12, color:'green',}}>
                  {item.mileage}
                </Text>
                <Text style={{fontSize:12, color:'green',}}>
                  {item.email}
                </Text>
                <Text style={{fontSize:12, color:'green',}}>
                  {item.phone}
                </Text>
              </View>
          </Card>
        )
      }
      else{

      }
    }

  
    return (
      <ScrollView>
        <FlatList 
            data={add}
            renderItem={({item})=>{
              return renderData(item)
            }}
            keyExtractor = {item => `${item.id}`} 
            />
      </ScrollView>
    )
}
