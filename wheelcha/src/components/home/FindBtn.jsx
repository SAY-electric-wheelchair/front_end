import styled from "styled-components";

const Btn = styled.button`

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  letter-spacing: 2px;
  font-weight: bold;
  color: white;
  border: 0px;
  margin: 5px;
  @media screen and (min-width: 850px) {
    padding: 3px 20px;
    font-size: 18px;
  };
  @media screen and (max-width: 850px) {
    padding: 5px 15px;
    font-size: 20px;
  }
`

const FindBtn = ({optionName, backColor}) => {
    return (

        <Btn style={{backgroundColor: backColor}}>
            {optionName}
        </Btn>
    )

}

export default FindBtn;