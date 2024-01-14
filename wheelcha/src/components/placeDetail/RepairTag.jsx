import styled from "styled-components";

const RepairingBox = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  border: 0px;
  border-radius: 50px;
  height: 25px;
  font-size: 20px;
  color: black;
  background-color: #FFD400;
  margin-left: 15px;
  font-weight: bold;
`
const BrokenBox= styled.div`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  border: 0px;
  border-radius: 50px;
  height: 25px;
  font-size: 20px;
  color: white;
  background-color: #FF0000;
  margin-left: 15px;
  font-weight: bold;
`
const RepairTag = ({option}) => {


    if (option === true){
        return (<RepairingBox>수리중</RepairingBox>
        )}
    else{
        return (<BrokenBox>고장</BrokenBox>
        )
    }
}

export default RepairTag;
