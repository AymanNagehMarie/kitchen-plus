// Dynamically Set Drawer/Sidebar Options in React Navigation Drawer
// https://aboutreact.com/dynamically-change-sidebar-options/
import React, { useState, useRef } from "react";
import {
  View,
  Platform,
  Button,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { Input, Text } from "react-native-elements";
import Spacer from "../components/Spacer";

const SubscribeScreen = ({ navigation }) => {
  const [fName, setfName] = useState("");
  const [phone, setPhone] = useState("971");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16, backgroundColor: "white" }}>
        <Spacer />
        <Input
          style={styles.InputStyle}
          label="Full Name"
          value={fName}
          onChangeText={setfName}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Please Enter Full Name "
        />
        <Spacer />

        <Input
          label="Phone"
          value={phone}
          onChangeText={setPhone}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Spacer />
        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Spacer />
        <Input
          label="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
        <Spacer />
        <Input
          label="Address"
          value={address}
          onChangeText={setAddress}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Spacer />
        <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={() => navigation.navigate("LandingPage")}
          underlayColor="#fff"
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
  InputStyle: {
    textAlign: "center",
    fontSize: 14,
    color: "red",
    fontWeight: "bold",
  },
});

export default SubscribeScreen;
