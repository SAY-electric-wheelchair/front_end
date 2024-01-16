import React, {useEffect, useRef} from 'react';
import Map from "../components/home/Map";
import styled from 'styled-components';
import LogoImg from "../img/logo.png";
import LocationBar from "../components/home/LocationBar";

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
  height: 100vh;
  
  @media screen and (min-width: 850px) {
    width: 380px;
    border-left: 1px solid #e5e5e5;
    border-right: 1px solid #e5e5e5;


  };`

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 1;
  box-shadow: 0 5px 5px -5px grey;
`
const LogoImgWrapper = styled.img`

  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 150px;
  z-index: 1;
  margin:10px;


`


const MapHome = () => {

    return (
        <HallWrapper>
            <Wrapper>
                <LogoWrapper>
                    <LogoImgWrapper src={LogoImg}/>
                </LogoWrapper>


                <Map/>

                <LocationBar/>
            </Wrapper>

        </HallWrapper>
    );
};


export default MapHome;