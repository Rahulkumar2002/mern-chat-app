import styled from 'styled-components';
import Message from './message'

const Container = styled.div`
height : 100% ;
width : 100% ;
display : flex ;
flex-direction : column ;
overflow-y : scroll ;
padding : 0px 20px ;
::-webkit-scrollbar{
    width : 5px ;
}

::-webkit-scrollbar-track{
    background-color : #f1f1f1 ;
}

::-webkit-scrollbar-thumb{
    background-color : rgb(179 , 179 , 179) ;
}
`;

const Messenger = () => {
    return (
        <Container>
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
        </Container>
    )
}

export default Messenger;
