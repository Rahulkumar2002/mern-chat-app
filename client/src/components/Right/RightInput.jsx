import { AttachFile, EmojiEmotionsOutlined, Send } from '@mui/icons-material';
import styled from 'styled-components';

const Container = styled.div`
height : 70px ;
background-color : #ededed;
width : 100% ;
display : flex ;
align-items : center ;
flex-direction : row ;
`;
const IconContainer = styled.div`
flex : 0.7;
marign : 10px 0px 10px 10px ; 
display : flex ;
flex-direction : row ;
align-items  :center ;
justify-content : center ;
`;
const Icon = styled.div`
margin-right : 10px ;
cursor : pointer ;
`;
const Input = styled.input`
margin : 0px 20px ;
width : 100% ;
height : 90% ;
border : none ;
font-size : 15px ;
outline : none ;
`;
const InputContainer = styled.div`
flex : 5.3 ;
margin : 10px 10px 10px 0px ;
width: 100% ;
height : 40px ;
border : 1px solid white ;
border-radius : 20px ;
display : flex ;
align-items : center ;
justify-content : center ;
background-color : white ;
flex-direction : row ;
`;
const Button = styled.button`
flex : 0.3 ;
margin : 10px ;
border : none ;
display : flex ;
align-items : center ;
justify-content : center ;
`;

const RightInput = () => {
    return (
        <Container>
            <IconContainer>
                <Icon>
                    <EmojiEmotionsOutlined style={{ color : "#51585c" ,fontSize: "30px" }} />
                </Icon>
                <Icon>
                    <AttachFile style={{ color : "#51585c" , fontSize: "30px" }} />
                </Icon>
            </IconContainer>
            <InputContainer>
                <Input placeholder="Type a message" />
            </InputContainer>
            <Button>
                <Send style={{ fontSize: "35px", cursor: "pointer" , color : "#51585c"}} />
            </Button>
        </Container>
    )
}

export default RightInput
