import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const { Screen, Navigator } = createBottomTabNavigator();

export function TabBarRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name="Home"
        component={AnnounceRouter}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <IconView>
              <Entypo name="home" color={color} size={size + 10} />
            </IconView>
          ),
        }}
      />
      <Screen
        name="Anuncio"
        component={AnnounceScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <IconView>
              <Entypo name="shop" color={color} size={size + 10} />
            </IconView>
          ),
        }}
      />
      <Screen
        name="Config"
        component={SettingScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <IconView>
              <SimpleLineIcons name="menu" size={size + 6} color={color} />
            </IconView>
          ),
        }}
      />
    </Navigator>
  );
}
