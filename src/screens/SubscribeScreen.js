import React, { useState, useRef } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  Ionicons,
  Entypo,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
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
  const isValidFName = fName == "";
  const errorMessageFName = isValidFName ? "Your full name is required." : "";

  const [phone, setPhone] = useState("");
  const isValidPhone = phone == "";
  const errorMessagePhone = isValidPhone ? "Your phone is required." : "";

  const [email, setEmail] = useState("");
  const isValidEmail = email == "";
  const errorMessageEmail = isValidEmail ? "Your email is required." : "";

  const [address, setAddress] = useState("");
  const isValidAddress = address == "";
  const errorMessageAddress = isValidAddress ? "Your address is required." : "";

  const [password, setPassword] = useState("");
  const isValidPassword = password == "";
  const errorMessagePassword = isValidPassword
    ? "Your password is required."
    : "";

  const [confirm, setConfirm] = useState("");
  const isValidConfirm = confirm == "";
  const errorMessageConfirm = isValidConfirm
    ? "Your confirm password is required."
    : "";

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16, backgroundColor: "white" }}>
        <Spacer />
        <Input
          label="Enter your full name"
          labelStyle={{ color: "black", fontSize: 18, fontWeight: "normal" }}
          value={fName}
          onChangeText={setfName}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Full Name"
          style={styles.InputStyle}
          placeholderTextColor="green"
          errorStyle={{ color: "red", fontSize: 18 }}
          errorMessage={errorMessageFName}
          leftIcon={<AntDesign name="user" size={24} color="green" />}
          textContentType="name"
        />
        <Spacer />

        <Input
          label="please enter your phone"
          labelStyle={{ color: "black", fontSize: 18, fontWeight: "normal" }}
          value={phone}
          onChangeText={setPhone}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Phone"
          style={styles.InputStyle}
          placeholderTextColor="green"
          errorStyle={{ color: "red", fontSize: 18 }}
          errorMessage={errorMessagePhone}
          leftIcon={{
            type: "vector-icons",
            name: "smartphone",
            color: "green",
          }}
          textContentType="telephoneNumber"
        />
        <Spacer />
        <Input
          label="Please enter your address"
          labelStyle={{ color: "black", fontSize: 18, fontWeight: "normal" }}
          value={address}
          onChangeText={setAddress}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Address "
          style={styles.InputStyle}
          placeholderTextColor="green"
          errorStyle={{ color: "red", fontSize: 18 }}
          errorMessage={errorMessageAddress}
          leftIcon={<Entypo name="address" size={24} color="green" />}
          textContentType="fullStreetAddress"
        />
        <Spacer />
        <Input
          label="Enter your your email"
          labelStyle={{ color: "black", fontSize: 18, fontWeight: "normal" }}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email "
          style={styles.InputStyle}
          placeholderTextColor="green"
          errorStyle={{ color: "red", fontSize: 18 }}
          errorMessage={errorMessageEmail}
          leftIcon={
            <MaterialCommunityIcons name="email" size={24} color="green" />
          }
          textContentType="emailAddress"
        />
        <Spacer />
        <Input
          label="Enter your password"
          labelStyle={{ color: "black", fontSize: 18, fontWeight: "normal" }}
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          placeholder="Password "
          style={styles.InputStyle}
          placeholderTextColor="green"
          errorStyle={{ color: "red", fontSize: 18 }}
          errorMessage={errorMessagePassword}
          leftIcon={<Entypo name="lock" size={24} color="green" />}
          textContentType="password"
        />
        <Spacer />
        <Input
          label="Re-enter your password"
          labelStyle={{ color: "black", fontSize: 18, fontWeight: "normal" }}
          value={confirm}
          onChangeText={setConfirm}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          placeholder="Confirm Password"
          style={styles.InputStyle}
          placeholderTextColor="green"
          errorStyle={{ color: "red", fontSize: 18 }}
          errorMessage={errorMessageConfirm}
          leftIcon={<Entypo name="lock" size={24} color="green" />}
          textContentType="newPassword"
        />

        <Spacer />
        <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={() => navigation.navigate("LandingPage")}
          underlayColor="#fff"
        >
          <Text style={styles.loginText}>Subscribe</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("LoginScreen")}
          underlayColor="red"
        >
          <Text style={styles.linkText}>I already have an account</Text>
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
    fontSize: 14,
    fontWeight: "500",
    padding: 8,

    borderWidth: 0,
    backgroundColor: "#FBFBFB",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
    borderTopWidth: 0, //works
    borderBottomWidth: 0, //works,
    alignItems: "flex-start",
    flexDirection: "row",
    color: "green",
  },
  linkText: {
    marginTop: 20,
    paddingTop: 15,
    paddingBottom: 10,
    color: "#1E6738",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default SubscribeScreen;
