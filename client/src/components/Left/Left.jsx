import styled from "styled-components";
import LeftPerson from "./LeftPerson";
import LeftSearch from "./LeftSearch";
import LeftTop from "./LeftTop";

const Container = styled.div`
flex : 0.9 ;
display : flex ;
flex-direction : column ; 
background-color : white ;
`;

const Left = () => {
    return (
        <Container>
            <LeftTop />
            <LeftSearch />
            <LeftPerson />
            <LeftPerson />
            <LeftPerson />
            <LeftPerson />
            <LeftPerson />
            <LeftPerson />
            <LeftPerson />
            <LeftPerson />
            <LeftPerson />
            <LeftPerson />
            <LeftPerson />
            <LeftPerson />
            <LeftPerson />
            <LeftPerson />
            <LeftPerson />
            <LeftPerson />
            <LeftPerson />
        </Container>
    )
};

export default Left;