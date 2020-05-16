import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import BookList from "./index";
import BookListItem from "../book-list-item";
import { testData } from "../testData";
import Spinner from "../spinner";

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const enzymeWrapper = shallow(<BookList />);
  return {
    enzymeWrapper
  };
}

describe("BookList component", () => {
  it("should render Loader", () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find(Spinner)).toBeDefined();
  });
});
