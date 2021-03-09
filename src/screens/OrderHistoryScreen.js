import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../components/Header";
let nav;

const OrderHistoryScreen = ({ navigation }) => {
  nav = navigation;
  return <Text style={{ fontSize: 48 }}>OrderHistoryScreen</Text>;
};

const styles = StyleSheet.create({});

OrderHistoryScreen.navigationOptions = {
  headerTitle: () => <Header title="Order History" navigation={nav} />,
};

export default OrderHistoryScreen;
