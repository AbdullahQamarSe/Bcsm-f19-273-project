import React, { Component } from 'react'
import react,{useState,useEffect} from "react";
import { StyleSheet,Text,View , Button,Image } from "react-native";
import { useRoute } from '@react-navigation/native';
import { SliderBox } from 'react-native-image-slider-box';
import {TextInput,Card } from 'react-native-paper'
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function Article(){
    const navigation = useNavigation();
    const route = useRoute();
    const {id,brand,model,year,Variant,Transmission,mileage,email,phone} = route.params.data
    const iemail1 = route.params.iemail
    

    const updateData = () =>{
        fetch(`http://192.168.1.72:19000/api/Estimate/${id}/`,{
        method:"PUT",
        headers:{
         'Content-Type' : 'application/json'
        },
            body:JSON.stringify({brand:brand,model:model,year:year,Variant:Variant,Transmission:Transmission,mileage:mileage,
            email:email,phone:phone,instemail:iemail1})
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(iemail1)
            navigation.navigate('Estimate',{iemail:iemail1}) 
        })
    }

    return (
      <ScrollView>
        {updateData()}
      </ScrollView>
    )
}