// Dynamically Set Drawer/Sidebar Options in React Navigation Drawer
// https://aboutreact.com/dynamically-change-sidebar-options/

import React, { useState, useEffect } from "react";
import {
  Button,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import Theme from "../constants/Theme";
const LandingPage = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.reset({
        index: 0,
        routes: [
          {
            name: "drawerStack",
            params: { userType: "guest" },
          },
        ],
      });
    }, 2000);
  }, []);

  //  setTimeout(
  //     function() {
  //      {startLoading}
  //       navigation.navigate("drawerStack", { userType: "guest" });
  //     }
  //     .bind(this),
  //     1
  //   )
  // setTimeout(
  //   function() {
  //     navigation.navigate("drawerStack", { userType: "guest" });
  //   }
  //   .bind(this),
  //   1
  // )
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Theme.COLORS.MAJOR }}>
      <Image
        source={require("../../assets/fruits.jpg")}
        style={{ height: "100%", width: "100%" }}
      />
      <Spinner
        //visibility of Overlay Loading Spinner
        visible={loading}
        //Text with the Spinner
        textContent={"Loading..."}
        //Text style of the Spinner Text
        textStyle={styles.spinnerTextStyle}
      />
      {/* <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            Dynamically Set Drawer/Sidebar Options in React Navigation Drawer
            {"\n\n"}
            Landing Page
          </Text>
          <Button
            onPress={() =>
              navigation.navigate("drawerStack", { userType: "client" })
            }
            title="Client"
          />
          <Text
            style={{
              textAlign: "center",
              marginVertical: 16,
            }}
          ></Text>
          <Button
            onPress={() =>
              navigation.navigate("drawerStack", { userType: "guest" })
            }
            title=" Guest"
          />
          <Text
            style={{
              textAlign: "center",
              marginVertical: 16,
            }}
          ></Text>
          <Button
            onPress={() =>
              navigation.navigate("drawerStack", { userType: "sales" })
            }
            title="Sales"
          />
          <Text
            style={{
              textAlign: "center",
              marginVertical: 16,
            }}
          ></Text>
          <Button
            onPress={() =>
              navigation.navigate("drawerStack", { userType: "delivery" })
            }
            title="Delivery"
          />
        </View>
        <Text style={{ fontSize: 18, textAlign: "center", color: "grey" }}>
          Dynamically Set Drawer/Sidebar Options
        </Text>
        <Text style={{ fontSize: 16, textAlign: "center", color: "grey" }}>
          www.aboutreact.com
        </Text>
      </View> */}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: "#FFF",
  },
});
export default LandingPage;
