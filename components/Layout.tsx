import { Flex } from '@chakra-ui/react';
import Nav from '@components/Nav';
import { ReactNode } from 'react';

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <Flex justifyContent="center">
      <Flex flexWrap="wrap" flexDirection="column" w="1366px">
        <Nav />
        {children}
      </Flex>
    </Flex>
  );
}
