
import { color } from "react-native-reanimated";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { View, StyleSheet, Text,Image,TouchableOpacity, Button } from "react-native";
import { OrderDetails } from '../AppStyles';
import React, { useState } from "react";
import Theme from "../constants/Theme";
import Close from "./Close";
const CellOrderHistoy = (props) => {  
  console.log(props);
  const [counter, setCounter] = useState(1);

const [flag, setFlag] = useState(false);
  const [dynamicView, setDynamicView] = useState(<View style={styles.spContainer}><TouchableOpacity
  
    style={{
      flex:1,
      height:30,
      //backgroundColor: Theme.COLORS.MAJOR,
      borderColor: Theme.COLORS.MAJOR,
      borderWidth:1,
      alignItems: 'center',
      justifyContent: 'center',
      borderTopLeftRadius: 25,
      borderBottomLeftRadius: 25,
      borderTopRightRadius: 25,
      borderBottomRightRadius: 25,
        
  }}
         onPress={() => {
          setFlag(true);
}}
        underlayColor="#fff"
    >

    <Text style={styles.btnTextMinor}>Remove From Cart</Text>
    </TouchableOpacity ></View>);
  const spinner=(<View style={styles.spContainer}>
  <TouchableOpacity
    style={{
      width: 30,
      height:30,
      //backgroundColor: Theme.COLORS.MAJOR,
      borderColor: Theme.COLORS.MAJOR,
      borderWidth:1,
      alignItems: 'center',
      justifyContent: 'center',
      borderTopLeftRadius: 25,
      borderBottomLeftRadius: 25
  }}
         onPress={() => {
          console.log(counter);
          if (counter % 2 == 0) {
            setCounter(counter / 2);
          }else{
           // setFlag(true)
          }
          props.onDecrease();
        }}
        underlayColor="#fff"
    >

    <Text style={styles.textPlusMinor
    } >-</Text>
    </TouchableOpacity >

 
    <Text style={{flex:1,textAlign:"center",textAlignVertical:"center",fontSize:18, borderColor:Theme.COLORS.MAJOR,
  borderWidth:1,marginHorizontal:3}}>{counter}</Text>
    <TouchableOpacity
      style={{
        width: 30,
        height:30,
       // backgroundColor: Theme.COLORS.MAJOR,
        borderColor: Theme.COLORS.MAJOR,
        borderWidth:1,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25
    }}
      onPress={() => {
  
        setCounter(counter * 2);
        props.onIncrease();
      }}
      underlayColor="#fff"
    >
      <Text style={styles.textPlusMinor
      
      
      
      }>+</Text>
    </TouchableOpacity>
    </View>)
  return (


<View   style={styles.container}>
  


<View style={styles.spContainer}><TouchableOpacity
  
    style={{
     
      height:75,
      width:75,
      //backgroundColor: Theme.COLORS.MAJOR,
     // borderColor: props.orderStatusCode===1?(Theme.COLORS.MAJOR):Theme.COLORS.MAJOR,
      borderColor:props.orderStatusCode===1?("blue"):props.orderStatusCode===2?(Theme.COLORS.MAJOR):"red",

   
      borderWidth:5,
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
   color:props.orderStatusCode===1?("blue"):props.orderStatusCode===2?(Theme.COLORS.MAJOR):"red",
   //height:50
}}>{props.orderStatusMsg}</Text>
    </TouchableOpacity ></View>









      {/* <Image style={RecipeCard.photo}  source={{ uri: null }} /> */}
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
   // borderColor: props.orderStatusCode===1?(Theme.COLORS.MAJOR):Theme.COLORS.MAJOR,
   // borderColor:Theme.COLORS.MAJOR,
    //borderWidth:1,
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
 fontSize:13,
 //color:Theme.COLORS.MAJOR,
 color:"white",
 //height:50
}}>{props.details} </Text>
  </TouchableOpacity ></View>
     {/* {flag? (dynamicView):spinner} */}
     {/* {spinner}
     {dynamicView} */}

</View>



    </View>
    
  );
};
const styles = StyleSheet.create({
  text: {  
alignSelf:"stretch",
//flexWrap:"wrap",
//width:100
//flex:1

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
 // color:Theme.COLORS.BLACK,
   fontSize:12,
   color:"red"
   //height:50
},box:{
  borderWidth:1,
  borderColor:"red"
}
});
export default CellOrderHistoy;
