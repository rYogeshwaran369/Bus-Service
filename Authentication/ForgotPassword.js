import { View,Text,SafeAreaView,StatusBar,StyleSheet,Image,ScrollView, TouchableOpacity, TextInput} from 'react-native'
import React, { Component } from 'react'


const Top=StatusBar.currentHeight


export default class Forgot_Password extends Component {
  render() {
    return (
        <SafeAreaView style={Style.safearea}>
       <ScrollView>
{/* HEADER  */}
<View style={Style.header}>
      <Image style={{width:200,height:200}} source={{uri:"https://res.cloudinary.com/djc99tekd/image/upload/v1683646437/ktc00_d5alfk.png"}}/>
      
      </View>

{/* Forgot Password  */}

      <View style={{justifyContent:"space-between",marginTop:"10%"}}> 
        <Text style={{marginLeft:"8%",fontSize:20,marginTop:"13%"}}>Forgot Password ?</Text>
        <TextInput placeholder='Enter Email' style={[Style.Input,{marginTop:"8%",fontSize:18}]}></TextInput>
      </View>

{/* Sign In  */}

      <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Home")}}>
        <View style={Style.Button}>
        <Text style={{fontSize:18,fontWeight:600,color:"#FFFFFF"}}>Send</Text>
        </View>
        </TouchableOpacity>
        


        </ScrollView>
        </SafeAreaView>
    )
  }}




  const Style=StyleSheet.create({
    safearea:{
        marginTop:Top,
        display:"flex",
        justifyContent:"center",
        backgroundColor:"white"
    },
    header:{
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        display:"flex"
    },
    text:{
        fontSize:20,
        color:"#ED5F10",
    },
    Input:{
        width:"90%",
        height:55,
        marginLeft:20,
        marginRight:20,
        borderWidth:1,
        borderColor:"#D6D6D6",
        borderRadius:10,
        paddingLeft:17
    },
    Button:{
        width:"90%",
        height:52,
        backgroundColor:"#007DFE",
        marginLeft:20,
        marginRight:20,
        marginTop:"10%",
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",
        
    }
})

