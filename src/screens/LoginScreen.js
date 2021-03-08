import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../components/Header";

const LoginScreen = () => {
  return <Text style={{ fontSize: 48 }}>LoginScreen</Text>;
};

const styles = StyleSheet.create({});

LoginScreen.navigationOptions = {
  headerTitle: () => <Header title="Login" />,
};

export default LoginScreen;
