import React from "react";
import ReactDOM from "react-dom";

import FunctionProfilePage from "./FunctionProfilePage";
import ClassProfilePage from "./ClassProfilePage";

class App extends React.Component<{}, { user: string }> {
  constructor(props) {
    super(props);

    this.state = {
      user: "Jonathan",
    };
  }

  handleChange = (e) => {
    this.setState({
      user: e.currentTarget.value,
    });
  };

  render() {
    return (
      <div className="hooks-demo02-app">
        <select onChange={this.handleChange}>
          <option value="Alexandre">Alexandre</option>
          <option value="Jonathan">Jonathan</option>
          <option value="Nicolas">Nicolas</option>
        </select>

        <ClassProfilePage user={this.state.user} />

        <FunctionProfilePage user={this.state.user} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
