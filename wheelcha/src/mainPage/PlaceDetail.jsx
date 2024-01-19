import styled from "styled-components";
import PlaceInfoBox from "../components/placeDetail/PlaceInfoBox";
import DetailAddressBox from "../components/placeDetail/DetailAddressBox";
import AdIMG from "../img/advertise.png";
import AroundPhoto from "../components/placeDetail/AroundPhoto";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";

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
  margin: 20px 5px;
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
  margin: 20px 5px;
  color: black;
  text-decoration: none;
`
const AdWrapper = styled.img`
  width: 100%;
  height: 120px;
`


const PlaceDetail = () => {
    const [placeInfo, setPlaceInfo] = useState({});
    const params = useParams();
    const placeIdx = params.placeId;
    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/places/${placeIdx}`);
                console.log(response);
                setPlaceInfo(response.data.result);
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();

    }, []);


    return (
        <HallWrapper>
            <Wrapper>
                <PlaceInfoBox placeName={placeInfo["placeName"]} optionTag={placeInfo['placeCategory']} back={'/'}
                              content={"상세페이지"}/>
                <BtnGroup>
                    <SendMsgBtn to={`/sendAddress/${placeIdx}`}>문자 보내기</SendMsgBtn>
                    <RepairReportBtn to={`/reportRepair/${placeIdx}`}>고장 신고</RepairReportBtn>
                </BtnGroup>
                <DetailAddressBox placeName={placeInfo["address"]} address={placeInfo["addressDetail"]} phone={"없음"}/>
                <AdWrapper src={AdIMG}></AdWrapper>
                <AroundPhoto imgs={''}/>
            </Wrapper>
        </HallWrapper>
    );
}

export default PlaceDetail;