import { MoreVert, Search } from '@mui/icons-material';
import styled from 'styled-components';

const Container = styled.div`
height : 70px ;
background-color : #ededed;
width : 100% ;
display : flex ;
flex-direction : row ;
align-items : center ;
position : sticky ;
`;
const ImageContainer = styled.div`
height : 45px ;
width : 45px ; 
flex : 0.4;
display : flex ;
flex-direction : row ;
border-radius : 50% ;
margin : 5px 0px 5px 20px ;
border : none ;
cursor : pointer ;
`;
const Image = styled.img`
height : 45px ;
width : 45px ;
border : none ;
border-radius : 50% ;
object-fit : cover ;
`;
const UsernameContainer = styled.div`
flex : 5 ;
display : flex ;
align-items : flex-start ;
justify-content : center ;
flex-direction : column ;
`;
const Username = styled.div`
display : flex ;
align-items : center ;
margin : 0px 0px 2px 0px;
`;
const Text = styled.span`
font-size : 20px ;
font-weight : 400 ;
`;
const Status = styled.div`
display : flex ;
`;
const StatusText = styled.span`
font-size : 15px ;
color : grey ;
`;
const IconContainer = styled.div`
flex : 0.7 ;
width : 100%  ;
height : 100% ;
display : flex ;
flex-direction : row ;
align-items : center ;
justify-content : center ;
`;
const Icon = styled.div`
color : #51585c ;
margin : 10px ;
cursor : pointer ;
`;

const RightTop = () => {
    return (
        <Container>
            <ImageContainer>
                <Image src="https://st.depositphotos.com/1001094/3259/i/600/depositphotos_32593135-stock-photo-portrait-of-young-beautiful-fashionable.jpg" alt="users proifle photo" />
            </ImageContainer>
            <UsernameContainer>
                <Username>
                    <Text>
                        Rahul Kumar
                    </Text>
                </Username>
                <Status>
                    <StatusText>online</StatusText>
                </Status>
            </UsernameContainer>
            <IconContainer>
                <Icon><Search style={{ fontSize: "25px" }} /></Icon>
                <Icon><MoreVert style={{ fontSize: "25px" }} /></Icon>
            </IconContainer>
        </Container>
    )
}

export default RightTop
