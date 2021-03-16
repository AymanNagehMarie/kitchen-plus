// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import "react-native-gesture-handler";
import Theme from "./src/constants/Theme";
import * as React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import LandingPage from "./src/screens/LandingPage";
import CartItemScreen from "./src/screens/CartItemScreen";
import AddClientScreen from "./src/screens/AddClientScreen";
import DeliveryListScreen from "./src/screens/DeliveryListScreen";
import DeliveryOrderDetailScreen from "./src/screens/DeliveryOrderDetailScreen";
import LoginScreen from "./src/screens/LoginScreen";
import LogoutScreen from "./src/screens/LogoutScreen";
import OrderDetailScreen from "./src/screens/OrderDetailScreen";
import OrderHistoryScreen from "./src/screens/OrderHistoryScreen";
import ProductScreen from "./src/screens/ProductScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import SalesOrderHistoryScreen from "./src/screens/SalesOrderHistoryScreen";
import SubscribeScreen from "./src/screens/SubscribeScreen";
import HomeScreen from "./src/screens/HomeScreen";
import Header from "./src/components/Header";
import { withTheme } from "react-native-elements";
import { Foundation, Feather } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ marginHorizontal: 10, flexDirection: "row" }}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        {/* <Foundation name="list" size={30} color={Theme.COLORS.MAJOR} /> */}
        <Feather name="menu" size={30} color={Theme.COLORS.MAJOR} />
        {/* <Image
        backgroundColor={Theme.COLORS.MAJOR}
       // color={Theme.COLORS.MAJOR}
          source={{
            uri:
              "https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png",
          }}
          style={{width: 25, height: 25, marginLeft: 5 }}
        /> */}
      </TouchableOpacity>
    </View>
  );
};

