import React, { useState, useEffect } from "react";
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
import { Route, getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { FloatingPlayer } from "@/components/index";

const Tabs = createBottomTabNavigator();

export function TabNavigator() {
  const theme = useThemeContext();

  const [hideFloatingPlayer, setHideFloatingPlayer] = useState(false);
  const [route, setRoute] = useState<any>();

  useEffect(() => {
    const handleTabBarVisibility = (_route: Partial<Route<string>>) => {
      if (!_route) return;
      const routeName = getFocusedRouteNameFromRoute(_route);
      if (routeName === "SampleScreen") {
        setHideFloatingPlayer(true);
      } else {
        setHideFloatingPlayer(false);
      }
    };
    if (!route) return;
    handleTabBarVisibility(route);
  }, [route]);

  return (
    <>
      <Tabs.Navigator
        tabBar={(props) => {
          const routeIndex = props.state.routes[props.state.index];

          setRoute(routeIndex);
          return (
            <React.Fragment>
              {!hideFloatingPlayer && (
                <FloatingPlayer
                  onPress={() => props.navigation.navigate("Music")}
                />
              )}
              <BottomTabBar {...props} />
            </React.Fragment>
          );
        }}
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
            if (!route) return;
            const routeName = getFocusedRouteNameFromRoute(route);

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
          options={{
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
          }}
        />
        <Tabs.Screen
          name={"SearchStack"}
          component={SearchStack}
          options={{
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
          }}
        />
        <Tabs.Screen
          name={"LibraryStack"}
          component={LibraryStack}
          options={{
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
          }}
        />
        <Tabs.Screen
          name={"SettingsStack"}
          component={SettingsStack}
          options={{
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
          }}
        />
      </Tabs.Navigator>
    </>
  );
}
