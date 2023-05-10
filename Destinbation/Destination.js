import { ScrollView, Text, View } from 'react-native'
import React, { Component } from 'react'
import Destination_Card from './destination_card';

import { StatusBar,SafeAreaView,TouchableOpacity,StyleSheet } from 'react-native'

const Top=StatusBar.currentHeight;



export default class Destination extends Component {
  render() {
    return (
        <SafeAreaView style={Style.Destination}> 
        <ScrollView style={{marginBottom:"5%"}}>
            <View style={{justifyContent:"center",marginTop:"3%"}}>

            <Text style={{fontSize:20,marginLeft:20,fontWeight:"bold",color:"white"}}>Get Your Bus !</Text>

            <View style={{justifyContent:"center",alignItems:"center"}}>

                <TouchableOpacity style={Style.Touchable} onPress={()=>{this.props.navigation.navigate("Book_Your_Seat")}}>

                <Destination_Card st={"1:00AM"} end={"06:00"} stp={"KCT"} num={"TN37BZ123"} endp={"GANDHIPURAM"}/>

</TouchableOpacity>
               
                <TouchableOpacity style={Style.Touchable} onPress={()=>{this.props.navigation.navigate("Book_Your_Seat")}}>
                <Destination_Card st={"1:00AM"} end={"06:00"} stp={"KCT"} num={"TN37BZ123"} endp={"THUDIYALUR"}/>
                </TouchableOpacity>

                <TouchableOpacity style={Style.Touchable} onPress={()=>{this.props.navigation.navigate("Book_Your_Seat")}}>
                <Destination_Card st={"1:00AM"} end={"06:00"} stp={"KCT"} num={"TN37BZ123"} endp={"UKKADAM"}/>
                </TouchableOpacity>

                <TouchableOpacity style={Style.Touchable} onPress={()=>{this.props.navigation.navigate("Book_Your_Seat")}}>
                <Destination_Card st={"1:00AM"} end={"06:00"} stp={"KCT"} num={"TN37BZ123"} endp={"PEELAMEDU"}/>
                </TouchableOpacity>

                <TouchableOpacity style={Style.Touchable} onPress={()=>{this.props.navigation.navigate("Book_Your_Seat")}}>
                <Destination_Card st={"1:00AM"} end={"06:00"} stp={"KCT"} num={"TN37BZ123"} endp={"KOVAIPUDUR"}/>
                </TouchableOpacity>
                
            </View>

            </View>
        </ScrollView>

        </SafeAreaView>
      
    )
  }
}

const Style=StyleSheet.create({
    Destination:{
        backgroundColor:"black",
        display:"flex",
        width:"100%",
        height:"100%",
      },
      Touchable:{
        width:"100%",
        justifyContent:"center",
        alignItems:"center"
      }
})