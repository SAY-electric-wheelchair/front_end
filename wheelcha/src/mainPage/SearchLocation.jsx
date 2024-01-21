import PageHeader from "../components/PageHeader";
import styled from "styled-components";
import {FaKeyboard, FaMicrophone} from "react-icons/fa";
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
const BtnWrapper=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;  
`
const SearchBtn=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  border: 2px solid #4ECB71;
  background-color: transparent;
  font-size: 20px;
  width: 85vw;
  border-radius: 10px;
  padding: 10px;
  height: 120px;
`

const SearchLocation=()=>{

    return(
        <HallWrapper>
            <Wrapper>
            <PageHeader back={'/'} title={"위치 검색"}></PageHeader>
                <BtnWrapper>
                  <Link to={'/searchTyping'}><SearchBtn style={{background:'#4ECB71',color:'white', marginBottom:'25px'}}><FaKeyboard size={30} style={{paddingRight:'10px'}}/>직접 검색</SearchBtn></Link>
                  <Link to={'/searchVoice'}><SearchBtn><FaMicrophone size={30} style={{paddingRight:'10px'}}/>음성 검색</SearchBtn></Link>
                </BtnWrapper>
            </Wrapper>
        </HallWrapper>
    )

}

export default SearchLocation;