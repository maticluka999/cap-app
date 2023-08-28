// @ts-nocheck

import { createTheme } from "@mui/material";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfigModule from "tailwind.config";

const tailwindConfig = resolveConfig(tailwindConfigModule);

const muiTheme = createTheme({
  palette: {
    primary: {
      main: tailwindConfig.theme.colors.mui_primary_main,
      light: tailwindConfig.theme.colors.mui_primary_light,
      dark: tailwindConfig.theme.colors.mui_primary_dark,
      contrastText: tailwindConfig.theme.colors.mui_primary_contrast_text,
    },
    secondary: {
      main: tailwindConfig.theme.colors.mui_secondary_main,
      light: tailwindConfig.theme.colors.mui_secondary_light,
      dark: tailwindConfig.theme.colors.mui_secondary_dark,
      contrastText: tailwindConfig.theme.colors.mui_secondary_contrast_text,
    },
    background: {
      default: tailwindConfig.theme.colors.mui_background_default,
      paper: tailwindConfig.theme.colors.mui_background_paper,
    },
    text: {
      primary: tailwindConfig.theme.colors.mui_text_primary,
      secondary: tailwindConfig.theme.colors.mui_text_secondary,
      disabled: tailwindConfig.theme.colors.mui_text_disabled,
    },
    error: {
      main: tailwindConfig.theme.colors.mui_error_main,
      light: tailwindConfig.theme.colors.mui_error_light,
      dark: tailwindConfig.theme.colors.mui_error_dark,
      //   contrastText: tailwindConfig.theme.colors.mui_error_contrast_text,
    },
    warning: {
      main: tailwindConfig.theme.colors.mui_warning_main,
      light: tailwindConfig.theme.colors.mui_warning_light,
      dark: tailwindConfig.theme.colors.mui_warning_dark,
      //   contrastText:
      //     tailwindConfig.theme.colors.mui_warning_contrast_text,
    },
    info: {
      main: tailwindConfig.theme.colors.mui_info_main,
      light: tailwindConfig.theme.colors.mui_info_light,
      dark: tailwindConfig.theme.colors.mui_info_dark,
      //   contrastText: tailwindConfig.theme.colors.mui_success_info_text,
    },
    success: {
      main: tailwindConfig.theme.colors.mui_success_main,
      light: tailwindConfig.theme.colors.mui_success_light,
      dark: tailwindConfig.theme.colors.mui_success_dark,
      //   contrastText:
      //     tailwindConfig.theme.colors.mui_success_contrast_text,
    },
    action: {
      active: tailwindConfig.theme.colors.mui_action_active,
      hover: tailwindConfig.theme.colors.mui_action_hover,
      selected: tailwindConfig.theme.colors.mui_action_selected,
      disabled: tailwindConfig.theme.colors.mui_action_disabled,
      disabledBackground:
        tailwindConfig.theme.colors.mui_action_disabled_background,
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          "&:-webkit-autofill": {
            "-webkit-box-shadow": `0 0 0 1000px ${tailwindConfig.theme.colors.mui_background_default} inset`,
            "-webkit-text-fill-color":
              tailwindConfig.theme.colors.mui_text_primary,
            "caret-color": tailwindConfig.theme.colors.mui_text_primary,
          },
        },
        notchedOutline: { border: "1px solid white" },
      },
    },
  },
});

export default muiTheme;
