import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../components/Header";

const AddClientScreen = () => {
  return <Text style={{ fontSize: 48 }}>AddClientScreen</Text>;
};

const styles = StyleSheet.create({});

AddClientScreen.navigationOptions = {
  headerTitle: () => <Header title="Add Client" />,
};

export default AddClientScreen;
