import {
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
} from "react-native";
import { Feather } from '@expo/vector-icons'; 

import React, { useState } from "react";
import { EvilIcons } from '@expo/vector-icons'; 

import { recipes } from "../data/dataArrays";
import CellItem from "../components/CellItem";
import Theme from "../constants/Theme";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { SliderBox } from "react-native-image-slider-box";
const ProductScreen = ({ navigation, route }) => {
  const [cartCount, setCartCount] = useState(0);
  const [images, setImages] = useState([
    //"https://www.texanerin.com/content/uploads/2018/11/pumpkin-spice-cookies-4-650x975.jpg",
    //"https://source.unsplash.com/1024x768/?water",
    //"https://source.unsplash.com/1024x768/?girl",
    //"https://source.unsplash.com/1024x768/?tree", // Network image
    require("../../assets/sliderImages/panner1.jpg"), // Local image
    require("../../assets/sliderImages/panner2.jpg"),
    require("../../assets/sliderImages/panner3.jpg"),
    require("../../assets/sliderImages/panner4.jpg"),
    require("../../assets/sliderImages/panner5.jpg"),
  ]);
  // setInterval(function () {
  //   setImages([
  //     "https://source.unsplash.com/1024x768/?nature",
  //     "https://source.unsplash.com/1024x768/?water",
  //     "https://source.unsplash.com/1024x768/?girl",
  //     "https://source.unsplash.com/1024x768/?tree",
  //   ]);
  // }, 1000);

  const updateCart = (number) => {
    setCartCount(cartCount + number);
  };
  setTimeout(() => {
    navigation.setOptions({
      title: "Products", //Set Header Title
      headerRight: () => (
        <View style={{ flexDirection: "row", margin: 5 }} underlayColor="#fff">
          
          <View style={{ position: "absolute", zIndex: 2}}>
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

          <AntDesign name="search1" size={35}   color={Theme.COLORS.MAJOR}
            onPress={() => {
              navigation.navigate("SearchScreen");
            }} />
      

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
    <SafeAreaView
      style={{
        flex: 1,
        alignContent: "center",
      }}
    >
      {/* <ScrollView> */}

      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={
            <View>
              <SliderBox
                images={images}
                sliderBoxHeight={220}
                onCurrentImagePressed={(index) =>
                  console.log(`image ${index} pressed`)
                }
                dotColor={Theme.COLORS.MAJOR}
                inactiveDotColor="#90A4AE"
                paginationBoxVerticalPadding={20}
                autoplay={true}
                circleLoop
                autoplayInterval={5000}
                resizeMethod={"resize"}
                resizeMode={"stretch"}
              />
              <Text
                style={{
                  fontSize: 20,

                  color: "red",
                  alignSelf: "center",
                  marginVertical: 10,
                  fontWeight: "bold",
                }}
              >
                Vegetables & Fruits{" "}
              </Text>
            </View>
          }
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
                underlayColor={Theme.COLORS.MAJOR}  onPress={() => 
                //  navigation.navigate("ItemDetailScreen", params: { user: 'jane' } )
                  navigation.navigate('ItemDetailScreen', {
                    screen: 'ItemDetailScreen',
                    params: {DetailItem:item },
                  })
                //  navigation.navigate("CartItemScreen",{title:555555})

                }
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
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",

    alignItems: "center",
    justifyContent: "center",
    marginVertical: 0,
  },
});
export default ProductScreen;
