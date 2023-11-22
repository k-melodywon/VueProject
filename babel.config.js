module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      '@vue/babel-plugin-jsx',
      {
        // enable object-assign polyfill
        transformOn: true,
      },
    ],
  ],
};