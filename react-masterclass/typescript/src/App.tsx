import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: ${({ theme }) => theme.bgColor};
`;

const Title = styled.h1`
    color: ${({ theme }) => theme.textColor};
`;

function App() {
    return (
        <Container>
            <Title>Hello</Title>
        </Container>
    );
}

export default App;
