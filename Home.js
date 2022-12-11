import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList,ImageBackground,Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {TextInput, Button,Card } from 'react-native-paper'
import axios from "axios";
import { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();
    const [add, setStudents] = useState([{}])

    const [searchinfo, setsearchinfo] = useState([{}])
    const [city, setcity] = useState([{}])


    async function getAllStudent() {
      try {
        const add = await axios.get('http://172.31.0.116:19000/api/add/')
        method:'GET',
        setStudents(add.data)
        {URL='http://172.31.0.116:19000/'}
      } 
      catch (error) {
        console.log(error)
      }
    }
    getAllStudent(); 
  
    const Insert = (item) => {  
      console.log("Run")
      navigation.navigate('Article',{
      data:item,URL:URL
      })
   }
   
  const renderData = (item) => {
    if( setsearchinfo == item.carinfo || setsearchinfo == "" && setcity == item.city || setcity == "" )
    {
    return(
      <Card style={{alignItems:'center',marginTop:10, alignContent:'center', paddingTop:10,paddingBottom:10,}}>
          
          <Image
          style={{width:250, height:150}} 
          source={{ uri:URL+item.photo }} 
          />
          <View style={{paddingTop:10,}}>
            <Text style={{fontSize:17, fontWeight:'bold',}}>
              {item.carinfo}
            </Text>
            <Text>
              {item.price}
            </Text>
            <Text style={{fontSize:12, color:'green',}}>
              {item.city}
            </Text>
          </View>
          <Button onPress={() => Insert(item)}>
            Check Detail
          </Button>
      </Card>
    )
  }
  }


  return (
      <ScrollView>
        <View>
          <ImageBackground 
          style={{width:'100%',height:200}}
          source={require('../assets/background.jpg')}>
              <View style={{width:270,height:50, backgroundColor:'white',alignSelf:'center',
              marginTop:45, borderWidth: 1, borderColor: "red",alignItems:'center',alignSelf:'center',
              justifyContent:'center',backgroundColor:'green',borderRadius:20,opacity:0.9}}>
                <Text style={{fontWeight:'bold',color:'white',}}>
                  Buy and sale used cars online for free
                </Text>
              </View>
              <Text style={{color:'white',alignSelf:'center', justifyContent:'center',
              textAlign:'center',}} >
                Get all used and new cars across
                {"\n"}
                the country at one place
              </Text>
              <View style={{width:270,height:200,alignSelf:'center',
              marginTop:20, borderWidth: 1, borderColor: "red",alignItems:'center',alignSelf:'center',
              backgroundColor:'green',paddingTop:20,borderRadius:20,}}>
                <Text style={{fontWeight:'bold',color:'white',opacity:0.7,}}>
                  Search the cars you are looking for
                  {"\n"}
                </Text>
                <TextInput
                style={{width:200,height:50,}}
                value = {searchinfo}
                mode  = "outlined"
                onChangeText= {Text => setsearchinfo(Text) }
                placeholder={"Search Car"}
                >
                </TextInput>
                <TextInput
                style={{width:200,height:50,}}
                value = {city}
                mode  = "outlined"
                onChangeText= {Text => setcity(Text) }
                placeholder={"City"}
                >
                </TextInput>
            </View>
          </ImageBackground>    
        </View>

        <View style={{backgroundColor:'green', width:'100%', height:100, marginTop:240, }}>
          <View style={{ paddingLeft:10, marginTop:10,flexDirection:'row',
          backgroundColor:'green',width:'100%', height:100, }}>
            <Text style={{color:'white',}}>
              <Text style={{fontSize:24,}}>
                Get Evaluation
              </Text>
              {"\n"}
              Get estimated evaluation of
              {"\n"}
              your car right away
            </Text>
            <Text style={{marginLeft:10,color:'white',marginTop:22,}}>
              <Button title="Get Evaluation" 
              style={{backgroundColor:'red',}}>
              Get Evaluation
              </Button>
            </Text>
          </View>
        </View>

        <Text style={{color:'black', marginTop:20, fontSize:30, paddingLeft:20,}}>
          Featured Ads
        </Text>
            <FlatList 
            data={add}

            renderItem={({item})=>{
              return renderData(item)
            }}
            keyExtractor = {item => `${item.id}`} 
            />


<View style={{ marginTop:10,
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