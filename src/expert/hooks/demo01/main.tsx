import React from "react";
import ReactDOM from "react-dom";
import Messages from "./messages";

interface State {
  room: string;
}

const TYPES = ["ReactJS", "Angular", "VueJS"];
class App extends React.Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      room: TYPES[0],
    };
  }

  setRoom = (e, room) => {
    e.preventDefault();
    this.setState({ room });
  };

  render() {
    const { room } = this.state;

    return (
      <div className="hooks-demo01-app">
        <div className="rooms">
          {TYPES.map((type) => (
            <a
              className={room === type ? "selected" : ""}
              onClick={(e) => this.setRoom(e, type)}
            >
              {type}
            </a>
          ))}
        </div>
        <div className="details">
          <Messages room={this.state.room} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
