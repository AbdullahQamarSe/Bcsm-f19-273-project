import React from 'react'
import { StyleSheet, Text, View, FlatList,ImageBackground,ScrollView } from 'react-native';
import { useState, useEffect } from "react";
import {TextInput, Button,Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


export default function Estimatepage() {
    const navigation = useNavigation();  
    

    const [brand,setbrand] = useState("")
    const [model,setmodel] = useState("")
    const [year,setyear] = useState("")
    const [Variant,setVariant] = useState("")
    const [Transmission,setTransmission] = useState("")
    const [mileage,setmileage] = useState("")
    const [email,setemail] = useState("")
    const [phone,setphone] = useState("")


    function codev(){

            let instemail="0"
            fetch('http://192.168.1.72:19000/api/Estimate/',{
            method:"Post",
            headers:{
                'Content-Type':'application/json'
                
            },
                body: JSON.stringify({brand:brand,model:model,year:year,Variant:Variant
                ,Transmission:Transmission,mileage:mileage,email:email,phone:phone,instemail:instemail})
            })
            .then(resp => resp.json())
            .then(data => {

                navigation.navigate('Home')
                console.log("Data Add Successs")
                
            })
            .catch(error=> console.log(error))
    }


    return (

    <ScrollView>      
        <ImageBackground source={require('../assets/background.jpg')} style={{width:'100%',height:300}} >
            <View style={{backgroundColor:'green', width:'90%',justifyContent:'center',
            alignSelf:'center', height:400, borderColor:'red', borderRadius:10, marginTop:150, }}>
                <Text style={{color:'white',fontSize:24, textAlign:'center',}}>
                    Get Evaluation
                </Text>
                <View style={{flexDirection: "row" ,paddingLeft:10,}}>
                    <TextInput style={styles.inputstyle} placeholder={"Brand"} 
                    value={brand} mode="outlined" onChangeText={Text=>setbrand(Text)} />
                    <Text> </Text>
                    <TextInput style={styles.inputstyle1} placeholder={"Model"} 
                    value={model} mode="outlined" onChangeText={Text=>setmodel(Text)} />  
                </View>
                <View style={{flexDirection: "row" ,paddingLeft:10,}}>
                    <TextInput style={styles.inputstyle} placeholder={"Year"} 
                    value={year} mode="outlined" onChangeText={Text=>setyear(Text)} />
                    <Text> </Text>
                    <TextInput style={styles.inputstyle1} placeholder={"Variant"}
                    value={Variant} mode="outlined" onChangeText={Text=>setVariant(Text)} />  
                </View>
                <View style={{flexDirection: "row" ,paddingLeft:10,}}>
                    <TextInput style={styles.inputstyle} placeholder={"Transmission"} 
                    value={Transmission} mode="outlined" onChangeText={Text=>setTransmission(Text)} />
                    <Text> </Text>
                    <TextInput style={styles.inputstyle1} placeholder={"Mileage"}
                    value={mileage} mode="outlined" onChangeText={Text=>setmileage(Text)} />  
                </View>
                <View style={{flexDirection: "row" ,paddingLeft:10,}}>
                    <TextInput style={styles.inputstyle} placeholder={"Email"} 
                    value={email} mode="outlined" onChangeText={Text=>setemail(Text)} />
                    <Text> </Text>
                    <TextInput style={styles.inputstyle1} placeholder={"Phone"}
                    value={phone} mode="outlined" onChangeText={Text=>setphone(Text)} /> 
                </View>
                <Text style={{color:'white',fontSize:12, textAlign:'center',}}>
                    By Clicking Get Evaluation Button Below you agree with our “Terms & Conditions”
                </Text>
                <Button style={{backgroundColor:'red', marginTop:10,color:'white', margin:20,
                }} onPress={() => codev()} >
                    Get Evaluation
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
        width:133,
        height:40,
        alignSelf:'center',
    }
    ,
    inputstyle1:{
        marginTop:15,
        width:133,
        height:40,
        alignSelf:'center',
        MarginLeft:20,  
    }

})


