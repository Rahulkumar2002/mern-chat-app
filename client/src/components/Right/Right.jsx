import styled from "styled-components";
import RightTop from "./RightTop";
import RightInput from "./RightInput";
import Messenger from "./Messenger";

const Container = styled.div`
flex : 2 ;
display : flex ;
flex-direction : column ;
background : url("https://cdn.wallpapersafari.com/1/80/8DYndB.png");
object-fit : cover ;
position : center ;
`;

const Right = () => {
    return (
        <Container>
            <RightTop />
            <Messenger />
            <RightInput />
        </Container>
    )
}

export default Right;