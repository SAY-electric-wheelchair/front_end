import styled from "styled-components";
import {Link} from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
width:100%;
  height: 50px;
  border: 0px solid #e5e5e5;
  box-shadow: 0 5px 5px -5px grey;
`
const Tittle= styled.div`
display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 23px;
  margin: 10px;
  width: 100%;
  font-weight: bold;
`

const PageHeader = ({title, back}) => {

    return (
        <Wrapper>
            <Link to={back} style={{width:'35px',margin:'10px',textDecoration: 'none', color: 'black'}}><IoIosArrowBack size={'35px'}/></Link>
            <Tittle>{title}</Tittle>
            <div style={{width:'35px',margin:'10px'}}></div>
        </Wrapper>
    )
}
export default PageHeader;
