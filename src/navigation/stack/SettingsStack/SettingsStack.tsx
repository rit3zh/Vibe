import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SettingsScreen } from "@/screen/pages";

const Stack = createNativeStackNavigator();

export function SettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
