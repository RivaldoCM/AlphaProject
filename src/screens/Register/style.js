import styled from "styled-components";

export const Form = styled.View`
    justify-content: center;
    padding: 30px;
`;

export const Container = styled.View`
    flex-direction: ${(props) => (props.flexDirection ? "row" : "column")};
    width: ${(props) => (props.flexDirection ? "50%" : "100%")};
    margin-right: ${(props) => (props.width ? "5px" : "0")};
`;

export const BoxIcon = styled.View`
    align-items: center;
    width: ${(props) => (props.width ? "30%" : "15%")};

`;

export const BoxInput = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 5px;
    border-bottom-width: 1px;
    border-color: #CCCCCC;
    border-style: solid;
    border-radius: 10px;
`;

export const TextInput = styled.TextInput`
    width:  ${(props) => (props.width ? "70%" : "85%")};
`;