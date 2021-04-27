import React from "react";

interface Props {
  autoplay: boolean;
  onAutoplayChange: (autoplay: boolean) => void;
  time: number;
}

export default function Action({
  autoplay,
  onAutoplayChange,
  time = 0,
}: Props): JSX.Element {
  return (
    <div className="Action">
      <button onClick={() => onAutoplayChange(!autoplay)}>
        {autoplay ? "▶" : "■"}
      </button>
      <div className="timeline" style={{ width: `${time}%` }} />
    </div>
  );
}
