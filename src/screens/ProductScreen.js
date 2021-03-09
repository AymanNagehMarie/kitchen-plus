import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../components/Header";
let nav;

const ProductScreen = ({ navigation }) => {
  nav = navigation;
  return <Text style={{ fontSize: 48 }}>ProductScreen</Text>;
};

const styles = StyleSheet.create({});

ProductScreen.navigationOptions = {
  headerTitle: () => <Header title="Products" navigation={nav} />,
};
export default ProductScreen;
