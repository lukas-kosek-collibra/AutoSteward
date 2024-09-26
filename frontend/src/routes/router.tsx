import {
    createHashRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { ROUTES } from "./route";

export const router = createHashRouter(
    createRoutesFromElements(
        ROUTES.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
        ))
    )
);
