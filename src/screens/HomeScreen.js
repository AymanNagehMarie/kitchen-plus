import React from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import Header from "../components/Header";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={{ fontSize: 48 }}>HomeScreen</Text>
      <Button
        title="Guest Flow"
        onPress={() => navigation.navigate("guestFlow")}
      ></Button>

      <Button
        title="Client Flow"
        onPress={() => navigation.navigate("clientFlow")}
      ></Button>
      <Button
        title="Delivery Flow"
        onPress={() => navigation.navigate("deliveryFlow")}
      ></Button>
      <Button
        title="Sales Flow"
        onPress={() => navigation.navigate("salesFlow")}
      ></Button>
    </View>
  );
};
const styles = StyleSheet.create({});

HomeScreen.navigationOptions = {
  headerTitle: () => <Header title="Home" />,
};

export default HomeScreen;
