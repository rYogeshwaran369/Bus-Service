import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { StatusBar,SafeAreaView,TouchableOpacity,StyleSheet,Image } from 'react-native'

const Top=StatusBar.currentHeight;

export default class Intro extends Component {
  render() {
    return (
        <SafeAreaView style={Style.Intro}>
            <View >
            <View style={{justifyContent:"center",alignItems:"center"}} >
                <Image style={{width:200,height:200,justifyContent:"center",alignItems:"center",marginTop:"100%"}} source={{uri:"https://res.cloudinary.com/djc99tekd/image/upload/v1683646437/ktc00_d5alfk.png"}}/>
            </View>
            </View>
        </SafeAreaView>
    )
  }
}

const Style=StyleSheet.create({
    Intro:{
        marginTop:Top,
        flex:1,
        flexDirection:"column",
        backgroundColor:"#FFFFFF"
       
    }
})