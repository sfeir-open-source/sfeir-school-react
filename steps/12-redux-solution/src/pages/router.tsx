import { Outlet, RouterProvider, createBrowserRouter, useLocation, useParams } from 'react-router-dom';
import { HomePage } from './HomePage';
import { PeopleGridPage } from './PeopleGridPage';
import { NotFoundPage } from './NotFoundPage';
import { EditPeoplePage } from './EditPersonPage';
import { useDispatch } from 'react-redux';
import { navigateTo } from '../store/actions';
import { useEffect } from 'react';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: ConnectRouterToRedux,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: 'people',
        Component: PeopleGridPage,
      },
      {
        path: 'people/:id',
        Component: () => {
          const { id } = useParams();
          return <EditPeoplePage id={id ?? ''} />;
        },
      },
      {
        path: '*',
        Component: NotFoundPage,
      },
    ],
  },
]);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export function AppRouter() {
  return <RouterProvider router={router} />;
}

function ConnectRouterToRedux() {
  const location = useLocation();
  const dispatch = useDispatch();
  dispatch(navigateTo(location));

  return <Outlet />;
}
