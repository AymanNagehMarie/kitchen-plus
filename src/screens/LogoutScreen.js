import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../components/Header";

const LogoutScreen = () => {
  return <Text style={{ fontSize: 48 }}>LogoutScreen</Text>;
};

const styles = StyleSheet.create({});

LogoutScreen.navigationOptions = {
  headerTitle: () => <Header title="Logout" />,
};

export default LogoutScreen;
