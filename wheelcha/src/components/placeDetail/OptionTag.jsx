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
    if (option==="충전소"){
        color="#4ECB71";
    }
    else if (option==="수리소"){
        color="#4B89DC";
    }
    else if(option==="공기주입기"){
        color="#E67373";

    }
    return(
        <BoxWrapper style={{backgroundColor:color}}>
           {option}
        </BoxWrapper>
    )
}

export default OptionTag;