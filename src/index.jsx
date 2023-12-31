import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@slices";
import Layout from "@src/layout";
import HowToUseItJS from "@src/how-to-use-it-js";
import "@src/index.css";
import { IconContext } from "react-icons";
import {
  createHashRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Presentation from "./presentation";
import HowToUseItTS from "./how-to-use-it-ts";
import GetInitialStateFromStorage from "./get-initial-state-from-storage";
import DefineMiddleware from "./define-middleware";
import PassOptionsToReduxStore from "./pass-options-to-redux-store";
import ThingsYouCanDo from "./things-you-can-do";
import NoteOnNomenclature from "./note-on-nomenclature";
import NoteOnTesting from "./note-on-testing";
import ApiReference from "./api-reference";
import License from "./license";
import Installation from "./installation";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import favicon from "../public/favicon.ico";
import webmanifest from "../public/site.webmanifest";
import favicon_32_32 from "../public/favicon-32x32.png";
import favicon_16_16 from "../public/favicon-16x16.png";
import apple_touch_icon from "../public/apple-touch-icon.png";
import android_chrome_512_512 from "../public/android-chrome-512x512.png";
import android_chrome_192_192 from "../public/android-chrome-192x192.png";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route element={<Presentation />} index />
      <Route element={<Installation />} path="installation" />
      <Route element={<HowToUseItJS />} path="how-to-use-it-javascript" />
      <Route element={<HowToUseItTS />} path="how-to-use-it-typescript" />
      <Route
        element={<GetInitialStateFromStorage />}
        path="get-initial-state-from-storage"
      />
      <Route element={<DefineMiddleware />} path="define-middleware" />
      <Route
        element={<PassOptionsToReduxStore />}
        path="pass-options-to-redux-store"
      />
      <Route element={<ThingsYouCanDo />} path="things-you-can-do" />
      <Route element={<NoteOnNomenclature />} path="note-on-nomenclature" />
      <Route element={<NoteOnTesting />} path="note-on-testing" />
      <Route element={<ApiReference />} path="api-reference" />
      <Route element={<License />} path="license" />
    </Route>
  )
);

const container = document.getElementById("root");

if (container !== null) {
  createRoot(container).render(
    <StrictMode>
      <Provider>
        <IconContext.Provider value={{ size: "2em" }}>
          <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
          </ThemeProvider>
        </IconContext.Provider>
      </Provider>
    </StrictMode>
  );
}
