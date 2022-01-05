import styled from "styled-components";
import LeftSearch from "./LeftSearch";
import LeftTop from "./LeftTop";
import PersonContainer from "./PersonContainer";

const Container = styled.div`
flex : 0.9 ;
display : flex ;
flex-direction : column ; 
background-color : white ;
border-right : 0.5px solid rgba(0 , 0 ,0 , 0.2);
`;

const Left = () => {
    return (
        <Container>
            <LeftTop />
            <LeftSearch />
            <PersonContainer />
        </Container>
    )
};

export default Left;