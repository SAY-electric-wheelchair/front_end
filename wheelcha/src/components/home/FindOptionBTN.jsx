import FindBtn from "./FindBtn";
import styled from "styled-components";

const Wrapper=styled.div`

  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  z-index:1;
  background-color: transparent;
  margin-top:10px
`

const FindOptionBTN= () => {

        return (

            <Wrapper>

                <FindBtn optionName={"충전소"} backColor={'#4ECB71'}></FindBtn>
                <FindBtn optionName={"수리소"} backColor={'#4B89DC'}></FindBtn>
                <FindBtn optionName={"공기주입기"} backColor={'#E67373'}></FindBtn>
            </Wrapper>
        )
}

export default FindOptionBTN;