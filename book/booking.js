import { Text, TouchableOpacity, View,StyleSheet, ScrollView, Alert } from 'react-native'
import React, { Component } from 'react'
import Book_Seat from './book_seat';
import RNRestart from 'react-native-restart';

export default class Booking extends Component {

  state = {
    count: 0,
    color:"red"
  };


  Booked = () => {
  
    
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
   
  };

  Final_Book=()=>{
      if(this.state.count<1)
      {
        Alert.alert("Nah! You Don't Reserve Anything")
      }
      else{
        Alert.alert("Yaah! Total Booked Seats : "+this.state.count)
      }
  }

  Reset=()=>{
    this.setState({
      count: prevState.count-prevState.count
    })
  }

  render() {
    return (
      <View >
        <ScrollView>

        <View style={{flexDirection:"row",justifyContent:"space-between",marginLeft:"2%",marginRight:"2%",marginTop:"2%"}}>
          <View style={{flexDirection:"row",alignItems:"center"}}>
            <View style={[Style.seat1,{backgroundColor:"red"}]}></View>
            <Text style={{justifyContent:"center",alignItems:"center"}}>Un Reserved</Text>
          </View>

          <View style={{flexDirection:"row",alignItems:"center"}}>
            <View style={[Style.seat1,{backgroundColor:"green"}]}></View>
            <Text style={{justifyContent:"center",alignItems:"center"}}>Reserved</Text>
          </View>

        </View>




        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
{/* left  */}
        <View style={{marginLeft:"5%"}}>
        
        <View style={{flexDirection:"row",marginTop:"15%"}}>

        
        <TouchableOpacity onPress={this.Booked}>
            <View style={{justifyContent:"center",}}>
        <Book_Seat />
        <Text >Book</Text>
        </View>
        </TouchableOpacity>
       
        <TouchableOpacity onPress={this.Booked}>
            <View style={{justifyContent:"center",}}>
        <Book_Seat />
        <Text >Book</Text>
        </View>
        </TouchableOpacity>
        </View>


        <View style={{flexDirection:"row",marginTop:"15%"}}>
        <TouchableOpacity onPress={this.Booked}>
            <View style={{justifyContent:"center",}}>
        <Book_Seat />
        <Text >Book</Text>
        </View>
        </TouchableOpacity>
        
        
        <TouchableOpacity onPress={this.Booked}>
            <View style={{justifyContent:"center",}}>
        <Book_Seat />
        <Text >Book</Text>
        </View>
        </TouchableOpacity>
        </View>

        <View style={{flexDirection:"row",marginTop:"15%"}}>
        <TouchableOpacity onPress={this.Booked}>
            <View style={{justifyContent:"center",}}>
        <Book_Seat />
        <Text >Book</Text>
        </View>
        </TouchableOpacity>

            <TouchableOpacity onPress={this.Booked}>
            <View style={{justifyContent:"center",}}>
        <Book_Seat />
        <Text >Book</Text>
        </View>
        </TouchableOpacity>

        </View>

        
        <View style={{flexDirection:"row",marginTop:"15%"}}>
           <TouchableOpacity onPress={this.Booked}>
            <View style={{justifyContent:"center",}}>
        <Book_Seat />
        <Text >Book</Text>
        </View>
        </TouchableOpacity>

            <TouchableOpacity onPress={this.Booked}>
            <View style={{justifyContent:"center",}}>
        <Book_Seat />
        <Text >Book</Text>
        </View>
        </TouchableOpacity>

        </View>

        <View style={{flexDirection:"row",marginTop:"15%"}}>
            <TouchableOpacity onPress={this.Booked}>
            <View style={{justifyContent:"center",}}>
        <Book_Seat />
        <Text >Book</Text>
        </View>
        </TouchableOpacity>

            <TouchableOpacity onPress={this.Booked}>
            <View style={{justifyContent:"center",}}>
        <Book_Seat />
        <Text >Book</Text>
        </View>
        </TouchableOpacity>

        </View>

        
        <View style={{flexDirection:"row",marginTop:"15%"}}>
            <TouchableOpacity onPress={this.Booked}>
            <View style={{justifyContent:"center",}}>
        <Book_Seat />
        <Text >Book</Text>
        </View>
        </TouchableOpacity>
            <TouchableOpacity onPress={this.Booked}>
            <View style={{justifyContent:"center",}}>
        <Book_Seat />
        <Text >Book</Text>
        </View>
        </TouchableOpacity>
        </View>

        
       
        </View>

{/* Right  */}
        <View>

        <View style={{flexDirection:"row",marginTop:"10%"}}>
            <TouchableOpacity onPress={this.Booked}>
            <View style={{justifyContent:"center",}}>
        <Book_Seat />
        <Text >Book</Text>
        </View>
        </TouchableOpacity>
            <TouchableOpacity onPress={this.Booked}>
            <View style={{justifyContent:"center",}}>
        <Book_Seat />
        <Text >Book</Text>
        </View>
        </TouchableOpacity>
            <TouchableOpacity onPress={this.Booked}>
            <View style={{justifyContent:"center",}}>
        <Book_Seat />
        <Text >Book</Text>
        </View>
        </TouchableOpacity>
        </View>

        <View style={{flexDirection:"row",marginTop:"10%"}}>
            <TouchableOpacity onPress={this.Booked}>
            <View style={{justifyContent:"center",}}>
        <Book_Seat />
        <Text >Book</Text>
        </View>
        </TouchableOpacity>
            <TouchableOpacity onPress={this.Booked}>
            <View style={{justifyContent:"center",}}>
        <Book_Seat />
        <Text >Book</Text>
        </View>
        </TouchableOpacity>
            <TouchableOpacity onPress={this.Booked}>
            <View style={{justifyContent:"center",}}>
        <Book_Seat />
        <Text >Book</Text>
        </View>
        </TouchableOpacity>
        </View>

        <View style={{flexDirection:"row",marginTop:"10%"}}>
            <TouchableOpacity onPress={this.Booked}>
            <View style={{justifyContent:"center",}}>
        <Book_Seat />
        <Text >Book</Text>
        </View>
        </TouchableOpacity>
            <TouchableOpacity onPress={this.Booked}>
            <View style={{justifyContent:"center",}}>
        <Book_Seat />
        <Text >Book</Text>
        </View>
        </TouchableOpacity>
            <TouchableOpacity onPress={this.Booked}>
            <View style={{justifyContent:"center",}}>
        <Book_Seat />
        <Text >Book</Text>
        </View>
        </TouchableOpacity>
        </View>

        <View style={{flexDirection:"row",marginTop:"10%"}}>
            <TouchableOpacity onPress={this.Booked}>
            <View style={{justifyContent:"center",}}>
        <Book_Seat />
        <Text >Book</Text>
        </View>
        </TouchableOpacity>
            <TouchableOpacity onPress={this.Booked}>
            <View style={{justifyContent:"center",}}>
        <Book_Seat />
        <Text >Book</Text>
        </View>
        </TouchableOpacity>
            <TouchableOpacity onPress={this.Booked}>
            <View style={{justifyContent:"center",}}>
        <Book_Seat />
        <Text >Book</Text>
        </View>
        </TouchableOpacity>
        </View>

        <View style={{flexDirection:"row",marginTop:"10%"}}>
            <TouchableOpacity onPress={this.Booked}>
            <View style={{justifyContent:"center",}}>
        <Book_Seat />
        <Text >Book</Text>
        </View>
        </TouchableOpacity>
            <TouchableOpacity onPress={this.Booked}>
            <View style={{justifyContent:"center",}}>
        <Book_Seat />
        <Text >Book</Text>
        </View>
        </TouchableOpacity>
            <TouchableOpacity onPress={this.Booked}>
            <View style={{justifyContent:"center",}}>
        <Book_Seat />
        <Text >Book</Text>
        </View>
        </TouchableOpacity>
        </View>

        <View style={{flexDirection:"row",marginTop:"10%"}}>
            <TouchableOpacity onPress={this.Booked}>
            <View style={{justifyContent:"center",}}>
        <Book_Seat />
        <Text >Book</Text>
        </View>
        </TouchableOpacity>
            <TouchableOpacity onPress={this.Booked}>
            <View style={{justifyContent:"center",}}>
        <Book_Seat />
        <Text >Book</Text>
        </View>
        </TouchableOpacity>
            <TouchableOpacity onPress={this.Booked}>
            <View style={{justifyContent:"center",}}>
        <Book_Seat />
        <Text >Book</Text>
        </View>
        </TouchableOpacity>
        </View>

        </View>


        </View>
        
        <View style={{flexDirection:"row",marginTop:"5%",justifyContent:"space-between",marginLeft:"5%"}}>
            <TouchableOpacity onPress={this.Booked}>
            <View style={{justifyContent:"center",}}>
        <Book_Seat />
        <Text >Book</Text>
        </View>
        </TouchableOpacity>
            <TouchableOpacity onPress={this.Booked}>
            <View style={{justifyContent:"center",}}>
        <Book_Seat />
        <Text >Book</Text>
        </View>
        </TouchableOpacity>
            <TouchableOpacity onPress={this.Booked}>
            <View style={{justifyContent:"center",}}>
        <Book_Seat />
        <Text >Book</Text>
        </View>
        </TouchableOpacity>
            <TouchableOpacity onPress={this.Booked}>
            <View style={{justifyContent:"center",}}>
        <Book_Seat />
        <Text >Book</Text>
        </View>
        </TouchableOpacity>
            <TouchableOpacity onPress={this.Booked}>
            <View style={{justifyContent:"center",}}>
        <Book_Seat />
        <Text >Book</Text>
        </View>
        </TouchableOpacity>
            <TouchableOpacity onPress={this.Booked}>
            <View style={{justifyContent:"center",}}>
        <Book_Seat />
        <Text >Book</Text>
        </View>
        </TouchableOpacity>
        </View>
      
        <View>

        </View>

        <View style={{justifyContent:"center",alignItems:"center"}}>
        <Text style={{fontSize:24,padding:17,fontWeight:"bold"}}> Total Seats Booked : {this.state.count}</Text>
        </View>


        <TouchableOpacity onPress={this.Final_Book}>
        <View style={Style.Button}>
        <Text style={{fontSize:18,fontWeight:600,color:"#FFFFFF",fontFamily:'Outfit_Semi'}}>Book The Seat</Text>
        </View>
        </TouchableOpacity>

     

       

        </ScrollView>
      </View>
    )
  }
}

const Style=StyleSheet.create({
  seat1:{
    width:20,
    height:20,
    borderRadius:5,
    borderWidth:1,
    marginRight:14,
   
    },
    Button:{
      width:"90%",
      height:52,
      backgroundColor:"#007DFE",
      marginLeft:20,
      marginRight:20,
      borderRadius:10,
      alignItems:"center",
      justifyContent:"center",
      
  },
  seat:{
    width:40,
    height:40,
    borderRadius:10,
    borderWidth:1,
    marginRight:14,
    marginTop:14
   
    },
})