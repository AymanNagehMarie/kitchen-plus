import { View, StyleSheet, Text,Image,TouchableOpacity, SafeAreaView,FlatList,TouchableHighlight, Button } from "react-native";
import Header from "../components/Header";
import { RecipeCard } from '../AppStyles';
import React, { useState } from "react";

//let nav;
import { recipes } from '../data/dataArrays';
import CellItem from "../components/CellItem"
const ProductScreen = ({ navigation, route }) => {

const renderRecipes = ({ item }) => (
  <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={() => this.onPressRecipe(item)}>
    <View style={styles.container}>
      <Image style={styles.photo} source={{ uri: item.photo_url }} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
    </View>
  </TouchableHighlight>
);
  // nav = navigation;
  const [visible, setVisible] = useState(route.params.userType === "user");
  const [counter, setCounter] = useState(1);

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
              <TouchableHighlight underlayColor='rgba(73,182,77,0.9)'/* onPress={() => this.onPressRecipe(item)}*/>
  <CellItem title={item.title} price={item.price} unit={item.unit} photo_url={item.photo_url}  onIncrease={()=> console.log("+"+item.title)}
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
});
export default ProductScreen;
