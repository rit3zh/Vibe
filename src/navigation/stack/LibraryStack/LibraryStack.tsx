import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LibraryScreen } from "@/screen/pages";

const Stack = createNativeStackNavigator();

export function LibraryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LibraryScreen"
        component={LibraryScreen}
        options={{
          headerLargeTitle: true,
          headerTitle: "Library",
        }}
      />
    </Stack.Navigator>
  );
}
