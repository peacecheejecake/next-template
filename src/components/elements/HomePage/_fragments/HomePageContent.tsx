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
import { OUTER_LINKS } from '@constants/outer-links';
import { ROUTES } from '@constants/routes';

import SummaryCard from './SummaryCard';

interface HomeProps extends BoxProps {}

function HomePageContent({ ...basisProps }: HomeProps) {
  return (
    <Box {...basisProps}>
      <Center
        flexDirection="column"
        h={`calc(100vh - ${LAYOUT.HEADER.HEIGHT})`}
      >
        <Flex alignItems="center" mb="50px">
          <RotateBox
            mx="20px"
            bg="cyan.500"
            transition={{ repeat: Infinity, duration: 2, delay: 1 }}
          />
          <Text color="primary.500" textStyle="xl" fontWeight="bold">
            My Widget
          </Text>
          <RotateBox
            mx="20px"
            bg="secondary.500"
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </Flex>
        <SimpleGrid spacing="20px" columns={2} w="700px" h="fit-content">
          <LinkButton
            h="140px"
            w="100%"
            variant="unstyled"
            target="_black"
            href={ROUTES.TODO.MAIN}
          >
            <SummaryCard h="100%" title="Todos" description="할 일들" />
          </LinkButton>
          <LinkButton
            h="140px"
            w="100%"
            variant="unstyled"
            href={ROUTES.TODO.MAIN}
          >
            <SummaryCard h="100%" title="Weather" description="날씨 예보" />
          </LinkButton>
        </SimpleGrid>
      </Center>
    </Box>
  );
}

export default HomePageContent;

const MotionBox = motion<Omit<BoxProps, 'transition'>>(Box);
const RotateBox = (props: Parameter<typeof MotionBox>) => (
  <MotionBox
    bg="red.500"
    w="10px"
    h="10px"
    transition={{ repeat: Infinity, duration: 2 }}
    animate={{
      repeatCount: Infinity,
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 200, 200, 0],
      borderRadius: ['20%', '20%', '50%', '50%', '20%'],
    }}
    {...props}
  />
);
