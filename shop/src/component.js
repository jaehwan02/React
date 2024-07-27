import { Button, Navbar, Container, Nav, NavDropdown, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useState } from 'react';

function Product(props) {
  return (
    <Col>
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.shoes.id + 1) + '.jpg'} width="80%"/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
    </Col>
  )
}
function MainPage(props) {
  let [count,setCount] = useState(2)
  let [load,setLoad] = useState(false)

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
      { load ? <div>로딩중</div> : null }
      {
        count >= 4 ? null : 
        <button onClick={()=>{
          setLoad(true)
          setCount(count+1);
          axios.get('https://codingapple1.github.io/shop/data'+ count +'.json')
          .then((결과)=>{
            setLoad(false)
            let copy = [...props.shoes, ...결과.data];
            console.log(결과.data);
            props.setShoes(copy);
          })
          .catch(()=>{
            setLoad(true)
          })
        }}>버튼</button>
      }
      
    </>
  )
}

export {Product, MainPage};