import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ErrorPage404 from './error-page-404';
import Authorization from './routes/Authorization';
import PageUser from './routes/PageUser';
import PageSearch from './routes/PageSearch';
import SearchResultsPage from './routes/SearchResultsPage';
import DispMenuAndAuthMob from './routes/DispMenuAndAuthMob';
/*<App />*/
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
//import App from './App';
import {AuthorProv} from './AuthorizationJS/AuthorUtil/AuthorCont'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
    errorElement: <ErrorPage404 />,
  },
  {
    path: '/dispMenu/:dispMenuId',
    element: <DispMenuAndAuthMob />,
  },
      {
        path: '/loginPage/:loginPageId',
        element: <Authorization />,
      },
  {
    path: '/account/:accountId',
    element: <PageUser />,
  },
  {
    path: '/requestingData/:requestingDataId',
    element: <PageSearch />,
  },
  {
    path: '/search/:searchId',
    element: <SearchResultsPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <AuthorProv>
    <RouterProvider router={router} />
    </AuthorProv>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))<RouterProvider router={router} />
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
