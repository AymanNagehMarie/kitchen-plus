import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { FontAwesome } from "@expo/vector-icons";

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

const clientFlow = createBottomTabNavigator({
  Products: createStackNavigator({ ProductScreen }),
  productFlow: createStackNavigator({
    CartItems: CartItemScreen,
  }),
  orderHistory: createStackNavigator({
    OrderHistory: OrderHistoryScreen,
    OrderDetail: OrderDetailScreen,
  }),
  Profile: createStackNavigator({ ProfileScreen }),
});

clientFlow.navigationOptions = {
  headerTitle: () => <Header title="client test" />,
  // title: "Tracks",
};

const switchNavigator = createSwitchNavigator({
  Home: HomeScreen,
  guestFlow: createBottomTabNavigator({
    Products: createStackNavigator({ Products: ProductScreen }),
    login: createStackNavigator({
      Login: LoginScreen,
      Subscribe: SubscribeScreen,
    }),
  }),

  salesFlow: createBottomTabNavigator({
    orders: createStackNavigator({
      salesList: SalesOrderHistoryScreen,
    }),
    add: createStackNavigator({ AddClientScreen }),
    Profile: createStackNavigator({ ProfileScreen }),
  }),
  deliveryFlow: createBottomTabNavigator({
    orders: createStackNavigator({
      deliveryList: DeliveryListScreen,
      deliveryDetail: DeliveryOrderDetailScreen,
    }),
    Profile: createStackNavigator({ ProfileScreen }),
  }),

  clientFlow,
});
export default createAppContainer(switchNavigator);
