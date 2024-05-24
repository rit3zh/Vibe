import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SampleScreen, SearchScreen } from "@/screen/pages";

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
        }}
        component={SearchScreen}
      />

      <Stack.Screen
        name="SampleScreen"
        options={{
          headerShown: false,
        }}
        component={SampleScreen}
      />
    </Stack.Navigator>
  );
}
