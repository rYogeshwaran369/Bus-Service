import { SafeAreaView,StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from 'react-native'
import React, { Component, useEffect,useState } from 'react'
import Intro from "./intro";
import Login from "./Authentication/Login";
import Booking from "./book/booking";
import Forgot_Password from "./Authentication/ForgotPassword";
import Destination from "./Destinbation/Destination";



const Stack=createStackNavigator();


export default function App (){
    const [splashHidden, setSplashHidden] = useState(false);

    useEffect(() => {
     
      const timer = setTimeout(() => {
        setSplashHidden(true);
      }, 800);
  
      return () => clearTimeout(timer);
    }, []);
  
    if (!splashHidden) {
      
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Intro/>
        </View>
      );
    }
  
    return (
     <NavigationContainer>
      <Stack.Navigator>
        
              <Stack.Screen name="Login" options={{headerShown:false}} component={Login}/>
              <Stack.Screen name="Forgot_Password" options={{headerShown:false}} component={Forgot_Password}/>
              <Stack.Screen name="Select_Bus"  component={Destination}/>
              <Stack.Screen name="Book_Your_Seat" component={Booking}/>
 
      </Stack.Navigator>
     </NavigationContainer>
    )
}