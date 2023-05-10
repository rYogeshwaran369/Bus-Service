import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class Destination_Card extends Component {
    render(){
  return (
    <View style={Style.card}>
       <View style={{flexDirection:"row",marginTop:"5%",justifyContent:"space-between",margin:"5%"}}>
        <View >
            <Text style={{color:""}}>  Departure On</Text>
            <Text> {this.props.st}</Text>
        </View>

        <View>
            <Text>Total Travel Time</Text>
            <Text>  {this.props.end}</Text>
        </View>

        <View style={{justifyContent:"center",alignItems:"center"}}>
            <Text>Number</Text>
            <Text>  {this.props.num}</Text>
        </View>
       </View>
       <View style={{flexDirection:"row",justifyContent:"space-between",marginLeft:"3%",marginRight:"3%"}}>
        </View>


    <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:'5%',marginLeft:"5%",}}>
       <View>
        <View style={{flexDirection:"row",}}>
            <View style={Style.circle}></View>
            <Text style={{marginLeft:"4%"}}> {this.props.stp}</Text>
        </View>

        <View style={{flexDirection:"row",marginTop:"25%"}}>
            <View style={Style.circle}></View>
            <Text style={{marginLeft:"4%"}}>{this.props.endp}</Text>
        </View>

       </View>
       <View style={Style.Button}>
        <Text style={{fontSize:18,fontWeight:600,color:"#FFFFFF",fontFamily:'Outfit_Semi'}}>Book Now</Text>
        </View>
       </View>
      
    </View>
  )
}
}


const Style=StyleSheet.create({
    card:{
        display:"flex",
        marginTop:"5%",
        backgroundColor:"#FDFCFA",
        width:"90%",
        height:180,
        borderRadius:10,
        borderColor:"black",
        borderWidth:1,
        
        
    },
    circle:{
        width:20,
        height:20,
        backgroundColor:"green",
        borderRadius:50,
        borderWidth:2,
        borderColor:"#89CFF0"
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
        width:"40%",
        height:42,
        backgroundColor:"#007DFE",
        marginTop:"3%",
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",
        textAlign:"right",
       
        marginRight:10
    }

})