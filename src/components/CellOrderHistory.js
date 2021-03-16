

import { View, StyleSheet, Text,Image,TouchableOpacity, Button } from "react-native";
import React, { useState } from "react";
import Theme from "../constants/Theme";
const CellOrderHistoy = (props) => {  
  console.log(props);

  return (
<View   style={styles.container}>
<View style={styles.spContainer}><TouchableOpacity
  
    style={{
      height:75,
      width:75,
      //backgroundColor: Theme.COLORS.MAJOR,
     // borderColor: props.orderStatusCode===1?(Theme.COLORS.MAJOR):Theme.COLORS.MAJOR,
      borderColor:props.orderStatusCode===1?(Theme.COLORS.MUTED):props.orderStatusCode===2?(Theme.COLORS.MAJOR):Theme.COLORS.ERROR,   
      borderWidth:2,
      alignItems: 'center',
      justifyContent: 'center',
      borderTopLeftRadius: 75,
      borderBottomLeftRadius: 75,
      borderTopRightRadius: 75,
      borderBottomRightRadius: 75,
  }}
        underlayColor="#fff"
    >

    <Text style={{
 // color:Theme.COLORS.BLACK,
   fontSize:12,
   color:props.orderStatusCode===1?(Theme.COLORS.MUTED):props.orderStatusCode===2?(Theme.COLORS.MAJOR):Theme.COLORS.ERROR,   
   //height:50
}}>{props.orderStatusMsg}</Text>
    </TouchableOpacity ></View>
      <View style={{flexDirection:"column",marginHorizontal:6,justifyContent:"space-between"}}>

      <View style={{flexDirection:"row"}}>
      <Text style={styles.text}>Order ID : </Text>
      
      <Text  numberOfLines={1} style={styles.titleText}>{props.orderId}</Text>
      </View>  
      <View style={{flexDirection:"row"}}>
      <Text style={styles.text}>Total Price : </Text>
      
      <Text style={styles.txtPrice}>{props.orderTotalPrice}</Text>
      </View>
      <View style={{flexDirection:"row"}}>
      <Text style={styles.text}>Date : </Text>
      <Text style={styles.text}>{props.orderDate}</Text>
      </View>
      <View style={{flexDirection:"row",justifyContent:"flex-end"}}><TouchableOpacity
  
  style={{   
    height:30,
    width:100,
    backgroundColor: Theme.COLORS.MAJOR,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 75,
    borderBottomLeftRadius: 75,
    borderTopRightRadius: 75,
    borderBottomRightRadius: 75,
}}
      underlayColor="#fff"
  >

  <Text style={{
 fontSize:13,
 color:"white",
}}>{props.details} </Text>
  </TouchableOpacity ></View>
</View>
    </View>
    
  );
};
const styles = StyleSheet.create({
  text: {  
alignSelf:"stretch",
  },
container: {  
margin:10,
  flex: 1, 
  borderBottomWidth:1,

paddingBottom:10,
borderColor:Theme.COLORS.MAJOR,
alignContent:"space-between",
  //alignItems:"center",
  justifyContent: 'flex-start',  
  flexDirection:"row",
},   fixToText: {
  //alignItems: "center",
  flexDirection: "row",
  alignContent:"space-between",
  justifyContent: "center",
},  buttonStyle: {
  fontSize: 20,
  height: 50,
  width: 50,
  marginVertical: 30,
  backgroundColor: "black",
},spText:{
  fontSize: 25,
width:25,
//backgroundColor:"yellow",
textAlign:"center",
borderColor:"blue",
borderWidth:1,
borderRadius:10,
}, spContainer: {
  //alignItems: "center",
  flexDirection: "row",
  //width:100,
  alignContent:"space-between",
  justifyContent: "center",
}, txtPrice:{
 // fontWeight:"bold",
  color:Theme.COLORS.MAJOR,
},
titleText:{
  alignSelf:"stretch",
  width:170
},
textPlus:{
  color:"white",
   fontSize:20
},textPlusMinor:{
  color:Theme.COLORS.BLACK,
   fontSize:18
},btnCartItem:{
  flex:1,
  height:30,
  backgroundColor: Theme.COLORS.MAJOR,
  alignItems: 'center',
  justifyContent: 'center',
  borderTopLeftRadius: 25,
  borderBottomLeftRadius: 25,
  borderTopRightRadius: 25,
  borderBottomRightRadius: 25
},btnCartItemMinor:{
  flex:1,
  height:120,
  borderWidth:2,
  borderColor: Theme.COLORS.MAJOR,
  alignItems: 'center',
  justifyContent: 'center',
  borderTopLeftRadius: 25,
  borderBottomLeftRadius: 25,
  borderTopRightRadius: 25,
  borderBottomRightRadius: 25
},btnTextMinor:{
   fontSize:12,
   color:"red"
},box:{
  borderWidth:1,
  borderColor:"red"
}
});
export default CellOrderHistoy;
