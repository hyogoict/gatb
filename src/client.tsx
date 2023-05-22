import ReactDOMClient from "react-dom/client";
import { Page } from "./page";

const rootElement = document.getElementById("react-root");
if (rootElement === null) throw new Error("rootElement not found.");

ReactDOMClient.hydrateRoot(rootElement, <Page />);