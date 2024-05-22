import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LibraryScreen } from "@/screen/pages";

const Stack = createNativeStackNavigator();

export function LibraryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LibraryScreen" component={LibraryScreen} />
    </Stack.Navigator>
  );
}
