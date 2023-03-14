import { createBrowserRouter, RouterProvider } from "react-router-dom";

import QuizPage from "./pages/QuizPage";
import ResultsPage from "./pages/ResultsPage";
import StartPage from "./pages/StartPage";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage />,
  },
  {
    path: "/question/:id",
    element: <QuizPage />,
  },
  {
    path: "/results",
    element: <ResultsPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
