import "@/styles/globals.css";
import {darkTheme, customTheme, lightTheme} from "@/theme";
import {CssBaseline, ThemeProvider, Theme} from "@mui/material";
import type {AppContext, AppProps} from "next/app";

interface Props extends AppProps {
	theme: string
}

export default function App({ Component, pageProps, theme }: Props) {
	
	const currentTheme:Theme = theme === 'light' ? lightTheme : theme === 'dark' ? darkTheme : customTheme;
	

	return (
		<ThemeProvider theme={currentTheme}>
			<CssBaseline />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

App.getInitialProps = async (ctx: AppContext) => {

	// Obtener la cookie "theme"
  const cookie = ctx.ctx.req?.headers.cookie;
  const themeCookie = cookie?.split(';').find((c) => c.trim().startsWith('theme='));

  // Obtener el valor del tema de la cookie o usar "dark" como valor predeterminado
  const theme = themeCookie ? themeCookie.split('=')[1] : 'dark';
	
	  // Validar el theme
		const validThemes = ['light', 'dark', 'custom']

	return {
		theme: validThemes.includes(theme) ? theme : 'dark'
	}
};	