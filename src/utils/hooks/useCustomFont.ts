import { useFonts } from "expo-font";
export enum Fonts {
  Circular = "Circular",
  CircularNormal = "CircularNormal",
}

export function useInitialFonts() {
  const [fontsLoaded] = useFonts({
    Circular: require("@/assets/fonts/Circular/CircularSpotifyText-Bold.otf"),
    CircularNormal: require("@/assets/fonts/Circular/CircularSpotifyText-Medium.otf"),
  });

  return fontsLoaded;
}
