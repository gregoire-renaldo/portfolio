// font awesome
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import "../styles/globals.css";
import { ThemeProvider } from "next-themes";


function MyApp({ Component, pageProps }) {
  return (

    <ThemeProvider defaultTheme="light" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
