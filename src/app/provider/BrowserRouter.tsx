import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { mainRoute } from "../../pages/main";

const router = createBrowserRouter([mainRoute]);

export default function BrowserRouter() {
  return <RouterProvider router={router} />;
}