const productScreenStack = ({ navigation, route }) => {
  return (
    <Stack.Navigator initialRouteName="Products">
      <Stack.Screen
        name="ProductPage"
        component={ProductScreen}
        initialParams={route.params}
        options={{
          title: "Product", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerRight: () => (
            <View
              style={{ flexDirection: "row", margin: 5 }}
              underlayColor="#fff"
            >
              <View style={{ position: "absolute", zIndex: 2 }}>
                <TouchableOpacity
                  style={{
                    width: 15,
                    height: 15,
                    alignItems: "center",
                    opacity: 1,
                    shadowOpacity: "red",
                    backgroundColor: "white",
                    justifyContent: "center",
                    borderTopLeftRadius: 25,
                    borderBottomLeftRadius: 25,
                    borderTopRightRadius: 25,
                    borderBottomRightRadius: 25,
                  }}
                  underlayColor="#fff"
                >
                  <TouchableOpacity
                    style={{
                      width: 12,
                      height: 12,
                      alignItems: "center",
                      opacity: 1,
                      shadowOpacity: "red",
                      backgroundColor: "red",
                      justifyContent: "center",
                      borderTopLeftRadius: 25,
                      borderBottomLeftRadius: 25,
                      borderTopRightRadius: 25,
                      borderBottomRightRadius: 25,
                    }}
                    underlayColor="#fff"
                  ></TouchableOpacity>
                </TouchableOpacity>
              </View>
              <AntDesign
                name="shoppingcart"
                size={30}
                color={Theme.COLORS.MAJOR}
                onPress={() => {
                  navigation.navigate("CartItemScreen");
                }}
              />
            </View>
          ),

          headerStyle: {
            // backgroundColor: "#f4511e", //Set Header color
            backgroundColor: Theme.COLORS.HEADER, //Set Header color
          },
          headerTintColor: Theme.COLORS.MAJOR, //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const cartItemScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="CartItemScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: Theme.COLORS.HEADER, //Set Header color
        },
        headerTintColor: Theme.COLORS.MAJOR, //Set Header text color
        headerTitleStyle: {
          fontWeight: "bold", //Set Header text style
        },
      }}
    >
      <Stack.Screen
        name="CartItemScreen"
        component={CartItemScreen}
        options={{
          title: "Cart Items", //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const salesOrderHistoryScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          // backgroundColor: "#f4511e", //Set Header color
          backgroundColor: Theme.COLORS.HEADER, //Set Header color
        },
        headerTintColor: Theme.COLORS.MAJOR, //Set Header text color
        headerTitleStyle: {
          fontWeight: "bold", //Set Header text style
        },
      }}
    >
      <Stack.Screen
        name="SalesOrderHistoryScreen"
        component={SalesOrderHistoryScreen}
        options={{
          title: "Orders History", //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const deliveryListScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          // backgroundColor: "#f4511e", //Set Header color
          backgroundColor: Theme.COLORS.HEADER, //Set Header color
        },
        headerTintColor: Theme.COLORS.MAJOR, //Set Header text color
        headerTitleStyle: {
          fontWeight: "bold", //Set Header text style
        },
      }}
    >
      <Stack.Screen
        name="DeliveryListScreen"
        component={DeliveryListScreen}
        options={{
          title: "Delivery List", //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const deliveryOrderDetailStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerLeft: () => (
        //   <NavigationDrawerStructure navigationProps={navigation} />
        // ),
        headerStyle: {
          // backgroundColor: "#f4511e", //Set Header color
          backgroundColor: Theme.COLORS.HEADER, //Set Header color
        },
        headerTintColor: Theme.COLORS.MAJOR, //Set Header text color
        headerTitleStyle: {
          fontWeight: "bold", //Set Header text style
        },
      }}
    >
      <Stack.Screen
        name="DeliveryOrderDetailScreen"
        component={DeliveryOrderDetailScreen}
        options={{
          title: "Delivery Order Detail", //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const addClientScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          // backgroundColor: "#f4511e", //Set Header color
          backgroundColor: Theme.COLORS.HEADER, //Set Header color
        },
        headerTintColor: Theme.COLORS.MAJOR, //Set Header text color
        headerTitleStyle: {
          fontWeight: "bold", //Set Header text style
        },
      }}
    >
      <Stack.Screen
        name="AddClientScreen"
        component={AddClientScreen}
        options={{
          title: "Add Client", //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const loginScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerLeft: () => (
        //   <NavigationDrawerStructure navigationProps={navigation} />
        // ),
        headerStyle: {
          // backgroundColor: "#f4511e", //Set Header color
          backgroundColor: Theme.COLORS.HEADER, //Set Header color
        },
        headerTintColor: Theme.COLORS.MAJOR, //Set Header text color
        headerTitleStyle: {
          fontWeight: "bold", //Set Header text style
        },
      }}
    >
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          title: "Login Screen", //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const subscribeScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerLeft: () => (
        //   <NavigationDrawerStructure navigationProps={navigation} />
        // ),
        headerStyle: {
          // backgroundColor: "#f4511e", //Set Header color
          backgroundColor: Theme.COLORS.HEADER, //Set Header color
        },
        headerTintColor: Theme.COLORS.MAJOR, //Set Header text color
        headerTitleStyle: {
          fontWeight: "bold", //Set Header text style
        },
      }}
    >
      <Stack.Screen
        name="SubscribeScreen"
        component={SubscribeScreen}
        options={{
          title: "Subscribe", //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const orderDetailScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerLeft: () => (
        //   <NavigationDrawerStructure navigationProps={navigation} />
        // ),
        headerStyle: {
          // backgroundColor: "#f4511e", //Set Header color
          backgroundColor: Theme.COLORS.HEADER, //Set Header color
        },
        headerTintColor: Theme.COLORS.MAJOR, //Set Header text color
        headerTitleStyle: {
          fontWeight: "bold", //Set Header text style
        },
      }}
    >
      <Stack.Screen
        name="OrderDetailScreen"
        component={OrderDetailScreen}
        options={{
          title: "Order Details", //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const profileScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          // backgroundColor: "#f4511e", //Set Header color
          backgroundColor: Theme.COLORS.HEADER, //Set Header color
        },
        headerTintColor: Theme.COLORS.MAJOR, //Set Header text color
        headerTitleStyle: {
          fontWeight: "bold", //Set Header text style
        },
      }}
    >
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: "Profile", //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};
const orderHistoryScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure
            backgroundColor={Theme.COLORS.HEADER}
            navigationProps={navigation}
          />
        ),
        headerStyle: {
          // backgroundColor: "#f4511e", //Set Header color
          backgroundColor: Theme.COLORS.HEADER, //Set Header color
        },
        headerTintColor: Theme.COLORS.MAJOR, //Set Header text color
        headerTitleStyle: {
          fontWeight: "bold", //Set Header text style
        },
      }}
    >
      <Stack.Screen
        name="OrderHistoryScreen"
        component={OrderHistoryScreen}
        options={{
          title: "Order History", //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

// //////////////////////////////////  Page Content ///////////////////////////////////

const drawerStack = ({ route }) => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: "#7bb719",
      }}
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />

            {/* code clock for guest */}
            {route.params.userType === "guest" ? (
              <DrawerItem
                icon={({ color, size }) => (
                  <AntDesign name="login" color={color} size={size} />
                )}
                label={({ color }) => <Text style={{ color }}>Login</Text>}
                onPress={() =>
                  props.navigation.navigate("LoginScreen", {
                    userType: "guest",
                  })
                }
              />
            ) : null}

            {/* code clock for client */}
            {route.params.userType === "client" ? (
              //(props.navigation.closeDrawer(),

              <DrawerItem
                icon={({ color, size }) => (
                  <AntDesign name="logout" color={color} size={size} />
                )}
                label={({ color }) => <Text style={{ color }}>LogOut</Text>}
                onPress={() =>
                  props.navigation.navigate("drawerStack", {
                    userType: "guest",
                  })
                }
              />
            ) : null}
            {/* code block sales */}
            {route.params.userType === "sales" ? (
              <DrawerItem
                icon={({ color, size }) => (
                  <AntDesign name="login" color={color} size={size} />
                )}
                label={({ color }) => <Text style={{ color }}>LogOut</Text>}
                onPress={() =>
                  props.navigation.navigate("drawerStack", {
                    userType: "guest",
                  })
                }
              />
            ) : null}
            {/* code block Delivery */}
            {route.params.userType === "delivery" ? (
              <DrawerItem
                icon={({ color, size }) => (
                  <AntDesign name="login" color={color} size={size} />
                )}
                label={({ color }) => <Text style={{ color }}>LogOut</Text>}
                onPress={() =>
                  props.navigation.navigate("drawerStack", {
                    userType: "guest",
                  })
                }
              />
            ) : null}
          </DrawerContentScrollView>
        );
      }}
    >
      {/* ////////////////////////////////////  Side Panel ///////////////////////////// */}

      {route.params.userType === "guest" ? (
        <>
          <Drawer.Screen
            name="Products"
            options={{ drawerLabel: "Products" }}
            component={productScreenStack}
            initialParams={{ userType: route.params.userType }}
          />
<Drawer.Screen
            name="CartItemScreen"
            options={{ drawerLabel: "Cart Items" }}
            component={cartItemScreenStack}
            initialParams={{ userType: route.params.userType }}
          />
          {/* <Drawer.Screen
            name="SecondPage"
            options={{ drawerLabel: "Second page Option" }}
            component={secondScreenStack}
          />
          <Drawer.Screen
            name="ThirdPage"
            options={{ drawerLabel: "Third page Option" }}
            component={thirdScreenStack}
          /> */}
        </>
      ) : null}

      {route.params.userType === "client" ? (
        <>
          <Drawer.Screen
            name="Products"
            options={{ drawerLabel: "Products" }}
            component={productScreenStack}
            initialParams={{ userType: route.params.userType }}
          />

          <Drawer.Screen
            name="CartItemScreen"
            options={{ drawerLabel: "Cart Item" }}
            component={cartItemScreenStack}
          />
          <Drawer.Screen
            name="ProfileScreen"
            options={{ drawerLabel: "Profile" }}
            component={profileScreenStack}
          />
          <Drawer.Screen
            name="OrderHistoryScreen"
            options={{ drawerLabel: "Order History" }}
            component={orderHistoryScreenStack}
          />
        </>
      ) : null}

      {route.params.userType === "sales" ? (
        <>
          <Drawer.Screen
            name="AddClientScreen"
            options={{ drawerLabel: "Add Client" }}
            component={addClientScreenStack}
          />
          <Drawer.Screen
            name="SalesOrderHistoryScreen"
            options={{ drawerLabel: "Orders History" }}
            component={salesOrderHistoryScreenStack}
          />
          <Drawer.Screen
            name="ProfileScreen"
            options={{ drawerLabel: "Profile" }}
            component={profileScreenStack}
          />
        </>
      ) : null}

      {route.params.userType === "delivery" ? (
        <>
          <Drawer.Screen
            name="DeliveryListScreen"
            options={{ drawerLabel: "Delivery List" }}
            component={deliveryListScreenStack}
          />
          <Drawer.Screen
            name="ProfileScreen"
            options={{ drawerLabel: "Profile" }}
            component={profileScreenStack}
          />
        </>
      ) : null}
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="LoginScreen" component={loginScreenStack} />

        <Stack.Screen
          name="DeliveryOrderDetailScreen"
          component={deliveryOrderDetailStack}
        />

        <Stack.Screen name="SubscribeScreen" component={subscribeScreenStack} />
        <Stack.Screen
          name="OrderDetailScreen"
          component={orderDetailScreenStack}
        />

        <Stack.Screen name="drawerStack" component={drawerStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
