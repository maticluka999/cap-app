import { Config } from "tailwindcss/types/config";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        // primary
        "primary-main": "rgb(var(--color-primary-main) / <alpha-value>)",
        mui_primary_main: "rgb(var(--color-primary-main))",

        "primary-light": "rgb(var(--color-primary-light) / <alpha-value>)",
        mui_primary_light: "rgb(var(--color-primary-light))",

        "primary-dark": "rgb(var(--color-primary-dark) / <alpha-value>)",
        mui_primary_dark: "rgb(var(--color-primary-dark))",

        "primary-contrast-text":
          "rgb(var(--color-primary-contrast-text) / <alpha-value>)",
        mui_primary_contrast_text: "rgb(var(--color-primary-contrast-text))",

        // secondary
        "secondary-main": "rgb(var(--color-secondary-main) / <alpha-value>)",
        mui_secondary_main: "rgb(var(--color-secondary-main))",

        "secondary-light": "rgb(var(--color-secondary-light) / <alpha-value>)",
        mui_secondary_light: "rgb(var(--color-secondary-light))",

        "secondary-dark": "rgb(var(--color-secondary-dark) / <alpha-value>)",
        mui_secondary_dark: "rgb(var(--color-secondary-dark))",

        "secondary-contrast-text":
          "rgb(var(--color-secondary-contrast-text) / <alpha-value>)",
        mui_secondary_contrast_text:
          "rgb(var(--color-secondary-contrast-text))",

        // background
        "background-default":
          "rgb(var(--color-background-default) / <alpha-value>)",
        mui_background_default: "rgb(var(--color-background-default))",

        "background-paper":
          "rgb(var(--color-background-paper) / <alpha-value>)",
        mui_background_paper: "rgb(var(--color-background-paper))",

        // text
        "text-primary": "rgb(var(--color-text-primary) / <alpha-value>)",
        mui_text_primary: "rgb(var(--color-text-primary))",

        "text-secondary": "rgb(var(--color-text-secondary) / <alpha-value>)",
        mui_text_secondary: "rgb(var(--color-text-secondary))",

        "text-disabled": "rgb(var(--color-text-disabled) / <alpha-value>)",
        mui_text_disabled: "rgb(var(--color-text-disabled))",

        // error
        "error-main": "rgb(var(--color-error-main) / <alpha-value>)",
        mui_error_main: "rgb(var(--color-error-main))",

        "error-light": "rgb(var(--color-error-light) / <alpha-value>)",
        mui_error_light: "rgb(var(--color-error-light))",

        "error-dark": "rgb(var(--color-error-dark) / <alpha-value>)",
        mui_error_dark: "rgb(var(--color-error-dark))",

        // warning
        "warning-main": "rgb(var(--color-warning-main) / <alpha-value>)",
        mui_warning_main: "rgb(var(--color-warning-main))",

        "warning-light": "rgb(var(--color-warning-light) / <alpha-value>)",
        mui_warning_light: "rgb(var(--color-warning-light))",

        "warning-dark": "rgb(var(--color-warning-dark) / <alpha-value>)",
        mui_warning_dark: "rgb(var(--color-warning-dark))",

        // info
        "info-main": "rgb(var(--color-info-main) / <alpha-value>)",
        mui_info_main: "rgb(var(--color-info-main))",

        "info-light": "rgb(var(--color-info-light) / <alpha-value>)",
        mui_info_light: "rgb(var(--color-info-light))",

        "info-dark": "rgb(var(--color-info-dark) / <alpha-value>)",
        mui_info_dark: "rgb(var(--color-info-dark))",

        // success
        "success-main": "rgb(var(--color-success-main) / <alpha-value>)",
        mui_success_main: "rgb(var(--color-success-main))",

        "success-light": "rgb(var(--color-success-light) / <alpha-value>)",
        mui_success_light: "rgb(var(--color-success-light))",

        "success-dark": "rgb(var(--color-success-dark) / <alpha-value>)",
        mui_success_dark: "rgb(var(--color-success-dark))",

        // action
        "action-active": "rgb(var(--color-action-active) / <alpha-value>)",
        mui_action_active: "rgb(var(--color-action-active))",

        "action-hover": "rgb(var(--color-action-hover) / <alpha-value>)",
        mui_action_hover: "rgb(var(--color-action-hover))",

        "action-selected": "rgb(var(--color-action-selected) / <alpha-value>)",
        mui_action_selected: "rgb(var(--color-action-selected))",

        "action-disabled": "rgb(var(--color-action-disabled) / <alpha-value>)",
        mui_action_disabled: "rgb(var(--color-action-disabled))",

        "action-disabled-background":
          "rgb(var(--color-action-disabled-background) / <alpha-value>)",
        mui_action_disabled_background:
          "rgb(var(--color-action-disabled-background))",
      },
    },
  },
  plugins: [],
} satisfies Config;
