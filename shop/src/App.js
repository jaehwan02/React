import { useEffect, useState } from 'react';
import { Button, Navbar, Container, Nav, NavDropdown, Form, Row, Col } from 'react-bootstrap';
import './App.css';
import data from './data.js';
import {Product, MainPage} from './component.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail.js';
import Cart from './routes/Cart.js';
import axios from 'axios';
import { useQuery } from 'react-query';

function App() {

  let [shoes,setShoes] = useState(data);
  let navigate = useNavigate();

  let result = useQuery('작명', ()=>{
    return axios.get('https://codingapple1.github.io/userdata.json').then((a)=>{
      return a.data
    })
  })

  return <div className="App">

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand onClick={()=>{ navigate('/')}}>ShoeShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link onClick={()=>{ navigate('/detail')}}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/cart')}}>Cart</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
        <Nav className='ms-auto'>
          { result.isLoading && '로딩중' }
          { result.error && '로딩중' }
          { result.data && result.data.name }
        </Nav>
      </Container>
    </Navbar><button onClick={()=>{
      let copy = [...shoes];
      copy.sort(function (a, b) {
        if(a.title > b.title) return 1;
        if(a.title < b.title) return -1;
        return 0;
      });
      setShoes(copy);
    }}>가나다순 정렬</button>
    <Routes>
      <Route path="/" element={
        <MainPage shoes={shoes} setShoes={setShoes}>
        </MainPage>
      } />
      <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
      <Route path="/cart" element={ <Cart /> } />

      <Route path="/about" element={<About />}>
        <Route path="member" element={<div>멤버임</div>} />
        <Route path="location" element={<div>위치정보임</div>} />
      </Route>
      <Route path="*" element={<div>없는페이지요</div>}/>
    </Routes>
    
  </div>
}

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
