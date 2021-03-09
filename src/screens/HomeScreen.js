import React from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import Header from "../components/Header";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={{ fontSize: 48 }}>HomeScreen</Text>
      <Button
        title="Guest Flow"
        onPress={() => navigation.navigate("products")}
      ></Button>

      <Button
        title="Client Flow"
        onPress={() => navigation.navigate("products")}
      ></Button>
      <Button
        title="Delivery Flow"
        onPress={() => navigation.navigate("orders")}
      ></Button>
      <Button
        title="Sales Flow"
        onPress={() => navigation.navigate("sales")}
      ></Button>
    </View>
  );
};
const styles = StyleSheet.create({});

HomeScreen.navigationOptions = {
  headerTitle: () => <Header title="Home" />,
};

export default HomeScreen;
