import React from "react";
import { Button } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

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
import { Switch } from "react-native-gesture-handler";

const tabClientNav = createBottomTabNavigator({
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

const tabDeliveryNav = createBottomTabNavigator({
  orders: createStackNavigator({
    deliveryList: DeliveryListScreen,
    deliveryDetail: DeliveryOrderDetailScreen,
  }),
  Profile: createStackNavigator({ ProfileScreen }),
});

const tabSalesNav = createBottomTabNavigator({
  orders: createStackNavigator({
    salesList: SalesOrderHistoryScreen,
  }),
  add: createStackNavigator({ AddClientScreen }),
  Profile: createStackNavigator({ ProfileScreen }),
});
const loginStack = createStackNavigator({
  Login: LoginScreen,
  Subscribe: SubscribeScreen,
});
const tabGuestNav = createBottomTabNavigator({
  Products: createStackNavigator({ ProductScreen }),
  login: loginStack,
});

const CurrentNavigator = (role) => {
  switch (role) {
    case "client":
      return createDrawerNavigator({
        client: tabClientNav,
        CartItem: CartItemScreen,
        Profile: ProfileScreen,
      });
    case "delivery":
      return createDrawerNavigator({
        orders: tabDeliveryNav,
        Profile: createStackNavigator({ ProfileScreen }),
      });
    case "sales":
      return createDrawerNavigator({
        sales: tabSalesNav,
        add: AddClientScreen,
        Profile: ProfileScreen,
      });
    default:
      return createDrawerNavigator({
        products: createStackNavigator({ ProductScreen }),
        Login: createStackNavigator({ Login: LoginScreen }),
      });
  }
};
export default createAppContainer(CurrentNavigator(""));
// const switchNavigator = createDrawerNavigator({
//   Home: HomeScreen,
//   products: guestFlow,
//   sales: salesFlow,
//   orders: deliveryFlow,
//   client: clientFlow,
// });
