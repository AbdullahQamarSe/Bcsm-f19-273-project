import react,{useState,useEffect} from "react";
import { StyleSheet,Text,View , Button } from "react-native";
import { Component } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Signup from './Screens/Signup';
import Login from './Screens/Login';
import Home from './Screens/Home';
import Estimate from './Screens/Estimate';
import Estimatepage from './Screens/Estimatepage';
import EstimateJob from './Screens/EstimateJob';
import index from "./Screens";
import Verification from "./Screens/Verification";
import 'react-native-gesture-handler';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();
import Article from './Screens/Article';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from "react-native-gesture-handler";
const Stack = createStackNavigator()

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login"
          screenOptions={{
            headerShown: false
          }}
          >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="index" component={index} />
            <Stack.Screen name="Article" component={Article} />
            <Stack.Screen name="Estimate" component={Estimate} />
            <Stack.Screen name="Estimatepage" component={Estimatepage} />
            <Stack.Screen name="EstimateJob" component={EstimateJob} />
            <Stack.Screen name="Verification" component={Verification} />
          </Stack.Navigator>
        </NavigationContainer>

    );
}



