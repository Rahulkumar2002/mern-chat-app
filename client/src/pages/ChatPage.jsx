import styled from 'styled-components';
import Left from '../components/Left/Left';
import Right from '../components/Right/Right';

const Container = styled.div`
display : flex ;
flex-direction : row ;
width:100vw ;
height : 100vh ;
background-color : blue ;
`;

const ChatPage = () => {
    return (
        <Container>
            <Left />
            <Right />
        </Container>
    )
};

export default ChatPage;