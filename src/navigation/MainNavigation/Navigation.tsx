import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  DarkTheme,
  NavigationContainer,
  DefaultTheme,
} from "@react-navigation/native";
import { useThemeContext } from "@/utils/hooks";
import { TabNavigator } from "../TabNavigator/TabNavigator";
import { Music } from "@/screen/pages";
const Stack = createNativeStackNavigator();

export function Navigator() {
  const theme = useThemeContext();
  return (
    <NavigationContainer theme={theme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen
          name="Music"
          component={Music}
          options={{
            presentation: "formSheet",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
