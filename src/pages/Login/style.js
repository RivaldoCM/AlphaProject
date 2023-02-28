import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #f4eef3;
`;

export const BoxText = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const BoxForm = styled.View`
    flex: 1.5;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: 30px;
`;

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

export const ButtonLogin = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    background-color: #f26969;
    width: 80%;
    height: 60px;
    border-radius: 10px;
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

export const BoxDivisor = styled.View`
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


