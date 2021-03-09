import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../components/Header";
let nav;

const DeliveryListScreen = ({ navigation }) => {
  nav = navigation;
  return <Text style={{ fontSize: 48 }}>DeliveryListScreen</Text>;
};

const styles = StyleSheet.create({});

DeliveryListScreen.navigationOptions = {
  headerTitle: () => <Header title="Delivery List" navigation={nav} />,
};

export default DeliveryListScreen;
