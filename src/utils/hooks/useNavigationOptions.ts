import {
  NativeStackHeaderProps,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";

export function useNavigationOptions(
  props: NativeStackHeaderProps,
  options?: Partial<NativeStackNavigationOptions>
) {
  useLayoutEffect(() => {
    props.navigation.setOptions({
      ...options,
    });
  }, [props.navigation]);
}
