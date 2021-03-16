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
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "../components/Header";
import Spacer from "../components/Spacer";
import { Text, Input, ThemeProvider, colors } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import Theme from "../constants/Theme";
import Style from "../constants/Style";
import { users } from "../data/dataArrays";

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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={{ flex: 1, backgroundColor: Theme.COLORS.HEADER }}>
          <View style={Style.container}>
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
              placeholder="Email"
              style={styles.InputStyle}
              placeholderTextColor={Theme.COLORS.PLACEHOLDER}
              errorStyle={{ color: "red", fontSize: 18 }}
              // errorMessage={errorMessageEmail}
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
              secureTextEntry
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
              placeholder="Password"
              style={styles.InputStyle}
              placeholderTextColor={Theme.COLORS.PLACEHOLDER}
              errorStyle={{ color: "red", fontSize: 18 }}
              // errorMessage={errorMessageEmail}
              leftIcon={{
                type: "font-awesome",
                name: "lock",
                color: Theme.COLORS.MAJOR,
              }}
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
                onPress={() => {
                  if (email == "client") {
                    navigation.navigate("drawerStack", { userType: "client" });
                  } else if (email == "sales") {
                    navigation.navigate("drawerStack", { userType: "sales" });
                  } else if (email == "delivery") {
                    navigation.navigate("drawerStack", {
                      userType: "delivery",
                    });
                  }
                }}
                underlayColor="#fff"
              >
                <Text style={styles.loginText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("SubscribeScreen");
                }}
                underlayColor="red"
              >
                <Text style={styles.subscribeText}>
                  <Text style={styles.labelText}>Don't have account ? </Text>
                  Subscribe Now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 150,
    marginTop: 50,
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
  loginScreenButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: Theme.COLORS.MAJOR, //"#1E6738",
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
    color: Theme.COLORS.MAJOR,
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
