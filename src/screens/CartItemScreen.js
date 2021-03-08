import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../components/Header";

const CartItemScreen = () => {
  return <Text style={{ fontSize: 48 }}>CartItemScreen</Text>;
};

const styles = StyleSheet.create({});

CartItemScreen.navigationOptions = {
  headerTitle: () => <Header title="Cart Item" />,
};

export default CartItemScreen;
