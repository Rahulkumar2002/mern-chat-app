import { Search } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
background-color : #f7f7f7;
display : flex ;
align-items : center ;
justify-content : center ;
height : 60px ;
padding : 0px 10px 0px 10px ;
margin-bottom : 10px ;
`;

const Wrapper = styled.div`
flex : 1 ;
display : flex ;
align-items : center ;
flex-direction : row ;
height  : 40px ;
border-radius : 20px ;
background-color : white ;
`;

const SearchIconWrapper = styled.div`
flex : 0.30 ;
display : flex ;
align-items : center ;
margin-left : 10px;
`;

const InputWrapper = styled.div`
flex : 2.25 ;
width : 90% ;
height : 90% ;
`;

const Input = styled.input`
width : 95% ;
height : 100% ;
outline : none ;
text-align : start ;
font-size : 15px ;
border : none ;
`;

const LeftSearch = () => {
    return (
        <Container>
            <Wrapper>
                <SearchIconWrapper>
                    <Search style={{ fontSize: "25px", color: "#51585c", cursor: "pointer" }} />
                </SearchIconWrapper>
                <InputWrapper>
                    <Input placeholder="Search or Start a new chat" />
                </InputWrapper>
            </Wrapper>
        </Container>
    )
};

export default LeftSearch;