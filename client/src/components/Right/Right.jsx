import styled from "styled-components";

const Container = styled.div`
flex : 2 ;
display : flex ;
flex-direction : column ;
padding : 20px ;
background-color : red ;
`;

const Right = () => {
    return (
        <Container>
            Right
        </Container>
    )
}

export default Right;