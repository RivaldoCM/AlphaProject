import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { 
    Profile, 
    BoxImage, 
    BoxInfos, 
    Button, 
    BoxIcon, 
    BoxText, 
    ImageContent
    }
from "./style";

import Icon from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

export function Settings(){
    return(
        <View>
            <View>
                <TouchableOpacity>
                    <Profile>
                        <BoxImage>
                            <ImageContent>

                            </ImageContent>
                        </BoxImage>
                        <BoxInfos>
                            <Text>Rivaldo</Text>
                        </BoxInfos>
                    </Profile>
                </TouchableOpacity>
            </View>
            <View>
                <View>
                    <Button>
                        <BoxIcon>
                            <Icon name="lock" size={20} />
                        </BoxIcon>
                        <BoxText>
                            <Text>Conta</Text>
                            <Text>Troque a sua senha e configure sua conta aqui</Text>
                        </BoxText>
                    </Button>
                    <Button>
                        <BoxIcon>
                            <Icon name="shield" size={20} />
                        </BoxIcon>
                        <BoxText>
                            <Text>Privacidade</Text>
                            <Text>Defina privacidades e preferências de acordo com você</Text>
                        </BoxText>
                    </Button>
                    <Button>
                        <BoxIcon>
                            <Ionicons 
                                name="color-palette-outline" 
                                size={25} 
                            />
                        </BoxIcon>
                        <BoxText>
                            <Text>Temas</Text>
                            <Text>Escolha o tema que mais combinar com você</Text>
                        </BoxText>
                    </Button>
                    <Button>
                        <BoxIcon>
                            <Icon name="log-out" size={20} />
                        </BoxIcon>
                        <BoxText>
                            <Text>Logout</Text>
                            <Text>Clique aqui para sair de sua conta</Text>
                        </BoxText>
                    </Button>
                </View>
            </View>
        </View>
    )
}