import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { fonts } from './typography';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false
};

export default extendTheme({
  config,
  fonts
});
