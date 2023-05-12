import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Container, Header, ListContainer, Title, List, HeadList, ItemList } from './style'

import Feather from 'react-native-vector-icons/Feather';



export function Lists() {
  const [showList, setShowList] = useState([]);

  const toggleList = (index) => {
    const updatedList = [...showList];
    updatedList[index] = !updatedList[index];
    setShowList(updatedList);
  };

  const lists = [
    { id: 1, name: 'Lista 1', items: ['Item 1', 'Item 2', 'Item 3'] },
    { id: 2, name: 'Lista 2', items: ['Item A', 'Item B', 'Item C'] },
    // ... Adicione mais listas conforme necessário
  ];

  return (
    <Container>
      <Header>

      </Header>
      <ListContainer>
        <Title>Suas Listas</Title>
        {lists.map((list, index) => {
          const isOpen = showList[index] || false;
          return (
            <List key={list.id}>
              <HeadList onPress={() => toggleList(index)}>
                <Text>{list.name}</Text>
                <Feather name='arrow-down' size={25} />
              </HeadList>
              {isOpen ? (
                <>
                  {list.items.map((item, itemIndex) => (
                    <ItemList key={itemIndex}>
                      <Text>{item}</Text>
                    </ItemList>
                  ))}
                </>
              ) : (
                <View></View>
              )}
            </List>
          );
        })}
      </ListContainer>
    </Container>
  );
}