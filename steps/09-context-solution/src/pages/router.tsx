import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomePage } from './HomePage';
import { PeopleGridPage } from './PeopleGridPage';
import { NotFoundPage } from './NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: 'people',
    Component: PeopleGridPage,
  },
  {
    path: '*',
    Component: NotFoundPage,
  },
]);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export function AppRouter() {
  return <RouterProvider router={router} />;
}
