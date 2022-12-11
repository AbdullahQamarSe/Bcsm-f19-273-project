import React, { Component } from 'react';
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList ,ImageBackground,ScrollView} from 'react-native';
import {TextInput, Button } from 'react-native-paper';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';    
import { ToastAndroid, TouchableHighlight } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Avatar, } from 'react-native-paper'
import axios from "axios";
import mime from "mime";

var localUri ="0"
var filename ="0"
var match ="0"
var type  ="0"

function add_post() {
    let featured = '0'
    const [Picone, setPicone] = React.useState(null);
    const [city,setcity] = useState("")
    const [carinfo,setcarinfo] = useState("")
    const [milage,setmilage] = useState("")
    const [price,setprice] = useState("")
    const [company,setcompany] = useState("")
    const [engine, setengine] = useState("");
    const [contact, setcontact] = useState("");
    const [email, setemail] = useState("");
    

    const takePhoto= async () => {

      let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: false,
          aspect: [4, 3],
          quality: 1,
      });

      if (result.cancelled) {
          return;
      }
      localUri = result.uri;
      setPicone(localUri);
      filename = localUri.split('/').pop();

      match = /\.(\w+)$/.exec(filename);
      type = match ? `image/${match[1]}` : `image`;  
  }



  const Upload= async () => {
    
    let formData = new FormData();

    formData.append('photo', { uri: localUri, name: filename, type });
    formData.append('city',city);
    formData.append('carinfo',carinfo);
    formData.append('milage',milage);
    formData.append('price',price);
    formData.append('company',company);
    formData.append('engine',engine);
    formData.append('contact',contact); 
    formData.append('email',email);
    formData.append('featured',featured);
    
    await axios.post('http://192.168.1.72:19000/api/add/', formData,{
    accept: 'application/json',
    headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then(res => {
        console.log("success")
    }).catch(error => {
        console.log(error);
    });
}


    return (
      <ScrollView>
        <ImageBackground 
           style={{width:'100%',height:200, opacity:0.8,}}
            source={require('../assets/background.jpg')}>
              <View style={{width:300,height:210, backgroundColor:'white',alignSelf:'center',
              marginTop:95, borderWidth: 1, borderColor: "red",alignItems:'center',alignSelf:'center',
              justifyContent:'center',backgroundColor:'green',borderRadius:20}}>
              <Text style={{fontWeight:'bold',color:'white',fontSize:20,}}>
              Sell your cars in just 3 steps
              </Text>
                <View style={{flexDirection:'row',}}>
                  <View style={{marginTop:20,}}>
                      <Text style={{borderWidth:1, backgroundColor:'white', 
                      width:50, height:50, borderRadius:40, textAlign:'center', alignContent:'center',
                      justifyContent:'center', alignSelf:'center' ,alignItems:'center',paddingTop:14,}}>
                        1
                      </Text>
                      <Text style={{fontSize:19,color:'white',textAlign:'center', alignContent:'center',
                      justifyContent:'center', alignSelf:'center' ,alignItems:'center',paddingTop:14,}}>
                        Information
                      </Text>
                      <Text style={{color:'white',fontSize:7,textAlign:'center', alignContent:'center',
                      justifyContent:'center', alignSelf:'center' ,alignItems:'center',paddingTop:14,}}>
                        Enter all the information about
                        {"\n"}
                        your car
                      </Text>
                  </View>
                  <View style={{paddingLeft:10,marginTop:20,}}>
                      <Text style={{borderWidth:1, backgroundColor:'white', 
                      width:50, height:50, borderRadius:40, textAlign:'center', alignContent:'center',
                      justifyContent:'center', alignSelf:'center' ,alignItems:'center',paddingTop:14,}}>
                        2
                      </Text>
                      <Text style={{fontSize:19,color:'white',textAlign:'center', alignContent:'center',
                      justifyContent:'center', alignSelf:'center' ,alignItems:'center',paddingTop:14,}}>
                        Photos
                      </Text>
                      <Text style={{color:'white',fontSize:7,textAlign:'center', alignContent:'center',
                      justifyContent:'center', alignSelf:'center' ,alignItems:'center',paddingTop:14,}}>
                        Upload pictures of your 
                        {"\n"}
                        cars from all angles
                      </Text>
                  </View>
                  <View style={{paddingLeft:10,marginTop:20,}}>
                      <Text style={{borderWidth:1, backgroundColor:'white', 
                      width:50, height:50, borderRadius:40, textAlign:'center', alignContent:'center',
                      justifyContent:'center', alignSelf:'center' ,alignItems:'center',paddingTop:14,}}>
                        3
                      </Text>
                      <Text style={{fontSize:19,color:'white',textAlign:'center', alignContent:'center',
                      justifyContent:'center', alignSelf:'center' ,alignItems:'center',paddingTop:14,}}>
                        Price
                      </Text>
                      <Text style={{color:'white',fontSize:7,textAlign:'center', alignContent:'center',
                      justifyContent:'center', alignSelf:'center' ,alignItems:'center',paddingTop:14,}}>
                        Add the price at which you
                        {"\n"}
                        are will to sell the car
                      </Text>
                  </View>
                </View>
              </View>
         </ImageBackground>
        <View style={{backgroundColor:'green', width:'100%', height:400, marginTop:120,}}>
        <Text style={{alignSelf:'center', fontSize:25, color:'white',}}>
            Car Information
          </Text>
            <TextInput
                style={styles.inputstyle}
                label = "City"
                value = {city}
                mode  = "outlined"
                onChangeText= {Text => setcity(Text) }
            />
            <TextInput
                style={styles.inputstyle}
                label = "Car Information"
                value = {carinfo}
                mode  = "outlined"
                onChangeText= {Text => setcarinfo(Text) }
            />
            <TextInput
                style={styles.inputstyle}
                label = "Milage"
                value = {milage}
                mode  = "outlined"
                onChangeText= {Text => setmilage(Text) }
            />
            <TextInput
                style={styles.inputstyle}
                label = "Price"
                value = {price}
                mode  = "outlined"
                onChangeText= {Text => setprice(Text) }
            />
            <TextInput
                style={styles.inputstyle}
                label = "Company"
                value = {company}
                mode  = "outlined"
                onChangeText= {Text => setcompany(Text) }
            />
        </View>
        <View style={{backgroundColor:'green', width:'100%', height:170, marginTop:10,}}>
            <Text style={{alignSelf:'center', fontSize:25, color:'white',}}>
            Image Upload
            </Text>
            <Text>{"\n"}</Text>
            <Button
              mode='contained'
              onPress={takePhoto}
              style={{width:140,alignItems:'center',alignSelf:'center',
              justifyContent:'center',}}
            >
                Upload Image
            </Button>
            <Text>{"\n"}</Text>
          </View>
          <View style={{backgroundColor:'green', width:'100%', height:260, marginTop:10,}}>
            <Text style={{alignSelf:'center', fontSize:25, color:'white',}}>
              Types
            </Text>
            <TextInput
                style={styles.inputstyle}
                label = "Engine"
                value = {engine}
                mode  = "outlined"
                onChangeText= {Text => setengine(Text) }
            />
            <TextInput
                style={styles.inputstyle}
                label = "Contact"
                value = {contact}
                mode  = "outlined"
                onChangeText= {Text => setcontact(Text) }
            />
            <TextInput
                style={styles.inputstyle}
                label = "Email"
                value = {email}
                mode  = "outlined"
                onChangeText= {Text => setemail(Text) }
            />
            
          </View>

          <View style={{backgroundColor:'green', width:'100%', height:130, marginTop:10,}}>
            <Text style={{alignSelf:'center', fontSize:25, color:'white',}}>
            Submit
            </Text>
            <Text>{"\n"}</Text>
            <Button
              onPress={Upload}
              mode='contained'
              style={{width:140,alignItems:'center',alignSelf:'center',
              justifyContent:'center',}}
            >
                Submit
            </Button>
          </View>


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

export default add_post
