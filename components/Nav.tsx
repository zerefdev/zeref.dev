import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode, useState } from 'react';
import { Flex, Icon, Link, Heading } from '@chakra-ui/react';
import { FaBars, FaInfoCircle, FaLaptopCode, FaPaperPlane, FaTimes } from 'react-icons/fa';
import { IconType } from 'react-icons';
import useTranslation from 'next-translate/useTranslation';

export default function Nav() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [show, setShow] = useState(false);

  const toggleMenu = () => setShow(!show);

  return (
    <Flex justify="space-between" px="6" py="4" color="gray.50" bg="gray.800" h="64px">
      <Flex alignItems="center">
        <Heading as="h1" size="lg" fontWeight="bold">
          <NextLink href="/">{'<zeref.dev>'}</NextLink>
        </Heading>
      </Flex>

      <Flex display={{ base: show ? 'flex' : 'none', lg: 'flex' }}>
        <Flex
          as="nav"
          flexDirection={{ base: 'column', lg: 'row' }}
          position={{ base: 'absolute', lg: 'static' }}
          top={{ base: '64px', lg: 'auto' }}
          right={{ base: '8', lg: 'auto' }}
        >
          <NavItem
            href="/about"
            icon={FaInfoCircle}
            _after={{
              width: router.route === '/about' ? '50px' : '0'
            }}
            onClick={toggleMenu}
          >
            {t('nav.about')}
          </NavItem>
          <NavItem
            href="/work"
            icon={FaLaptopCode}
            _after={{
              width: router.route === '/work' ? '50px' : '0'
            }}
            onClick={toggleMenu}
          >
            {t('nav.work')}
          </NavItem>
          <NavItem
            href="/work"
            icon={FaPaperPlane}
            _after={{
              width: router.route === '/work' ? '50px' : '0'
            }}
            onClick={toggleMenu}
          >
            {t('nav.contact')}
          </NavItem>
        </Flex>
      </Flex>

      <Flex display={{ lg: 'none' }} onClick={toggleMenu}>
        {show ? <FaTimes cursor="pointer" size="32px" /> : <FaBars cursor="pointer" size="32px" />}
      </Flex>
    </Flex>
  );
}

type Props = { [k: string]: ReactNode } & { icon: IconType };
function NavItem(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { children, href = '/', icon, ...rest } = props;

  return (
    // <NextLink href={`${href}`} passHref>
    <NextLink href="/soon" passHref>
      <Link
        className="nav-item"
        _hover={{
          textDecoration: 'none'
        }}
        fontWeight="bold"
        mb={{ base: 4, lg: 0 }}
        mr={{ base: 0, lg: 8 }}
        {...rest}
      >
        <Icon as={icon} mr="2" />
        {children}
      </Link>
    </NextLink>
  );
}
