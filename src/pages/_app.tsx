import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ThemeProvider } from "@mui/material";
import muiTheme from "~/styles/mui-theme";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc); // enable using utc timezone in date pickers

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Component {...pageProps} />
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default api.withTRPC(MyApp);
