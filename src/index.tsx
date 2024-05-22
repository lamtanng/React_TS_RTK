import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { store } from './app/store';
import ColorBox from './components/ColorBox/ColorBox';
import reportWebVitals from './reportWebVitals';

import ProductList from 'components/ProductList/ProductList';
import TodoList from 'components/TodoList/TodoList';
import Error from 'pages/Error/Error';
import Home from 'pages/Home/Home';
import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        path: '/box',
        element: <ColorBox />,
      },
      {
        path: '/todos',
        element: <TodoList />,
      },
      {
        path: '/products',
        element: <ProductList />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
