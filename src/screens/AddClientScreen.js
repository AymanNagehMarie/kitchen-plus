import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../components/Header";
let nav;

const AddClientScreen = ({ navigation }) => {
  nav = navigation;
  return <Text style={{ fontSize: 48 }}>AddClientScreen</Text>;
};

const styles = StyleSheet.create({});

AddClientScreen.navigationOptions = {
  headerTitle: () => <Header title="Add Client" navigation={nav} />,
};

export default AddClientScreen;
