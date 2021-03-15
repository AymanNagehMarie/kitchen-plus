import { View, StyleSheet, SafeAreaView,FlatList,TouchableHighlight } from "react-native";
import React, { useState } from "react";
import { recipes } from '../data/dataArrays';
import CellItem from "../components/CellItem"
const ProductScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
       <View  style={styles.container}>
        <FlatList
          vertical
          showsHorizontalScrollIndicator={true}
          scrollToOverflowEnabled={false}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={recipes}
          renderItem={({ item }) => {
            return (
              <TouchableHighlight  underlayColor='rgba(73,182,77,0.9)'/* onPress={() => this.onPressRecipe(item)}*/>
  <CellItem  title={item.title} price={item.price} unit={item.unit} photo_url={item.photo_url}  onIncrease={()=> console.log("+"+item.title)}
  onDecrease={()=> console.log("-"+item.title)}
></CellItem>   
  </TouchableHighlight>
            );
          }}
          keyExtractor={item => `${item.recipeId}`}
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
export default ProductScreen;
