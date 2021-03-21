import { color } from "react-native-reanimated";
import { Colors } from "react-native/Libraries/NewAppScreen";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { RecipeCard } from "../AppStyles";
import React, { useState } from "react";
import Theme from "../../src/constants/Theme";

const CellItem = (props) => {
  console.log(props);
  const [counter, setCounter] = useState(1);
  const [flag, setFlag] = useState(true);
  //const [dynamicView, setDynamicView] = useState(
  const dynamicView = (
    <TouchableOpacity
      style={styles.btnCartItemMinor}
      onPress={() => {
        setFlag(false);
        props.onIncrease();
        //props.setcartCount;
      }}
      underlayColor="#fff"
    >
      <Text style={styles.btnTextMinor}>Add To Cart</Text>
    </TouchableOpacity>
  );
  //     const addToCart=()=>{
  // setDynamicView(<TouchableOpacity

  //   style={{
  //     flex:1,
  //     height:30,
  //     backgroundColor: Theme.COLORS.MAJOR,
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     borderTopLeftRadius: 25,
  //     borderBottomLeftRadius: 25,
  //     borderTopRightRadius: 25,
  //     borderBottomRightRadius: 25
  // }}
  //        onPress={() => {
  //         removeFromCart();
  // }}
  //       underlayColor="#fff"
  //   >

  //   <Text style={styles.btnText}>Add To Cart</Text>
  //   </TouchableOpacity >)
  //     }
  //     const removeFromCart=()=>{
  //             setDynamicView(<TouchableOpacity

  //               style={{
  //                 flex:1,
  //                 height:30,
  //                 backgroundColor: Theme.COLORS.MAJOR,
  //                 alignItems: 'center',
  //                 justifyContent: 'center',
  //                 borderTopLeftRadius: 25,
  //                 borderBottomLeftRadius: 25,
  //                 borderTopRightRadius: 25,
  //                 borderBottomRightRadius: 25
  //             }}
  //                    onPress={() => {
  //                     addToCart();
  //                   }}
  //                   underlayColor="#fff"
  //               >

  //             <Text >Remove To Cart</Text>
  //             </TouchableOpacity >)

  //     }
  const spinner = (
    <View style={styles.spContainer}>
      <TouchableOpacity
        style={{
          width: 30,
          height: 30,
          //backgroundColor: Theme.COLORS.MAJOR,
          borderColor: Theme.COLORS.MAJOR,
          borderWidth: 1,
          alignItems: "center",
          justifyContent: "center",
          borderTopLeftRadius: 25,
          borderBottomLeftRadius: 25,
        }}
        onPress={() => {
          console.log(counter);
          if (counter % 2 == 0) {
            setCounter(counter / 2);
          } else {
            setFlag(true);
            props.onDecrease();
          }
        }}
        underlayColor="#fff"
      >
        <Text style={styles.textPlusMinor}>-</Text>
      </TouchableOpacity>

      <Text
        style={{
          flex: 1,
          textAlign: "center",
          textAlignVertical: "center",
          fontSize: 18,
          borderColor: Theme.COLORS.MAJOR,
          borderWidth: 1,
          marginHorizontal: 3,
        }}
      >
        {counter}
      </Text>
      <TouchableOpacity
        style={{
          width: 30,
          height: 30,
          // backgroundColor: Theme.COLORS.MAJOR,
          borderColor: Theme.COLORS.MAJOR,
          borderWidth: 1,
          alignItems: "center",
          justifyContent: "center",
          borderTopRightRadius: 25,
          borderBottomRightRadius: 25,
        }}
        onPress={() => {
          setCounter(counter * 2);
          //props.onIncrease();
        }}
        underlayColor="#fff"
      >
        <Text style={styles.textPlusMinor}>+</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <Image style={RecipeCard.photo} source={{ uri: props.photo_url }} />
      <View style={{ flexDirection: "row" }}>
        <Text numberOfLines={1} style={styles.titleText}>
          {props.title}
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.text}>price : </Text>
        <Text style={styles.txtPrice}>{props.price}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.text}>unit : </Text>
        <Text style={styles.text}>{props.unit}</Text>
      </View>
      {flag ? dynamicView : spinner}
      <View style={styles.spContainer}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    alignSelf: "stretch",
    //flexWrap:"wrap",
    //width:100
    //flex:1
  },
  txtPrice: {
    //fontWeight:"bold",
    color: Theme.COLORS.MAJOR,
  },
  container: {
    flex: 1,
    alignContent: "space-between",
    //alignItems:"center",
    justifyContent: "flex-start",
    alignContent: "center",

    margin: 5,
  },
  fixToText: {
    //alignItems: "center",
    flexDirection: "row",
    alignContent: "space-between",
    justifyContent: "center",
  },
  buttonStyle: {
    fontSize: 20,
    height: 50,
    width: 50,
    marginVertical: 30,
    backgroundColor: "black",
  },
  spText: {
    fontSize: 25,
    width: 25,
    //backgroundColor:"yellow",
    textAlign: "center",
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 10,
  },
  spContainer: {
    //alignItems: "center",
    flexDirection: "row",
    alignContent: "space-between",
    justifyContent: "center",
  },
  titleText: {
    alignSelf: "stretch",
    width: 130,
  },
  textPlus: {
    color: "white",
    fontSize: 20,
  },
  textPlusMinor: {
    color: Theme.COLORS.BLACK,
    fontSize: 18,
  },
  btnCartItem: {
    flex: 1,
    height: 30,
    backgroundColor: Theme.COLORS.MAJOR,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  btnCartItemMinor: {
    flex: 1,
    height: 30,
    borderWidth: 2,
    borderColor: Theme.COLORS.MAJOR,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  btnTextMinor: {
    color: Theme.COLORS.BLACK,
    fontSize: 12,
  },
  box: {
    borderWidth: 1,
    borderColor: "red",
  },
});
export default CellItem;
