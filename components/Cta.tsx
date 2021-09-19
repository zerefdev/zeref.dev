/* eslint-disable react/jsx-key */
import NextLink from 'next/link';
import { Button, Divider, Stack, Flex, Heading, Image, Text } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';
import { FaInfoCircle, FaLaptopCode } from 'react-icons/fa';

export default function Cta() {
  const { t } = useTranslation('common');

  return (
    <Stack
      h="calc(100vh - 64px)"
      alignItems="center"
      justifyContent={{ base: 'flex-start', lg: 'center' }}
      spacing={{ base: '2', lg: '4' }}
      mt={{ base: '4rem', lg: '0' }}
      color="gray.50"
    >
      <Image
        borderRadius="full"
        borderStyle="solid"
        borderWidth="3px"
        borderColor="gray.50"
        boxSize={{ base: '100px', lg: '200px' }}
        src="/img/me.jpeg"
        alt="Mosseab Chakrani"
      />
      <Flex flexDirection="column" alignItems="center">
        <Heading as="h1" fontSize={{ base: 'lg', lg: '4xl' }}>
          {t('index:cta.heading')}
        </Heading>
        <Heading as="h4" fontSize={{ base: 'xs', lg: 'lg' }}>
          {t('index:cta.subHeading')}
        </Heading>
        <Divider mt="6" />
        <Text textAlign="center" m="6" w={{ base: '', lg: '750px' }}>
          <Trans i18nKey="index:cta.description" components={[<em />, <strong />]} />
        </Text>
      </Flex>
      <Stack
        spacing="4"
        w="100%"
        px="6"
        direction={{ base: 'column', lg: 'row' }}
        justifyContent="center"
      >
        <NextLink href="/soon" passHref>
          <Button leftIcon={<FaInfoCircle />}>{t('about')}</Button>
        </NextLink>
        <NextLink href="/soon" passHref>
          <Button leftIcon={<FaLaptopCode />} variant="outline">
            {t('skills')}
          </Button>
        </NextLink>
      </Stack>
    </Stack>
  );
}
