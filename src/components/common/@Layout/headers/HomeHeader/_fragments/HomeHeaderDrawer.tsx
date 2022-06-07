import Link from 'next/link';

import { ChakraProps, DrawerProps, Flex } from '@chakra-ui/react';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react';

interface HomeHeaderDrawerProps extends Omit<DrawerProps, 'children'> {
  bodyProps?: ChakraProps;
}

const HomeHeaderDrawer = ({
  bodyProps,
  ...basisProps
}: HomeHeaderDrawerProps) => {
  return (
    <Drawer placement="right" size="sm" {...basisProps}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody //
          {...bodyProps}
          py="0px"
          px="16px"
        >
          <DrawerCloseButton //
            w="40px"
            h="40px"
            onClick={basisProps.onClose}
          />
          <Flex direction="column" justify="center" marginTop={10}>
            <Link href={'todo'}>Todos</Link>
            <Link href={'weather'}>Weather</Link>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default HomeHeaderDrawer;
