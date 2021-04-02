import {CurrentView} from "./CurrentView";
import React from "react";
import renderer from "react-test-renderer";

const ANY_PERSON: Person = {
  id: "123",
  firstname: "Jean-Michel",
  lastname: "Test",
  position: "string",
  phone: "string",
  email: "string",
  photo: "string",
  managerId: "string",
  manager: "string"
} as Person;

describe("CurrentView component", () => {

  it("should render Loading", () => {
    const rendered = renderer.create(<CurrentView people={[]} showList={true} />);

    expect(rendered.toJSON()).toMatchSnapshot();
  });

  it("should render List", () => {
    const rendered = renderer.create(<CurrentView people={[ANY_PERSON]} showList={true} />);

    expect(rendered.toJSON()).toMatchSnapshot();
  });

  it("should render Carousel", () => {
    const rendered = renderer.create(<CurrentView people={[ANY_PERSON]} showList={false} />);

    expect(rendered.toJSON()).toMatchSnapshot();
  });
});

