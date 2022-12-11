import React from 'react'
import { StyleSheet, Text, View, FlatList,ImageBackground,ScrollView } from 'react-native';
import { useState, useEffect } from "react";
import {TextInput, Button,Card } from 'react-native-paper';

function payment() {
  
  const [Amount,setAmount] = useState("")
  const [Phone,setPhone] = useState("")

  function codev(){
      fetch('http://192.168.1.72:19000/Mpesa/MakePayment',{
      method:"Post",
      headers:{
          'Content-Type':'application/json'
          
      },
          body: JSON.stringify({amount:Amount,phone_number:Phone})
          
      })
      .then(resp => resp.json())
      .then(data => {
          console.log("Data Add Successs")
          
      })
      .catch(error=> console.log(error))  
  }  
  
  return (
    <ScrollView>
      <ImageBackground source={require('../assets/background.jpg')} style={{width:'100%',height:300}} >
            <View style={{backgroundColor:'green', width:'80%',justifyContent:'center',
            alignSelf:'center', height:300, borderColor:'red', borderRadius:10, marginTop:150, }}>
                <Text style={{color:'white',fontSize:24, textAlign:'center',}}>
                    Payment
                </Text>
                <View style={{paddingLeft:10,}}>
                    <TextInput style={styles.inputstyle} placeholder={"Amount"} 
                    value={Amount} mode="outlined" onChangeText={Text=>setAmount(Text)} />
                    <TextInput style={styles.inputstyle1} placeholder={"Phone"} 
                    value={Phone} mode="outlined" onChangeText={Text=>setPhone(Text)} />  
                </View>
                <Text>{"\n"}</Text>
                <Text style={{color:'white',fontSize:12, textAlign:'center',}}>
                    Add Amount And Phone Number
                    {"\n"}
                    To Send Payment
                </Text>
                <Button style={{backgroundColor:'red', marginTop:10,color:'white', margin:20,
                }} onPress={() => codev()} >
                    Payment
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
      width:233,
      height:40,
      alignSelf:'center',
  }
  ,
  inputstyle1:{
      marginTop:15,
      width:233,
      height:40,
      alignSelf:'center',
      MarginLeft:20,  
  }

})
export default payment
