import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../components/Header";

const DeliveryListScreen = () => {
  return <Text style={{ fontSize: 48 }}>DeliveryListScreen</Text>;
};

const styles = StyleSheet.create({});

DeliveryListScreen.navigationOptions = {
  headerTitle: () => <Header title="Cart Items" />,
};

export default DeliveryListScreen;
