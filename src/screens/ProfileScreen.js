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
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Input, Text } from "react-native-elements";
import Spacer from "../components/Spacer";
import Theme from "../constants/Theme";
import Style from "../constants/Style";
import { users } from "../data/dataArrays";
const ProfileScreen = ({ navigation, route }) => {
  const data = users[1];

  const [fName, setfName] = useState(data.fName);
  const isValidFName = fName == "";
  const errorMessageFName = isValidFName ? "Your full name is required." : "";

  const [phone, setPhone] = useState(data.phone);
  const isValidPhone = phone == "";
  const errorMessagePhone = isValidPhone ? "Your phone is required." : "";

  const [email, setEmail] = useState(data.email);
  const isValidEmail = email == "";
  const errorMessageEmail = isValidEmail ? "Your email is required." : "";

  const [address, setAddress] = useState(data.address);
  const isValidAddress = address == "";
  const errorMessageAddress = isValidAddress ? "Your address is required." : "";

  const [password, setPassword] = useState(data.password);
  const isValidPassword = password == "";
  const errorMessagePassword = isValidPassword
    ? "Your password is required."
    : "";

  const [confirm, setConfirm] = useState(data.password);
  const isValidConfirm = confirm == "";
  const errorMessageConfirm = isValidConfirm
    ? "Your confirm password is required."
    : "";

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: Theme.COLORS.HEADER }}
    >
      {/* onPress={Keyboard.dismiss} */}
      <TouchableWithoutFeedback>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={Style.container}
          contentContainerStyle={{ paddingBottom: 10 }}
        >
          <Spacer />
          <Input
            label="Full name"
            labelStyle={{
              color: Theme.COLORS.MAJOR,
              fontSize: 18,
              fontWeight: "normal",
            }}
            value={fName}
            onChangeText={setfName}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Full Name"
            style={styles.InputStyle}
            placeholderTextColor={Theme.COLORS.PLACEHOLDER}
            errorStyle={{ color: "red", fontSize: 18 }}
            errorMessage={errorMessageFName}
            leftIcon={
              <AntDesign name="user" size={24} color={Theme.COLORS.MAJOR} />
            }
            textContentType="name"
          />
          <Spacer />

          <Input
            label="phone"
            labelStyle={{
              color: Theme.COLORS.MAJOR,
              fontSize: 18,
              fontWeight: "normal",
            }}
            value={phone}
            onChangeText={setPhone}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Phone"
            style={styles.InputStyle}
            placeholderTextColor={Theme.COLORS.PLACEHOLDER}
            errorStyle={{ color: "red", fontSize: 18 }}
            errorMessage={errorMessagePhone}
            leftIcon={{
              type: "vector-icons",
              name: "smartphone",
              color: Theme.COLORS.MAJOR,
            }}
            textContentType="telephoneNumber"
            keyboardType={"numeric"}
          />
          <Spacer />
          <Input
            label="Address"
            labelStyle={{
              color: Theme.COLORS.MAJOR,
              fontSize: 18,
              fontWeight: "normal",
            }}
            value={address}
            onChangeText={setAddress}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Address "
            style={styles.InputStyle}
            placeholderTextColor={Theme.COLORS.PLACEHOLDER}
            errorStyle={{ color: "red", fontSize: 18 }}
            errorMessage={errorMessageAddress}
            leftIcon={
              <Entypo name="address" size={24} color={Theme.COLORS.MAJOR} />
            }
            textContentType="fullStreetAddress"
          />
          <Spacer />
          <Input
            label="Email"
            labelStyle={{
              color: Theme.COLORS.MAJOR,
              fontSize: 18,
              fontWeight: "normal",
            }}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email "
            style={styles.InputStyle}
            placeholderTextColor={Theme.COLORS.PLACEHOLDER}
            errorStyle={{ color: "red", fontSize: 18 }}
            errorMessage={errorMessageEmail}
            leftIcon={
              <MaterialCommunityIcons
                name="email"
                size={24}
                color={Theme.COLORS.MAJOR}
              />
            }
            textContentType="emailAddress"
          />
          <Spacer />
          <Input
            label="Password"
            labelStyle={{
              color: Theme.COLORS.MAJOR,
              fontSize: 18,
              fontWeight: "normal",
            }}
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            placeholder="Password "
            style={styles.InputStyle}
            placeholderTextColor={Theme.COLORS.PLACEHOLDER}
            errorStyle={{ color: "red", fontSize: 18 }}
            errorMessage={errorMessagePassword}
            leftIcon={
              <Entypo name="lock" size={24} color={Theme.COLORS.MAJOR} />
            }
            textContentType="newPassword"
            keyboardType={"visible-password"}
          />
          <Spacer />
          <Input
            label="Confirm password"
            labelStyle={{
              color: Theme.COLORS.MAJOR,
              fontSize: 18,
              fontWeight: "normal",
            }}
            value={confirm}
            onChangeText={setConfirm}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            placeholder="Confirm Password"
            style={styles.InputStyle}
            placeholderTextColor={Theme.COLORS.PLACEHOLDER}
            errorStyle={{ color: "red", fontSize: 18 }}
            errorMessage={errorMessageConfirm}
            leftIcon={
              <Entypo name="lock" size={24} color={Theme.COLORS.MAJOR} />
            }
            textContentType="newPassword"
            keyboardType={"visible-password"}
          />

          <Spacer />
          <TouchableOpacity
            style={styles.loginScreenButton}
            onPress={() => navigation.navigate("LandingPage")}
            underlayColor="#fff"
          >
            <Text style={styles.loginText}>Update Profile</Text>
          </TouchableOpacity>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  loginScreenButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: Theme.COLORS.MAJOR,
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
    color: Theme.COLORS.MAJOR,
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

export default ProfileScreen;
