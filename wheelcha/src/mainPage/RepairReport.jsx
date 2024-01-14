import PageHeader from "../components/PageHeader";
import PlaceInfoBox from "../components/placeDetail/PlaceInfoBox";
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
const RepairReport = () => {
    return (
        <HallWrapper>
            <Wrapper>
            <PlaceInfoBox back="/detail/0001" content={"고장 신고"}/>
            </Wrapper>
        </HallWrapper>
    )
}

export default RepairReport