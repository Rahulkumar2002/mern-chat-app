import { DoneAll, ExpandMore } from '@mui/icons-material';
import styled from 'styled-components';

const Container = styled.div`
margin-top : 5px ;
display : flex ;
align-items : center ;
justify-content : center ;
width : 100% ;
cursor : pointer ;
height : 80px ;
&:hover{
    background-color : #ededed ;
}
border-bottom : 1px solid rgba(0 , 0 , 0, 0.3) ;
`;
const SettingArrow = styled.div`
display : none ;
margin-left : 10px ;
cursor : pointer ;
`;

const Wrapper = styled.div`
flex : 1 ;
display : flex ;
aling-items : center ;
justify-content : center ;
flex-direction : row ;
padding-left : 10px ;
&:hover ${SettingArrow}{
    display : flex ;
}
`;

const ImgContainer = styled.div`
display : flex ;
align-items : center ;
flex : 0.3 ;
width : 55px ;
height : 55px ;
border-radius : 50% ;
`;
const Img = styled.img`
width : 50px ;
object-fit : cover ;
height : 50px ;
border-radius : 50% ;
cursor : pointer ; 
`;
const TextContainer = styled.div`
flex : 2 ;
width : 100% ;
margin-right : 10px ;
display : flex ;
flex-direction : column ;
margin-left : 10px ;
aling-items : center ;
justify-content: center ;
`;
const NameContainer = styled.div`
font-weight : 600 ;
display : flex ;
flex-direction : row ;
justify-content : space-between ;
cursor : pointer ;
`;
const PersonNameContainer = styled.div`
font-size : 20px ;
font-weight : 400 ;
margin-bottom : 5px ;
`;
const TimeContainer = styled.div`
margin-right : 20px ;
color : grey ;
font-weight : 400 ;
`;
const LastMsgContainer = styled.div`
display : flex ;
aling-items : center ;
justify-content : flex-start;
font-size : 15px ;
color : grey ;
font-weight : 100 ;
display : flex ;
aling-items : center ;
`;
const IconLastMsg = styled.div`
margin-right : 5px ;
`;
const LastMsg = styled.div`

`;
// const Hr = styled.hr`
//  height : 1px ;
//  width : 90% ;
//  background : color : grey ;
// `;

const LeftPerson = () => {
    return (
        <Container>
            <Wrapper>
                <ImgContainer>
                    <Img src="https://st.depositphotos.com/1001094/3259/i/600/depositphotos_32593135-stock-photo-portrait-of-young-beautiful-fashionable.jpg" alt="Profile photo" />
                </ImgContainer>
                <TextContainer>
                    <NameContainer>
                        <PersonNameContainer>
                            Rahul Kumar
                        </PersonNameContainer>
                        <TimeContainer>
                            12:41PM
                        </TimeContainer>
                    </NameContainer>
                    <LastMsgContainer>
                        <IconLastMsg>
                            <DoneAll style={{ fontSize: "20px" }} />
                        </IconLastMsg>
                        <LastMsg>
                            rahulkumar: Hello ,hey this is awesome ...
                        </LastMsg>
                        <SettingArrow>
                            <ExpandMore style={{ fontSize: "25px" }} />
                        </SettingArrow>
                    </LastMsgContainer>
                    {/* <Hr /> */}
                </TextContainer>
            </Wrapper>
        </Container>
    );
};

export default LeftPerson;