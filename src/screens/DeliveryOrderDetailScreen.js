import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../components/Header";

const DeliveryOrderDetailScreen = () => {
  return <Text style={{ fontSize: 48 }}>DeliveryOrderDetailScreen</Text>;
};

const styles = StyleSheet.create({});

DeliveryOrderDetailScreen.navigationOptions = {
  headerTitle: () => <Header title="Order Details" />,
};

export default DeliveryOrderDetailScreen;
