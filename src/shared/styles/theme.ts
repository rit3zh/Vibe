import { ITheme } from "../@types/Theme/Theme";
import * as Constants from "@/utils/constants/index";

export const Theme: ITheme = {
  dark: { ...Constants.DARK_THEME },
  light: { ...Constants.LIGHT_THEME },
};
