import styled from "styled-components";

const BoxWrapper= styled.div`
 display: flex;
  align-items: center;
  padding: 5px 15px;
  border: 0px;
  border-radius: 50px;
  height: 25px;
  font-size:20px;
  color: white;
  margin-right: 15px;
  font-weight: bold;
  
`

const OptionTag=({option})=>{
    let color;
    let tagName;
    if (option==="CHARGE"){
        color="#4ECB71";
        tagName="충전소";
    }
    else if (option==="REPAIR"){
        color="#4B89DC";
        tagName="수리소";
    }
    else if(option==="공기주입기"){
        color="#E67373";
        tagName="공기주입기";

    }
    return(
        <BoxWrapper style={{backgroundColor:color}}>
           {tagName}
        </BoxWrapper>
    )
}

export default OptionTag;