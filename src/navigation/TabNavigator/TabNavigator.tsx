import React from "react";
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import {
  HomeStack,
  SearchStack,
  SettingsStack,
  LibraryStack,
} from "../stack/index";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import * as Constants from "@/utils/constants/index";
import { useThemeContext } from "@/utils/hooks";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { FloatingPlayer } from "@/components/index";
const Tabs = createBottomTabNavigator();

export function TabNavigator() {
  const theme = useThemeContext();

  return (
    <>
      <Tabs.Navigator
        tabBar={(props) => (
          <React.Fragment>
            <FloatingPlayer
              onPress={() => props.navigation.navigate("Music")}
            />
            <BottomTabBar {...props} />
          </React.Fragment>
        )}
        screenOptions={({ route }) => ({
          headerShown: false,

          tabBarBackground: () => (
            <BlurView
              intensity={100}
              tint="systemUltraThinMaterialDark"
              style={{
                ...StyleSheet.absoluteFillObject,
              }}
            />
          ),
          tabBarStyle: ((route) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? "";
            console.log(routeName);
            if (routeName === "SampleScreen") {
              return { display: "none" };
            }
            return;
          })(route),
        })}
      >
        <Tabs.Screen
          name={"HomeStack"}
          component={HomeStack}
          options={({}) => ({
            tabBarShowLabel: false,

            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={!focused ? "home-outline" : "home"}
                color={
                  focused
                    ? Constants.Colors.dark.iconColorWithFocused
                    : Constants.Colors.dark.iconColorWithoutFocused
                }
                size={24}
              />
            ),
          })}
        />
        <Tabs.Screen
          name={"SearchStack"}
          component={SearchStack}
          options={({}) => ({
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={!focused ? "search-outline" : "search"}
                color={
                  focused
                    ? Constants.Colors.dark.iconColorWithFocused
                    : Constants.Colors.dark.iconColorWithoutFocused
                }
                size={24}
              />
            ),
          })}
        />
        <Tabs.Screen
          name={"LibraryStack"}
          component={LibraryStack}
          options={({ navigation, route }) => ({
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={!focused ? "library-outline" : "library"}
                color={
                  focused
                    ? Constants.Colors.dark.iconColorWithFocused
                    : Constants.Colors.dark.iconColorWithoutFocused
                }
                size={24}
              />
            ),
          })}
        />
        <Tabs.Screen
          name={"SettingsStack"}
          component={SettingsStack}
          options={({}) => ({
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={!focused ? "settings-outline" : "settings"}
                color={
                  focused
                    ? Constants.Colors.dark.iconColorWithFocused
                    : Constants.Colors.dark.iconColorWithoutFocused
                }
                size={24}
              />
            ),
          })}
        />
      </Tabs.Navigator>
    </>
  );
}
