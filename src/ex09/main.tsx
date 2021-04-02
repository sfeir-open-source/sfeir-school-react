import React from "react";
import {render} from "react-dom";

import {Config} from "../solution/Config";

// import { PeopleProvider } from "../solution/ex09/PeopleContext";
import {App} from "./App";
import {QueryClient, QueryClientProvider} from "react-query";
// import { App } from "../solution/ex09/App";

const queryClient = new QueryClient();

render(
    <Config useRouter>
      <QueryClientProvider client={queryClient}>
        <App/>
      </QueryClientProvider>
    </Config>,
    document.getElementById("root")
);
