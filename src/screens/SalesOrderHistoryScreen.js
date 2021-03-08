import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../components/Header";

const SalesOrderHistoryScreen = () => {
  return <Text style={{ fontSize: 48 }}>SalesOrderHistoryScreen</Text>;
};

const styles = StyleSheet.create({});

SalesOrderHistoryScreen.navigationOptions = {
  headerTitle: () => <Header title="Sales History" />,
};
export default SalesOrderHistoryScreen;
