import React from "react";

interface Props {
  user: string;
}

class ProfilePage extends React.Component<Props> {
  showMessage = () => {
    alert("Followed " + this.props.user);
  };

  handleClick = () => {
    setTimeout(this.showMessage, 3000);
  };

  render() {
    return <button onClick={this.handleClick}>(Class) Follow</button>;
  }
}

export default ProfilePage;
