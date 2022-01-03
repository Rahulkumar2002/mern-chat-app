import styled from 'styled-components';
import ChatPage from './pages/ChatPage';

const Container = styled.div`
display : flex ;
flex-direction: row ;
`;


function App() {
  return (
    <Container>
      <ChatPage />
    </Container>
  )
}

export default App
