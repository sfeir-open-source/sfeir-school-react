import React from "react";
import { render } from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Config } from "../solution/Config";

import { App } from "./App";
// import { App } from "../solution/ex10/App";

const queryClient = new QueryClient();

render(
  <Config useRouter>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Config>,
  document.getElementById("root")
);
