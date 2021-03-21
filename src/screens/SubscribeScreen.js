import React, { useState, useRef, useEffect } from "react";
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
import Map from "../components/Map";

const SubscribeScreen = ({ navigation }) => {
  const [fName, setfName] = useState("");
  const isValidFName = fName == "";
  const errorMessageFName = isValidFName ? "Your full name is required." : "";

  const [phone, setPhone] = useState("971");
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
  // testes data festival city (25.215154718267243   ,55.362031403928995)
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const getLatLon = (latitude, longitude) => {
    setLatitude(latitude);
    setLongitude(longitude);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        flex: 1,
        backgroundColor: Theme.COLORS.HEADER,
        marginBottom: -50,
      }}
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
            label="Enter your full name"
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
            label="please enter your phone"
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
            label="Enter your your email"
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
            label="Enter your password"
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
            textContentType="password"
            keyboardType={"visible-password"}
          />
          <Spacer />
          <Input
            label="Re-enter your password"
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
          />
          <Spacer />
          <Input
            label="Please enter your address"
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
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: 1,
            }}
          />
          <Spacer />
          <Text style={{ color: Theme.COLORS.MAJOR }}>
            Please Move Marker to your location
          </Text>
          <Spacer />
          <Map
            latitude={latitude}
            longitude={longitude}
            getLatLon={getLatLon}
          />
          {latitude && longitude ? (
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text>{"Lat: " + latitude}</Text>
              <Text>{"Lng: " + longitude}</Text>
            </View>
          ) : null}
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

export default SubscribeScreen;
