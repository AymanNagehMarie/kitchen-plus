
import { color } from "react-native-reanimated";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { View, StyleSheet, Text,Image,TouchableOpacity, Button } from "react-native";
import React, { useState } from "react";
import Theme from "../constants/Theme"
import { Foundation } from '@expo/vector-icons'; 

const Close = (props) => {  
  const [dynamicView, setDynamicView] = useState(
    <View style={{flex:1,zIndex:55,position:"absolute"}}>
    <Foundation  name="list" size={30} color={Theme.COLORS.MAJOR} />
    </View>
//   <View style={{flex:1}}><TouchableOpacity
  
//     style={{
//       height:30,
//       //direction:"rtl",
//       right:10,
//       width:30,
//       position:"absolute",
//       zIndex:99,
//       //backgroundColor: Theme.COLORS.MAJOR,
//       borderColor: "red",
//       borderWidth:1,
//       alignItems: 'center',
//       justifyContent: 'center',
//       borderTopLeftRadius: 25,
//       borderBottomLeftRadius: 25,
//       borderTopRightRadius: 25,
//       borderBottomRightRadius: 25,
        
//   }}
//          onPress={() => {
//           props.onClicked();
// }}
//         underlayColor="#fff"
//     >
//     <Text style={{color:"red",fontSize:16,zIndex:999999}}>x</Text>
//     </TouchableOpacity ></View>
    
    );
  return (



<View   style={styles.container}>
     
{dynamicView}
    </View>
  );
};
const styles = StyleSheet.create({
  text: {  
alignSelf:"stretch",

  },

});
export default Close;
