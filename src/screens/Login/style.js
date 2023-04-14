import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #f4eef3;
`;

export const BoxImage = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const Form = styled.View`
    flex: 1.5;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: 30px;
`;

export const SetPassword = styled.View`
    width: 80%;
    height: 65px;
    flex-direction: row;
    align-items: center;
    border-radius: 15px;
    background-color: #ffffff;
`

export const TextInput = styled.TextInput.attrs({
    placeholderTextColor: "#a7a6b1",
})`
    width: 80%;
    height: 65px;
    padding-left: 15px;
    margin: 5px;
    border-radius: 15px;
    color: black;
    background-color: #FFFFFF;
`;

export const BoxChangePass = styled.View`
    width: 80%;
    align-items: flex-end;
`;

export const ButtonChangePass = styled.TouchableOpacity`
    width: 140px;
    height: 20px;
    margin: 5px 0 12px 0;
`;

export const BoxSocial = styled.View`
    flex: 1.5;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const ButtonsContent = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
`;

export const Wrapper = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const ButtonAuth = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 75px;
    height: 60px;
    border: 2px solid #fff;
    border-radius: 10px;
`;