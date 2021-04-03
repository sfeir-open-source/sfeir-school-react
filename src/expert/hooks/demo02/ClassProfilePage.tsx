import React from "react";

interface Props {
  user: string;
}

class ProfilePage extends React.Component<Props> {
  showMessage = (): void => {
    alert("Followed " + this.props.user);
  };

  handleClick = (): void => {
    setTimeout(this.showMessage, 3000);
  };

  render(): JSX.Element {
    return <button onClick={this.handleClick}>(Class) Follow</button>;
  }
}

export default ProfilePage;
