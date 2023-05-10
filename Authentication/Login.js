import { View,Text,SafeAreaView,StatusBar,StyleSheet,Image,ScrollView, TouchableOpacity, TextInput} from 'react-native'
import React, { Component } from 'react'


const Top=StatusBar.currentHeight


export class Login extends Component {
  render() {
    return (
        <SafeAreaView style={Style.safearea}>
       <ScrollView>

        
{/* HEADER  */}
      <View style={Style.header}>
      <Image style={{width:200,height:200}} source={{uri:"https://res.cloudinary.com/djc99tekd/image/upload/v1683646437/ktc00_d5alfk.png"}}/>
      
      </View>


{/* LOGIN  */}

<View style={{flex:1,marginTop:"10%",}}>
    <View style={{justifyContent:"center",alignItems:"center"}}>
    <Text style={{fontSize:26,fontWeight:"bold",justifyContent:"center",alignItems:"center"}}>KCT Bus Service</Text>
    </View>
    <TextInput placeholder='Enter Email' style={[Style.Input,{marginTop:"5%",fontSize:18}]}></TextInput>
    <TextInput secureTextEntry={true} placeholder='Password' style={[Style.Input,{marginTop:18,fontFamily:'Outfit_Regular',fontSize:18}]}></TextInput>
            <TouchableOpacity>
            <Image style={{width:26,height:26,marginLeft:"85%",marginTop:-40}} source={{uri:"https://res.cloudinary.com/dxhmtgtpg/image/upload/v1681360562/Group254_uq1yhe.png"}}/>
            </TouchableOpacity>

{/* forget Password  */}

<View style={{marginLeft:20,marginTop:"5%"}}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Forgot_Password")}}>
        <Text style={{fontSize:16}}>Forget Password ?</Text>
        </TouchableOpacity>
        </View>

{/* Sign In Button  */}

            <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Select_Bus")}}>
        <View style={Style.Button}>
        <Text style={{fontSize:18,fontWeight:600,color:"#FFFFFF",fontFamily:'Outfit_Semi'}}>Sign In</Text>
        </View>
        </TouchableOpacity>
        </View>


      </ScrollView>
        </SafeAreaView>
    )
  }
}



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
        display:"flex",
        marginTop:"10%"
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
export default Login