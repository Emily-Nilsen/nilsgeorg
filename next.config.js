/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate');

module.exports = {
  ...nextTranslate(),
  images: {
    minimumCacheTTL: 31536000,
  },
};
