import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../components/Header";
let nav;

const CartItemScreen = ({ navigation }) => {
  nav = navigation;
  return <Text style={{ fontSize: 48 }}>CartItemScreen</Text>;
};

const styles = StyleSheet.create({});

CartItemScreen.navigationOptions = {
  headerTitle: () => <Header title="Cart Item" navigation={nav} />,
};

export default CartItemScreen;
