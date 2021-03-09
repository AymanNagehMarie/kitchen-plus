import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../components/Header";
let nav;

const OrderDetailScreen = ({ navigation }) => {
  nav = navigation;
  return <Text style={{ fontSize: 48 }}>OrderDetailScreen</Text>;
};

const styles = StyleSheet.create({});

OrderDetailScreen.navigationOptions = {
  headerTitle: () => <Header title="Order Details" navigation={nav} />,
};

export default OrderDetailScreen;
