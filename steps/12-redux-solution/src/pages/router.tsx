import { RouterProvider, createBrowserRouter, useParams } from 'react-router-dom';
import { HomePage } from './HomePage';
import { PeopleGridPage } from './PeopleGridPage';
import { NotFoundPage } from './NotFoundPage';
import { EditPeoplePage } from './EditPersonPage';

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
]);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export function AppRouter() {
  return <RouterProvider router={router} />;
}
