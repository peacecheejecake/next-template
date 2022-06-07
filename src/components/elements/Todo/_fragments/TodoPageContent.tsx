import React from 'react';

import { motion } from 'framer-motion';

import {
  Box,
  BoxProps,
  Center,
  Flex,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';

import LinkButton from '@components/common/LinkButton';

import { LAYOUT } from '@constants/layout';
import { ROUTES } from '@constants/routes';

interface TodoProps extends BoxProps {}

function HomePageContent({ ...basisProps }: TodoProps) {
  return <Box {...basisProps}>123</Box>;
}

export default HomePageContent;
