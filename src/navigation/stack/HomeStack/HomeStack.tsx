import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Artist, HomeScreen, Playlist } from "@/screen/pages";
import { Platform } from "react-native";

const Stack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          // headerBlurEffect: "dark",
          // headerTransparent: true,
          headerLargeTitle: true,
          headerTitle: "Home",
        }}
      />

      <Stack.Screen
        name="PlaylistScreen"
        component={Playlist}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ArtistScreen"
        component={Artist}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
