import {CurrentView} from "./CurrentView";
import React from "react";
import renderer from "react-test-renderer";

describe("CurrentView component", () => {

  it("should render Loading", () => {
    const rendered = renderer.create(<CurrentView people={[]} showList={true} />);

    expect(rendered.toJSON()).toMatchSnapshot();
  });

});

