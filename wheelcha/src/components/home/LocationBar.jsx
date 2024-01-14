import React from "react";
import styled from "styled-components";


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`


const BtnWrapper = styled.div`
  background-color: white;
  border: 1px solid #e5e5e5;
  display: flex;
  flex-direction: row;
  z-index: 1;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: 15px 10px;
  position: fixed;
  bottom: 0;
  height: 80px;

  @media screen and (min-width: 850px) {
    width: 380px;
    border-left: 1px solid #e5e5e5;
    border-right: 1px solid #e5e5e5;
    padding: 0 0px;

  };

`

const BackMyLocationBtn = styled.button`
  border: 0 solid #e5e5e5;
  border-radius: 10px;
  width: 45%;
  height: 60px;
  font-weight: bold;
  font-size: 25px;
  background-color: #4ECB71;
  color: white;
  padding: 10px 0;
  @media screen and (max-width: 484px) {
    font-size: 22px;
    padding: 5px 0;
  }
`

const SearchLocationBtn = styled.button`
  border: 2px solid #4ECB71;
  border-radius: 10px;
  font-weight: bold;
  width: 45%;
  height: 60px;
  font-size: 25px;
  background-color: transparent;
  padding: 10px 0;
  @media screen and (max-width: 484px) {
    font-size: 22px;
    padding: 5px 0;
  }
`
const LocationBar = () => {

    return (
        <Wrapper>
            <BtnWrapper>
                <BackMyLocationBtn>현재 위치로</BackMyLocationBtn>
                <SearchLocationBtn>위치 검색</SearchLocationBtn>
            </BtnWrapper>
        </Wrapper>
    )
}

export default LocationBar;