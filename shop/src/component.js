import { Button, Navbar, Container, Nav, NavDropdown, Form, Row, Col } from 'react-bootstrap';

function Product(props) {
  return (
    <Col>
      <img src={props.shoes.imgUrl} width="80%"/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
    </Col>
  )
}

function MainPage(props) {
  return (
    <>
      <div className="main-bg"></div>
      <Container>
        <Row> {
          props.shoes.map (function (a, i) {
            return (
              <Product shoes = {props.shoes[i]} />
            )})}
        </Row>
      </Container>
    </>
  )
}

export {Product, MainPage};