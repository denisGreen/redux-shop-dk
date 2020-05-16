import React from "react";
import PropTypes from "prop-types";
import "./book-list-item.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Bage from "react-bootstrap/Badge";

const BookListItem = ({
  title,
  author,
  yearWritten,
  price,
  coverImage,
  onAddToCart,
  bookDescription
}) => {
  return (
    <Card className="item-card mb-3 mt-3">
      <Card.Img className="card-image" alt="cover-image" src={coverImage} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="author">{author}</Card.Text>
        <Card.Text className="year-written">{yearWritten}</Card.Text>
        <Card.Text>
          <Bage variant="warning" className="mt-2 bage-price">
            {price}
          </Bage>
        </Card.Text>
        <Card.Text className="description">{bookDescription}</Card.Text>

        <Button className="mt-4" variant="info" onClick={onAddToCart}>
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
};

BookListItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  yearWritten: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  coverImage: PropTypes.string,
  onAddToCart: PropTypes.func.isRequired
};

export default BookListItem;
