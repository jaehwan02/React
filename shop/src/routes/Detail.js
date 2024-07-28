import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { changeCount, addItem } from '../store';
import { useDispatch, useSelector } from 'react-redux';

function Detail(props) {

  let {id} = useParams();
  let findShoes = props.shoes.find((x) => {return x.id == id});
  let [alert, setAlert] = useState(true);
  let [count, setCount] = useState(0);
  let [탭, 탭변경] = useState(0);
  let [새창, 새창변경] = useState('');
  let dispatch = useDispatch()

  useEffect(()=> {
    setTimeout(()=> {
      setAlert(false);
    }, 2000)

    setTimeout(()=> {
      새창변경('end')
    },100)

    return()=> {
      새창변경('')
    }

  },[])

  return (
    <div className={'container start ' + 새창}>
      <div>
        {alert ? '2초이내 구매시 할인' : null}
      </div>
      {count}
      <button onClick={()=>{setCount(count+1)}}>버튼</button>
      
      <div className="row">
        <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes' + (findShoes.id + 1) + '.jpg'} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{findShoes.title}</h4>
          <p>{findShoes.content}</p>
          <p>{findShoes.price}원</p>
          <button className="btn btn-danger" onClick={()=>{dispatch(addItem(findShoes))}}>주문하기</button> 
        </div>
      </div>

      <Nav variant="tabs"  defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={()=>{탭변경(0)}}>버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={()=>{탭변경(1)}}>버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={()=>{탭변경(2)}}>버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent 탭 = {탭} shoes={props.shoes} />
    </div>
  )
}

export default Detail;

function TabContent({탭,shoes}) {

  let [fade, setFade] = useState('');

  useEffect(()=>{
    setTimeout(()=> { setFade('end') }, 100)
    return ()=> {
      setFade('')
    }
  }, [탭])

  return (<div className={`start ${fade}`}>
      { [<div>{shoes[0].title}</div>, <div>내용1</div>, <div>내용2</div>][탭] }
    </div>)
}



