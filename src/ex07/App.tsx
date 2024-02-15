import React, { useState, useEffect } from "react";
import { TopAppBarActionItem } from "@rmwc/top-app-bar";

import { Header } from "../solution/Header";
import { Loading } from "../solution/Loading";
import { SearchableList } from "../solution/SearchableList";
import { Player } from "../solution/Player";
import { loadPeople, loadPerson } from "../utils";
import {
  Navigate,
  Outlet,
  Route,
  Routes,
  createBrowserRouter,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Person } from "./Person";

export const router = createBrowserRouter(
  [
    {
      element: <App />,
      children: [
        {
          path: "list",
          element: <ConnectedList />,
          loader: loadPeople,
        },
        {
          path: "player",
          element: <ConnectedPlayer />,
          loader: loadPeople,
        },
        {
          path: "*",
          element: <Navigate to="list" />,
        },
        {
          path: "person/:id",
          element: <Person />,
          loader: async ({ params }) => {
            const p = await loadPerson(params.id);
            if (p.id) return p;
            throw new Response("Not Found", { status: 404 });
          },
          errorElement: <h1>Not found</h1>,
        },
      ],
    },
  ],
  { basename: "/ex07" }
);

export function App() {
  // const [showList, setShowList] = useState(true);
  // const toggleView = () => setShowList((x) => !x);
  const location = useLocation();
  const navigate = useNavigate();

  const showList = location.pathname === "/list";
  const toggleIcon = showList ? "view_carousel" : "view_module";

  // const [people, setPeople] = useState<People>([]);
  // useEffect(() => {
  //   loadPeople().then(setPeople);
  // }, []);

  return (
    <>
      <Header>
        <TopAppBarActionItem
          icon={toggleIcon}
          onClick={() => (showList ? navigate("/player") : navigate("/list"))}
        />
      </Header>
      <Outlet />
    </>
  );
}

function ConnectedPlayer() {
  const people = useLoaderData() as People;
  return <Player people={people} />;
}
function ConnectedList() {
  const people = useLoaderData() as People;
  return <SearchableList people={people} />;
}
