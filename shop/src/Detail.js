import { useParams } from "react-router-dom";

function Detail(props) {

  let {id} = useParams();
  let findShoes = props.shoes.find((x) => {return x.id == id});

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={findShoes.imgUrl} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{findShoes.title}</h4>
          <p>{findShoes.content}</p>
          <p>{findShoes.price}원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div>
  )
}

export default Detail;