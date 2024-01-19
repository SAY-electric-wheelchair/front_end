import PageHeader from "../components/PageHeader";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

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

const Tittle = styled.div`

  font-size: 23px;
  margin-top: 30px;
  margin-bottom: 15px;
  padding: 10px 20px;
  text-align: center;

`
const AddressBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 0px;
  background-color: #E5E7EB;
  font-size: 20px;
  width: 85%;
  border-radius: 10px;
  padding: 10px;
  min-height: 170px;
`
const SubjectTittle = styled.div`
  font-size: 20px;
  margin-top: 15px;
  padding: 0;
  text-align: center;
  font-weight: bold;
`
const PlaceName = styled.div`
  font-size: 20px;
  font-weight: bold;
`
const AddressDetail = styled.div`
  font-size: 20px;
  color: black;
`
const NaverURL = styled.a`
  font-size: 20px;
`
const TittleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`
const PhoneInput = styled.input`
  background-color: transparent;
  font-size: 30px;
  width: 90%;
  height: 50px;
  border: 1px solid #E5E7EB;
  padding-left: 10px;
  border-radius: 10px;
`
const SendBtn = styled.button`
  width: 90%;
  height: 45px;
  border: 0px;
  border-radius: 10px;
  font-size: 20px;
  background-color: #4ECB71;
  color: white;
  font-weight: bold;
  margin-top: 20px;
`
const SendAddress = () => {
    const params = useParams();
    const placeIdx = params.placeId;
    const [placeInfo, setPlaceInfo] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:8080/api/places/${placeIdx}`
        ).then(
            (response) => {
                setPlaceInfo(response.data.result);
            }
        ).catch((e)=>{
            console.log(e);
        });
    },[]);
    const [phoneNumber, setPhoneNumber] = useState('');
    const phoneHandler = (e) => {
        setPhoneNumber(e.currentTarget.value);
    }
    const sendHandler = () => {
        alert('문자가 전송되었습니다.');
    }

    return (
        <HallWrapper>
            <Wrapper>
                <PageHeader back={`/detail/${placeIdx}`} title={"문자 보내기"}></PageHeader>

                <Tittle>입력하신 전화번호로<br/>장소 정보를 보내드립니다.</Tittle>
                <AddressBox>
                    <PlaceName>{placeInfo['placeName']}</PlaceName>
                    <SubjectTittle>주소</SubjectTittle>
                    <AddressDetail>{placeInfo['address']}</AddressDetail>
                    <SubjectTittle>네이버 길찾기</SubjectTittle>
                    <NaverURL href={'https://naver.me/FawROTpY'}>바로가기</NaverURL>
                </AddressBox>
                <TittleWrapper>
                    <Tittle style={{paddingBottom: '0', fontWeight: 'bold'}}>전화번호</Tittle>
                </TittleWrapper>
                <PhoneInput placeholder={"010-0000-0000"} onChange={phoneHandler} value={phoneNumber}/>
                <SendBtn onClick={sendHandler}>보내기</SendBtn>
            </Wrapper>
        </HallWrapper>
    )

}

export default SendAddress;