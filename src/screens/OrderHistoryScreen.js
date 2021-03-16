import { View, StyleSheet, SafeAreaView,FlatList,TouchableHighlight } from "react-native";
import React, { useState } from "react";
import { OrderDetails } from '../data/dataArrays';
import CellOrderHistory from "../components/CellOrderHistory"
const OrderHistoryScreen = ({ navigation, route }) => {
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
          data={OrderDetails}
          renderItem={({ item }) => {
            return (
              <TouchableHighlight  underlayColor='rgba(73,182,77,0.9)'/* onPress={() => this.onPressRecipe(item)}*/>
  <CellOrderHistory  orderId={item.orderId} orderDate={item.orderDate} details="More Details >" orderStatusCode={item.orderStatusCode} orderStatusMsg={item.orderStatusMsg} orderTotalPrice={item.orderTotalPrice} onIncrease={()=> console.log("+"+item.title)}
  onDecrease={()=> console.log("-"+item.title)}
></CellOrderHistory>   
  </TouchableHighlight>
            );
          }}
          keyExtractor={item => `${item.orderId}`}
        />
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
export default OrderHistoryScreen;
