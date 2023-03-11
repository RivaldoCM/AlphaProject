import styled from "styled-components";

export const Form = styled.View`
    justify-content: center;
    padding: 30px;
`;

export const Container = styled.View`
    width: 100%;
`;

export const BoxIcon = styled.View`
    align-items: center;
    width: ${(props) => (props.width ? "30%" : "15%")};
`;

export const BoxInput = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 10px 10px 10px 0;
    border: 1px solid black;
    border-radius: 10px;
`;

export const ContainerTwo = styled.View`
    flex-direction: row;
    width: 50%;
`;