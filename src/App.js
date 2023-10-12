import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Home from "./components/Home";
function App() {
  return <RouterProvider router={appRouter}></RouterProvider>;
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/browse",
        element: <Home />,
      },
    ],
  },
]);

export default App;
