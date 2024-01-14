import PageHeader from "../components/PageHeader";
import styled from "styled-components";
const HallWrapper = styled.div`
  display: block;

  @media screen and (min-width: 850px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  };
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;

  @media screen and (min-width: 850px) {
    width: 380px;
    border-left: 1px solid #e5e5e5;
    border-right: 1px solid #e5e5e5;


  };`
const SendAddress = () => {
    return (
        <HallWrapper>
            <Wrapper>
            <PageHeader back={'/detail/0001'} title={"문자 보내기"}></PageHeader>
            </Wrapper>
        </HallWrapper>
    )

}

export default SendAddress;