import React, { Component } from 'react'
import react,{useState,useEffect} from "react";
import { StyleSheet,Text,View , Button,Image } from "react-native";
import { useRoute } from '@react-navigation/native';
import { SliderBox } from 'react-native-image-slider-box';
import {TextInput,Card } from 'react-native-paper'
import { ScrollView } from 'react-native-gesture-handler';
import {Linking} from 'react-native'

export default function Article(){
  
  const route = useRoute();
  const {id,city,carinfo,mileage,price,company,photo,engine,contact} = route.params.data
  const URL = route.params.URL

  const openWhatsApp = () => {
    Linking.openURL(`tel:${contact}`)
    };


    

    const [images, setImages] = React.useState([
        URL+photo,
        URL+photo,
        URL+photo,
    ]);


    return (
      <ScrollView>
        <SliderBox 
                images={images}
                style={{width:'100%', height:250}}
                sliderBoxHeight={400}
                dotColor="#FFEE58"
                inactiveDotColor="#90A4AE"  
                onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                paginationBoxVerticalPadding={20}
                autoplay
                circleLoop
        />
        <View style={{alignContent:'center', alignSelf:'center', marginTop:30,}}>
            <Text style={{fontSize:18,}}>City : {city}</Text>
            <Text style={{fontSize:18,}}>Car : {carinfo}</Text>
            <Text style={{fontSize:18,}}>Mileage : {mileage}</Text>
            <Text style={{fontSize:18,}}>Price : {price}</Text>
            <Text style={{fontSize:18,}}>Company : {company}</Text>
            <Text style={{fontSize:18,}}>Engine : {engine}</Text>
            <Text style={{fontSize:18,}}>Contact : {contact}</Text>
        </View>
        <Button onPress={openWhatsApp} style={{marginTop:50,}}
        title="Call">
          <Text>Call</Text>
        </Button>

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