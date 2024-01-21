// 타이핑 검색
import * as React from 'react';
import DaumPostcode from 'react-daum-postcode';
import styled from "styled-components";
import PageHeader from "../components/PageHeader";

const HallWrapper = styled.div`
  display: block;

  @media screen and (min-width: 850px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  };
`


const SearchTyping = () => {
    const [openPostcode, setOpenPostcode] = React.useState(false);
    const [keyWord, setKeyWord] = React.useState('');

    const handle = {
        // 버튼 클릭 이벤트
        clickButton: () => {
            setOpenPostcode(current => !current);
        },
        
        // 기본 주소 셋팅
        setKeyWord: (_keyWord) => {
            setKeyWord(_keyWord)
        },

        // 주소 선택 이벤트
        selectAddress: (data) => {
            console.log(`
                주소: ${data.address},
                우편번호: ${data.zonecode}
            `)
            setOpenPostcode(false);
        },
    
    }

    return (
        <HallWrapper>
            <PageHeader back={'/searchLocation'} title={"직접 검색"}></PageHeader>

            <DaumPostcode 
                style={{height: 'calc(100vh - 60px)', marginTop: '10px'}}
                onComplete={handle.selectAddress}  // 값을 선택할 경우 실행되는 이벤트
                autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
                defaultQuery={keyWord} // 팝업을 열때 기본적으로 입력되는 검색어 
            />
        </HallWrapper>

    )
}

export default SearchTyping;