import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { deleteAction } from "../../store/redux";

const CartItem = ({ key, name, img, price }) => {
  const dispatch = useDispatch();

  const deleteCartAction = () => {
    dispatch(
      deleteAction({
        id: key,
      })
    );
  };
  return (
    <>
      <div
        className="item"
        style={{
          minHeight: "128px",
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          flex: "1",
          borderBottom: "1px solid #eee",
          justifyContent: "center",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <CheckLabel>
          <CheckIcon></CheckIcon>
        </CheckLabel>
        <div>
          <Goods to="#" img={img}></Goods>
        </div>
        <Name>{name}</Name>
        <div>{price}</div>
        <DeleteButton onClick={deleteCartAction}></DeleteButton>
      </div>
    </>
  );
};

const CheckLabel = styled.label`
  width: 24px;
  height: 24px;
  padding: 0;
  font-size: 16px;
  line-height: 24px;
`;

const CheckIcon = styled.span`
  display: block;
  width: 24px;
  height: 24px;
  border: 0;
  background-image: url(https://res.kurly.com/mobile/service/common/2006/ico_checkbox.svg);
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: 24px 24px;
  background-position: 50% 50%;
  vertical-align: -7px;
`;

const Goods = styled(Link)`
  width: 60px;
  height: 78px;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  background-color: #f4f4f4;
  display: block;
`;

const Name = styled.div`
  grid-column-start: span 3;
`;

const DeleteButton = styled.button`
  width: 28px;
  height: 28px;
  background-image: url(https://res.kurly.com/pc/service/cart/2007/ico_delete.svg);
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: 28px 28px;
  background-position: 50% 50%;
  border: none;
`;

export default CartItem;
