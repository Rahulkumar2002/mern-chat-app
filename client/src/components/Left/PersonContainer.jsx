import styled from 'styled-components';
import LeftPerson from './LeftPerson'

const Container = styled.div`
height : 100% ;
position : sticky ;
overflow-y : scroll ;

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

const PersonContainer = () => {
    return (
        <Container>
            <LeftPerson />
            <LeftPerson />
            <LeftPerson />
            <LeftPerson />
            <LeftPerson />
            <LeftPerson />
            <LeftPerson />
            <LeftPerson />
            <LeftPerson />
            <LeftPerson />
            <LeftPerson />
            <LeftPerson />
        </Container>
    )
}

export default PersonContainer
