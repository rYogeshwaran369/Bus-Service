import { View, Text,StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { Component } from 'react'



export default class Book_Seat extends Component {

    state={
        color:"red",
        count:0
    }

    Clicked=()=>{
        if(this.state.color=='green')
        {
            Alert.alert("Nah!, Seat has been Reserved!")
        }
        else{
        this.setState({
            color:'green',
            count:this.state.count+1
        })
    }
    }

   
   
    
    render(){
  return (
    <View>
        <TouchableOpacity onPress={this.Clicked}>
        <View style={[Style.seat,{backgroundColor:this.state.color}]}>
        </View>
        </TouchableOpacity>
    </View>
  )
}
}

const Style=StyleSheet.create({
    seat:{
    width:40,
    height:40,
    borderRadius:10,
    borderWidth:1,
    marginRight:14,
    marginTop:14
    }
})