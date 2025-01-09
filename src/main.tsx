import { StyledEngineProvider } from "@mui/styled-engine-sc";
import "material-icons/iconfont/material-icons.css";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { LoadingProvider } from "./app/context/loadingContext.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StyledEngineProvider injectFirst>
    <LoadingProvider>
      <App />
    </LoadingProvider>
  </StyledEngineProvider>
);
