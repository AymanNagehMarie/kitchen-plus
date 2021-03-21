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
import React, { useState } from "react";
//import { recipes } from "../data/dataArrays";
//import CellItem from "../components/CellItem";
import Theme from "../constants/Theme";
//import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { SliderBox } from "react-native-image-slider-box";

const ItemDetailScreen = ({ navigation,route,title }) => {
  console.log("navigation>>>>>>>"+ navigation);
  console.log(navigation);

    console.log("route>>>>>>>"+ route);
    console.log(route.params.DetailItem.title);
    console.log(route.params.DetailItem.price);

  const [cartCount, setCartCount] = useState(0);
  const [images, setImages] = useState([
    require("../../assets/sliderImages/panner1.jpg"), 
    require("../../assets/sliderImages/panner2.jpg"),
    require("../../assets/sliderImages/panner3.jpg"),
    require("../../assets/sliderImages/panner4.jpg"),
    require("../../assets/sliderImages/panner5.jpg"),
  ]);

  

  return (
    
    <SafeAreaView
      style={{
        flex: 1,
        alignContent: "center",
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{backgroundColor:"white"}}>

      <SliderBox
                images={route.params.DetailItem.photosArray}
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
                resizeMode={"cover"}
              />    
              
                <View style={styles.container}>
              <Text
                style={{
                  fontSize: 20,
                  marginHorizontal:8,
                  color: Theme.COLORS.BLACK,
                  alignSelf: "stretch",
                  marginVertical: 2,
                  fontWeight: "bold",
                }}
              >
{route.params.DetailItem.title}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  marginHorizontal:8,
                  color: Theme.COLORS.BLACK,
                  alignSelf: "stretch",
                  marginVertical: 2,
                  color:Theme.COLORS.MAJOR,
                }}
              >
AED: {route.params.DetailItem.price}
              </Text>


              <Text
                style={{
                  fontSize: 11,
                  marginHorizontal:8,
                  color: Theme.COLORS.BLACK,
                  alignSelf: "stretch",
                  marginVertical: 2,
                  
                }}
              >
ProductId: {route.params.DetailItem.recipeId}
              </Text>



              <View style={{flex:1,alignContent:"flex-start",marginHorizontal:8,borderColor:Theme.COLORS.MAJOR,borderLeftWidth:2}}>


              <Text
                style={{
                  fontSize: 14,
                  marginHorizontal:8,
                  color: Theme.COLORS.MAJOR,
                  alignSelf: "stretch",
                  marginVertical: 1,
                  fontWeight: "bold",
                }}
              >
Available Promotions
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  marginHorizontal:8,
                  color: Theme.COLORS.BLACK,
                  alignSelf: "stretch",
                  marginVertical: 0,
                  fontWeight:"bold"
                }}
              >
Big Sale
              </Text>

              <Text
                style={{
                  fontSize: 11,
                  marginHorizontal:8,
                  color: Theme.COLORS.BLACK,
                  alignSelf: "stretch",
                  marginVertical: 0,
                  color:Theme.COLORS.PARAGRAPH,
                }}
              >
50% off
              </Text>
              </View>

              <Text
                style={{
                  fontSize: 14,
                  marginHorizontal:8,
                  color: Theme.COLORS.BLACK,
                  alignSelf: "stretch",
                  marginVertical: 2,
                  color:Theme.COLORS.BLACK,
                  fontWeight: "bold",
                }}
              >
Product Details
              </Text>
              <Text
                style={{
                  fontSize: 11,
                  marginHorizontal:8,
                  color: Theme.COLORS.BLACK,
                  alignSelf: "stretch",
                  marginVertical: 2,
                  color:Theme.COLORS.PARAGRAPH,
                }}
              >
{route.params.DetailItem.description}
              </Text>
              {/* <View style={{marginHorizontal:8,backgroundColor:Theme.COLORS.INPUT,width:500,height:10}}>

</View> */}
   
      </View>
      </View>

      </ScrollView>
      <View style={{backgroundColor:Theme.COLORS.MAJOR,height:50,justifyContent:"center"}}> 

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
}}>Add to Cart</Text>
  </TouchableOpacity ></View>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",

    //alignItems: "center",
    justifyContent: "center",
    marginVertical: 0,
  },
});
export default ItemDetailScreen;
