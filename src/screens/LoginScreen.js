import React, { useState } from "react";

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
import RNRestart from "react-native-restart";

const LoginScreen = ({ errorMessage, onSubmit, navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Spacer />
        <Input
          secureTextEntry
          label="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <view
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
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancelScreen}
            onPress={() => navigation.navigate("SubscribeScreen")}
            underlayColor="red"
          >
            <Text style={styles.loginText}>Subscribe</Text>
          </TouchableOpacity>
        </view>
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

LoginScreen.navigationOptions = {
  //header: () => false,
  headerTitle: () => <Header title="Login" navigation={nav} />,
};

export default LoginScreen;
