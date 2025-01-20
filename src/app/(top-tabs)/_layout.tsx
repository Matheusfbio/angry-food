import {
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
  createMaterialTopTabNavigator,
} from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

export default function TabLayout() {
  return (
    <MaterialTopTabs>
      <MaterialTopTabs.Screen name="index" options={{ title: "Salgados" }} />
      <MaterialTopTabs.Screen name="drink" options={{ title: "Bebidas" }} />
      <MaterialTopTabs.Screen name="meal" options={{ title: "Refeições" }} />
    </MaterialTopTabs>
  );
}
