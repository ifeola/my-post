import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import PostContextContainer from "./hooks/usePost";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PostContextContainer>
      <App />
    </PostContextContainer>
  </StrictMode>
);
