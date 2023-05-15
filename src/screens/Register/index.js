import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

import { TextInputMask } from "react-native-masked-text";

import { auth, db } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc, addDoc } from "firebase/firestore";

import { 
    BoxIcon,
    BoxInput,
    Container,
    Form,
    TextInput
} 
from "./style";
import Icon from "react-native-vector-icons/Feather";

import { LoginBtn } from "../../components/buttons";
import { ErrorLogin } from "../../components/errors/ErrorLogin";

import { useError } from '../../hooks/useError';

export function Register(){

    const [email, setEmail] = useState('');
    const [password, setPassoword] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [phoneNumer, setPhoneNumber] = useState('');

    const { error, errorMessage, handleError } = useError();

    const userCollectionRef = collection(db, 'users');
    
    const register = async () => {
      if (email === '' || password === '' || firstname === '' || lastName === '' || userName === '' || phoneNumer === '') {
        const error = 'Campo vazio';
        handleError(error);
      } else {
        try {
            //Cria o usuario e senha no Firebase
            const userCreds = await createUserWithEmailAndPassword(auth, email, password);

            //Cria um documento com ID do usuário
            const userDocRef = doc(userCollectionRef, userCreds.user.uid);
            
            //Cria a subcoleção "profileData" onde vai ficar os dados do user
            const dataCollectionRef = collection(userDocRef, 'profileData');
            
            //await setDoc(dataCollectionRef.parent, { 'data': true }); CASO QUEIRA, ADICIONA DADOS NO MESMO NIVEL DE profileData
            //como documento, e nao como collection igual profileData

            const userData = {
                username: userName,
                firstName: firstname,
                lastName: lastName,
                phoneNumber: phoneNumer
            };

            // Adiciona os dados do usuário na coleção "data"
            await addDoc(dataCollectionRef, userData);
            return userCreds;

            } catch (err) {
                console.log('Erro ao criar usuário:', err);
                const errorMessage = err.code;
                handleError(errorMessage);
                return null;
            }
        }
    }

    return(
        <View>
            <Form>
                <Container>
                    <View>
                        <Text>Nome de usuario</Text>
                    </View>
                    <BoxInput>
                        <BoxIcon>
                            <Icon name="user" size={20} />
                        </BoxIcon>
                        <TextInput
                            placeholder="Escolha um nome de usuário"
                            type="text"
                            onChangeText={(text) => setUserName(text)}
                            value={userName}
                        >

                        </TextInput>
                    </BoxInput>
                </Container>
                <Container flexDirection>
                    <Container width>
                        <View>
                            <Text>Nome</Text>
                        </View>
                        <BoxInput>
                            <BoxIcon width>
                                <Icon name="user" size={20} />
                            </BoxIcon>
                            <TextInput 
                                width
                                type="text"
                                onChangeText={(text) => setFirstName(text)}
                                value={firstname}
                            >
                            </TextInput>
                        </BoxInput>
                    </Container>
                    <Container>
                        <View>
                            <Text>Sobrenome</Text>
                        </View>
                        <BoxInput>
                            <BoxIcon width>
                                <Icon name="user" size={20} />
                            </BoxIcon>
                            <TextInput
                                width
                                type="text"
                                onChangeText={(text) => setLastName(text)}
                                value={lastName}
                            >
                            </TextInput>
                        </BoxInput>
                    </Container>
                </Container>
                <Container>
                    <View>
                        <Text>E-mail</Text>
                    </View>
                    <BoxInput>
                        <BoxIcon>
                            <Icon name="mail" size={20} />
                        </BoxIcon>
                        <TextInput
                            placeholder="Digite seu E-mail"
                            type="text"
                            onChangeText={(text) => setEmail(text)}
                            value={email}
                        >
                        </TextInput>
                    </BoxInput>
                </Container>
                <Container>
                    <View>
                        <Text>Senha</Text>
                    </View>
                    <BoxInput>
                        <BoxIcon>
                            <Icon name="lock" size={20} />
                        </BoxIcon>
                            <TextInput
                                placeholder="Digite sua senha"
                                type="text"
                                onChangeText={(text) => setPassoword(text)}
                                value={password}
                            >
                            </TextInput>
                    </BoxInput>
                </Container>
                <Container>
                    <View>
                        <Text>Número de telefone</Text>
                    </View>
                    <BoxInput>
                        <BoxIcon>
                            <Icon name="phone" size={20} />
                        </BoxIcon>
                        <TextInputMask
                            placeholder="(  ) _ _ _ _ - _ _ _ _"
                            style={{ width: 250 }}
                            type={'cel-phone'}
                            options={{
                                maskType: 'BRL',
                                withDDD: true,
                                dddMask: '(99) '
                            }}
                            onChangeText={(text) => setPhoneNumber(text)}
                            value={phoneNumer}
                        >
                        </TextInputMask>
                    </BoxInput>
                </Container>
                <LoginBtn text='Criar conta' onPress={register}/>
                {
                    error === true
                    ?
                        <ErrorLogin text={errorMessage}/>
                    :
                        <View />
                }
            </Form>
        </View>
    )
}