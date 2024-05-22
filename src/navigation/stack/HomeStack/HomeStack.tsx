import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "@/screen/pages";
import { Platform } from "react-native";

const Stack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerBlurEffect: "systemMaterialLight",
        }}
      />
    </Stack.Navigator>
  );
}
