import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const config = defineConfig({
  globalCss: {
    html: {
      fontFamily: 'Roboto, sans-serif',
      backgroundColor: 'gray.150',
    },
  },
  theme: {
    tokens: {
      colors: {
        brand: {
          '500': { value: 'tomato' },
        },
        gray: {
          '150': { value: '#F2F2F2' },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
