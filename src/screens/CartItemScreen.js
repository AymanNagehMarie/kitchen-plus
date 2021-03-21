import { View,Text, StyleSheet, SafeAreaView,TouchableOpacity,FlatList,TouchableHighlight } from "react-native";
import React, { useState } from "react";
import { cartItems } from '../data/dataArrays';
import CellItem from "../components/CellCartItem"
import Theme from "../constants/Theme";
const CartItemScreen = ({ navigation, route }) => {
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
       <View  style={styles.container}>
        <FlatList
          vertical
          showsHorizontalScrollIndicator={true}
          scrollToOverflowEnabled={false}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          numColumns={1}
          data={cartItems}
          renderItem={({ item }) => {
            return (
              <TouchableHighlight  underlayColor={Theme.COLORS.MAJOR}/* onPress={() => this.onPressRecipe(item)}*/>
  <CellItem  title={item.title} price={item.price} unit={item.unit} photo_url={item.photo_url}  onIncrease={()=> console.log("+"+item.title)}
  onDecrease={()=> console.log("-"+item.title)}
></CellItem>   
  </TouchableHighlight>
            );
          }}
          keyExtractor={item => `${item.recipeId}`}
        />
      </View>
      <View style={{borderTopWidth:2,borderColor:Theme.COLORS.MAJOR,height:100,justifyContent:"center"}}> 
      <View style={{flexDirection:"row",marginHorizontal:5}}>
      <Text style={{fontSize:25}}>Total Amount : </Text>
      <Text  numberOfLines={1} style={{fontSize:25,color:Theme.COLORS.MAJOR}}>45,215 AED</Text>
           </View> 
           <Text style={{fontSize:12,marginHorizontal:5}}>free shipping </Text>
           <View style={{flexDirection:"row",justifyContent:"center",marginHorizontal:5}}><TouchableOpacity
  
  style={{   
    height:30,
    width:200,
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
}}>Checkout</Text>
  </TouchableOpacity ></View>
      </View>

    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
container: {  
margin:10,
  flex: 1, 
alignContent:"space-between",
  justifyContent: 'flex-start',  

}
});
export default CartItemScreen;
