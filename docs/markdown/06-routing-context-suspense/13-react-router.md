<!-- .slide: class="transition" -->

# React Router

##==##

# React Router

Will offer high level url / history management

##==##

<!-- .slide: class="with-code" -->

# React Router - plain object version

```TypeScript [1|3-7|4-5|6|9-11]
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";

const router = createBrowserRouter([
    { path: '/', Component: HomePage },
    { path: '/about', Component: AboutPage },
    { path: '*', element: <Link to="/">Back to home</Link> },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# React Router - components version

```TypeScript [2-8|3,7|4-5|6|11-13]
function App() {
    return <Routes>
        <Route path="/" Component={Layout}>
          <Route index Component={HomePage} />
          <Route path="about" Component={AboutPage} />
          <Route path="*" element={<Link to="/">Back to home</Link>} />
        </Route>
      </Routes>
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter><App /></BrowserRouter>
);
```

<!-- .element: class="big-code" -->
