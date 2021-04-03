import React from "react";

interface Props {
  user: string;
}

export default function ProfilePage(props: Props) {
  const showMessage = () => {
    alert("Followed " + props.user);
  };

  const handleClick = () => {
    setTimeout(showMessage, 3000);
  };

  return <button onClick={handleClick}>(Function) Follow</button>;
}
