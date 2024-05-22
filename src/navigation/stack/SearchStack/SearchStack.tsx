import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SearchScreen } from "@/screen/pages";

const Stack = createNativeStackNavigator();

export function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchScreen"
        options={{
          title: "Search",
          headerLargeTitle: true,
          headerBlurEffect: "systemUltraThinMaterial",
          headerSearchBarOptions: {
            placeholder: "Search Artists, Songs, Playlists and more!",
            tintColor: "white",
          },
        }}
        component={SearchScreen}
      />
    </Stack.Navigator>
  );
}
