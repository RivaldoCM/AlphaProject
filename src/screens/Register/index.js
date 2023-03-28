import React from "react";
import { TextInput } from "react-native";
import { View, Text } from "react-native";

import { BoxIcon, BoxInput, Container, ContainerTwo, Form } from "./style";

import Icon from "react-native-vector-icons/Feather";

export function Register(props){
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
                        <View>
                            <TextInput>oi</TextInput>
                        </View>
                    </BoxInput>
                </Container>
                <Container flexDirection>
                    <Container>
                        <View>
                            <Text>Nome</Text>
                        </View>
                        <BoxInput>
                            <BoxIcon width>
                                <Icon name="user" size={20} />
                            </BoxIcon>
                            <View>
                                <TextInput>oi</TextInput>
                            </View>
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
                            <View>
                                <TextInput>oi</TextInput>
                            </View>
                        </BoxInput>
                    </Container>
                </Container>
            </Form>
        </View>
    )
}