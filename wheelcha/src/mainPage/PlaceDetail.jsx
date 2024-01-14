import styled from "styled-components";
import PlaceInfoBox from "../components/placeDetail/PlaceInfoBox";
import DetailAddressBox from "../components/placeDetail/DetailAddressBox";
import AdIMG from "../img/advertise.png";
import AroundPhoto from "../components/placeDetail/AroundPhoto";
import {Link} from "react-router-dom";

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
const BtnGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-bottom: 7px solid #e5e5e5;
  width: 100%;
  @media screen and (min-width: 850px) {
    width: 380px;


  };


  
`
const SendMsgBtn = styled(Link)`

  display: flex;
  justify-content: center;
  background-color: #c5f1d2;
  border-radius: 10px;
  border: 2px solid #4ECB71;
  min-width: 100px;
  padding: 8px 15px;
  font-size: 20px;
  font-weight: bold;
  margin:20px 5px;
  color: black;
  text-decoration: none;
  
`
const RepairReportBtn = styled(Link)`


  display: flex;
  justify-content: center;
  background-color: #f6d2c2;
  border-radius: 10px;
  border: 2px solid #FF4500;
  min-width: 100px;
  padding: 8px 20px;
  font-size: 20px;
  font-weight: bold;
  margin:20px 5px;
  color: black;
  text-decoration: none;
`
const AdWrapper = styled.img`
width: 100%;
  height: 120px;
`



const PlaceDetail = ({placeID}) => {

    //placeID로 place 정보를 가져온다.

    return (
        <HallWrapper>
            <Wrapper>
                <PlaceInfoBox content={"상세페이지"}/>
                <BtnGroup>
                    <SendMsgBtn to='/sendAddress/0001'>문자 보내기</SendMsgBtn>
                    <RepairReportBtn to='/reportRepair/0001'>고장 신고</RepairReportBtn>
                </BtnGroup>
                <DetailAddressBox placeName={"서울 구로구 가마산로 245"} address={"2호선 7호선 대림역 4번 출구에서 우회전 후 896m 떨어진 지점에 위치"} phone={"없음"} />
                <AdWrapper src={AdIMG}></AdWrapper>
                <AroundPhoto imgs={''}/>
            </Wrapper>
        </HallWrapper>
    );
}

export default PlaceDetail;