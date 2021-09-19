import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import theme from '../theme';

export default class Document extends NextDocument {
  render() {
    const { locale } = this.props.__NEXT_DATA__;
    const dir = locale === 'ar' ? 'rtl' : 'ltr';

    return (
      <Html dir={dir} lang={locale}>
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
