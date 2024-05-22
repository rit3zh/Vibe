import { useThemeStore } from "@/store";

export function useThemeContext() {
  const theme = useThemeStore((state) => state.theme);
  return theme;
}
