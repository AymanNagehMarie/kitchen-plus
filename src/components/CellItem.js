
import { color } from "react-native-reanimated";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { View, StyleSheet, Text,Image,TouchableOpacity, Button } from "react-native";
import { RecipeCard } from '../AppStyles';
import React, { useState } from "react";

const CellItem = (props) => {  
  console.log(props);
  const [counter, setCounter] = useState(1);
const [flag, setFlag] = useState(true);

  const [showSpinner, setSpinner] = useState();
  const [dynamicView, setDynamicView] = useState(<TouchableOpacity
  
    style={{
      flex:1,
      height:30,
      backgroundColor: "#f4511e",
      alignItems: 'center',
      justifyContent: 'center',
      borderTopLeftRadius: 25,
      borderBottomLeftRadius: 25,
      borderTopRightRadius: 25,
      borderBottomRightRadius: 25
  }}
         onPress={() => {
          setFlag(false);
        //  removeFromCart();
          // <View style={styles.spContainer}>
          // <TouchableOpacity
          //   style={{
          //     width: 30,
          //     height:30,
          //     backgroundColor: "#f4511e",
          //     alignItems: 'center',
          //     justifyContent: 'center',
          //     borderTopLeftRadius: 25,
          //     borderBottomLeftRadius: 25
          // }}
          //        onPress={() => {
          //         console.log(counter);
          //         if (counter % 2 == 0) {
          //           setCounter(counter / 2);
          //         }
          //         props.onDecrease();
          //       }}
          //       underlayColor="#fff"
          //   >
      
          //   <Text >-</Text>
          //   </TouchableOpacity >
          //   <Text style={{flex:1,textAlign:"center",fontSize:25}}>{counter}</Text>
          //   <TouchableOpacity
          //     style={{
          //       width: 30,
          //       height:30,
          //       backgroundColor: "#f4511e",
          //       alignItems: 'center',
          //       justifyContent: 'center',
          //       borderTopRightRadius: 25,
          //       borderBottomRightRadius: 25
          //   }}
          //     onPress={() => {
          
          //       setCounter(counter * 2);
          //       props.onIncrease();
          //     }}
          //     underlayColor="#fff"
          //   >
          //     <Text >+</Text>
          //   </TouchableOpacity>
          //   </View>
}}
        underlayColor="#fff"
    >

    <Text style={styles.btnText}>Add To Cart</Text>
    </TouchableOpacity >);
    const addToCart=()=>{
setDynamicView(<TouchableOpacity
  
  style={{
    flex:1,
    height:30,
    backgroundColor: "#f4511e",
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25
}}
       onPress={() => {
        removeFromCart();
}}
      underlayColor="#fff"
  >

  <Text style={styles.btnText}>Add To Cart</Text>
  </TouchableOpacity >)
    }
    const removeFromCart=()=>{
            setDynamicView(<TouchableOpacity
  
              style={{
                flex:1,
                height:30,
                backgroundColor: "#f4511e",
                alignItems: 'center',
                justifyContent: 'center',
                borderTopLeftRadius: 25,
                borderBottomLeftRadius: 25,
                borderTopRightRadius: 25,
                borderBottomRightRadius: 25
            }}
                   onPress={() => {
                    addToCart();
                  }}
                  underlayColor="#fff"
              >
            
            <Text >Remove To Cart</Text>
            </TouchableOpacity >)
      
    }
    const spinner=(<View style={styles.spContainer}>
  <TouchableOpacity
    style={{
      width: 30,
      height:30,
      backgroundColor: "#f4511e",
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
            setFlag(true)
          }
          props.onDecrease();
        }}
        underlayColor="#fff"
    >

    <Text style={styles.btnText} >-</Text>
    </TouchableOpacity >
    <Text style={{flex:1,textAlign:"center",fontSize:25}}>{counter}</Text>
    <TouchableOpacity
      style={{
        width: 30,
        height:30,
        backgroundColor: "#f4511e",
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
      <Text style={styles.btnText}>+</Text>
    </TouchableOpacity>
    </View>)
  return (



<View   style={styles.container}>
     
      <Image style={RecipeCard.photo} source={{ uri: props.photo_url }} />
      <View style={{flexDirection:"row"}}>
      <Text  numberOfLines={1} style={styles.titleText}>{props.title}</Text>
      </View>
      <View style={{flexDirection:"row"}}>
      <Text style={styles.text}>price : </Text>
      <Text style={styles.text}>{props.price}</Text>
      </View>
      <View style={{flexDirection:"row"}}>
      <Text style={styles.text}>unit : </Text>
      <Text style={styles.text}>{props.unit}</Text>
      </View>
      {/* setDynamicView(null); */}
     {flag? (dynamicView):spinner}
     
      
{/* {showSpinner} */}
{/*      
<View style={styles.spContainer}>
          <TouchableOpacity
            style={{
              width: 30,
              height:30,
              backgroundColor: "#f4511e",
              alignItems: 'center',
              justifyContent: 'center',
              borderTopLeftRadius: 25,
              borderBottomLeftRadius: 25
          }}
                 onPress={() => {
                  console.log(counter);
                  if (counter % 2 == 0) {
                    setCounter(counter / 2);
                  }
                  props.onDecrease();
                }}
                underlayColor="#fff"
            >
      
            <Text >-</Text>
            </TouchableOpacity >
            <Text style={{flex:1,textAlign:"center",fontSize:25}}>{counter}</Text>
            <TouchableOpacity
              style={{
                width: 30,
                height:30,
                backgroundColor: "#f4511e",
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
              <Text >+</Text>
            </TouchableOpacity>
            </View> */}
        <View style={styles.spContainer}>
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
alignContent:"space-between",
  //alignItems:"center",
  justifyContent: 'flex-start',  
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
  alignContent:"space-between",
  justifyContent: "center",
}, 


titleText:{
  alignSelf:"stretch",
  width:130
},
btnText:{

  color:"white",
   fontSize:20
},
});
export default CellItem;
