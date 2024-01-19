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
  align-items: center;
  font-size: 25px;
  margin: 10px;
  min-height: 50px;
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


const PlaceInfoBox = ({ placeName,content,back,optionTag,repairTag }) => {

    //placeID로 place 정보를 가져온다.

    return (
       <Wrapper>
                <PageHeader back={back} title={content}></PageHeader>
                <PlaceName>{placeName}</PlaceName>
                <OptionWrapper>
                    <OptionTag option={optionTag}></OptionTag>
                    <RepairTag option={true}></RepairTag>
                </OptionWrapper>
       </Wrapper>
    );
}

export default PlaceInfoBox;