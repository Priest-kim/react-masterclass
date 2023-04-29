import styled from 'styled-components';

interface ContainerProps {
    bgColor: string;
    borderColor?: string;
}

const Container = styled.div<ContainerProps>`
    width: 100px;
    height: 100px;
    background-color: ${({ bgColor }) => bgColor};
    border-radius: 50px;
    border: 1px solid ${({ borderColor }) => borderColor};
`;

interface CircleProps {
    bgColor: string;
    borderColor?: string;
    text?: string;
}

const Circle = ({ bgColor, borderColor, text = 'default text' }: CircleProps) => {
    return (
        <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
            {text}
        </Container>
    );
};

export default Circle;
