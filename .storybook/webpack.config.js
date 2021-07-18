const path = require('path');

module.exports = async ({ config, mode }) => {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      'next-i18next': 'react-i18next',
      '@/src': path.resolve(__dirname, '../src'),
      '@/apis': path.resolve(__dirname, '../src/apis'),
      '@/assets': path.resolve(__dirname, '../src/assets'),
      '@/images': path.resolve(__dirname, '../src/assets/images'),
      '@/styles': path.resolve(__dirname, '../src/assets/styles'),
      '@/components': path.resolve(__dirname, '../src/components'),
      '@/atoms': path.resolve(__dirname, '../src/components/atoms'),
      '@/molecules': path.resolve(__dirname, '../src/components/molecules'),
      '@/organisms': path.resolve(__dirname, '../src/components/organisms'),
      '@/templates': path.resolve(__dirname, '../src/components/templates'),
      '@/constants': path.resolve(__dirname, '../src/constants'),
      '@/dummies': path.resolve(__dirname, '../src/dummies'),
      '@/helpers': path.resolve(__dirname, '../src/helpers'),
      '@/hooks': path.resolve(__dirname, '../src/hooks'),
      '@/pages': path.resolve(__dirname, '../src/pages'),
      '@/sagas': path.resolve(__dirname, '../src/sagas'),
      '@/stores': path.resolve(__dirname, '../src/stores'),
      '@/types': path.resolve(__dirname, '../src/types'),
    },
  };

  return config;
};
