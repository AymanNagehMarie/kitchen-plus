import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../components/Header";

const ProfileScreen = () => {
  return <Text style={{ fontSize: 48 }}>ProfileScreen</Text>;
};

const styles = StyleSheet.create({});

ProfileScreen.navigationOptions = {
  headerTitle: () => <Header title="Profile" />,
};

export default ProfileScreen;
