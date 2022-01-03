import styled from "styled-components";
import { Chat, MoreVert } from "@mui/icons-material";
import SlowMotionVideo from "@mui/icons-material/SlowMotionVideo";

const Container = styled.div`
display : flex ;
align-items:center ;
flex-direction : row ;
justify-content : space-between ;
width : 100% ;
height : 60px ;
padding : 0px 0px 0px 10px ;
background : #ededed ;
`;

const ProfileImg = styled.div`
flex : 1 ;
width: 45px ;
height : 45px ;
border-radius : 50% ;
aling-items : flex-start ;
`;

const Img = styled.img`
width : 40px ;
height : 40px ;
border-radius : 50% ;
object-fit : cover ;
cursor : pointer ;
`;

const LeftTopRight = styled.div`
flex : 1 ;
display : flex ;
align-items : center ;
justify-content : space-evenly ;
width : 50% ;
`;

const LeftTopIconWrapper = styled.span`
display : flex ;
align-items : center ;
`;

const LeftTopIcon = styled.span`
cursor : pointer ;
`;

const LeftTop = () => {
    return (
        <Container>
            <ProfileImg>
                <Img src="https://st.depositphotos.com/1001094/3259/i/600/depositphotos_32593135-stock-photo-portrait-of-young-beautiful-fashionable.jpg" alt="profile photo" />
            </ProfileImg>
            <LeftTopRight>
                <LeftTopIconWrapper>
                    <LeftTopIcon>
                        <SlowMotionVideo style={{ fontSize: "25px", color: "#51585c" }} />
                    </LeftTopIcon>
                </LeftTopIconWrapper>
                <LeftTopIconWrapper>
                    <LeftTopIcon>
                        <Chat style={{ fontSize: "25px", color: "#51585c" }} />
                    </LeftTopIcon>
                </LeftTopIconWrapper>
                <LeftTopIconWrapper>
                    <LeftTopIcon>
                        <MoreVert style={{ fontSize: "25px", color: "#51585c" }} />
                    </LeftTopIcon>
                </LeftTopIconWrapper>
            </LeftTopRight>
        </Container>
    );
};

export default LeftTop;