import {useEffect, useRef, useState} from "react";
import PlaceInfoBox from "../components/placeDetail/PlaceInfoBox";
import styled from "styled-components";
import {TiDelete} from "react-icons/ti";
import {CiCamera} from "react-icons/ci";
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
const TittleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`
const Tittle = styled.div`

  font-size: 20px;
  font-weight: bold;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px

`

const AddPhotoBtn = styled.button`


  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 45px;
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 2px dotted #BEBEBE;
  border-radius: 10px;


`

const ImgBox = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 5px;
`
const ImgWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;


`
const DeleteBtn = styled.button`
  position: absolute;
  top: 0px;
  right: 10px;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: 0;
  z-index: 1;
`

const InputBox = styled.textarea`
  height: 100px;
  margin: 10px 20px;
`

const RegisterBtn = styled.button`
  width: 90%;
  height: 45px;
  border: 0px;
  border-radius: 10px;
  font-size: 20px;
  background-color: #FF4500;
  color: white;
  font-weight: bold;
`
const RepairReport = () => {
    const [imgArray, setImgArray] = useState([]); // 이미지 배열
    const photoInput = useRef();
    const [reportText, setReportText] = useState('') // 신고 내용
    const [placeInfo, setPlaceInfo] = useState({}) // 장소 정보
    const params = useParams();
    const placeIdx = params.placeId;
    useEffect(() => {
            axios.get(`http://localhost:8080/api/places/${placeIdx}`
            ).then((response) => {
                    setPlaceInfo(response.data.result);
                    console.log(response.data.result);
                }
            ).catch((e) => {
                console.log(e);
            });
        },[]
    )
    const handleAddImageFile = (e) => {
        e.preventDefault()
        let reader = new FileReader();
        let file = e.target.files ? e.target.files[0] : null;
        if (!file) {
            return
        }
        reader.onloadend = () => {
            setImgArray([...imgArray, {id: file.name, file: file, imagePreviewUrl: reader.result},
            ])
        }
        reader.readAsDataURL(file)
    }
    const handleAddPhotoClick = () => {
        photoInput.current.click()
    }
    const contentRemoveImage = (deleteUrl) => {
        setImgArray(imgArray.filter(item => item.imagePreviewUrl !== deleteUrl))
    }
    const reportTextHandler = (e) => {
        setReportText(e.target.value);
        console.log(reportText)
    }
    const registerHandler = () => {
        console.log("눌림")
    }

    return (
        <HallWrapper>
            <Wrapper>
                <PlaceInfoBox placeName={placeInfo['placeName']} optionTag={placeInfo['placeCategory']}
                              back={`/detail/${placeIdx}`} content={"고장 신고"}/>
                <TittleWrapper>
                    <Tittle>사진 첨부 (최대 3장)</Tittle>
                </TittleWrapper>

                <input type="file" accept='image/*' ref={photoInput} onChange={handleAddImageFile}
                       style={{display: 'none'}}/>
                {imgArray.length >= 3 ? <div style={{margin: '5px'}}></div> :
                    <AddPhotoBtn onClick={() => handleAddPhotoClick()}><CiCamera size={30} color={'#4ECB71'}
                                                                                 style={{padding: '5px'}}/>사진을 추가해
                        주세요</AddPhotoBtn>}

                <ImgWrapper>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        paddingLeft: '20px'
                    }}>{imgArray.map((img, index) => {
                        return (<div style={{position: "relative"}}><ImgBox src={img.imagePreviewUrl}/> <DeleteBtn
                            onClick={() => contentRemoveImage(img.imagePreviewUrl)}><TiDelete size={30}/></DeleteBtn>
                        </div>)
                    })}</div>
                </ImgWrapper>
                <TittleWrapper>
                    <Tittle>신고 내용</Tittle>
                    <InputBox onChange={reportTextHandler} value={reportText}/>
                </TittleWrapper>
                <RegisterBtn onClick={registerHandler}>등록</RegisterBtn>
            </Wrapper>
        </HallWrapper>
    )
}

export default RepairReport;