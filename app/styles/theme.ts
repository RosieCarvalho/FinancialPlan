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
          '150': { value: '#f5f6fa' },
        },
        blue: {
          '900': { value: '#3A3F63' },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
