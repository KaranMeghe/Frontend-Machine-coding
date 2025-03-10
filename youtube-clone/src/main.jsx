import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { store } from './Redux/store.js';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainContainer, VideoDetails } from './Components/index.js';
import App from './App.jsx';
import { videoDetailsLoader } from './Config/loader.js';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "/watch/:videoId",
        element: <VideoDetails />,
        loader: videoDetailsLoader
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>
);
