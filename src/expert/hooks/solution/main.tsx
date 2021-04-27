import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./components/Carousel";

export default function App(): JSX.Element {
  return (
    <div className="App">
      <Carousel />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
