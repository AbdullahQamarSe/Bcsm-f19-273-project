import React, { Component } from 'react'
import { View,Text,StyleSheet } from 'react-native'
import { useState, useEffect } from "react";
import { FlatList } from 'react-native-gesture-handler';

export default function example() {
    
    const [MyUserData, setMyUserData] = useState();

    const getUserData = async () =>{
        try {
            const response = await fetch(
            "http://192.168.1.77:19000/api/add/"
            );
            const myData = await response.json();
            setMyUserData(myData);
            console.log(myData);
        }
        catch(error)
        {
            console.log(error);
        }
    };
    useEffect(()=>{
        getUserData();
    },[]);


    
    
    
    return (
      <View>
        <FlatList 
            data={MyUserData}
            renderItem={([item])=>{
            return <View>
                <View>
                    <Image
                      source={{uri:item.image}}
                    />
                </View>
                <View>
                    <Text>{item.carinfo}</Text>
                    <Text>{item.price}</Text>
                    <Text>{item.city}</Text>
                </View>    
            </View>
            }}
        />
      </View>
    )
}
