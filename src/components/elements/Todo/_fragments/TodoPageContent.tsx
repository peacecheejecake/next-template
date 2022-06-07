import React, { useState } from 'react';

import { CheckIcon } from '@chakra-ui/icons';
import {
  Box,
  BoxProps,
  Flex,
  Input,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react';

interface TodoProps extends BoxProps {}

function HomePageContent({ ...basisProps }: TodoProps) {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  const todoList = todos.map((todo, index) => {
    return (
      <ListItem key={index}>
        <ListIcon as={CheckIcon} color="green.500" />
        {todo}
      </ListItem>
    );
  });
  return (
    <Box {...basisProps}>
      <Flex justify="center" align="center" direction="column" marginTop={10}>
        <Input placeholder="Write Todo" width={500} />
        <List spacing={3} marginTop={10}>
          {todoList}
        </List>
      </Flex>
    </Box>
  );
}

export default HomePageContent;
