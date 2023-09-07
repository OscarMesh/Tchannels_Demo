import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Root from "./root/Root";

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Root/>, children: [
        { index: true, element: <Page1/> },
        { path: 'page2', element: <Page2 /> }  
      ]
    }
  ])

  return (<RouterProvider router={ router } />);
}

export default App;
