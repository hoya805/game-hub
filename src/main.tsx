import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App";
import theme from "./theme";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Provider,  } from "./components/ui/provider";
// import App from "./App";
// import theme from "./theme";
// import "./index.css";
// import { ThemeContext,  } from "@emotion/react";

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <React.StrictMode>
//     <Provider>
//       <ColorModeScript initialColorMode={theme.config.initialColorMode} />
//       <App />
//     </Provider>
//   </React.StrictMode>
// );
