import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomePage } from './HomePage';
import { PeopleGridPage } from './PeopleGridPage';
import { NotFoundPage } from './NotFoundPage';
import { Layout } from './Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      {
        path: 'people',
        Component: PeopleGridPage,
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
