import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const ProductItem = ({ name, description, price, createdAt, picture }) => {
  return (
    <React.Fragment>
      <Card className="h-50">
        <CardImg top width="100%" src={picture.url} alt={picture.name} />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>{price}</CardSubtitle>
          <CardText>
            {description}
          </CardText>
          <Button size="sm">Detail</Button>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}

export default ProductItem;