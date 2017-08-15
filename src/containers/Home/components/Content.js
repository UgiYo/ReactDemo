import React, { Component } from 'react';
import {
  Button, Container, Row, Col, Jumbotron, Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Modal, ModalHeader, ModalBody, ModalFooter, Table, Alert
} from 'reactstrap';
import AlbumJSON from './Album.json';

export default class Content extends Component {
  state = {
    modal: false,
    cart: []
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  addTocart = (product) => {
    const newCart = this.state.cart;
    newCart.push(product);

    this.setState({
      cart: newCart
    });
  }

  checkOut = (totalPrice) => {
    alert(`已從您的信用卡扣除${totalPrice}元`);
  }

  render() {

    const totalPrice = this.state.cart.reduce((acc, item) => (acc + item.price), 0);

    return (
      <Container>
        <Row>
          <Col md="12">
            <Jumbotron>
              <h1 className="display-3">Hello, world!</h1>
              <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr className="my-2" />
              <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
              <p className="lead">
                <Button color="primary" onClick={this.toggle}>
                  購物車({this.state.cart.length})
                </Button>
              </p>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          {
            AlbumJSON.map(product => (
              <Col xs="12" md="4">
                <Card>
                  <CardImg top width="100%" src={product.img} alt="Card image cap" />
                  <CardBlock>
                    <CardTitle>{product.title}</CardTitle>
                    <CardSubtitle>價格: {product.price}</CardSubtitle>
                    <CardText>{product.desc}</CardText>
                    <Button onClick={() => this.addTocart(product)}>購買</Button>
                  </CardBlock>
                </Card>
              </Col>
            ))
          }
        </Row>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>購物車</ModalHeader>
          <ModalBody>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>品項</th>
                  <th>價格</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.cart.map((item, index) => (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{item.title}</td>
                      <td>{item.price}</td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
            <Alert color="success" className="text-right">
              總價：{totalPrice}
            </Alert>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.checkOut(totalPrice)}>結帳</Button>
            <Button color="secondary" onClick={this.toggle}>取消</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}
