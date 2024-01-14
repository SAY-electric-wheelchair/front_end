import styled from "styled-components";
import PageHeader from "../PageHeader";
import OptionTag from "./OptionTag";
import RepairTag from "./RepairTag";


const Wrapper = styled.div`
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
 
`

const PlaceName = styled.div`
display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 25px;
  margin: 10px;
  width: 80%;
  text-align: center;
  font-weight: bold;
`
const OptionWrapper = styled.div`
display: flex;
  flex-direction: row;
    justify-content: center;
  margin-bottom:15px;
`


const PlaceInfoBox = ({ placeID,content,back }) => {

    //placeID로 place 정보를 가져온다.

    return (
       <Wrapper>
                <PageHeader back={back} title={content}></PageHeader>
                <PlaceName>구로구 청전동 휠체어 급속 충전기</PlaceName>
                <OptionWrapper>
                    <OptionTag option={"충전소"}></OptionTag>
                    <RepairTag option={true}></RepairTag>
                </OptionWrapper>
       </Wrapper>
    );
}

export default PlaceInfoBox;