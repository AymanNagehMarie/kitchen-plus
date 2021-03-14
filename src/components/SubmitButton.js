import React, { useState } from "react";

import { View, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";

import Spacer from "./Spacer";
import { Text, Input } from "react-native-elements";

const SubmitButton = ({
  textSubmit,
  textCancel,
  onSubmit,
  onCancel,
  navigation,
}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={() => navigation.navigate("LandingPage")}
          underlayColor="#fff"
        >
          <Text style={styles.loginText}>
            {textSubmit ? textSubmit : "Submit"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancelScreen}
          onPress={() => navigation.navigate("SubscribeScreen")}
          underlayColor="red"
        >
          <Text style={styles.loginText}>
            {textCancel ? textCancel : "Cancel"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },

  loginScreenButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#1E6738",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  loginText: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  cancelScreen: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "red",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
});

export default SubmitButton;
