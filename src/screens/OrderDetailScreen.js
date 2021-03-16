// Dynamically Set Drawer/Sidebar Options in React Navigation Drawer
// https://aboutreact.com/dynamically-change-sidebar-options/

import * as React from "react";
import { Button, View, Text, SafeAreaView } from "react-native";

const OrderDetailScreen = ({ navigation }) => {
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
            OrderDetailScreen
          </Text>
        </View>
        <Text
          style={{ fontSize: 18, textAlign: "center", color: "grey" }}
        ></Text>
        <Text
          style={{ fontSize: 16, textAlign: "center", color: "grey" }}
        ></Text>
      </View>
    </SafeAreaView>
  );
};

export default OrderDetailScreen;
