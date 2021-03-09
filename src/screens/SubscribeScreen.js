import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../components/Header";
let nav;

const SubscribeScreen = ({ navigation }) => {
  nav = navigation;
  return <Text style={{ fontSize: 48 }}>SubscribeScreen</Text>;
};

const styles = StyleSheet.create({});
SubscribeScreen.navigationOptions = {
  headerTitle: () => <Header title="Subscribe" navigation={nav} />,
};
export default SubscribeScreen;
