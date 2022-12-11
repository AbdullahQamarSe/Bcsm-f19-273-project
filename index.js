import react,{useState,useEffect} from "react";
import { StyleSheet,Text,View , Button } from "react-native";
import { Component } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./Home";
import add_post from './add_post';
import example from './example';
import Verification from './Verification';
import Estimate from './Estimate';
import Estimatepage from './Estimatepage';
import EstimateJob from './EstimateJob';
import Article from './Article';
import payment from './payment';
import Login from './Login';
import 'react-native-gesture-handler';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from "react-native-gesture-handler";
const Stack = createStackNavigator()

const Drawer = createDrawerNavigator();

export default function index() {
    return (
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Post Your Add" component={add_post} />
            <Drawer.Screen name="Payment" component={payment} />
            <Drawer.Screen name="EstimatePage" component={Estimatepage} />
          </Drawer.Navigator>
    );
}

