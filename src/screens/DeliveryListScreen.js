// Dynamically Set Drawer/Sidebar Options in React Navigation Drawer
// https://aboutreact.com/dynamically-change-sidebar-options/

import * as React from "react";
import { Button, View, Text, SafeAreaView } from "react-native";

const DeliveryListScreen = ({ navigation }) => {
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
            DeliveryListScreen
          </Text>

          <Button
            onPress={() => {
              //  debugger;
              navigation.push("DeliveryOrderDetailScreen");
              navigation.navigate("DeliveryOrderDetailScreen");
            }}
            title="Go to Initial Page"
          />
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

export default DeliveryListScreen;
