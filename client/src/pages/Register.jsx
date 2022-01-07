import styled from 'styled-components';

const Container = styled.div`
flex : 1 ;
width: 100vw;
height: 100vh;
display : flex ;
align-items : center ;
flex-direction : column ;
background-color: black;
z-index: 1;
position: relative;
`;

const RegisterTop = styled.div`
width: 100vw;
height: 31vh;
background-color: #00bea4;
display: flex;
align-items: center;
justify-content: flex-start;
z-index: 2;
position: relative;
`;
const Logo = styled.div`
width: 80%;
height: 40%;
display: flex;
align-items: center;
position: absolute;
top: 1vh;
left:13vw ;
`;
const Text = styled.span`
color : white ;
letter-spacing: 2px;
font-size: 22px;
font-weight: 500;
cursor: pointer;
`;
const RegisterCenter = styled.div`
position: absolute ;
top : 13vh ;
left:15vw ;
width: 70vw;
height: 83vh;
z-index : 10 ;
background-color: white;
box-shadow: 0px 15px 15px black;
border-radius: 5px;
padding: 30px;
`;

const RegisterCenterBox = styled.div`
width: 100%;
height : 100% ;
padding: 10px;
display : flex ;
flex-direction: column;
align-items: flex-start;
`;

const RegisterText = styled.span`
font-size: 25px;
font-weight: 300;
margin-top: 20px;
letter-spacing: 1px;
color : black ;
`;

const Form = styled.form`
width: 100%;
height: 50%;
margin : 20px 0px;
`;
const InputBox = styled.div`
width: 100%;
height: 60%;
display: flex;
margin : 20px 0px;
flex-direction: row;
align-items: center;
justify-content: center;
`;

const InputContainer = styled.div`
width: 90%;
height : 70% ;
display : flex ;
align-items: center;
justify-content: center;
`;

const Input = styled.input`
width : 70% ;
height : 80% ;
text-align: center;
border: 1px solid #00bea4;
border-radius: 10px;
color : black ;
outline: none ;
font-size: 20px;
`;
const RegisterButtonContainer = styled.div`
display: flex;
align-items: flex-start ;
justify-content: center ;
width: 100%;
height: 30%;
margin: 20px 0px ;
`;
const RegisterButton = styled.button`
width: 30%;
height: 100%;
color : white ;
background-color: #00bea4;
border: none ;
border-radius: 10px;
cursor: pointer;
font-size: 20px ;

&:hover{
    background-color: white;
    color: #00bea4;
    border: 1px solid #00bea4;
}; 
`;

const BottomContainer = styled.div`
width: 100%;
height: 30%;
display: flex;
align-items: center ;
justify-content: space-around ;
padding: 20px;
`;

const ForgotPassword = styled.div`
font-size: 20px;
letter-spacing: 1px;
cursor: pointer ;
color : #00bea4 ;
&:hover{
    color: black;
}
`;

const Login = styled.div`
letter-spacing: 1px;
font-size: 20px;
cursor: pointer ;
color : black ;
&:hover{
    color: #00bea4;
}
`;

const Register = () => {
    return (
        <Container>
            <RegisterTop>
                <Logo>
                    <Text>
                        Chat App
                    </Text>
                </Logo>
            </RegisterTop>
            <RegisterCenter>
                <RegisterCenterBox>
                    <RegisterText>
                        To use Chat App in your computer Register here:
                    </RegisterText>
                    <Form >
                        <InputBox>
                            <InputContainer>
                                <Input placeholder="Username" required />
                            </InputContainer>
                            <InputContainer>
                                <Input type="email" placeholder="Email" required />
                            </InputContainer>
                            <InputContainer>
                                <Input type="password" placeholder="Password" required minLength="6" />
                            </InputContainer>
                        </InputBox>
                        <RegisterButtonContainer>
                            <RegisterButton type="Submit">
                                Register
                            </RegisterButton>
                        </RegisterButtonContainer>
                    </Form>
                    <BottomContainer>
                        <ForgotPassword>
                            Already Registered ?
                        </ForgotPassword>
                        <Login>
                            Login here
                        </Login>
                    </BottomContainer>
                </RegisterCenterBox>
            </RegisterCenter>
        </Container>
    )
}

export default Register;
