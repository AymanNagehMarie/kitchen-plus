import React, { useState } from "react";
import {
  Ionicons,
  Entypo,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import {
  View,
  StyleSheet,
  Platform,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Header from "../components/Header";
import Spacer from "../components/Spacer";
import { Text, Input, ThemeProvider, colors } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const LoginScreen = ({ errorMessage, onSubmit, navigation }) => {
  const [email, setEmail] = useState("");
  const isValidEmail = email == "";
  const errorMessageEmail = isValidEmail ? "Your email is required." : "";

  const [password, setPassword] = useState("");
  const isValidPassword = password == "";
  const errorMessagePassword = isValidPassword
    ? "Your password is required."
    : "";

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email"
          style={styles.InputStyle}
          placeholderTextColor="green"
          errorStyle={{ color: "red", fontSize: 18 }}
          // errorMessage={errorMessageEmail}
          leftIcon={
            <MaterialCommunityIcons name="email" size={24} color="green" />
          }
          textContentType="emailAddress"
        />
        <Spacer />
        <Input
          secureTextEntry
          label="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          style={styles.InputStyle}
          placeholderTextColor="green"
          errorStyle={{ color: "red", fontSize: 18 }}
          // errorMessage={errorMessageEmail}
          leftIcon={{ type: "font-awesome", name: "lock", color: "green" }}
          textContentType="password"
        />
        <Spacer />

        <View
          style={
            {
              // justifyContent: "center",
              // alignItems: "center",
              // flexDirection: "row",
            }
          }
        >
          <TouchableOpacity
            style={styles.loginScreenButton}
            onPress={() => navigation.navigate("LandingPage")}
            underlayColor="#fff"
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("SubscribeScreen")}
            underlayColor="red"
          >
            <Text style={styles.subscribeText}>
              <Text style={styles.labelText}>Don't have account ? </Text>
              Subscribe Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
//{errorMessage ? (
//<Text style={styles.errorMessage}>{errorMessage}</Text>
//) : null}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 150,
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
  subscribeScreen: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  subscribeText: {
    marginTop: 20,
    color: "#1E6738",
    textAlign: "center",
    fontWeight: "bold",
  },
  labelText: {
    color: "black",
    fontSize: 15,
    textDecorationLine: "underline",
  },
});

LoginScreen.navigationOptions = {
  //header: () => false,
  headerTitle: () => <Header title="Login" navigation={nav} />,
};

export default LoginScreen;
