import styled from 'styled-components';

const Container = styled.div`
 border : 1px solid white ;
 width: 40% ;
 margin : 20px ;
 height : auto ;
 background-color : white ;
 display: flex; 
 flex-direction: column;
 border-radius : 10px;
`;

const Wrapper = styled.div`
padding: 20px 20px 10px 20px;
width: 100% ;
height: 100% ;
display: flex;
flex-direction : column;
align-items : flex-start;
`;

const Username = styled.div`
display: flex;
align-items : flex-start;
`;

const Text = styled.span`
font-size : 17px;
color: blue;
`;

const MessageContainer = styled.div`
display: flex;
aling-items : flex-start;
margin: 10px 0px 0px 0px;
`;

const Para = styled.p`
font-size : 15px;
color: black;
`;

const TimeContainer = styled.div`
display: flex;
align-items : flex-end;
justify-content : end;
width: 100% ;
margin: 10px 10px 0px 10px;
`;

const Time = styled.span`
font-size : 12px;
color: grey;
`;

const Message = () => {
    return (
        <Container >
            <Wrapper>
                <Username>
                    <Text>Rahul Kumar </Text>
                </Username>
                <MessageContainer>
                    <Para>This is a message from Rahul Kumar.</Para>
                </MessageContainer>
                <TimeContainer>
                    <Time>12:40PM</Time>
                </TimeContainer>
            </Wrapper>
        </Container>
    )
};

export default Message;
