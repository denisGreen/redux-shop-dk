import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import BookListItem from "./index";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Bage from "react-bootstrap/Badge";
//import Header from './test-element'

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    title: "Title",
    author: "Author",
    yearWritten: "2020",
    price: 5,
    coverImage: "url",
    bookDescription: "Lorem forsan",
    onAddToCart: jest.fn()
  };

  const enzymeWrapper = shallow(<BookListItem {...props} />);

  return {
    enzymeWrapper,
    props
  };
}

describe("BookListItem", () => {
  it("should render BookListItem itself and the <Card/> within it with Card.Img, Card.Body, Card.Title and 3 Card.Text", () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find(Card)).toHaveLength(1);
    expect(enzymeWrapper.find(Button)).toHaveLength(1);
    expect(enzymeWrapper.find(Bage)).toHaveLength(1);
    expect(enzymeWrapper.find(Card.Img)).toHaveLength(1);
    expect(enzymeWrapper.find(Card.Body)).toHaveLength(1);
    expect(enzymeWrapper.find(Card.Title)).toHaveLength(1);
    expect(enzymeWrapper.find(Card.Text)).toHaveLength(4);
  });

  it("Bootstrap Card element and it's children should have proper classes", () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find(Card).hasClass("item-card")).toBe(true);
    expect(enzymeWrapper.find(Card.Img).hasClass("card-image")).toBe(true);
  });

  it("Bootstrap Card element and it's children should have proper text", () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find(Card.Title).text()).toBe("Title");
    expect(enzymeWrapper.find(".author").text()).toBe("Author");
    expect(enzymeWrapper.find(".description").text()).toBe("Lorem forsan");
    expect(enzymeWrapper.find(".year-written").text()).toBe("2020");
  });
  it("Bootstrap Card.Img elements props should have proper values", () => {
    const { enzymeWrapper } = setup();
    const cardImageProps = enzymeWrapper.find(Card.Img).props();
    expect(cardImageProps.alt).toBe("cover-image");
    expect(cardImageProps.src).toBe("url");
  });
});
