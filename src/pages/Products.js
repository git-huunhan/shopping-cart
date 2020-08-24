import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap'; 

class Products extends Component {
  constructor(props){
    super(props);

    this.state = {
      products: [{
        "id": "95ad242b-03c4-4758-a8e4-cd0b0379bf12",
        "name": "Wine - Casablanca Valley",
        "description": "tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus",
        "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
      }, {
        "id": "588502e8-f18e-4eaf-b4f2-34add369eab4",
        "name": "Wine - Barbera Alba Doc 2001",
        "description": "nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim",
        "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
      }, {
        "id": "82c34cee-623d-4e26-ba58-d5d41aee7126",
        "name": "Truffle - Whole Black Peeled",
        "description": "faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti",
        "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
      }, {
        "id": "b6595128-8e22-4080-9177-be178dc051de",
        "name": "Wine - Merlot Vina Carmen",
        "description": "eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus",
        "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
      }, {
        "id": "a1791500-7096-4d7f-a4fa-e9dde77d9550",
        "name": "Beer - Fruli",
        "description": "vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt",
        "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
      }, {
        "id": "c59c4125-17ce-4da6-a6c2-e477344e9335",
        "name": "Spring Roll Veg Mini",
        "description": "consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi",
        "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
      }, {
        "id": "6ac8d8e8-0f77-44d3-88ad-f9ebe84edbe9",
        "name": "Appetizer - Veg Assortment",
        "description": "urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam",
        "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
      }, {
        "id": "bf6b9ab8-0346-437b-8fce-37546efeb2be",
        "name": "Food Colouring - Pink",
        "description": "consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien",
        "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
      }, {
        "id": "b3aaa7f9-5ee7-4d18-92ce-4cb948078d68",
        "name": "Cheese - Pied De Vents",
        "description": "non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non",
        "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
      }, {
        "id": "aba5bd03-222c-4798-99d9-097769be6dd2",
        "name": "Table Cloth 53x69 White",
        "description": "lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec",
        "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
      }, {
        "id": "514ef453-cebc-4fbe-ae1a-8e2b38f2ad38",
        "name": "Milkettes - 2%",
        "description": "suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem",
        "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
      }, {
        "id": "cdc396d5-2a61-4432-b24c-93d17c203cde",
        "name": "Beef - Cow Feet Split",
        "description": "odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel",
        "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
      }, {
        "id": "9d756d5e-7e1d-4cd9-b8cf-3eef14be43e4",
        "name": "Soup - Knorr, French Onion",
        "description": "vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam",
        "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
      }, {
        "id": "d344fa58-5274-4047-a0e0-9d64ad32eb2d",
        "name": "Veal - Leg",
        "description": "in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris",
        "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
      }, {
        "id": "10855923-1765-46c2-8d7a-2a287d24bb77",
        "name": "Pepper - Roasted Red",
        "description": "sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate",
        "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
      }, {
        "id": "c8cb8747-8ce4-4838-8939-a4812a49d786",
        "name": "Pepper - Red Bell",
        "description": "integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla",
        "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
      }, {
        "id": "f566dad0-29ac-4bec-83b5-a7f5ebd8b99a",
        "name": "Lamb - Racks, Frenched",
        "description": "rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet",
        "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
      }, {
        "id": "81118717-d866-4ac1-8ac3-3cd1b36053e3",
        "name": "Lamb - Bones",
        "description": "est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin",
        "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
      }, {
        "id": "db64057a-4a67-4ef2-bca0-bac91bee1abc",
        "name": "Cheese - Shred Cheddar / Mozza",
        "description": "curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien",
        "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
      }, {
        "id": "2335b244-b512-422e-9ee4-4d5d927b0414",
        "name": "Pork - Smoked Back Bacon",
        "description": "sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus",
        "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
      }]
    }; 
  }

  render(){
    const { products } =this.state;
 
    return(
      <div>
        <Container>
          <h2>Products</h2>
          <Row>
            { products.map(products =>(
              <Col sm="4">
                <Card className="mb-4">
                <CardImg 
                  top 
                  width="100%" 
                  src={products.imageUrl}
                  alt="Card image cap" />
                <CardBody>
                  <CardTitle>{products.name}</CardTitle>
                  <CardText>{products.description}</CardText>
                  <Button>Add to cart</Button>
                </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Products; 