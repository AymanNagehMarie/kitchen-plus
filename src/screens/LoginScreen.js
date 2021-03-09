import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../components/Header";
let nav;

const LoginScreen = ({ navigation }) => {
  nav = navigation;
  return <Text style={{ fontSize: 48 }}>LoginScreen</Text>;
};

const styles = StyleSheet.create({});

LoginScreen.navigationOptions = {
  headerTitle: () => <Header title="Login" navigation={nav} />,
};

export default LoginScreen;
