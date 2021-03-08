import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../components/Header";

const OrderHistoryScreen = () => {
  return <Text style={{ fontSize: 48 }}>OrderHistoryScreen</Text>;
};

const styles = StyleSheet.create({});

OrderHistoryScreen.navigationOptions = {
  headerTitle: () => <Header title="Order History" />,
};

export default OrderHistoryScreen;
