import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ElementOrganisations } from "./screens/ElementOrganisations";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ElementOrganisations />
  </StrictMode>,
);
