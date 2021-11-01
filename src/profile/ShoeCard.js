import React from "react";
import styled from "styled-components";
import AllProducts from "./AllProducts";
import { FaHeart } from "react-icons/fa";

const ShoeCards = ( {like} ) => {
  return (
    <Cards>
      {AllProducts.map((product, idx) => {
        return (
          <Card>
            <div class="logo-cart">
              <i class="bx bx-shopping-bag"></i>
            </div>
            <ImgWrapper>
              <img src={product.image} />
            </ImgWrapper>
            <Details>
              <span class="shoe_name">{product.name}</span>
            </Details>
            <Details>
              <div class="price">
                <span class="price_num">{product.price}</span>
              </div>
            </Details>
            <Button id="like" onClick={like}>
              <StyledHeart />
            </Button>
          </Card>
        );
      })}
    </Cards>
  );
};

export default ShoeCards;

const StyledHeart = styled(FaHeart)`
  position: relative;
  color: white;
  font-size: 20px;
`;

const Button = styled.button`
  position: absolute;
  right: 0px;
  bottom: 0px;
  height: 50px;
  width: 50px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &#like {
    background: #FF779A;
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 90%;
  }
  margin-bottom: 2rem;
`;

const Card = styled.div`
  position: relative;
  height: 100%;
  width: 80%;
  background: white;
  margin-top: 1.5rem;
  box-shadow: 0px 17px 17px -7px rgba(0, 0, 0, 0.7);
`;

const Cards = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;
`;
