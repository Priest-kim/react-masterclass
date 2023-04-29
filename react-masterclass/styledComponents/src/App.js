import styled, { keyframes } from 'styled-components';

const Title = styled.h1`
    color: ${({ theme }) => theme.textColor};
    &:hover {
        color: tomato;
    }
`;

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.backgroundColor};
`;

function App() {
    return (
        <Wrapper>
            <Title>Hello</Title>
        </Wrapper>
    );
}

export default App;
