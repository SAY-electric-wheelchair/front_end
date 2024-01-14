import styled from "styled-components";

const Wrapper = styled.div` 

    display: flex;  
  flex-direction: column;

  border-bottom: 8px solid #e5e5e5;
  width: 100%;
  padding : 10px 0;

  @media screen and (min-width: 850px) {
    width: 380px;
   


  };
    `
const Tittle=styled.div`
  font-size: 20px;
  font-weight: bold;
  padding-left: 20px;
  padding-right: 20px;
  padding-top:10px
  
`
const Info=styled.div`
    margin-top:5px;
  margin-bottom: 15px;
  font-size:16px;
  padding-left: 20px;
  padding-right: 20px;
  
`
const DetailAddressBox=({placeName,address,phone})=> {

return(
    <Wrapper>
        <Tittle>도로명 주소</Tittle>
        <Info>{placeName}</Info>
        <Tittle>상세 주소</Tittle>
        <Info>{address}</Info>
        <Tittle>연락처</Tittle>
        <Info>{phone}</Info>
    </Wrapper>
)
}

export default DetailAddressBox;