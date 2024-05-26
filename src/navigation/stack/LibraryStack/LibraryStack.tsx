import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AlbumScreen, LibraryScreen } from "@/screen/pages";

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

      <Stack.Screen name="AlbumScreen" component={AlbumScreen} options={{}} />
    </Stack.Navigator>
  );
}
