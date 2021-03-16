import {
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import React, { useState } from "react";
import { recipes } from "../data/dataArrays";
import CellItem from "../components/CellItem";
import Theme from "../constants/Theme";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
const ProductScreen = ({ navigation, route }) => {
  const [cartCount, setCartCount] = useState(0);
  const updateCart = (number) => {
    setCartCount(cartCount + number);
  };
  setTimeout(() => {
    navigation.setOptions({
      title: "Products", //Set Header Title
      headerRight: () => (
        <View style={{ flexDirection: "row", margin: 5 }} underlayColor="#fff">
          <View style={{ position: "absolute", zIndex: 2 }}>
            <TouchableOpacity
              style={{
                width: 15,
                height: 15,
                alignItems: "center",
                opacity: 1,
                shadowOpacity: "red",
                backgroundColor: "white",
                justifyContent: "center",
                borderTopLeftRadius: 25,
                borderBottomLeftRadius: 25,
                borderTopRightRadius: 25,
                borderBottomRightRadius: 25,
              }}
              underlayColor="#fff"
            >
              <TouchableOpacity
                style={{
                  width: 25,
                  height: 25,
                  alignItems: "center",
                  opacity: 1,
                  shadowOpacity: "red",
                  backgroundColor: "red",
                  justifyContent: "center",
                  borderTopLeftRadius: 25,
                  borderBottomLeftRadius: 25,
                  borderTopRightRadius: 25,
                  borderBottomRightRadius: 25,
                }}
                underlayColor="#fff"
              >
                <Text>{cartCount}</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          <AntDesign
            name="shoppingcart"
            size={40}
            color={Theme.COLORS.MAJOR}
            onPress={() => {
              navigation.navigate("CartItemScreen");
            }}
          />
        </View>
      ),

      headerStyle: {
        // backgroundColor: "#f4511e", //Set Header color
        backgroundColor: Theme.COLORS.HEADER, //Set Header color
      },
      headerTintColor: Theme.COLORS.MAJOR, //Set Header text color
      headerTitleStyle: {
        fontWeight: "bold", //Set Header text style
        textAlign: "center", //Set Header text style
      },
    });
  }, 500);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
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
              <TouchableHighlight
                underlayColor="rgba(73,182,77,0.9)" /* onPress={() => this.onPressRecipe(item)}*/
              >
                <CellItem
                  title={item.title}
                  price={item.price}
                  unit={item.unit}
                  photo_url={item.photo_url}
                  onIncrease={() => updateCart(1)}
                  onDecrease={() => updateCart(-1)}
                ></CellItem>
              </TouchableHighlight>
            );
          }}
          keyExtractor={(item) => `${item.recipeId}`}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
    alignContent: "space-between",
    justifyContent: "flex-start",
  },
});
export default ProductScreen;
