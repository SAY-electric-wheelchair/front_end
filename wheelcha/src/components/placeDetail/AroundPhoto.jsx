import Pic1 from "../../img/pic1.png";
import Pic2 from "../../img/pic2.png";
import Pic3 from "../../img/pic3.png";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const Tittle = styled.div`
  margin: 5px 0;
  font-size: 20px;
  font-weight: bold;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;

`

const PhotoBox = styled.div`
  display: flex;
  flex-direction: column;


`
const PhotoLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-left: 10px;
  margin-right: 10px;

`
const PhotoWrapper = styled.img`
  margin: 5px;
  min-width: 80px;
  max-width: 200px;

`
const MorePhotoBtn = styled.button`
  background-color: #4ECB71;
  border-radius: 10px;
  border: 0;
  width: 140px;
  padding: 8px 15px;
  font-size: 20px;
  font-weight: bold;
  margin: 15px 5px;
  color: white;
`
const BtnWrapper = styled.div`
    display: flex;
    justify-content: center;`
const AroundPhoto = ({imgs}) => {
    return (
        <Wrapper>
            <Tittle>주변 사진 정보</Tittle>
            <PhotoBox>
                <PhotoLine>
                    <PhotoWrapper src={Pic1}></PhotoWrapper>
                    <PhotoWrapper src={Pic2}></PhotoWrapper>
                    <PhotoWrapper src={Pic3}></PhotoWrapper>
                </PhotoLine>
                <PhotoLine>
                    <PhotoWrapper src={Pic2}></PhotoWrapper>
                    <PhotoWrapper src={Pic3}></PhotoWrapper>
                    <PhotoWrapper src={Pic1}></PhotoWrapper>
                </PhotoLine>
                <PhotoLine>
                    <PhotoWrapper src={Pic3}></PhotoWrapper>
                    <PhotoWrapper src={Pic1}></PhotoWrapper>
                    <PhotoWrapper src={Pic2}></PhotoWrapper>
                </PhotoLine>

            </PhotoBox>
            <BtnWrapper>
            <MorePhotoBtn>더보기</MorePhotoBtn>
            </BtnWrapper>
        </Wrapper>
    )
};
export default AroundPhoto;