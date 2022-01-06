import styled from 'styled-components';
import ChatPage from './pages/ChatPage';
import Login from './pages/Login';
import Register from './pages/Register';

const Container = styled.div`
display : flex ;
flex-direction: row ;
`;


function App() {
  return (
    <Container>
      <Login />
    </Container>
  )
}

export default App
