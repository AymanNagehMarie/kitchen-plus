import React, { useState } from "react";
import { View, StyleSheet, Text, SafeAreaView, Button } from "react-native";
import Header from "../components/Header";
//let nav;

const ProductScreen = ({ navigation, route }) => {
  // nav = navigation;
  const [visible, setVisible] = useState(route.params.userType === "user");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
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
            First Page
          </Text>
          <Button
            onPress={() => navigation.navigate("LandingPage")}
            title="Go to Initial Page"
          />
          {visible ? (
            <Button
              onPress={() => {
                navigation.navigate("drawerStack", { userType: "guest" });
                setVisible(false);
              }}
              title="Change Access to Guest"
            />
          ) : null}
        </View>
        <Text style={{ fontSize: 18, textAlign: "center", color: "grey" }}>
          Dynamically Set Drawer/Sidebar Options
        </Text>
        <Text style={{ fontSize: 16, textAlign: "center", color: "grey" }}>
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView>
  );
  //<Text style={{ fontSize: 48 }}>ProductScreen</Text>;
};

const styles = StyleSheet.create({});

ProductScreen.navigationOptions = {
  headerTitle: () => <Header title="Products" navigation={nav} />,
};
export default ProductScreen;
