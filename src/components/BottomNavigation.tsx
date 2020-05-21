import React, { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialCommunityIcons,
  Octicons,
} from "react-native-vector-icons";

import Home from "../screens/Home";
import TodoList from "../screens/TodoList";
import Account from"../screens/Account";
import Colors from "../constans/Colors";

const Tab = createBottomTabNavigator();

const BottomTabs: FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Colors.white,
        inactiveTintColor: "#ffffff50",
        showLabel: false,
        labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: Colors.primary,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="light-bulb" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="TodoList"
        component={TodoList}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="leaf" color={color} size={size} />
          ),
        }}
      />
            <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
