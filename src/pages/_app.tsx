import "@/styles/globals.css";
import {darkTheme, customTheme, lightTheme} from "@/theme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import type {AppProps} from "next/app";

export default function App({Component, pageProps}: AppProps) {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
